/*!
 * bootstrap-star-rating v4.0.4
 * http://plugins.krajee.com/star-rating
 *
 * Author: Kartik Visweswaran
 * Copyright: 2013 - 2018, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-star-rating/blob/master/LICENSE.md
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(window.jQuery)}(function(t){"use strict";var e,i;t.fn.ratingLocales={},t.fn.ratingThemes={},e={NAMESPACE:".rating",DEFAULT_MIN:0,DEFAULT_MAX:5,DEFAULT_STEP:.5,isEmpty:function(e,i){return null==e||0===e.length||i&&""===t.trim(e)},getCss:function(t,e){return t?" "+e:""},addCss:function(t,e){t.removeClass(e).addClass(e)},getDecimalPlaces:function(t){var e=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0},applyPrecision:function(t,e){return parseFloat(t.toFixed(e))},handler:function(t,i,a,n,s){var r=s?i:i.split(" ").join(e.NAMESPACE+" ")+e.NAMESPACE;n||t.off(r),t.on(r,a)}},(i=function(e,i){this.$element=t(e),this._init(i)}).prototype={constructor:i,_parseAttr:function(t,i){var a,n,s,r,l=this.$element,o=l.attr("type");if("range"===o||"number"===o){switch(n=i[t]||l.data(t)||l.attr(t),t){case"min":s=e.DEFAULT_MIN;break;case"max":s=e.DEFAULT_MAX;break;default:s=e.DEFAULT_STEP}a=e.isEmpty(n)?s:n,r=parseFloat(a)}else r=parseFloat(i[t]);return isNaN(r)?s:r},_parseValue:function(t){var e=parseFloat(t);return isNaN(e)&&(e=this.clearValue),!this.zeroAsNull||0!==e&&"0"!==e?e:null},_setDefault:function(t,i){e.isEmpty(this[t])&&(this[t]=i)},_initSlider:function(t){var i=this.$element.val();this.initialValue=e.isEmpty(i)?0:i,this._setDefault("min",this._parseAttr("min",t)),this._setDefault("max",this._parseAttr("max",t)),this._setDefault("step",this._parseAttr("step",t)),(isNaN(this.min)||e.isEmpty(this.min))&&(this.min=e.DEFAULT_MIN),(isNaN(this.max)||e.isEmpty(this.max))&&(this.max=e.DEFAULT_MAX),(isNaN(this.step)||e.isEmpty(this.step)||0===this.step)&&(this.step=e.DEFAULT_STEP),this.diff=this.max-this.min},_initHighlight:function(t){var e,i=this._getCaption();t||(t=this.$element.val()),e=this.getWidthFromValue(t)+"%",this.$filledStars.width(e),this.cache={caption:i,width:e,val:t}},_getContainerCss:function(){return"rating-container"+e.getCss(this.theme,"theme-"+this.theme)+e.getCss(this.rtl,"rating-rtl")+e.getCss(this.size,"rating-"+this.size)+e.getCss(this.animate,"rating-animate")+e.getCss(this.disabled||this.readonly,"rating-disabled")+e.getCss(this.containerClass,this.containerClass)+(this.displayOnly?" is-display-only":"")},_checkDisabled:function(){var t=this.$element,e=this.options;this.disabled=void 0===e.disabled?t.attr("disabled")||!1:e.disabled,this.readonly=void 0===e.readonly?t.attr("readonly")||!1:e.readonly,this.inactive=this.disabled||this.readonly,t.attr({disabled:this.disabled,readonly:this.readonly})},_addContent:function(t,e){var i=this.$container,a="clear"===t;return this.rtl?a?i.append(e):i.prepend(e):a?i.prepend(e):i.append(e)},_generateRating:function(){var i,a,n,s=this.$element;a=this.$container=t(document.createElement("div")).insertBefore(s),e.addCss(a,this._getContainerCss()),this.$rating=i=t(document.createElement("div")).attr("class","rating-stars").appendTo(a).append(this._getStars("empty")).append(this._getStars("filled")),this.$emptyStars=i.find(".empty-stars"),this.$filledStars=i.find(".filled-stars"),this._renderCaption(),this._renderClear(),this._initHighlight(),this._initCaptionTitle(),a.append(s),this.rtl&&(n=Math.max(this.$emptyStars.outerWidth(),this.$filledStars.outerWidth()),this.$emptyStars.width(n)),s.appendTo(i)},_getCaption:function(){return this.$caption&&this.$caption.length?this.$caption.html():this.defaultCaption},_setCaption:function(t){this.$caption&&this.$caption.length&&this.$caption.html(t)},_renderCaption:function(){var i,a=this.$element.val(),n=this.captionElement?t(this.captionElement):"";if(this.showCaption){if(i=this.fetchCaption(a),n&&n.length)return e.addCss(n,"caption"),n.html(i),void(this.$caption=n);this._addContent("caption",'<div class="caption">'+i+"</div>"),this.$caption=this.$container.find(".caption")}},_renderClear:function(){var i,a=this.clearElement?t(this.clearElement):"";if(this.showClear){if(i=this._getClearClass(),a.length)return e.addCss(a,i),a.attr({title:this.clearButtonTitle}).html(this.clearButton),void(this.$clear=a);this._addContent("clear",'<div class="'+i+'" title="'+this.clearButtonTitle+'">'+this.clearButton+"</div>"),this.$clear=this.$container.find("."+this.clearButtonBaseClass)}},_getClearClass:function(){return this.clearButtonBaseClass+" "+(this.inactive?"":this.clearButtonActiveClass)},_toggleHover:function(t){var e,i,a;t&&(this.hoverChangeStars&&(e=this.getWidthFromValue(this.clearValue),i=t.val<=this.clearValue?e+"%":t.width,this.$filledStars.css("width",i)),this.hoverChangeCaption&&(a=t.val<=this.clearValue?this.fetchCaption(this.clearValue):t.caption)&&this._setCaption(a+""))},_init:function(e){var i,a=this,n=a.$element.addClass("rating-input");return a.options=e,t.each(e,function(t,e){a[t]=e}),(a.rtl||"rtl"===n.attr("dir"))&&(a.rtl=!0,n.attr("dir","rtl")),a.starClicked=!1,a.clearClicked=!1,a._initSlider(e),a._checkDisabled(),a.displayOnly&&(a.inactive=!0,a.showClear=!1,a.showCaption=!1),a._generateRating(),a._initEvents(),a._listen(),i=a._parseValue(n.val()),n.val(i),n.removeClass("rating-loading")},_initCaptionTitle:function(){var e;this.showCaptionAsTitle&&(e=this.fetchCaption(this.$element.val()),this.$rating.attr("title",t(e).text()))},_trigChange:function(t){this._initCaptionTitle(),this.$element.trigger("change").trigger("rating:change",t)},_initEvents:function(){var t=this;t.events={_getTouchPosition:function(i){return(e.isEmpty(i.pageX)?i.originalEvent.touches[0].pageX:i.pageX)-t.$rating.offset().left},_listenClick:function(t,e){if(t.stopPropagation(),t.preventDefault(),!0===t.handled)return!1;e(t),t.handled=!0},_noMouseAction:function(e){return!t.hoverEnabled||t.inactive||e&&e.isDefaultPrevented()},initTouch:function(i){var a,n,s,r,l,o,h,c,u=t.clearValue||0;("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch)&&!t.inactive&&(a=i.originalEvent,n=e.isEmpty(a.touches)?a.changedTouches:a.touches,s=t.events._getTouchPosition(n[0]),"touchend"===i.type?(t._setStars(s),c=[t.$element.val(),t._getCaption()],t._trigChange(c),t.starClicked=!0):(l=(r=t.calculate(s)).val<=u?t.fetchCaption(u):r.caption,o=t.getWidthFromValue(u),h=r.val<=u?o+"%":r.width,t._setCaption(l),t.$filledStars.css("width",h)))},starClick:function(e){var i,a;t.events._listenClick(e,function(e){if(t.inactive)return!1;i=t.events._getTouchPosition(e),t._setStars(i),a=[t.$element.val(),t._getCaption()],t._trigChange(a),t.starClicked=!0})},clearClick:function(e){t.events._listenClick(e,function(){t.inactive||(t.clear(),t.clearClicked=!0)})},starMouseMove:function(e){var i,a;t.events._noMouseAction(e)||(t.starClicked=!1,i=t.events._getTouchPosition(e),a=t.calculate(i),t._toggleHover(a),t.$element.trigger("rating:hover",[a.val,a.caption,"stars"]))},starMouseLeave:function(e){var i;t.events._noMouseAction(e)||t.starClicked||(i=t.cache,t._toggleHover(i),t.$element.trigger("rating:hoverleave",["stars"]))},clearMouseMove:function(e){var i,a,n;!t.events._noMouseAction(e)&&t.hoverOnClear&&(t.clearClicked=!1,i='<span class="'+t.clearCaptionClass+'">'+t.clearCaption+"</span>",a=t.clearValue,n={caption:i,width:t.getWidthFromValue(a)||0,val:a},t._toggleHover(n),t.$element.trigger("rating:hover",[a,i,"clear"]))},clearMouseLeave:function(e){var i;t.events._noMouseAction(e)||t.clearClicked||!t.hoverOnClear||(i=t.cache,t._toggleHover(i),t.$element.trigger("rating:hoverleave",["clear"]))},resetForm:function(e){e&&e.isDefaultPrevented()||t.inactive||t.reset()}}},_listen:function(){var i=this.$element,a=i.closest("form"),n=this.$rating,s=this.$clear,r=this.events;return e.handler(n,"touchstart touchmove touchend",t.proxy(r.initTouch,this)),e.handler(n,"click touchstart",t.proxy(r.starClick,this)),e.handler(n,"mousemove",t.proxy(r.starMouseMove,this)),e.handler(n,"mouseleave",t.proxy(r.starMouseLeave,this)),this.showClear&&s.length&&(e.handler(s,"click touchstart",t.proxy(r.clearClick,this)),e.handler(s,"mousemove",t.proxy(r.clearMouseMove,this)),e.handler(s,"mouseleave",t.proxy(r.clearMouseLeave,this))),a.length&&e.handler(a,"reset",t.proxy(r.resetForm,this),!0),i},_getStars:function(t){var e,i='<span class="'+t+'-stars">';for(e=1;e<=this.stars;e++)i+='<span class="star">'+this[t+"Star"]+"</span>";return i+"</span>"},_setStars:function(t){var e=arguments.length?this.calculate(t):this.calculate(),i=this.$element,a=this._parseValue(e.val);return i.val(a),this.$filledStars.css("width",e.width),this._setCaption(e.caption),this.cache=e,i},showStars:function(t){var e=this._parseValue(t);return this.$element.val(e),this._initCaptionTitle(),this._setStars()},calculate:function(t){var i=e.isEmpty(this.$element.val())?0:this.$element.val(),a=arguments.length?this.getValueFromPosition(t):i,n=this.fetchCaption(a),s=this.getWidthFromValue(a);return{caption:n,width:s+="%",val:a}},getValueFromPosition:function(t){var i,a,n=e.getDecimalPlaces(this.step),s=this.$rating.width();return a=this.diff*t/(s*this.step),a=this.rtl?Math.floor(a):Math.ceil(a),i=e.applyPrecision(parseFloat(this.min+a*this.step),n),i=Math.max(Math.min(i,this.max),this.min),this.rtl?this.max-i:i},getWidthFromValue:function(t){var e,i,a=this.min,n=this.max,s=this.$emptyStars;return!t||t<=a||a===n?0:(e=(i=s.outerWidth())?s.width()/i:1,t>=n?100:(t-a)*e*100/(n-a))},fetchCaption:function(t){var i,a,n,s=parseFloat(t)||this.clearValue,r=this.starCaptions,l=this.starCaptionClasses;return s&&s!==this.clearValue&&(s=e.applyPrecision(s,e.getDecimalPlaces(this.step))),n="function"==typeof l?l(s):l[s],a="function"==typeof r?r(s):r[s],i=e.isEmpty(a)?this.defaultCaption.replace(/\{rating}/g,s):a,'<span class="'+(e.isEmpty(n)?this.clearCaptionClass:n)+'">'+(s===this.clearValue?this.clearCaption:i)+"</span>"},destroy:function(){var i=this.$element;return e.isEmpty(this.$container)||this.$container.before(i).remove(),t.removeData(i.get(0)),i.off("rating").removeClass("rating rating-input")},create:function(t){var e=t||this.options||{};return this.destroy().rating(e)},clear:function(){var t='<span class="'+this.clearCaptionClass+'">'+this.clearCaption+"</span>";return this.inactive||this._setCaption(t),this.showStars(this.clearValue).trigger("change").trigger("rating:clear")},reset:function(){return this.showStars(this.initialValue).trigger("rating:reset")},update:function(t){return arguments.length?this.showStars(t):this.$element},refresh:function(e){var i=this.$element;return e?this.destroy().rating(t.extend(!0,this.options,e)).trigger("rating:refresh"):i}},t.fn.rating=function(a){var n=Array.apply(null,arguments),s=[];switch(n.shift(),this.each(function(){var r,l=t(this),o=l.data("rating"),h="object"==typeof a&&a,c=h.theme||l.data("theme"),u=h.language||l.data("language")||"en",d={},p={};o||(c&&(d=t.fn.ratingThemes[c]||{}),"en"===u||e.isEmpty(t.fn.ratingLocales[u])||(p=t.fn.ratingLocales[u]),r=t.extend(!0,{},t.fn.rating.defaults,d,t.fn.ratingLocales.en,p,h,l.data()),o=new i(this,r),l.data("rating",o)),"string"==typeof a&&s.push(o[a].apply(o,n))}),s.length){case 0:return this;case 1:return void 0===s[0]?this:s[0];default:return s}},t.fn.rating.defaults={theme:"",language:"en",stars:5,filledStar:'<i class="glyphicon glyphicon-star"></i>',emptyStar:'<i class="glyphicon glyphicon-star-empty"></i>',containerClass:"",size:"md",animate:!0,displayOnly:!1,rtl:!1,showClear:!0,showCaption:!0,starCaptionClasses:{.5:"label label-danger badge-danger",1:"label label-danger badge-danger",1.5:"label label-warning badge-warning",2:"label label-warning badge-warning",2.5:"label label-info badge-info",3:"label label-info badge-info",3.5:"label label-primary badge-primary",4:"label label-primary badge-primary",4.5:"label label-success badge-success",5:"label label-success badge-success"},clearButton:'<i class="glyphicon glyphicon-minus-sign"></i>',clearButtonBaseClass:"clear-rating",clearButtonActiveClass:"clear-rating-active",clearCaptionClass:"label label-default badge-secondary",clearValue:null,captionElement:null,clearElement:null,showCaptionAsTitle:!0,hoverEnabled:!0,hoverChangeCaption:!0,hoverChangeStars:!0,hoverOnClear:!0,zeroAsNull:!0},t.fn.ratingLocales.en={defaultCaption:"{rating} Stars",starCaptions:{.5:"Half Star",1:"One Star",1.5:"One & Half Star",2:"Two Stars",2.5:"Two & Half Stars",3:"Three Stars",3.5:"Three & Half Stars",4:"Four Stars",4.5:"Four & Half Stars",5:"Five Stars"},clearButtonTitle:"Clear",clearCaption:"Not Rated"},t.fn.rating.Constructor=i,t(document).ready(function(){var e=t("input.rating");e.length&&e.removeClass("rating-loading").addClass("rating-loading").rating()})});
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*!
Waypoints Infinite Scroll Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(n){this.options=i.extend({},t.defaults,n),this.container=this.options.element,"auto"!==this.options.container&&(this.container=this.options.container),this.$container=i(this.container),this.$more=i(this.options.more),this.$more.length&&(this.setupHandler(),this.waypoint=new o(this.options))}var i=window.jQuery,o=window.Waypoint;t.prototype.setupHandler=function(){this.options.handler=i.proxy(function(){this.options.onBeforePageLoad(),this.destroy(),this.$container.addClass(this.options.loadingClass),i.get(i(this.options.more).attr("href"),i.proxy(function(t){var n=i(i.parseHTML(t)),e=n.find(this.options.more),s=n.find(this.options.items);s.length||(s=n.filter(this.options.items)),this.$container.append(s),this.$container.removeClass(this.options.loadingClass),e.length||(e=n.filter(this.options.more)),e.length?(this.$more.replaceWith(e),this.$more=e,this.waypoint=new o(this.options)):this.$more.remove(),this.options.onAfterPageLoad(s)},this))},this)},t.prototype.destroy=function(){this.waypoint&&this.waypoint.destroy()},t.defaults={container:"auto",items:".infinite-item",more:".infinite-more-link",offset:"bottom-in-view",loadingClass:"infinite-loading",onBeforePageLoad:i.noop,onAfterPageLoad:i.noop},o.Infinite=t}();
/*!
Waypoints Sticky Element Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(s){this.options=e.extend({},i.defaults,t.defaults,s),this.element=this.options.element,this.$element=e(this.element),this.createWrapper(),this.createWaypoint()}var e=window.jQuery,i=window.Waypoint;t.prototype.createWaypoint=function(){var t=this.options.handler;this.waypoint=new i(e.extend({},this.options,{element:this.wrapper,handler:e.proxy(function(e){var i=this.options.direction.indexOf(e)>-1,s=i?this.$element.outerHeight(!0):"";this.$wrapper.height(s),this.$element.toggleClass(this.options.stuckClass,i),t&&t.call(this,e)},this)}))},t.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},t.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap())},t.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i.Sticky=t}();
typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var n=e.History=e.History||{},r=e.jQuery;if(typeof n.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");n.Adapter={bind:function(e,t,n){r(e).bind(t,n)},trigger:function(e,t,n){r(e).trigger(t,n)},extractEventData:function(e,n,r){var i=n&&n.originalEvent&&n.originalEvent[e]||r&&r[e]||t;return i},onDomLoad:function(e){r(e)}},typeof n.init!="undefined"&&n.init()}(window),function(e,t){"use strict";var n=e.document,r=e.setTimeout||r,i=e.clearTimeout||i,s=e.setInterval||s,o=e.History=e.History||{};if(typeof o.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");o.initHtml4=function(){if(typeof o.initHtml4.initialized!="undefined")return!1;o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e){var t=o.getHashByIndex(),n;return n=e===t,n},o.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),e===t},o.saveHash=function(e){return o.isLastHash(e)?!1:(o.savedHashes.push(e),!0)},o.getHashByIndex=function(e){var t=null;return typeof e=="undefined"?t=o.savedHashes[o.savedHashes.length-1]:e<0?t=o.savedHashes[o.savedHashes.length+e]:t=o.savedHashes[e],t},o.discardedHashes={},o.discardedStates={},o.discardState=function(e,t,n){var r=o.getHashByState(e),i;return i={discardedState:e,backState:n,forwardState:t},o.discardedStates[r]=i,!0},o.discardHash=function(e,t,n){var r={discardedHash:e,backState:n,forwardState:t};return o.discardedHashes[e]=r,!0},o.discardedState=function(e){var t=o.getHashByState(e),n;return n=o.discardedStates[t]||!1,n},o.discardedHash=function(e){var t=o.discardedHashes[e]||!1;return t},o.recycleState=function(e){var t=o.getHashByState(e);return o.discardedState(e)&&delete o.discardedStates[t],!0},o.emulated.hashChange&&(o.hashChangeInit=function(){o.checkerFunction=null;var t="",r,i,u,a,f=Boolean(o.getHash());return o.isInternetExplorer()?(r="historyjs-iframe",i=n.createElement("iframe"),i.setAttribute("id",r),i.setAttribute("src","#"),i.style.display="none",n.body.appendChild(i),i.contentWindow.document.open(),i.contentWindow.document.close(),u="",a=!1,o.checkerFunction=function(){if(a)return!1;a=!0;var n=o.getHash(),r=o.getHash(i.contentWindow.document);return n!==t?(t=n,r!==n&&(u=r=n,i.contentWindow.document.open(),i.contentWindow.document.close(),i.contentWindow.document.location.hash=o.escapeHash(n)),o.Adapter.trigger(e,"hashchange")):r!==u&&(u=r,f&&r===""?o.back():o.setHash(r,!1)),a=!1,!0}):o.checkerFunction=function(){var n=o.getHash()||"";return n!==t&&(t=n,o.Adapter.trigger(e,"hashchange")),!0},o.intervalList.push(s(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&&(o.onHashChange=function(t){var n=t&&t.newURL||o.getLocationHref(),r=o.getHashByUrl(n),i=null,s=null,u=null,a;return o.isLastHash(r)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(r),r&&o.isTraditionalAnchor(r)?(o.Adapter.trigger(e,"anchorchange"),o.busy(!1),!1):(i=o.extractState(o.getFullUrl(r||o.getLocationHref()),!0),o.isLastSavedState(i)?(o.busy(!1),!1):(s=o.getHashByState(i),a=o.discardedState(i),a?(o.getHashByIndex(-2)===o.getHashByState(a.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(i.data,i.title,encodeURI(i.url),!1),!0))))},o.Adapter.bind(e,"hashchange",o.onHashChange),o.pushState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getHash(),c=o.expectedStateId==s.id;return o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),u===f?(o.busy(!1),!1):(o.saveState(s),c||o.Adapter.trigger(e,"statechange"),!o.isHashEqual(u,l)&&!o.isHashEqual(u,o.getShortUrl(o.getLocationHref()))&&o.setHash(u,!1),o.busy(!1),!0)},o.replaceState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getStateByIndex(-2);return o.discardState(a,s,l),u===f?(o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),o.saveState(s),o.Adapter.trigger(e,"statechange"),o.busy(!1)):o.pushState(s.data,s.title,s.url,!1),!0}),o.emulated.pushState&&o.getHash()&&!o.emulated.hashChange&&o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,"hashchange")})},typeof o.init!="undefined"&&o.init()}(window),function(e,t){"use strict";var n=e.console||t,r=e.document,i=e.navigator,s=!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s=e.sessionStorage,s.setItem("TEST","1"),s.removeItem("TEST")}catch(d){s=!1}l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode;if(typeof h.init!="undefined")throw new Error("History.js Core has already been loaded...");h.init=function(e){return typeof h.Adapter=="undefined"?!1:(typeof h.initCore!="undefined"&&h.initCore(),typeof h.initHtml4!="undefined"&&h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!="undefined")return!1;h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(typeof t!="undefined"&&t!==null){for(e=0;e<t.length;e++)f(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e=typeof n!="undefined"&&typeof n.log!="undefined"&&typeof n.log.apply!="undefined",t=r.getElementById("log"),i,s,o,u,a;e?(u=Array.prototype.slice.call(arguments),i=u.shift(),typeof n.debug!="undefined"?n.debug.apply(n,[i,u]):n.log.apply(n,[i,u])):i="\n"+arguments[0]+"\n";for(s=1,o=arguments.length;s<o;++s){a=arguments[s];if(typeof a=="object"&&typeof l!="undefined")try{a=l.stringify(a)}catch(f){}i+="\n"+a+"\n"}return t?(t.value+=i+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):e||c(i),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!="undefined"?h.getInternetExplorerMajorVersion.cached:function(){var e=3,t=r.createElement("div"),n=t.getElementsByTagName("i");while((t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0]);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!="undefined"?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,n;return e?(t=l.stringify(e),n=l.parse(t)):n={},n},h.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);if(r.location.port||!1)e+=":"+r.location.port;return e+="/",e},h.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,n="";return e.length===1&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e=h.getState(!1,!1),t=(e||{}).url||h.getLocationHref(),n;return n=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"}),n},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var n=e,r=e.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(e)||(r==="/"?n=h.getRootUrl()+e.replace(/^\/+/,""):r==="#"?n=h.getPageUrl().replace(/#.*/,"")+e:r==="?"?n=h.getPageUrl().replace(/[\?#].*/,"")+e:t?n=h.getBaseUrl()+e.replace(/^(\.\/)+/,""):n=h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,n=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(n,"")),t=t.replace(r,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){typeof e=="undefined"&&(e=!0),typeof t=="undefined"&&(t=!0);var n=h.getLastSavedState();return!n&&t&&(n=h.createStateObject()),e&&(n=h.cloneObject(n),n.url=n.cleanUrl||n.url),n},h.getIdByState=function(e){var t=h.extractId(e.url),n;if(!t){n=h.getStateString(e);if(typeof h.stateToId[n]!="undefined")t=h.stateToId[n];else if(typeof h.store.stateToId[n]!="undefined")t=h.store.stateToId[n];else{for(;;){t=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof h.idToState[t]=="undefined"&&typeof h.store.idToState[t]=="undefined")break}h.stateToId[n]=t,h.idToState[t]=e}}return t},h.normalizeState=function(e){var t,n;if(!e||typeof e!="object")e={};if(typeof e.normalized!="undefined")return e;if(!e.data||typeof e.data!="object")e.data={};return t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,n=!h.isEmptyObject(t.data),(t.title||n)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t},h.createStateObject=function(e,t,n){var r={data:e,title:t,url:n};return r=h.normalizeState(r),r},h.getStateById=function(e){e=String(e);var n=h.idToState[e]||h.store.idToState[e]||t;return n},h.getStateString=function(e){var t,n,r;return t=h.normalizeState(e),n={data:t.data,title:e.title,url:e.url},r=l.stringify(n),r},h.getStateId=function(e){var t,n;return t=h.normalizeState(e),n=t.id,n},h.getHashByState=function(e){var t,n;return t=h.normalizeState(e),n=t.hash,n},h.extractId=function(e){var t,n,r,i;return e.indexOf("#")!=-1?i=e.split("#")[0]:i=e,n=/(.*)\&_suid=([0-9]+)$/.exec(i),r=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var n=null,r,i;return t=t||!1,r=h.extractId(e),r&&(n=h.getStateById(r)),n||(i=h.getFullUrl(e),r=h.getIdByUrl(i)||!1,r&&(n=h.getStateById(r)),!n&&t&&!h.isTraditionalAnchor(e)&&(n=h.createStateObject(null,null,i))),n},h.getIdByUrl=function(e){var n=h.urlToId[e]||h.store.urlToId[e]||t;return n},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t=!1,n;return n=h.extractState(e.url),t=n&&n.id!==e.id,t},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t=!1,n,r,i;return h.savedStates.length&&(n=e.id,r=h.getLastSavedState(),i=r.id,t=n===i),t},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return typeof e=="undefined"?t=h.savedStates[h.savedStates.length-1]:e<0?t=h.savedStates[h.savedStates.length+e]:t=h.savedStates[e],t},h.getCurrentIndex=function(){var e=null;return h.savedStates.length<1?e=0:e=h.savedStates.length-1,e},h.getHash=function(e){var t=h.getLocationHref(e),n;return n=h.getHashByUrl(t),n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t),t},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var n,i;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),n=h.extractState(e,!0),n&&!h.emulated.pushState?h.pushState(n.data,n.title,n.url,!1):h.getHash()!==e&&(h.bugs.setHash?(i=h.getPageUrl(),h.pushState(null,null,i+"#"+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var n=h.normalizeHash(t);return n=e.encodeURIComponent(n),h.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t),t},h.setTitle=function(e){var t=e.title,n;t||(n=h.getStateByIndex(0),n&&n.url===e.url&&(t=n.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(i){}return r.title=t,h},h.queues=[],h.busy=function(e){typeof e!="undefined"?h.busy.flag=e:typeof h.busy.flag=="undefined"&&(h.busy.flag=!1);if(!h.busy.flag){u(h.busy.timeout);var t=function(){var e,n,r;if(h.busy.flag)return;for(e=h.queues.length-1;e>=0;--e){n=h.queues[e];if(n.length===0)continue;r=n.shift(),h.fireQueueItem(r),h.busy.timeout=o(t,h.options.busyDelay)}};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return typeof e=="function"&&(e={callback:e}),typeof t!="undefined"&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t=h.extractState(h.getLocationHref()),n;if(!h.isLastSavedState(t))return n=t,n||(n=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h;return},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var n;if(e>0)for(n=1;n<=e;++n)h.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(n=-1;n>=e;--n)h.back(t)}return h};if(h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t,n){var r=!1,i=!1,s,o;return h.doubleCheckComplete(),s=h.getHash(),s?(o=h.extractState(s||h.getLocationHref(),!0),o?h.replaceState(o.data,o.title,o.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(r=h.Adapter.extractEventData("state",t,n)||!1,r?i=h.getStateById(r):h.expectedStateId?i=h.getStateById(h.expectedStateId):i=h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.pushState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.replaceState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0};if(s){try{h.store=l.parse(s.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&&(h.onUnload=function(){var e,t,n;try{e=l.parse(s.getItem("History.store"))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState){if(!h.idToState.hasOwnProperty(t))continue;e.idToState[t]=h.idToState[t]}for(t in h.urlToId){if(!h.urlToId.hasOwnProperty(t))continue;e.urlToId[t]=h.urlToId[t]}for(t in h.stateToId){if(!h.stateToId.hasOwnProperty(t))continue;e.stateToId[t]=h.stateToId[t]}h.store=e,h.normalizeStore(),n=l.stringify(e);try{s.setItem("History.store",n)}catch(i){if(i.code!==DOMException.QUOTA_EXCEEDED_ERR)throw i;s.length&&(s.removeItem("History.store"),s.setItem("History.store",n))}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload));if(!h.emulated.pushState){h.bugs.safariPoll&&h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval));if(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla")h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})}},(!h.options||!h.options.delayInit)&&h.init()}(window);
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.1
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);if(!e.length)return;case "object":if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
!function(t){"use strict";var e,i,n,s,o="dotdotdot",r="3.2.2";t[o]&&t[o].version>r||(t[o]=function(t,e){this.$dot=t,this.api=["getInstance","truncate","restore","destroy","watch","unwatch"],this.opts=e;var i=this.$dot.data(o);return i&&i.destroy(),this.init(),this.truncate(),this.opts.watch&&this.watch(),this},t[o].version=r,t[o].uniqueId=0,t[o].defaults={ellipsis:"… ",callback:function(t){},truncate:"word",tolerance:0,keep:null,watch:"window",height:null},t[o].prototype={init:function(){this.watchTimeout=null,this.watchInterval=null,this.uniqueId=t[o].uniqueId++,this.originalStyle=this.$dot.attr("style")||"",this.originalContent=this._getOriginalContent(),"break-word"!==this.$dot.css("word-wrap")&&this.$dot.css("word-wrap","break-word"),"nowrap"===this.$dot.css("white-space")&&this.$dot.css("white-space","normal"),null===this.opts.height&&(this.opts.height=this._getMaxHeight()),"string"==typeof this.opts.ellipsis&&(this.opts.ellipsis=document.createTextNode(this.opts.ellipsis))},getInstance:function(){return this},truncate:function(){this.$inner=this.$dot.wrapInner("<div />").children().css({display:"block",height:"auto",width:"auto",border:"none",padding:0,margin:0}),this.$inner.empty().append(this.originalContent.clone(!0)),this.maxHeight=this._getMaxHeight();var t=!1;return this._fits()||(t=!0,this._truncateToNode(this.$inner[0])),this.$dot[t?"addClass":"removeClass"](e.truncated),this.$inner.replaceWith(this.$inner.contents()),this.$inner=null,this.opts.callback.call(this.$dot[0],t),t},restore:function(){this.unwatch(),this.$dot.empty().append(this.originalContent).attr("style",this.originalStyle).removeClass(e.truncated)},destroy:function(){this.restore(),this.$dot.data(o,null)},watch:function(){var t=this;this.unwatch();var e={};"window"==this.opts.watch?s.on(n.resize+t.uniqueId,function(i){t.watchTimeout&&clearTimeout(t.watchTimeout),t.watchTimeout=setTimeout(function(){e=t._watchSizes(e,s,"width","height")},100)}):this.watchInterval=setInterval(function(){e=t._watchSizes(e,t.$dot,"innerWidth","innerHeight")},500)},unwatch:function(){s.off(n.resize+this.uniqueId),this.watchInterval&&clearInterval(this.watchInterval),this.watchTimeout&&clearTimeout(this.watchTimeout)},_api:function(){var e=this,i={};return t.each(this.api,function(t){var n=this;i[n]=function(){var t=e[n].apply(e,arguments);return void 0===t?i:t}}),i},_truncateToNode:function(i){var n=[],s=[];if(t(i).contents().each(function(){var i=t(this);if(!i.hasClass(e.keep)){var o=document.createComment("");i.replaceWith(o),s.push(this),n.push(o)}}),s.length){for(var o=0;o<s.length;o++){t(n[o]).replaceWith(s[o]),t(s[o]).append(this.opts.ellipsis);var r=this._fits();if(t(this.opts.ellipsis,s[o]).remove(),!r){if("node"==this.opts.truncate&&o>1)return void t(s[o-2]).remove();break}}for(var h=o;h<n.length;h++)t(n[h]).remove();var a=s[Math.max(0,Math.min(o,s.length-1))];if(1==a.nodeType){var d=t("<"+a.nodeName+" />");d.append(this.opts.ellipsis),t(a).replaceWith(d),this._fits()?d.replaceWith(a):(d.remove(),a=s[Math.max(0,o-1)])}1==a.nodeType?this._truncateToNode(a):this._truncateToWord(a)}},_truncateToWord:function(t){for(var e=t,i=this,n=this.__getTextContent(e),s=-1!==n.indexOf(" ")?" ":"　",o=n.split(s),r="",h=o.length;h>=0;h--)if(r=o.slice(0,h).join(s),i.__setTextContent(e,i._addEllipsis(r)),i._fits()){"letter"==i.opts.truncate&&(i.__setTextContent(e,o.slice(0,h+1).join(s)),i._truncateToLetter(e));break}},_truncateToLetter:function(t){for(var e=this,i=this.__getTextContent(t).split(""),n="",s=i.length;s>=0&&(!(n=i.slice(0,s).join("")).length||(e.__setTextContent(t,e._addEllipsis(n)),!e._fits()));s--);},_fits:function(){return this.$inner.innerHeight()<=this.maxHeight+this.opts.tolerance},_addEllipsis:function(e){for(var i=[" ","　",",",";",".","!","?"];t.inArray(e.slice(-1),i)>-1;)e=e.slice(0,-1);return e+=this.__getTextContent(this.opts.ellipsis)},_getOriginalContent:function(){var i=this;return this.$dot.find("script, style").addClass(e.keep),this.opts.keep&&this.$dot.find(this.opts.keep).addClass(e.keep),this.$dot.find("*").not("."+e.keep).add(this.$dot).contents().each(function(){var e=this,n=t(this);if(3==e.nodeType){if(""==t.trim(i.__getTextContent(e))){if(n.parent().is("table, thead, tbody, tfoot, tr, dl, ul, ol, video"))return void n.remove();if(n.prev().is("div, p, table, td, td, dt, dd, li"))return void n.remove();if(n.next().is("div, p, table, td, td, dt, dd, li"))return void n.remove();if(!n.prev().length)return void n.remove();if(!n.next().length)return void n.remove()}}else 8==e.nodeType&&n.remove()}),this.$dot.contents()},_getMaxHeight:function(){if("number"==typeof this.opts.height)return this.opts.height;for(var t=["maxHeight","height"],e=0,i=0;i<t.length;i++)if("px"==(e=window.getComputedStyle(this.$dot[0])[t[i]]).slice(-2)){e=parseFloat(e);break}t=[];switch(this.$dot.css("boxSizing")){case"border-box":t.push("borderTopWidth"),t.push("borderBottomWidth");case"padding-box":t.push("paddingTop"),t.push("paddingBottom")}for(i=0;i<t.length;i++){var n=window.getComputedStyle(this.$dot[0])[t[i]];"px"==n.slice(-2)&&(e-=parseFloat(n))}return Math.max(e,0)},_watchSizes:function(t,e,i,n){if(this.$dot.is(":visible")){var s={width:e[i](),height:e[n]()};return t.width==s.width&&t.height==s.height||this.truncate(),s}return t},__getTextContent:function(t){for(var e=["nodeValue","textContent","innerText"],i=0;i<e.length;i++)if("string"==typeof t[e[i]])return t[e[i]];return""},__setTextContent:function(t,e){for(var i=["nodeValue","textContent","innerText"],n=0;n<i.length;n++)t[i[n]]=e}},t.fn[o]=function(r){return function(){s=t(window);e={};i={};n={};t.each([e,i,n],function(t,e){e.add=function(t){t=t.split(" ");for(var i=0,n=t.length;i<n;i++)e[t[i]]=e.ddd(t[i])}});e.ddd=function(t){return"ddd-"+t};e.add("truncated keep");i.ddd=function(t){return"ddd-"+t};n.ddd=function(t){return t+".ddd"};n.add("resize");(function(){})}(),r=t.extend(!0,{},t[o].defaults,r),this.each(function(){t(this).data(o,new t[o](t(this),r)._api())})})}(jQuery);
/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(a,b){},onStep:function(a,b,c){},onStop:function(a,b){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));"string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?e.easing=jQuery.easing[e.easing]:e.easing=d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});
/**
 * jQuery serializeObject
 * @copyright 2014, macek <paulmacek@gmail.com>
 * @link https://github.com/macek/jquery-serialize-object
 * @license BSD
 * @version 2.5.0
 */
!function(e,i){if("function"==typeof define&&define.amd)define(["exports","jquery"],function(e,r){return i(e,r)});else if("undefined"!=typeof exports){var r=require("jquery");i(exports,r)}else i(e,e.jQuery||e.Zepto||e.ender||e.$)}(this,function(e,i){function r(e,r){function n(e,i,r){return e[i]=r,e}function a(e,i){for(var r,a=e.match(t.key);void 0!==(r=a.pop());)if(t.push.test(r)){var u=s(e.replace(/\[\]$/,""));i=n([],u,i)}else t.fixed.test(r)?i=n([],r,i):t.named.test(r)&&(i=n({},r,i));return i}function s(e){return void 0===h[e]&&(h[e]=0),h[e]++}function u(e){switch(i('[name="'+e.name+'"]',r).attr("type")){case"checkbox":return"on"===e.value?!0:e.value;default:return e.value}}function f(i){if(!t.validate.test(i.name))return this;var r=a(i.name,u(i));return l=e.extend(!0,l,r),this}function d(i){if(!e.isArray(i))throw new Error("formSerializer.addPairs expects an Array");for(var r=0,t=i.length;t>r;r++)this.addPair(i[r]);return this}function o(){return l}function c(){return JSON.stringify(o())}var l={},h={};this.addPair=f,this.addPairs=d,this.serialize=o,this.serializeJSON=c}var t={validate:/^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,key:/[a-z0-9_]+|(?=\[\])/gi,push:/^$/,fixed:/^\d+$/,named:/^[a-z0-9_]+$/i};return r.patterns=t,r.serializeObject=function(){return new r(i,this).addPairs(this.serializeArray()).serialize()},r.serializeJSON=function(){return new r(i,this).addPairs(this.serializeArray()).serializeJSON()},"undefined"!=typeof i.fn&&(i.fn.serializeObject=r.serializeObject,i.fn.serializeJSON=r.serializeJSON),e.FormSerializer=r,r});
!function(t){function e(e){if("string"==typeof e.data&&(e.data={keys:e.data}),e.data&&e.data.keys&&"string"==typeof e.data.keys){var a=e.handler,s=e.data.keys.toLowerCase().split(" ");e.handler=function(e){if(this===e.target||!(t.hotkeys.options.filterInputAcceptingElements&&t.hotkeys.textInputTypes.test(e.target.nodeName)||t.hotkeys.options.filterContentEditable&&t(e.target).attr("contenteditable")||t.hotkeys.options.filterTextInputs&&t.inArray(e.target.type,t.hotkeys.textAcceptingInputTypes)>-1)){var n="keypress"!==e.type&&t.hotkeys.specialKeys[e.which],i=String.fromCharCode(e.which).toLowerCase(),r="",o={};t.each(["alt","ctrl","shift"],function(t,a){e[a+"Key"]&&n!==a&&(r+=a+"+")}),e.metaKey&&!e.ctrlKey&&"meta"!==n&&(r+="meta+"),e.metaKey&&"meta"!==n&&r.indexOf("alt+ctrl+shift+")>-1&&(r=r.replace("alt+ctrl+shift+","hyper+")),n?o[r+n]=!0:(o[r+i]=!0,o[r+t.hotkeys.shiftNums[i]]=!0,"shift+"===r&&(o[t.hotkeys.shiftNums[i]]=!0));for(var p=0,l=s.length;p<l;p++)if(o[s[p]])return a.apply(this,arguments)}}}}t.hotkeys={version:"0.2.0",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",91:"left_command",93:"right_command",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"command"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],textInputTypes:/textarea|input|select/i,options:{filterInputAcceptingElements:!0,filterTextInputs:!0,filterContentEditable:!0}},t.each(["keydown","keyup","keypress"],function(){t.event.special[this]={add:e}})}(jQuery||this.jQuery||window.jQuery);
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?t(require("jquery")):t(jQuery)}(function(h){h.timeago=function(t){return t instanceof Date?r(t):r("string"==typeof t?h.timeago.parse(t):"number"==typeof t?new Date(t):h.timeago.datetime(t))};var a=h.timeago;h.extend(h.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(n){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var r=this.settings.strings,t=r.prefixAgo,e=r.suffixAgo;if(this.settings.allowFuture&&n<0&&(t=r.prefixFromNow,e=r.suffixFromNow),!this.settings.allowPast&&0<=n)return this.settings.strings.inPast;var a=Math.abs(n)/1e3,i=a/60,o=i/60,s=o/24,u=s/365;function l(t,e){var a=h.isFunction(t)?t(e,n):t,i=r.numbers&&r.numbers[e]||e;return a.replace(/%d/i,i)}var m=a<45&&l(r.seconds,Math.round(a))||a<90&&l(r.minute,1)||i<45&&l(r.minutes,Math.round(i))||i<90&&l(r.hour,1)||o<24&&l(r.hours,Math.round(o))||o<42&&l(r.day,1)||s<30&&l(r.days,Math.round(s))||s<45&&l(r.month,1)||s<365&&l(r.months,Math.round(s/30))||u<1.5&&l(r.year,1)||l(r.years,Math.round(u)),d=r.wordSeparator||"";return void 0===r.wordSeparator&&(d=" "),h.trim([t,m,e].join(d))},parse:function(t){var e=h.trim(t);return e=(e=(e=(e=(e=e.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(e)},datetime:function(t){var e=a.isTime(t)?h(t).attr("datetime"):h(t).attr("title");return a.parse(e)},isTime:function(t){return"time"===h(t).get(0).tagName.toLowerCase()}});var i={init:function(){i.dispose.call(this);var t=h.proxy(n,this);t();var e=a.settings;0<e.refreshMillis&&(this._timeagoInterval=setInterval(t,e.refreshMillis))},update:function(t){var e=t instanceof Date?t:a.parse(t);h(this).data("timeago",{datetime:e}),a.settings.localeTitle&&h(this).attr("title",e.toLocaleString()),n.apply(this)},updateFromDOM:function(){h(this).data("timeago",{datetime:a.parse(a.isTime(this)?h(this).attr("datetime"):h(this).attr("title"))}),n.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};function n(){var t=a.settings;if(t.autoDispose&&!h.contains(document.documentElement,this))return h(this).timeago("dispose"),this;var e=function(t){if(!(t=h(t)).data("timeago")){t.data("timeago",{datetime:a.datetime(t)});var e=h.trim(t.text());a.settings.localeTitle?t.attr("title",t.data("timeago").datetime.toLocaleString()):!(0<e.length)||a.isTime(t)&&t.attr("title")||t.attr("title",e)}return t.removeClass("initial").addClass("loaded").data("timeago")}(this);return isNaN(e.datetime)||(0===t.cutoff||Math.abs(o(e.datetime))<t.cutoff?h(this).text(r(e.datetime)):0<h(this).attr("title").length&&h(this).text(h(this).attr("title"))),this}function r(t){return a.inWords(o(t))}function o(t){return(new Date).getTime()-t.getTime()}h.fn.timeago=function(t,e){var a=t?i[t]:i.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});
// helper.js
!function(t){function e(t,e,n,a){if("addEventListener"in t)try{t.addEventListener(e,n,a)}catch(i){if("object"!=typeof n||!n.handleEvent)throw i;t.addEventListener(e,function(t){n.handleEvent.call(n,t)},a)}else"attachEvent"in t&&("object"==typeof n&&n.handleEvent?t.attachEvent("on"+e,function(){n.handleEvent.call(n)}):t.attachEvent("on"+e,n))}function n(t,e,n,a){if("removeEventListener"in t)try{t.removeEventListener(e,n,a)}catch(i){if("object"!=typeof n||!n.handleEvent)throw i;t.removeEventListener(e,function(t){n.handleEvent.call(n,t)},a)}else"detachEvent"in t&&("object"==typeof n&&n.handleEvent?t.detachEvent("on"+e,function(){n.handleEvent.call(n)}):t.detachEvent("on"+e,n))}window.MBP=window.MBP||{},MBP.viewportmeta=t.querySelector&&t.querySelector('meta[name="viewport"]'),MBP.ua=navigator.userAgent,MBP.scaleFix=function(){MBP.viewportmeta&&/iPhone|iPad|iPod/.test(MBP.ua)&&!/Opera Mini/.test(MBP.ua)&&(MBP.viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0",t.addEventListener("gesturestart",MBP.gestureStart,!1))},MBP.gestureStart=function(){MBP.viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},MBP.BODY_SCROLL_TOP=!1,MBP.getScrollTop=function(){var e=window,n=t;return e.pageYOffset||"CSS1Compat"===n.compatMode&&n.documentElement.scrollTop||n.body.scrollTop||0},MBP.hideUrlBar=function(){var t=window;location.hash||MBP.BODY_SCROLL_TOP===!1||t.scrollTo(0,1===MBP.BODY_SCROLL_TOP?0:1)},MBP.hideUrlBarOnLoad=function(){var t,e=window,n=e.document;e.navigator.standalone||location.hash||!e.addEventListener||(window.scrollTo(0,1),MBP.BODY_SCROLL_TOP=1,t=setInterval(function(){n.body&&(clearInterval(t),MBP.BODY_SCROLL_TOP=MBP.getScrollTop(),MBP.hideUrlBar())},15),e.addEventListener("load",function(){setTimeout(function(){MBP.getScrollTop()<20&&MBP.hideUrlBar()},0)},!1))},MBP.fastButton=function(t,e,n){if(this.handler=e,this.pressedClass="undefined"==typeof n?"pressed":n,MBP.listenForGhostClicks(),t.length&&t.length>1)for(var a in t)this.addClickEvent(t[a]);else this.addClickEvent(t)},MBP.fastButton.prototype.handleEvent=function(t){switch(t=t||window.event,t.type){case"touchstart":this.onTouchStart(t);break;case"touchmove":this.onTouchMove(t);break;case"touchend":this.onClick(t);break;case"click":this.onClick(t)}},MBP.fastButton.prototype.onTouchStart=function(e){var n=e.target||e.srcElement;e.stopPropagation(),n.addEventListener("touchend",this,!1),t.body.addEventListener("touchmove",this,!1),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,n.className+=" "+this.pressedClass},MBP.fastButton.prototype.onTouchMove=function(t){(Math.abs(t.touches[0].clientX-this.startX)>10||Math.abs(t.touches[0].clientY-this.startY)>10)&&this.reset(t)},MBP.fastButton.prototype.onClick=function(t){t=t||window.event;var e=t.target||t.srcElement;t.stopPropagation&&t.stopPropagation(),this.reset(t),this.handler.apply(t.currentTarget,[t]),"touchend"==t.type&&MBP.preventGhostClick(this.startX,this.startY);var n=new RegExp(" ?"+this.pressedClass,"gi");e.className=e.className.replace(n,"")},MBP.fastButton.prototype.reset=function(e){var a=e.target||e.srcElement;n(a,"touchend",this,!1),n(t.body,"touchmove",this,!1);var i=new RegExp(" ?"+this.pressedClass,"gi");a.className=a.className.replace(i,"")},MBP.fastButton.prototype.addClickEvent=function(t){e(t,"touchstart",this,!1),e(t,"click",this,!1)},MBP.preventGhostClick=function(t,e){MBP.coords.push(t,e),window.setTimeout(function(){MBP.coords.splice(0,2)},2500)},MBP.ghostClickHandler=function(t){if(!MBP.hadTouchEvent&&MBP.dodgyAndroid)return t.stopPropagation(),void t.preventDefault();for(var e=0,n=MBP.coords.length;n>e;e+=2){var a=MBP.coords[e],i=MBP.coords[e+1];Math.abs(t.clientX-a)<25&&Math.abs(t.clientY-i)<25&&(t.stopPropagation(),t.preventDefault())}},MBP.dodgyAndroid="ontouchstart"in window&&-1!=navigator.userAgent.indexOf("Android 2.3"),MBP.listenForGhostClicks=function(){var n=!1;return function(){n||(t.addEventListener&&t.addEventListener("click",MBP.ghostClickHandler,!0),e(t.documentElement,"touchstart",function(){MBP.hadTouchEvent=!0},!1),n=!0)}}(),MBP.coords=[],MBP.autogrow=function(t,e){function n(){var t=this.scrollHeight,e=this.clientHeight;t>e&&(this.style.height=t+3*i+"px")}var a=e?e:12,i=t.currentStyle?t.currentStyle.lineHeight:getComputedStyle(t,null).lineHeight;i=-1==i.indexOf("px")?a:parseInt(i,10),t.style.overflow="hidden",t.addEventListener?t.addEventListener("input",n,!1):t.attachEvent("onpropertychange",n)},MBP.enableActive=function(){t.addEventListener("touchstart",function(){},!1)},MBP.preventScrolling=function(){t.addEventListener("touchmove",function(t){"range"!==t.target.type&&t.preventDefault()},!1)},MBP.preventZoom=function(){if(MBP.viewportmeta&&navigator.platform.match(/iPad|iPhone|iPod/i))for(var e=t.querySelectorAll("input, select, textarea"),n="width=device-width,initial-scale=1,maximum-scale=",a=0,i=e.length,o=function(){MBP.viewportmeta.content=n+"1"},r=function(){MBP.viewportmeta.content=n+"10"};i>a;a++)e[a].onfocus=o,e[a].onblur=r},MBP.startupImage=function(){var e,n,a,i,o,r;a=window.devicePixelRatio,i=t.getElementsByTagName("head")[0],"iPad"===navigator.platform?(e=2===a?"img/startup/startup-tablet-portrait-retina.png":"img/startup/startup-tablet-portrait.png",n=2===a?"img/startup/startup-tablet-landscape-retina.png":"img/startup/startup-tablet-landscape.png",o=t.createElement("link"),o.setAttribute("rel","apple-touch-startup-image"),o.setAttribute("media","screen and (orientation: portrait)"),o.setAttribute("href",e),i.appendChild(o),r=t.createElement("link"),r.setAttribute("rel","apple-touch-startup-image"),r.setAttribute("media","screen and (orientation: landscape)"),r.setAttribute("href",n),i.appendChild(r)):(e=2===a?"img/startup/startup-retina.png":"img/startup/startup.png",e=568===screen.height?"img/startup/startup-retina-4in.png":e,o=t.createElement("link"),o.setAttribute("rel","apple-touch-startup-image"),o.setAttribute("href",e),i.appendChild(o)),navigator.platform.match(/iPhone|iPod/i)&&568===screen.height&&navigator.userAgent.match(/\bOS 6_/)&&MBP.viewportmeta&&(MBP.viewportmeta.content=MBP.viewportmeta.content.replace(/\bwidth\s*=\s*320\b/,"width=320.1").replace(/\bwidth\s*=\s*device-width\b/,""))}}(document);
function decrementBadge() {
  var unread_count = parseInt($('li.notifications div.badge div.count').text());
  var new_count = (unread_count -= 1);
  setBadgeCount(new_count);
}

function setBadgeCount(number) {
  $('li.notifications div.badge div.count').html(number);
  $('section.content div.tooltip_popup.notifications h2 span').html(number);
}

function clearNotifications() {
  $('div.actions.mark_all').hide(0);
  $('li.notifications a span').removeClass('on');
  $('li.notifications div.badge').addClass('hide');
  setBadgeCount(0);

  $('p.caught_up').removeClass('hide');
}

function checkIfNotificationsEmpty(count) {
  if ( count == 0 ) {
    clearNotifications();
  } else {
    setBadgeCount(count);
  }
}

function checkHash(hash) {
  var sliced_hash = window.location.hash.slice(1);
  var key = sliced_hash.split('=');
  if (key[0] == hash) {
    return key
  } else {
    return false
  }
}

function checkVideoHash(w, h, video_title) {
  var check_hash = checkHash('play');
  if ( check_hash ) {
    openVideoPlayer(w, h, check_hash[1], video_title);
  }
}

function openVideoPlayer(w, h, video_key, video_title) {
  var video_width = Math.round((w * 0.90));
  var video_height = Math.round(video_width / 1.78);

  if ((video_height * 1.15) > h) {
    var video_height = Math.round(h * 0.85);
    var video_width = Math.round(video_height * 1.78);
  }

  var video_url = "/video/play?key={0}&width={1}&height={2}";
  var video_popup = $('#video_popup').kendoWindow({
    actions: [ "Close" ],
    content: kendo.format(video_url, video_key, video_width, video_height),
    modal: true,
    draggable: false,
    resizable: false,
    width: video_width,
    height: video_height,
    visible: false,
    pinned: true,
    animation: {
      open: {
        effects: "fade:in"
      },
      close: {
        effects: "fade:out"
      }
    },
    open: function() {
      $('body').addClass('blur');
    },
    close: function() {
      $('body').removeClass('blur');
      history.pushState(null, document.title, window.location.pathname + window.location.search);
    },
    deactivate: function() {
      $('#video_popup').html('');
    }
  }).data("kendoWindow");

  $('#video_popup').parent().parent().find('.k-window').css({ 'background-color':'#000', 'border-color':'#000' });
  $('#video_popup').parent().find('.k-window-content').css({ 'padding':'0', 'margin':'0', 'background-color':'#000', 'overflow':'hidden' });
  $('#video_popup').parent().find('.k-window-titlebar').css({ 'background-color':'#000', 'border-color':'#000', 'color':'#fff' });

  video_popup.title(video_title);
  video_popup.center().open();
}

function attachVideoPlayer(w, h) {
  $('body').on('click', 'a.play_trailer', function(e) {
    e.preventDefault();

    var video_key = $(this).attr('data-id');
    var video_title = $(this).attr('data-title');
    history.pushState(null, null, "#play=" + video_key);

    openVideoPlayer(w, h, video_key, video_title);
  });
};

function decodeEntities(encodedString) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
}

var accent_map = {
  'ẚ':'a','Á':'a','á':'a','À':'a','à':'a','Ă':'a','ă':'a','Ắ':'a','ắ':'a','Ằ':'a','ằ':'a','Ẵ':'a','ẵ':'a','Ẳ':'a','ẳ':'a','Â':'a','â':'a','Ấ':'a','ấ':'a','Ầ':'a','ầ':'a','Ẫ':'a','ẫ':'a','Ẩ':'a','ẩ':'a','Ǎ':'a','ǎ':'a','Å':'a','å':'a','Ǻ':'a','ǻ':'a','Ä':'a','ä':'a','Ǟ':'a','ǟ':'a','Ã':'a','ã':'a','Ȧ':'a','ȧ':'a','Ǡ':'a','ǡ':'a','Ą':'a','ą':'a','Ā':'a','ā':'a','Ả':'a','ả':'a','Ȁ':'a','ȁ':'a','Ȃ':'a','ȃ':'a','Ạ':'a','ạ':'a','Ặ':'a','ặ':'a','Ậ':'a','ậ':'a','Ḁ':'a','ḁ':'a','Ⱥ':'a','ⱥ':'a','Ǽ':'a','ǽ':'a','Ǣ':'a','ǣ':'a',
  'Ḃ':'b','ḃ':'b','Ḅ':'b','ḅ':'b','Ḇ':'b','ḇ':'b','Ƀ':'b','ƀ':'b','ᵬ':'b','Ɓ':'b','ɓ':'b','Ƃ':'b','ƃ':'b',
  'Ć':'c','ć':'c','Ĉ':'c','ĉ':'c','Č':'c','č':'c','Ċ':'c','ċ':'c','Ç':'c','ç':'c','Ḉ':'c','ḉ':'c','Ȼ':'c','ȼ':'c','Ƈ':'c','ƈ':'c','ɕ':'c',
  'Ď':'d','ď':'d','Ḋ':'d','ḋ':'d','Ḑ':'d','ḑ':'d','Ḍ':'d','ḍ':'d','Ḓ':'d','ḓ':'d','Ḏ':'d','ḏ':'d','Đ':'d','đ':'d','ᵭ':'d','Ɖ':'d','ɖ':'d','Ɗ':'d','ɗ':'d','Ƌ':'d','ƌ':'d','ȡ':'d','ð':'d',
  'É':'e','Ə':'e','Ǝ':'e','ǝ':'e','é':'e','È':'e','è':'e','Ĕ':'e','ĕ':'e','Ê':'e','ê':'e','Ế':'e','ế':'e','Ề':'e','ề':'e','Ễ':'e','ễ':'e','Ể':'e','ể':'e','Ě':'e','ě':'e','Ë':'e','ë':'e','Ẽ':'e','ẽ':'e','Ė':'e','ė':'e','Ȩ':'e','ȩ':'e','Ḝ':'e','ḝ':'e','Ę':'e','ę':'e','Ē':'e','ē':'e','Ḗ':'e','ḗ':'e','Ḕ':'e','ḕ':'e','Ẻ':'e','ẻ':'e','Ȅ':'e','ȅ':'e','Ȇ':'e','ȇ':'e','Ẹ':'e','ẹ':'e','Ệ':'e','ệ':'e','Ḙ':'e','ḙ':'e','Ḛ':'e','ḛ':'e','Ɇ':'e','ɇ':'e','ɚ':'e','ɝ':'e',
  'Ḟ':'f','ḟ':'f','ᵮ':'f','Ƒ':'f','ƒ':'f',
  'Ǵ':'g','ǵ':'g','Ğ':'g','ğ':'g','Ĝ':'g','ĝ':'g','Ǧ':'g','ǧ':'g','Ġ':'g','ġ':'g','Ģ':'g','ģ':'g','Ḡ':'g','ḡ':'g','Ǥ':'g','ǥ':'g','Ɠ':'g','ɠ':'g',
  'Ĥ':'h','ĥ':'h','Ȟ':'h','ȟ':'h','Ḧ':'h','ḧ':'h','Ḣ':'h','ḣ':'h','Ḩ':'h','ḩ':'h','Ḥ':'h','ḥ':'h','Ḫ':'h','ḫ':'h','H':'h','̱':'h','ẖ':'h','Ħ':'h','ħ':'h','Ⱨ':'h','ⱨ':'h',
  'Í':'i','í':'i','Ì':'i','ì':'i','Ĭ':'i','ĭ':'i','Î':'i','î':'i','Ǐ':'i','ǐ':'i','Ï':'i','ï':'i','Ḯ':'i','ḯ':'i','Ĩ':'i','ĩ':'i','İ':'i','i':'i','Į':'i','į':'i','Ī':'i','ī':'i','Ỉ':'i','ỉ':'i','Ȉ':'i','ȉ':'i','Ȋ':'i','ȋ':'i','Ị':'i','ị':'i','Ḭ':'i','ḭ':'i','I':'i','ı':'i','Ɨ':'i','ɨ':'i',
  'Ĵ':'j','ĵ':'j','J':'j','̌':'j','ǰ':'j','ȷ':'j','Ɉ':'j','ɉ':'j','ʝ':'j','ɟ':'j','ʄ':'j',
  'Ḱ':'k','ḱ':'k','Ǩ':'k','ǩ':'k','Ķ':'k','ķ':'k','Ḳ':'k','ḳ':'k','Ḵ':'k','ḵ':'k','Ƙ':'k','ƙ':'k','Ⱪ':'k','ⱪ':'k',
  'Ĺ':'l','ĺ':'l','Ľ':'l','ľ':'l','Ļ':'l','ļ':'l','Ḷ':'l','ḷ':'l','Ḹ':'l','ḹ':'l','Ḽ':'l','ḽ':'l','Ḻ':'l','ḻ':'l','Ł':'l','ł':'l','Ł':'l','̣':'l','ł':'l','̣':'l','Ŀ':'l','ŀ':'l','Ƚ':'l','ƚ':'l','Ⱡ':'l','ⱡ':'l','Ɫ':'l','ɫ':'l','ɬ':'l','ɭ':'l','ȴ':'l',
  'Ḿ':'m','ḿ':'m','Ṁ':'m','ṁ':'m','Ṃ':'m','ṃ':'m','ɱ':'m',
  'Ń':'n','ń':'n','Ǹ':'n','ǹ':'n','Ň':'n','ň':'n','Ñ':'n','ñ':'n','Ṅ':'n','ṅ':'n','Ņ':'n','ņ':'n','Ṇ':'n','ṇ':'n','Ṋ':'n','ṋ':'n','Ṉ':'n','ṉ':'n','Ɲ':'n','ɲ':'n','Ƞ':'n','ƞ':'n','ɳ':'n','ȵ':'n','N':'n','̈':'n','n':'n','̈':'n',
  'Ó':'o','ó':'o','Ò':'o','ò':'o','Ŏ':'o','ŏ':'o','Ô':'o','ô':'o','Ố':'o','ố':'o','Ồ':'o','ồ':'o','Ỗ':'o','ỗ':'o','Ổ':'o','ổ':'o','Ǒ':'o','ǒ':'o','Ö':'o','ö':'o','Ȫ':'o','ȫ':'o','Ő':'o','ő':'o','Õ':'o','õ':'o','Ṍ':'o','ṍ':'o','Ṏ':'o','ṏ':'o','Ȭ':'o','ȭ':'o','Ȯ':'o','ȯ':'o','Ȱ':'o','ȱ':'o','Ø':'o','ø':'o','Ǿ':'o','ǿ':'o','Ǫ':'o','ǫ':'o','Ǭ':'o','ǭ':'o','Ō':'o','ō':'o','Ṓ':'o','ṓ':'o','Ṑ':'o','ṑ':'o','Ỏ':'o','ỏ':'o','Ȍ':'o','ȍ':'o','Ȏ':'o','ȏ':'o','Ơ':'o','ơ':'o','Ớ':'o','ớ':'o','Ờ':'o','ờ':'o','Ỡ':'o','ỡ':'o','Ở':'o','ở':'o','Ợ':'o','ợ':'o','Ọ':'o','ọ':'o','Ộ':'o','ộ':'o','Ɵ':'o','ɵ':'o',
  'Ṕ':'p','ṕ':'p','Ṗ':'p','ṗ':'p','Ᵽ':'p','Ƥ':'p','ƥ':'p','P':'p','̃':'p','p':'p','̃':'p',
  'ʠ':'q','Ɋ':'q','ɋ':'q',
  'Ŕ':'r','ŕ':'r','Ř':'r','ř':'r','Ṙ':'r','ṙ':'r','Ŗ':'r','ŗ':'r','Ȑ':'r','ȑ':'r','Ȓ':'r','ȓ':'r','Ṛ':'r','ṛ':'r','Ṝ':'r','ṝ':'r','Ṟ':'r','ṟ':'r','Ɍ':'r','ɍ':'r','ᵲ':'r','ɼ':'r','Ɽ':'r','ɽ':'r','ɾ':'r','ᵳ':'r',
  'ß':'s','Ś':'s','ś':'s','Ṥ':'s','ṥ':'s','Ŝ':'s','ŝ':'s','Š':'s','š':'s','Ṧ':'s','ṧ':'s','Ṡ':'s','ṡ':'s','ẛ':'s','Ş':'s','ş':'s','Ṣ':'s','ṣ':'s','Ṩ':'s','ṩ':'s','Ș':'s','ș':'s','ʂ':'s','S':'s','̩':'s','s':'s','̩':'s',
  'Þ':'t','þ':'t','Ť':'t','ť':'t','T':'t','̈':'t','ẗ':'t','Ṫ':'t','ṫ':'t','Ţ':'t','ţ':'t','Ṭ':'t','ṭ':'t','Ț':'t','ț':'t','Ṱ':'t','ṱ':'t','Ṯ':'t','ṯ':'t','Ŧ':'t','ŧ':'t','Ⱦ':'t','ⱦ':'t','ᵵ':'t','ƫ':'t','Ƭ':'t','ƭ':'t','Ʈ':'t','ʈ':'t','ȶ':'t',
  'Ú':'u','ú':'u','Ù':'u','ù':'u','Ŭ':'u','ŭ':'u','Û':'u','û':'u','Ǔ':'u','ǔ':'u','Ů':'u','ů':'u','Ü':'u','ü':'u','Ǘ':'u','ǘ':'u','Ǜ':'u','ǜ':'u','Ǚ':'u','ǚ':'u','Ǖ':'u','ǖ':'u','Ű':'u','ű':'u','Ũ':'u','ũ':'u','Ṹ':'u','ṹ':'u','Ų':'u','ų':'u','Ū':'u','ū':'u','Ṻ':'u','ṻ':'u','Ủ':'u','ủ':'u','Ȕ':'u','ȕ':'u','Ȗ':'u','ȗ':'u','Ư':'u','ư':'u','Ứ':'u','ứ':'u','Ừ':'u','ừ':'u','Ữ':'u','ữ':'u','Ử':'u','ử':'u','Ự':'u','ự':'u','Ụ':'u','ụ':'u','Ṳ':'u','ṳ':'u','Ṷ':'u','ṷ':'u','Ṵ':'u','ṵ':'u','Ʉ':'u','ʉ':'u',
  'Ṽ':'v','ṽ':'v','Ṿ':'v','ṿ':'v','Ʋ':'v','ʋ':'v',
  'Ẃ':'w','ẃ':'w','Ẁ':'w','ẁ':'w','Ŵ':'w','ŵ':'w','W':'w','̊':'w','ẘ':'w','Ẅ':'w','ẅ':'w','Ẇ':'w','ẇ':'w','Ẉ':'w','ẉ':'w',
  'Ẍ':'x','ẍ':'x','Ẋ':'x','ẋ':'x',
  'Ý':'y','ý':'y','Ỳ':'y','ỳ':'y','Ŷ':'y','ŷ':'y','Y':'y','̊':'y','ẙ':'y','Ÿ':'y','ÿ':'y','Ỹ':'y','ỹ':'y','Ẏ':'y','ẏ':'y','Ȳ':'y','ȳ':'y','Ỷ':'y','ỷ':'y','Ỵ':'y','ỵ':'y','ʏ':'y','Ɏ':'y','ɏ':'y','Ƴ':'y','ƴ':'y',
  'Ź':'z','ź':'z','Ẑ':'z','ẑ':'z','Ž':'z','ž':'z','Ż':'z','ż':'z','Ẓ':'z','ẓ':'z','Ẕ':'z','ẕ':'z','Ƶ':'z','ƶ':'z','Ȥ':'z','ȥ':'z','ʐ':'z','ʑ':'z','Ⱬ':'z','ⱬ':'z','Ǯ':'z','ǯ':'z','ƺ':'z',
  "Ґ":"G","Ё":"YO","Є":"E","Ї":"YI","І":"I",
  "А":"A","Б":"B","В":"V","Г":"G",
  "Д":"D","Е":"E","Ж":"ZH","З":"Z","И":"I",
  "Й":"Y","К":"K","Л":"L","М":"M","Н":"N",
  "О":"O","П":"P","Р":"R","С":"S","Т":"T",
  "У":"U","Ф":"F","Х":"H","Ц":"TS","Ч":"CH",
  "Ш":"SH","Щ":"SCH","Ъ":"'","Ы":"Y","Ь":" ",
  "Э":"E","Ю":"YU","Я":"YA",
  "і":"i","ґ":"g","ё":"yo","№":"#","є":"e",
  "ї":"yi","а":"a","б":"b",
  "в":"v","г":"g","д":"d","е":"e","ж":"zh",
  "з":"z","и":"i","й":"y","к":"k","л":"l",
  "м":"m","н":"n","о":"o","п":"p","р":"r",
  "с":"s","т":"t","у":"u","ф":"f","х":"h",
  "ц":"ts","ч":"ch","ш":"sh","щ":"sch","ъ":"'",
  "ы":"y","ь":" ","э":"e","ю":"yu","я":"ya",
  "ЬЕ":"IE","ЬЁ":"IE","ье":"ie","ьё":"ie",
  'α':'a','ά':'a','Α':'a','Ά':'a','β':'v','Β':'v','γ':'g','Γ':'g','δ':'d','Δ':'d','ε':'e','έ':'e','Ε':'e','Έ':'e','ζ':'z','Ζ':'z','η':'h','ή':'h','Η':'h','Ή':'h','θ':'th','Θ':'th','ι':'I','ί':'I','Ι':'I','Ί':'I','κ':'k','Κ':'k','λ':'l','Λ':'l','μ':'m','Μ':'m','ν':'n','Ν':'n','ξ':'x','Ξ':'x','ο':'o','Ο':'o','ό':'o','Ό':'o','π':'p','Π':'p','ρ':'r','Ρ':'r','σ':'s','Σ':'s','ς':'s','τ':'t','Τ':'t','υ':'y','ύ':'y','Υ':'y','Ύ':'y','φ':'f','Φ':'f','χ':'ch','Χ':'ch','ψ':'ps','Ψ':'ps','ω':'w','ώ':'w','Ώ':'w','Ω':'w','αι':'ai','αί':'ai','άι':'ai','ΑΙ':'ai','ΑΊ':'ai','ΆΙ':'ai','οι':'oi','οί':'oi','όι':'oi','ΟΙ':'oi','ΟΊ':'oi','ΌΙ':'oi','ει':'ei','έι':'ei','ΕΙ':'ei','ΕΊ':'ei','ΈΙ':'ei','ου':'u','όυ':'u','ού':'u','ΟΥ':'u','ΌΥ':'u','ΟΎ':'u','αυ':'av','αύ':'av','άυ':'av','ΆΥ':'av','ΑΎ':'av','ΑΥ':'av','ευ':'ev','εύ':'ev','έυ':'ev','ΕΥ':'ev','ΕΎ':'ev','ΈΥ':'ev','ϊ':'i','ϋ':'i'
};

function accent_fold(s) {
  if (!s) { return ''; }
  var ret = '';
  for (var i=0; i<s.length; i++) {
    ret += accent_map[s.charAt(i)] || s.charAt(i);
  }
  return ret;
}

Date.prototype.stdTimezoneOffset = function() {
  var jan = new Date(this.getFullYear(), 0, 1);
  var jul = new Date(this.getFullYear(), 6, 1);
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.dst = function() {
  return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function attachLoggedInAccountTooltips(query_ids, account_username_url, account_id, add_fav_msg, add_watch_msg, remove_fav_msg, remove_watch_msg) {
  var favourite_ids = [];
  var watchlist_ids = [];
  var rated_ids = [];

  $.ajax({
    url: '/u/' + account_username_url + '/remote/account-list-check',
    method: 'POST',
    dataType: 'json',
    data: {
      list_type: { account_list_item: ['favourite', 'watchlist'], user_rating: true },
      ids: query_ids
    }
  }).done(function(response) {
    for (var i = 0; i < response.favourite_ids.length; i++) {
      $('#favourite_' + response.favourite_ids[i]).toggleClass('selected');
      $('#favourite_' + response.favourite_ids[i] + '_value').html(remove_fav_msg)
    }
    for (var i = 0; i < response.watchlist_ids.length; i++) {
      $('#watchlist_' + response.watchlist_ids[i]).toggleClass('selected');
      $('#watchlist_' + response.watchlist_ids[i] + '_value').html(remove_watch_msg)
    }
    for (var i = 0; i < response.rated_ids.length; i++) {
      $('#rating_' + response.rated_ids[i]).toggleClass('selected');
    }
  });
}

var attachLoggedInAccountFavouriteIds = {};
var attachLoggedInAccountWatchlistIds = {};
var attachLoggedInAccountRatedIds = {};

function attachLoggedInAccountTooltipsV2(query_ids, account_username_url) {
  $.ajax({
    url: '/u/' + account_username_url + '/remote/account-list-check',
    method: 'POST',
    dataType: 'json',
    data: {
      list_type: { account_list_item: ['favourite', 'watchlist'], user_rating: true },
      ids: query_ids
    }
  }).done(function(response) {
    for (var i = 0; i < response.favourite_ids.length; i++) {
      attachLoggedInAccountFavouriteIds[response.favourite_ids[i]] = true;
    }

    for (var i = 0; i < response.watchlist_ids.length; i++) {
      attachLoggedInAccountWatchlistIds[response.watchlist_ids[i]] = true;
    }

    for (var i = 0; i < response.rated_ids.length; i++) {
      attachLoggedInAccountRatedIds[response.rated_ids[i]] = true;
    }
  });
}

function attachFavouriteActions(query_ids, account_username_url, add_fav_msg, remove_fav_msg) {
  var favourite_ids = [];
  $.ajax({
    url: '/u/' + account_username_url + '/remote/account-list-check',
    method: 'POST',
    dataType: 'json',
    data: {
      list_type: { account_list_item: ['favourite'] },
      ids: query_ids
    }
  }).done(function(response) {
    for (var i = 0; i < response.favourite_ids.length; i++) {
      $('#favourite_' + response.favourite_ids[i]).toggleClass('selected');
      $('#favourite_' + response.favourite_ids[i] + '_value').html(remove_fav_msg)
    }
  });
}

var loggedInRatingTooltipLoaded = false;

function attachRatingTooltip(mobile) {
  if (loggedInRatingTooltipLoaded == false) {
    loggedInRatingTooltipLoaded = true;

    $("main").kendoTooltip({
      filter: 'a.list_item_rating',
      width: (mobile) ? 186 : 229,
      height: (mobile) ? 52 : 60,
      position: 'right',
      callout: true,
      showOn: 'click',
      autoHide: false,
      content: {
        url: '/'
      },
      requestStart: function(e) {
        e.options.url = kendo.format('{0}', e.target.data("rating-url"));
      },
      show: function() {
        $("div.k-tooltip-button").addClass('hide');
        this.popup.element.addClass("tmdb_theme flex");
      }
    }).data("kendoTooltip");
  }
}

var loggedInRatingTooltipWithDateLoaded = false;

function attachRatingTooltipWithDate(mobile) {
  if (loggedInRatingTooltipWithDateLoaded == false) {
    loggedInRatingTooltipWithDateLoaded = true;

    $("main").kendoTooltip({
      filter: 'a.list_item_rating_with_date',
      width: (mobile) ? 186 : 229,
      height: (mobile) ? 73 : 85,
      position: 'right',
      callout: true,
      showOn: 'click',
      autoHide: false,
      content: {
        url: '/'
      },
      requestStart: function(e) {
        e.options.url = kendo.format('{0}', e.target.data("rating-url"));
      },
      show: function() {
        $("div.k-tooltip-button").addClass('hide');
        this.popup.element.addClass("tmdb_theme flex");
      }
    }).data("kendoTooltip");
  }
}

var loggedInListTooltipLoaded = false;

function attachListTooltip(mobile) {
  if (loggedInListTooltipLoaded == false) {
    loggedInListTooltipLoaded = true;

    $("main").kendoTooltip({
      filter: 'a.add_media_to_list',
      showOn: 'click',
      autoHide: false,
      content: {
        url: '/',
        cache: true
      },
      width: (mobile) ? '100%' : 300,
      height: 109,
      position: (mobile ? 'bottom' : 'right'),
      requestStart: function(e) {
        e.options.url = kendo.format('{0}', e.target.attr("href"));
      },
      show: function(e) {
        $("div.k-tooltip-button").addClass('hide');
        this.popup.element.addClass("tmdb_theme_light");
      }
    });
  }
}

var loggedInTooltipActionsLoaded = false;

function enableLoggedInAccountTooltipActions(media_type, account_username_url, add_fav_msg, add_watch_msg, remove_fav_msg, remove_watch_msg) {
  if (loggedInTooltipActionsLoaded == false) {
    loggedInTooltipActionsLoaded = true;

    switch (media_type) {
      case null:
        var itemSelector = 'a.account_list_action, span.list_action';
        break;
      default:
        var itemSelector = 'span.list_action[data-media-type=' + media_type + ']';
    }

    $("body").on('click', itemSelector, function(e) {
      e.preventDefault();

      $.ajax({
        url: '/u/' + account_username_url + '/remote/toggle-list-item',
        type: 'PUT',
        data: {
          media_type: $(this).attr('data-media-type'),
          selected_object: this.id
        }
      }).fail(function() {
        showError('There was a problem marking this item.')
      }).done(function(response) {
        if (response.failure) {
          showError('There was a problem marking this item.')
        }

        if (response.success) {
          $('#' + response.list_type + '_' + response.media_id).toggleClass('selected');

          if (response.action == 'created' && response.list_type == 'watchlist') {
            $('#' + response.list_type + '_' + response.media_id + '_value').html(remove_watch_msg)
          } else if (response.action == 'created' && response.list_type == 'favourite') {
            $('#' + response.list_type + '_' + response.media_id + '_value').html(remove_fav_msg)
          } else if (response.action == 'destroyed' && response.list_type == 'watchlist') {
            $('#' + response.list_type + '_' + response.media_id + '_value').html(add_watch_msg)
          } else if (response.action == 'destroyed' && response.list_type == 'favourite') {
            $('#' + response.list_type + '_' + response.media_id + '_value').html(add_fav_msg)
          }
        }
      });
    });
  }
}

function attachAccountListTooltips() {
  $("div.meta").kendoTooltip({
    filter: "span.favourite, span.watchlist",
    width: 200,
    position: "top",
    content: function(e) {
      return $('#' + e.target.attr('id') + '_value').html();
    }
  }).data("kendoTooltip");
}

function attachMovieListPopularityTooltip() {
  $("div.meta").kendoTooltip({
    filter: "span.popularity_rank",
    position: "top",
    content: function(e) {
      return $('#' + e.target.attr('id') + '_value').html();
    },
    show: function(e) {
      $("div.k-tooltip-button").addClass('hide');
      this.popup.element.addClass("tmdb_theme");
    }
  });
}

function changeSearchTabs(media_type) {
  $('div.search_results').addClass('hide');
  $('div.' + media_type).removeClass('hide');
  $('section.search_results ul li a').removeClass('active');
  $('#' + media_type).addClass('active');
}

function attachViewStyleTooltips() {
  $("div.right").kendoTooltip({
    filter: "a.view_style",
    width: 'auto',
    position: "top"
  }).data("kendoTooltip");
}

function getImageWindowDimensions(inner_height, aspect_ratio) {
  var poster_height = Math.round(inner_height * 0.80);
  var poster_width = Math.round(poster_height * aspect_ratio);
  var window_width = (poster_width + 360);

  return [window_width, poster_width, poster_height]
}

function attachScroller(distance, scroller, hasScrolled, scrollLeft) {
  if ( $(scroller).hasClass('should_fade') ) {
    if ( (scrollLeft < distance) ) {
      $(scroller).removeClass('is_hidden').addClass('is_fading');
    }

    if ( (scrollLeft > distance) && ($(scroller).hasClass('is_fading')) ) {
      $(scroller).removeClass('is_fading').addClass('is_hidden');
    }
  }
}

function initializeScroller(mobile, scroller) {
  var hasScrolled = false;
  var scrollLeft = 0;
  var itemWidth = 0;
  var parentWidth = $(scroller).parent().outerWidth();
  var childScroller = $(scroller).find('.scroller');

  childScroller.children().each(function() {
    itemWidth += $(this).outerWidth();
  });

  var distance;
  if (mobile) {
    distance = 30;
  } else {
    distance = 50;
  }

  if (itemWidth < (parentWidth + distance)) {
    $(scroller).removeClass('should_fade');
  }

  var targetScroll;
  childScroller.scroll(function(e) {
    hasScrolled = true;
    if (targetScroll == null) {
      targetScroll = $(e.target);
    }
    scrollLeft = targetScroll.scrollLeft();
  });

  setInterval(function() {
    if (hasScrolled) {
      attachScroller(distance, scroller, hasScrolled, scrollLeft);
      hasScrolled = false;
    }
  }, 250);
}

function whichTransitionEvent() {
  var t, el = document.createElement("fakeelement");

  var transitions = {
    "transition": "transitionend",
    "OTransition": "oTransitionEnd",
    "MozTransition": "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

function whichAnimationEvent() {
  var t, el = document.createElement("fakeelement");

  var animations = {
    "animation": "animationend",
    "OAnimation": "oAnimationEnd",
    "MozAnimation": "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

function activatePageLoader() {
  NProgress.start();
}

function deactivatePageLoader() {
  NProgress.done();
}

var selectedOptionsTooltip;
function emptyOptionsTooltip() {
  selectedOptionsTooltip = { object_id: null, media_id: null, media_type: null, action: null };
}
emptyOptionsTooltip();

function attachOptionsTooltips(logged_in, div_id) {
  $(div_id + ' div.options').kendoTooltip({
    autoHide: false,
    filter: 'a',
    showOn: 'click',
    callout: false,
    content: function(e) {
      return $("#options_tooltip").html();
    },
    show: function(e) {
      $('div.hover.' + media_id).addClass('on');
      $("div.k-tooltip-button").addClass('hide');
      this.popup.element.addClass("tmdb_theme_white no_pad");

      var media_id = e.sender.element.data('id');
      var object_id = e.sender.element.data('object-id');
      var media_type = e.sender.element.data('media-type');

      selectedOptionsTooltip.media_id = media_id;
      selectedOptionsTooltip.media_type = media_type;
      selectedOptionsTooltip.object_id = object_id;

      if (logged_in) {
        if ( attachLoggedInAccountFavouriteIds[object_id] ) {
          $(this.popup.element).find('a[data-action=favourite]').addClass('selected');
        } else {
          $(this.popup.element).find('a[data-action=favourite]').removeClass('selected');
        }

        if ( attachLoggedInAccountWatchlistIds[object_id] ) {
          $(this.popup.element).find('a[data-action=watchlist]').addClass('selected');
        } else {
          $(this.popup.element).find('a[data-action=watchlist]').removeClass('selected');
        }

        if ( attachLoggedInAccountRatedIds[object_id] ) {
          $(this.popup.element).find('a[data-action=rate]').addClass('selected');
        } else {
          $(this.popup.element).find('a[data-action=rate]').removeClass('selected');
        }
      }
    },
    hide: function(e) {
      var media_id = e.sender.element.data('id');
      $('div.hover.' + media_id).removeClass('on');
      emptyOptionsTooltip();
    }
  }).data("kendoTooltip");
}

function getPageAccountStatus(username, div_id) {
  var divs = $(div_id + ' div.options');
  var object_ids = $.map(divs, function( val, i ) {
    return $(val).data('object-id')
  });

  attachLoggedInAccountTooltipsV2(object_ids, username);
};
!function(n,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():n.NProgress=e()}(this,function(){var n,e,t={version:"0.2.0"},r=t.settings={minimum:.08,easing:"linear",positionUsing:"",speed:200,trickle:!0,trickleSpeed:200,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(n,e,t){return n<e?e:n>t?t:n}function s(n){return 100*(-1+n)}t.configure=function(n){var e,t;for(e in n)void 0!==(t=n[e])&&n.hasOwnProperty(e)&&(r[e]=t);return this},t.status=null,t.set=function(n){var e=t.isStarted();n=i(n,r.minimum,1),t.status=1===n?null:n;var u=t.render(!e),c=u.querySelector(r.barSelector),l=r.speed,f=r.easing;return u.offsetWidth,o(function(e){""===r.positionUsing&&(r.positionUsing=t.getPositioningCSS()),a(c,function(n,e,t){var i;i="translate3d"===r.positionUsing?{transform:"translate3d("+s(n)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+s(n)+"%,0)"}:{"margin-left":s(n)+"%"};return i.transition="all "+e+"ms "+t,i}(n,l,f)),1===n?(a(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){a(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){t.remove(),e()},l)},l)):setTimeout(e,l)}),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout(function(){t.status&&(t.trickle(),n())},r.trickleSpeed)};return r.trickle&&n(),this},t.done=function(n){return n||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(n){var e=t.status;return e?e>1?void 0:("number"!=typeof n&&(n=e>=0&&e<.2?.1:e>=.2&&e<.5?.04:e>=.5&&e<.8?.02:e>=.8&&e<.99?.005:0),e=i(e+n,0,.994),t.set(e)):t.start()},t.trickle=function(){return t.inc()},n=0,e=0,t.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&t.start(),n++,e++,r.always(function(){0==--e?(n=0,t.done()):t.set((n-e)/n)}),this):this},t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=r.template;var i,o=e.querySelector(r.barSelector),u=n?"-100":s(t.status||0),l=document.querySelector(r.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),r.showSpinner||(i=e.querySelector(r.spinnerSelector))&&d(i),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(e),e},t.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(r.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&d(n)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var o=function(){var n=[];function e(){var t=n.shift();t&&t(e)}return function(t){n.push(t),1==n.length&&e()}}(),a=function(){var n=["Webkit","O","Moz","ms"],e={};function t(t){return t=t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()}),e[t]||(e[t]=function(e){var t=document.body.style;if(e in t)return e;for(var r,i=n.length,s=e.charAt(0).toUpperCase()+e.slice(1);i--;)if((r=n[i]+s)in t)return r;return e}(t))}function r(n,e,r){e=t(e),n.style[e]=r}return function(n,e){var t,i,s=arguments;if(2==s.length)for(t in e)void 0!==(i=e[t])&&e.hasOwnProperty(t)&&r(n,t,i);else r(n,s[1],s[2])}}();function u(n,e){return("string"==typeof n?n:f(n)).indexOf(" "+e+" ")>=0}function c(n,e){var t=f(n),r=t+e;u(t,e)||(n.className=r.substring(1))}function l(n,e){var t,r=f(n);u(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function f(n){return(" "+(n&&n.className||"")+" ").replace(/\s+/gi," ")}function d(n){n&&n.parentNode&&n.parentNode.removeChild(n)}return t});













