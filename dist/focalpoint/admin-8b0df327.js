/*!
 * 
 * ResponsivePics
 * 
 * @author Booreiland
 * @version 1.4.0
 * @link https://responsive.pics
 * @license undefined
 * 
 * Copyright (c) 2021 Booreiland
 * 
 * This software is released under the [MIT License](https://github.com/booreiland/responsive-pics/blob/master/LICENSE)
 */
(window.wpackioresponsivePicsfocalpointJsonp=window.wpackioresponsivePicsfocalpointJsonp||[]).push([[0],[function(t,o,n){n(1),n(2),t.exports=n(3)},function(t,o,n){var e="responsivePicsdist".replace(/[^a-zA-Z0-9_-]/g,"");n.p=window["__wpackIo".concat(e)]},function(t,o){var n;(n=jQuery)(document).ready((function(){var t,o,e=function(t){console.log("startDragFocalPoint",t.target)},i=function(t){console.log("draggingFocalPoint",t.target)},a=function(t){console.log("endDragFocalPoint",t.target)},c=function(t){console.log("dragOverFocalPoint"),t.stopPropagation(),t.preventDefault()},p=function(n){console.log("dropFocalPoint"),n.stopPropagation(),n.preventDefault(),t.append(o)},l=function(n){var e=wp.media.template("attachment-select-focal-point"),i=n.find(".thumbnail"),a=n.find(".details-image");e&&(i.prepend(e),n.find(".image-focal"),t=n.find(".image-focal__wrapper"),o=n.find(".image-focal__point"),n.find(".image-focal__clickarea"),a.prependTo(t));var c=wp.media.template("attachment-save-focal-point"),p=n.find(".attachment-actions");c&&p.append(c)},r=function(l){l.id;var r,s,d=l.get("compat");if(d.item){var f=n(d.item).find(".compat-field-responsive_pics_focal_point_x input").val(),m=n(d.item).find(".compat-field-responsive_pics_focal_point_y input").val();r=f,s=m,o.css({left:"".concat(r,"%"),top:"".concat(s,"%"),display:"block"}),t.on("dragover",c),t.on("drop",p),o.on("dragstart",e),o.on("drag",i),o.on("dragend",a)}},s=wp.media.view.Attachment.Details.TwoColumn;wp.media.view.Attachment.Details.TwoColumn=s.extend({initialize:function(){this.model.on("change:compat",this.change,this)},render:function(){wp.media.view.Attachment.prototype.render.apply(this,arguments);var t=this.model.attributes.type;return"image"===t&&(l(this.$el),r(this.model)),this},change:function(){"image"===this.model.attributes.type&&r(this.model)}})}))},function(t,o,n){}],[[0,1]]]);
//# sourceMappingURL=admin-8b0df327.js.map