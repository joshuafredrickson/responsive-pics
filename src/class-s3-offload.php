<?php

use DeliciousBrains\WP_Offload_Media\Items\Media_Library_Item;
use DeliciousBrains\WP_Offload_Media\Items\Upload_Handler;
use DeliciousBrains\WP_Offload_Media\Items\Remove_Provider_Handler;

class RP_S3_Offload extends ResponsivePics {
	/**
	 * Upload to S3 storage
	 */
	public static function upload_image($id, $file = null) {
		global $as3cf;
		$s3_upload = null;

		// Plugin version check
		if (version_compare(WP_OFFLOAD_MEDIA_VERSION, '2.5.5', '>')) {
			$as3cf_item  = Media_Library_Item::get_by_source_id($id);
			$size        = $file['width'] .'x'. $file['height'];
			$source_file = $file['file'];

			if ($as3cf_item) {
				$objects        = $as3cf_item->objects();
				$objects[$size] = [
					'source_file' => $source_file,
					'is_private'  => false
				];
				$as3cf_item->set_objects($objects);

				// Upload item
				$upload_handler = $as3cf->get_item_handler(Upload_Handler::get_item_handler_key_name());
				$s3_upload      = $upload_handler->handle($as3cf_item);
			}
		} else {
			$s3_upload = $as3cf->upload_attachment($id, null, $file['path']);
		}

		// Check for errors
		if (is_wp_error($s3_upload)) {
			$error_message = $s3_upload->get_error_message();
			$error_data    = $s3_upload->get_error_data();

			ResponsivePics()->error->add_error('error', $error_message, $error_data);
		}

		return $s3_upload;
	}

	/**
	 * Delete image in S3 storage
	 */
	public static function delete_image($id, $paths = []) {
		global $as3cf;
		$s3_remove  = null;
		$as3cf_item = Media_Library_Item::get_by_source_id($id);

		if (!$as3cf_item) {
			return;
		}

		// Plugin version check
		if (version_compare(WP_OFFLOAD_MEDIA_VERSION, '2.5.5', '>')) {
			// $objects_to_remove = [];
			// $paths_to_remove   = array_unique($paths);
			// $objects           = $as3cf_item->objects();

			// $file_path = get_attached_file($id);
			// $wp_editor = wp_get_image_editor($file_path);

			// foreach ($paths_to_remove as $path) {
			// 	$file_size   = $wp_editor->get_size($path);
			// 	$size        = $file_size['width'] .'x'. $file_size['height'];
			// 	$source_file = wp_basename($path);
			// 	syslog(LOG_DEBUG, 'size: ' . $size . ' file: ' . $source_file);

			// 	$objects[$size] = [
			// 		'source_file' => $source_file,
			// 		'is_private'  => false
			// 	];
			// }

			// $as3cf_item->set_objects($objects);
			$keys_to_remove = [];
			$remove_handler = $as3cf->get_item_handler(Remove_Provider_Handler::get_item_handler_key_name());
			$s3_remove      = $remove_handler->handle($as3cf_item, array('object_keys' => $keys_to_remove));

		} else {
			$objects_to_remove = [];
			$paths_to_remove   = array_unique($paths);

			foreach ($paths_to_remove as $size => $path) {
				$objects_to_remove[] = array(
					'Key' => $as3cf_item->key(wp_basename($path))
				);
			}

			$s3_remove = $as3cf->delete_objects($as3cf_item->region(), $as3cf_item->bucket(), $objects_to_remove, true, true, false);
		}

		// Check for errors
		if (is_wp_error($s3_remove)) {
			$error_message = $s3_remove->get_error_message();
			$error_data    = $s3_remove->get_error_data();

			ResponsivePics()->error->add_error('error', $error_message, $error_data);
		}
	}
}