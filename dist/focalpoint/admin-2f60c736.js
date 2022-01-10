/*!
 * 
 * ResponsivePics
 * 
 * @author Booreiland
 * @version 1.4.0
 * @link https://responsive.pics
 * @license undefined
 * 
 * Copyright (c) 2022 Booreiland
 * 
 * This software is released under the [MIT License](https://github.com/booreiland/responsive-pics/blob/master/LICENSE)
 */
(window.wpackioresponsivePicsfocalpointJsonp=window.wpackioresponsivePicsfocalpointJsonp||[]).push([[0],[function(t,i,e){e(1),e(3),t.exports=e(2)},function(t,i,e){var o="responsivePicsdist".replace(/[^a-zA-Z0-9_-]/g,"");e.p=window["__wpackIo".concat(o)]},function(t,i,e){},function(t,i,e){"use strict";e.r(i);var o={init:function(t){o.view=t,o.position=t.model.get("focalPoint"),o.wrapper=t.$el.find(".image-focal__wrapper"),o.point=t.$el.find(".image-focal__point"),o.picker=t.$el.find(".image-focal__clickarea"),o.image=o.wrapper.find("img"),o.setEventListeners(),o.positionFocalPoint(o.position)},setEventListeners:function(){jQuery(window).on("resize",o.updateInterface),o.image.on("load",(function(t){o.updateInterface()})),o.picker.on("click",o.setFocalPoint),"function"==typeof jQuery.ui.draggable&&o.point.draggable({cursor:"move",start:o.startDrag,drag:o.dragging,stop:o.stopDrag,containment:o.wrapper})},updateInterface:function(){o.wrapper.css({width:"".concat(o.image.width(),"px")})},positionFocalPoint:function(t){o.view.model.set("focalPoint",t),o.point.css({left:"".concat(t.x,"%"),top:"".concat(t.y,"%"),position:"absolute"})},setFocalPoint:function(t){var i=t.offsetY-o.point.height()/2,e=t.offsetX-o.point.width()/2;o.position.x=Math.round(e/o.picker.width()*100),o.position.y=Math.round(i/o.picker.height()*100),o.positionFocalPoint(o.position),o.saveFocalPoint(o.view.model)},saveFocalPoint:function(t){var i,e,n,a;a&&a.abort(),a=jQuery.ajax({url:null===(i=wp)||void 0===i||null===(e=i.ajax)||void 0===e||null===(n=e.settings)||void 0===n?void 0:n.url,method:"POST",data:{action:"save_focal_point",attachment:null==t?void 0:t.attributes},beforeSend:function(){}}).done((function(t){o.view.update()})).fail((function(t,i){console.error("ResponsivePics error while saving focal point",t.statusText)})).always((function(){console.log(o.view.controller),a=null}))},startDrag:function(t){jQuery("body").addClass("focal-point-dragging")},dragging:function(t){o.position.x=Math.round(t.target.offsetLeft/o.picker.width()*100),o.position.y=Math.round(t.target.offsetTop/o.picker.height()*100)},stopDrag:function(t){jQuery("body").removeClass("focal-point-dragging"),o.positionFocalPoint(o.position),o.saveFocalPoint(o.view.model)}},n=o;jQuery(document).ready((function(){var t=function(t){var i=wp.media.template("attachment-details-focal-point"),e=t.find(".thumbnail"),o=e.find("img");if(i&&e.length&&o.length){e.prepend(i);var n=e.find(".image-focal__wrapper");o.prependTo(n)}},i=wp.media.view.Attachment,e=wp.media.view.Attachment.Details,o=wp.media.view.Attachment.Details.TwoColumn;o&&(wp.media.view.Attachment.Details.TwoColumn=o.extend({initialize:function(){this.model.on("change:focalPoint",this.change,this)},render:function(){i.prototype.render.apply(this,arguments);var e=this.model.get("type");"image"===e&&(t(this.$el),n.init(this))},change:function(){var t=this.model.get("type"),i=this.model.get("focalPoint");"image"===t&&n.positionFocalPoint(i)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}})),e&&(wp.media.view.Attachment.Details=e.extend({initialize:function(){i.prototype.initialize.apply(this,arguments),this.model.on("change:focalPoint",this.change,this)},render:function(){i.prototype.render.apply(this,arguments),this.model.get("id");var e=this.model.get("type");"image"===e&&(t(this.$el),n.init(this))},change:function(){var t=this.model.get("type"),i=this.model.get("focalPoint");"image"===t&&n.positionFocalPoint(i)},update:function(){console.log("AttachmentDetails update",this.model),this.views.detach(),this.model.fetch(),this.views.render()},updateAll:function(){console.log("AttachmentDetails updateAll",this.model)}}))}))}],[[0,1]]]);
//# sourceMappingURL=admin-2f60c736.js.map