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
(window.wpackioresponsivePicsfocalpointJsonp=window.wpackioresponsivePicsfocalpointJsonp||[]).push([[0],[function(t,i,o){o(1),o(3),t.exports=o(2)},function(t,i,o){var e="responsivePicsdist".replace(/[^a-zA-Z0-9_-]/g,"");o.p=window["__wpackIo".concat(e)]},function(t,i,o){},function(t,i,o){"use strict";o.r(i);var e={init:function(t){console.log("FocalPointPicker init",t),e.wrapper=$imageFocalWrapper,e.picker=$imageFocalClickarea,e.point=$imageFocalPoint,e.position=t,e.positionFocalPoint(t),e.setEventListeners()},setEventListeners:function(){e.picker.on("click",e.setFocalPoint),"function"==typeof $.ui.draggable&&e.point.draggable({cursor:"move",start:e.startDrag,drag:e.dragging,stop:e.stopDrag,containment:e.wrapper})},positionFocalPoint:function(t){e.point.css({left:"".concat(t.x,"%"),top:"".concat(t.y,"%"),position:"absolute"}),_view.model.set("focalPoint",t)},setFocalPoint:function(t){var i=t.offsetY-e.point.height()/2,o=t.offsetX-e.point.width()/2;e.position.x=Number(o/e.picker.width()*100).toFixed(2),e.position.y=Number(i/e.picker.height()*100).toFixed(2),e.positionFocalPoint(e.position)},startDrag:function(t){$("body").addClass("focal-point-dragging")},dragging:function(t){e.position.x=Number(t.target.offsetLeft/e.picker.width()*100).toFixed(2),e.position.y=Number(t.target.offsetTop/e.picker.height()*100).toFixed(2)},stopDrag:function(t){$("body").removeClass("focal-point-dragging"),e.positionFocalPoint(e.position)}},n=e;!function(t){var i,o,e,a,s,c={init:function(t){c.wrapper=e,c.picker=s,c.point=a,c.position=t,c.positionFocalPoint(t),c.setEventListeners()},setEventListeners:function(){c.picker.on("click",c.setFocalPoint),"function"==typeof t.ui.draggable&&c.point.draggable({cursor:"move",start:c.startDrag,drag:c.dragging,stop:c.stopDrag,containment:c.wrapper})},positionFocalPoint:function(t){c.point.css({left:"".concat(t.x,"%"),top:"".concat(t.y,"%"),position:"absolute"}),i.model.set("focalPoint",t)},setFocalPoint:function(t){var i=t.offsetY-c.point.height()/2,o=t.offsetX-c.point.width()/2;c.position.x=Number(o/c.picker.width()*100).toFixed(2),c.position.y=Number(i/c.picker.height()*100).toFixed(2),c.positionFocalPoint(c.position)},startDrag:function(i){t("body").addClass("focal-point-dragging")},dragging:function(t){c.position.x=Number(t.target.offsetLeft/c.picker.width()*100).toFixed(2),c.position.y=Number(t.target.offsetTop/c.picker.height()*100).toFixed(2)},stopDrag:function(i){t("body").removeClass("focal-point-dragging"),c.positionFocalPoint(c.position)}};t(document).ready((function(){var p=function(t,i){var n=wp.media.template("attachment-details-focal-point"),c=t.find(".thumbnail"),p=c.find("img");n&&c.length&&p.length&&(c.prepend(n),t.find(".image-focal"),e=t.find(".image-focal__wrapper"),a=t.find(".image-focal__point"),s=t.find(".image-focal__clickarea"),p.prependTo(e),o=e.find("img"))},r=function(){e.css({width:"".concat(o.width(),"px")})},l=function(i){var e=i.get("focalPoint");n.init(e),t(window).on("resize",r),o.on("load",(function(t){r(),n.init(e)}))},d=function(t){var i=t.model.get("type"),o=t.model.get("focalPoint");"image"===i&&(c.position=o,c.positionFocalPoint(o))},f=wp.media.view.Attachment,g=wp.media.view.Attachment.Details,h=wp.media.view.Attachment.Details.TwoColumn;h&&(wp.media.view.Attachment.Details.TwoColumn=h.extend({initialize:function(){i=this,this.model.on("change:focalPoint",this.change,this)},render:function(){f.prototype.render.apply(this,arguments);this.model.get("id");var t=this.model.get("type");"image"===t&&(p(this.$el),l(this.model))},change:function(){d(this)},update:function(){this.views.detach(),this.model.fetch(),this.views.render()}})),g&&(wp.media.view.Attachment.Details=g.extend({initialize:function(){i=this,f.prototype.initialize.apply(this,arguments),this.model.on("change:focalPoint",this.change,this)},render:function(){f.prototype.render.apply(this,arguments);this.model.get("id");var t=this.model.get("type");"image"===t&&(p(this.$el),l(this.model))},change:function(){d(this)},update:function(){console.log("AttachmentDetails update",this.model),this.views.detach(),this.model.fetch(),this.views.render()},updateAll:function(){console.log("AttachmentDetails updateAll",this.model)}}))}))}(jQuery)}],[[0,1]]]);
//# sourceMappingURL=admin-3d6ed2b8.js.map