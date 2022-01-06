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
(window.wpackioresponsivePicsfocalpointJsonp=window.wpackioresponsivePicsfocalpointJsonp||[]).push([[0],[function(t,i,e){e(1),e(2),t.exports=e(3)},function(t,i,e){var o="responsivePicsdist".replace(/[^a-zA-Z0-9_-]/g,"");e.p=window["__wpackIo".concat(o)]},function(t,i){var e,o,n,a,s,r,c,l;e=jQuery,l={init:function(t){l.wrapper=a,l.picker=r,l.point=s,l.positionFocalPoint(t),l.setEventListeners()},setEventListeners:function(){l.picker.on("click",l.setFocalPoint),"function"==typeof e.ui.draggable&&l.point.draggable({cursor:"move",start:l.startDrag,drag:l.dragging,stop:l.stopDrag,containment:l.wrapper})},positionFocalPoint:function(t){l.x=t.x,l.y=t.y,l.point.css({left:"".concat(t.x,"%"),top:"".concat(t.y,"%")})},setFocalPoint:function(t){c.removeClass("button-disabled");var i=t.offsetY-l.point.height()/2,e=t.offsetX-l.point.width()/2;l.x=Number(e/l.picker.width()*100).toFixed(2),l.y=Number(i/l.picker.height()*100).toFixed(2),l.positionFocalPoint(l)},startDrag:function(t){e("body").addClass("focal-point-dragging"),c.removeClass("button-disabled")},dragging:function(t){l.x=Number(t.target.offsetLeft/l.picker.width()*100).toFixed(2),l.y=Number(t.target.offsetTop/l.picker.height()*100).toFixed(2)},stopDrag:function(t){e("body").removeClass("focal-point-dragging"),l.positionFocalPoint(l)}},e(document).ready((function(){var t=function(){a.css({width:"".concat(n.width(),"px")})},i=function(i){var a=i.get("focalPoint");e(window).on("resize",t),n.on("load",(function(i){t(),l.init(a)})),c.on("click",(function(t){t.preventDefault(),function(t){var i,n,a,s={x:l.x,y:l.y};t.set({focalPoint:s}),e.ajax({url:null===(i=wp)||void 0===i||null===(n=i.ajax)||void 0===n||null===(a=n.settings)||void 0===a?void 0:a.url,method:"POST",data:{action:"save_focal_point",attachment:null==t?void 0:t.attributes}}).done((function(t){o.update()})).fail((function(t,i){console.log("save focal point error",t)})).always((function(){c.addClass("button-disabled")}))}(i)}))},d=function(t){console.log("renderView",t),"image"===t.model.get("type")&&(function(t){var i=wp.media.template("attachment-select-focal-point"),e=t.find(".thumbnail"),o=t.find(".details-image");i&&(console.log(e,o),e.prepend(i),t.find(".image-focal"),a=t.find(".image-focal__wrapper"),s=t.find(".image-focal__point"),r=t.find(".image-focal__clickarea"),o.prependTo(a),n=a.find(".details-image"));var l=wp.media.template("attachment-save-focal-point"),d=t.find(".attachment-actions");l&&(d.append(l),c=t.find("button.save-attachment-focal-point"))}(t.$el),i(t.model))},p=function(t){console.log("changeView",t);var i=t.model.get("type"),e=t.model.get("focalPoint");"image"===i&&l.positionFocalPoint(e)},f=wp.media.view.Attachment.Details.TwoColumn;f&&(wp.media.view.Attachment.Details.TwoColumn=f.extend({initialize:function(){return o=this,this.model.on("change:focalPoint",this.change,this),this},render:function(){return wp.media.view.Attachment.prototype.render.apply(this,arguments),d(this),this},change:function(){return p(this),this},update:function(){return this.views.detach(),this.model.fetch(),this.views.render(),this}}));var h=wp.media.view.EditImage;h&&(wp.media.view.EditImage=h.extend({initialize:function(t){return console.log("EditImage initialize"),this.editor=window.imageEdit,this.controller=t.controller,wp.media.View.prototype.initialize.apply(this,arguments),this},loadEditor:function(){return console.log("EditImage loadEditor"),this.editor.open(this.model.get("id"),this.model.get("nonces").edit,this),this},back:function(){console.log("EditImage back");var t=this.controller.lastState();return this.controller.setState(t),this},render:function(){return console.log("EditImage render"),wp.media.View.prototype.render.apply(this,arguments),this}}));var u=wp.media.view.EditImage.Details;u&&(wp.media.view.EditImage.Details=u.extend({initialize:function(){return console.log("EditImage Details initialize"),o=this,wp.media.view.EditImage.prototype.initialize.apply(this,arguments),this.model.on("change:focalPoint",this.change,this),this},render:function(){return console.log("EditImage Details render"),wp.media.view.EditImage.prototype.render.apply(this,arguments),d(this),this},back:function(){console.log("EditImage Details back");var t=this.controller.lastState();return this.controller.setState(t),this},change:function(){return p(this),this},update:function(){return this.views.detach(),this.model.fetch(),this.views.render(),this}}))}))},function(t,i,e){}],[[0,1]]]);
//# sourceMappingURL=admin-a4594be0.js.map