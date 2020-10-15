<?php

class RP_Rest_Api extends ResponsivePics {

	public static function register_api_routes() {
		// picture
		register_rest_route('responsive-pics', '/v1/get', [
			'methods'             => 'GET',
			'callback'            => ['RP_Rest_Api', 'rest_get_picture'],
			'permission_callback' => '__return_true'
		]);

		register_rest_route('responsive-pics', '/v1/get-picture', [
			'methods'             => 'GET',
			'callback'            => ['RP_Rest_Api', 'rest_get_picture'],
			'permission_callback' => '__return_true'
		]);

		// image
		register_rest_route('responsive-pics', '/v1/get-image', [
			'methods'             => 'GET',
			'callback'            => ['RP_Rest_Api', 'rest_get_image'],
			'permission_callback' => '__return_true'
		]);

		// background
		register_rest_route('responsive-pics', '/v1/get-background', [
			'methods'             => 'GET',
			'callback'            => ['RP_Rest_Api', 'rest_get_background'],
			'permission_callback' => '__return_true'
		]);
	}

	// get picture
	public static function rest_get_picture($request) {
		$data      = $request->get_params();
		$id        = isset($data['id']) ? (int) $data['id'] : null;
		$sizes     = isset($data['sizes']) ? urldecode($data['sizes']) : null;
		$classes   = isset($data['classes']) ? urldecode($data['classes']) : null;
		$lazyload  = isset($data['lazyload']) ? ($data['lazyload'] === 'true') : null;
		$intrinsic = isset($data['intrinsic']) ? ($data['intrinsic'] === 'true') : null;

		if (class_exists('ResponsivePics')) {
			if ($id && $sizes) {
				$picture = ResponsivePics::get_picture($id, $sizes, $classes, $lazyload, $intrinsic);

				// Check for errors
				if (is_wp_error($picture)) {
					$error_codes    = $picture->get_error_codes();
					$error_messages = $picture->get_error_messages();
					$error_data     = $picture->get_error_data();

					return new WP_Error($error_codes, $error_messages, $error_data);
				} else {
					$result = new WP_REST_Response($picture, 200);
					// Set caching
					$result->set_headers(array('Cache-Control' => 'max-age=3600'));
					return $result;
				}
			} else {
				return new WP_Error('invalid', __('Your ResponsivePics get_picture request is missing required parameters.', 'responsive-pics'), $request);
			}
		} else {
			return new WP_Error('401', __('ResponsivePics plugin was not found.', 'responsive-pics'));
		}
	}

	// get image
	public static function rest_get_image($request) {
		$data      = $request->get_params();
		$id        = isset($data['id']) ? (int) $data['id'] : null;
		$sizes     = isset($data['sizes']) ? urldecode($data['sizes']) : null;
		$crop      = isset($data['crop']) ? urldecode($data['crop']) : null;
		$classes   = isset($data['classes']) ? urldecode($data['classes']) : null;
		$lazyload  = isset($data['lazyload']) ? ($data['lazyload'] === 'true') : null;

		if (class_exists('ResponsivePics')) {
			if ($id && $sizes) {
				$image  = ResponsivePics::get_image($id, $sizes, $crop, $classes, $lazyload);

				// Check for errors
				if (is_wp_error($image)) {
					$error_codes    = $image->get_error_codes();
					$error_messages = $image->get_error_messages();
					$error_data     = $image->get_error_data();

					return new WP_Error($error_codes, $error_messages, $error_data);
				} else {
					$result = new WP_REST_Response($image, 200);
					// Set caching
					$result->set_headers(array('Cache-Control' => 'max-age=3600'));
					return $result;
				}
			} else {
				return new WP_Error('invalid', __('Your ResponsivePics get_image request is missing required parameters.', 'responsive-pics'), $request);
			}
		} else {
			return new WP_Error('401', __('ResponsivePics plugin was not found.', 'responsive-pics'));
		}
	}

	// get background
	public static function rest_get_background($request) {
		$data    = $request->get_params();
		$id      = isset($data['id']) ? (int) $data['id'] : null;
		$sizes   = isset($data['sizes']) ? urldecode($data['sizes']) : null;
		$classes = isset($data['classes']) ? urldecode($data['classes']) : null;

		if (class_exists('ResponsivePics')) {
			if ($id && $sizes) {
				$background = ResponsivePics::get_background($id, $sizes, $classes);

				// Check for errors
				if (is_wp_error($background)) {
					$error_codes    = $background->get_error_codes();
					$error_messages = $background->get_error_messages();
					$error_data     = $background->get_error_data();

					return new WP_Error($error_codes, $error_messages, $error_data);
				} else {
					$result = new WP_REST_Response($background, 200);
					// Set caching
					$result->set_headers(array('Cache-Control' => 'max-age=3600'));
					return $result;
				}
			} else {
				return new WP_Error('invalid', __('Your ResponsivePics get_background request is missing required parameters.', 'responsive-pics'), $request);
			}
		} else {
			return new WP_Error('401', __('ResponsivePics plugin was not found.', 'responsive-pics'));
		}
	}
}