/*
 * Copyright 2009-2018 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
aria.core.DownloadMgr.loadFileContent("aria/utils/dragdrop/IDrag.js","var e=require(\"../../Aria\");module.exports=e.interfaceDefinition({$classpath:\"aria.utils.dragdrop.IDrag\",$interface:{start:{$type:\"Function\"},move:{$type:\"Function\"},end:{$type:\"Function\"}},$events:{dragstart:\"\",move:\"\",dragend:\"\",beforeresize:\"\",resize:\"\",resizeend:\"\"}});");
aria.core.DownloadMgr.loadFileContent("aria/utils/dragdrop/Drag.js","var e=require(\"../../Aria\"),t=require(\"../Dom\"),i=require(\"../Mouse\"),r=require(\"../Type\"),a=require(\"./IDrag\"),s=require(\"../Json\"),n=e.$frameworkWindow.document;!function(){function o(e,t,i){e&&e.setAttribute(t,i)}function l(e,t){e&&e.removeAttribute(t)}var c=0;module.exports=e.classDefinition({$classpath:\"aria.utils.dragdrop.Drag\",$implements:[a],$statics:{INVALID_ATTRIBUTE:\"Invalid attribute '%1' in '%2'\"},$constructor:function(t,a){a=a||{},this.id=null,this.element=null;var s=r;s.isString(t)?this.id=t:s.isHTMLElement(t)?(this.element=t,this.id=this.element.id):(this.$logError(this.INVALID_ATTRIBUTE,[\"id\",\"constructor\"]),this.start=e.empty,this.move=e.empty,this.end=e.empty),this.params=a,this.handle=a.handle,this.cursor=a.cursor,this.originalCursor=null,this.proxy=null,this.posX=null,this.posY=null,this._boundary=null,this._horizontal=a.axis&&\"x\"==a.axis,this._vertical=a.axis&&\"y\"==a.axis,this._elementInitialPosition=null,this._mouseInitialPosition=null,this._movableInitialGeometry=null,this._movableGeometry=null,this._baseMovableOffset=null,this.listenerId=i.listen(\"drag\",this),this.dragOverIFrame=void 0!==a.dragOverIFrame&&a.dragOverIFrame,this.overlay=null,o(this.getDraggable(!0),i.DRAGGABLE_ATTRIBUTE,this.listenerId),this.getMovable(!1)},$destructor:function(){var e=this.getDraggable();e&&(l(e,i.DRAGGABLE_ATTRIBUTE),e.style.cursor=this.originalCursor,e=null),this.proxy&&this.proxy.overlay&&this.proxy.$dispose(),this.overlay&&(this.overlay.$dispose(),this.overlay=null),this.element=null,this.handle=null,this.cursor=null,this.proxy=null,i.stopListen(\"drag\",this.listenerId)},$prototype:{getDraggable:function(e){var i,a=this.handle,s=this.cursor;if(a){var n=r;n.isString(a)&&(a=t.getElementById(a)),n.isHTMLElement(a)?(this.handle=a,i=a):e===!0&&this.$logError(this.INVALID_ATTRIBUTE,[\"handle\",\"params\"])}else i=this.getElement(e);if(i)return s&&(null==this.originalCursor&&(this.originalCursor=i.style.cursor),i.style.cursor=s),i},getElement:function(e){var i=this.element;if(!i){if(i=t.getElementById(this.id),!i)return void(e===!0&&this.$logError(this.INVALID_ATTRIBUTE,[\"id\",\"constructor\"]));this.element=i}return i},_setElementStyle:function(e){var i=t.getOffset(e);this._elementInitialPosition=i;var r=e.style;r.position=\"absolute\",r.left=i.left+\"px\",r.top=i.top+\"px\"},getMovable:function(t){var i=this.proxy;if(i)return i.overlay;var r=this.params,a=r.proxy;if(a){var s=\"aria.utils.overlay.\"+a.type;return e.load({classes:[s],oncomplete:t===!1?null:{fn:this._createProxy,scope:this,args:{classpath:s,cfg:a.cfg}},onerror:{fn:function(){this.$logError(this.INVALID_ATTRIBUTE,[\"proxy\",\"params\"])},scope:this,override:!0}}),t===!1||this.proxy||(this.proxy={}),this.proxy?this.proxy.overlay:this.proxy}return this.getElement()},_createProxy:function(t){var i=e.getClassRef(t.classpath);try{var r=t.cfg||{};r.id=this.id||\"proxy_\"+c,c++,this.proxy=new i(this.getElement(),r)}catch(a){this.$logError(this.INVALID_ATTRIBUTE,[\"proxy\",\"params\"])}},start:function(i){this.posX=i.x,this.posY=i.y,this._mouseInitialPosition={left:i.x,top:i.y};var r=this.getElement(!0),a=t;r.onselectstart=e.returnFalse,this._setElementStyle(r),this._setBoundary();var o=this.getMovable();if(o){o.onselectstart=e.returnFalse,this.dragOverIFrame&&(this.overlay=new aria.utils.overlay.Overlay(n.body,{className:\" \"})),this._movableInitialGeometry=a.getGeometry(o),this._movableGeometry=s.copy(this._movableInitialGeometry);var l=a.getOffset(o);this._baseMovableOffset={left:this._movableGeometry.x-l.left,top:this._movableGeometry.y-l.top},this.$raiseEvent(\"dragstart\")}},move:function(e){var i=this.getMovable(),r=t;if(i&&i.style){var a=s.copy(this._movableGeometry),n=this._mouseInitialPosition,o=this._movableInitialGeometry;this._vertical||(a.x=o.x+e.clientX-n.left),this._horizontal||(a.y=o.y+e.clientY-n.top);var l=this._boundary?r.fitInside(a,this._boundary):{top:a.y,left:a.x};i.style.top=l.top-this._baseMovableOffset.top+\"px\",i.style.left=l.left-this._baseMovableOffset.left+\"px\",a.y=l.top,a.x=l.left,this.posY=n.top+a.y-o.y,this.posX=n.left+a.x-o.x,this._movableGeometry=a,this.$raiseEvent(\"move\")}},end:function(){var t=this.getElement();t.onselectstart=e.returnTrue,this.overlay&&(this.overlay.$dispose(),this.overlay=null),this.proxy&&this.proxy.overlay&&(t.style.top=this._elementInitialPosition.top+this._movableGeometry.y-this._movableInitialGeometry.y+\"px\",t.style.left=this._elementInitialPosition.left+this._movableGeometry.x-this._movableInitialGeometry.x+\"px\",this.proxy.$dispose(),this.proxy=null),this.$raiseEvent(\"dragend\")},_setBoundary:function(){var e=this.params.constrainTo,i=t;return e&&e!==i.VIEWPORT?(r.isString(e)&&(e=i.getElementById(e)),e?void(this._boundary=t.getClientGeometry(e)):(this._boundary=null,void this.$logError(this.INVALID_ATTRIBUTE,[\"constrainTo\",\"params\"]))):void(this._boundary=e)}}})}();");
aria.core.DownloadMgr.loadFileContent("aria/utils/dragdrop/DragDropBean.js","var e=require(\"../../Aria\"),t=require(\"../../core/JsonTypes\");module.exports=e.beanDefinitions({$package:\"aria.utils.dragdrop.DragDropBean\",$namespaces:{json:t},$beans:{DragCfg:{$type:\"json:Object\",$properties:{handle:{$type:\"json:MultiTypes\",$contentTypes:[{$type:\"json:String\"},{$type:\"json:ObjectRef\"}]},cursor:{$type:\"json:String\"},proxy:{$type:\"ProxyCfg\"},constrainTo:{$type:\"json:MultiTypes\",$contentTypes:[{$type:\"json:String\"},{$type:\"json:String\"},{$type:\"json:ObjectRef\"}]},axis:{$type:\"json:Enum\",$enumValues:[\"x\",\"y\"]}}},ProxyCfg:{$type:\"json:Object\",$properties:{type:{$type:\"json:Enum\",$enumValues:[\"Overlay\",\"CloneOverlay\"]},cfg:{$type:\"json:ObjectRef\"}}}}});");
aria.core.DownloadMgr.loadFileContent("aria/utils/resize/Resize.js","var e=require(\"../../Aria\"),t=require(\"../Dom\"),i=require(\"../String\"),r=require(\"../Json\"),a=require(\"../dragdrop/Drag\");module.exports=e.classDefinition({$classpath:\"aria.utils.resize.Resize\",$extends:a,$constructor:function(e,i){i=i||{};var r={type:\"Overlay\"},a=e,s=this;this.minHeight=100,this.minWidth=100,this.$Drag.constructor.call(s,a,{handle:i.handle,cursor:i.cursor,proxy:r,axis:i.axis,constrainTo:i.constrainTo||t.VIEWPORT})},$destructor:function(){this.$Drag.$destructor.call(this),this.minHeight=null,this.minWidth=null},$prototype:{start:function(i){this.posX=i.x,this.posY=i.y,this._mouseInitialPosition={left:i.x,top:i.y};var a,s=this.getElement(!0),n=e.$window.document;s.onselectstart=e.returnFalse,n.onselectstart=e.returnFalse,this._setElementStyle(s),this._setBoundary(),a=this.getMovable(),a&&(a.onselectstart=e.returnFalse,this._movableInitialGeometry=t.getGeometry(a),this._movableGeometry=r.copy(this._movableInitialGeometry),this._baseMovableOffset={left:this._movableGeometry.x-a.offsetLeft,top:this._movableGeometry.y-a.offsetTop,height:this._movableGeometry.height-a.offsetHeight,width:this._movableGeometry.width-a.offsetWidth},this.$raiseEvent(\"beforeresize\"))},move:function(e){var t=this.getMovable();if(t&&t.style){var i,a,s=this._mouseInitialPosition,n=this._movableInitialGeometry,o=this._vertical?0:e.clientX-s.left,l=this._horizontal?0:e.clientY-s.top,c=r.copy(n);c=this._resizeWitHandlers(c,this.cursor,o,l);var u=/sw-resize|nw-resize|w-resize/.test(this.cursor),h=/nw-resize|ne-resize|n-resize/.test(this.cursor),p=c.width<this.minWidth,d=c.height<this.minHeight;p&&(c.width=this.minWidth),d&&(c.height=this.minHeight),i=this._movableGeometry.x+this._movableGeometry.width,a=this._movableGeometry.y+this._movableGeometry.height,p&&u&&(c.x=i-this.minWidth),d&&h&&(c.y=a-this.minHeight),t.style.cursor=this.cursor,t.style.top=c.y-this._baseMovableOffset.top+\"px\",t.style.left=c.x-this._baseMovableOffset.left+\"px\",t.style.height=c.height-this._baseMovableOffset.height+\"px\",t.style.width=c.width-this._baseMovableOffset.width+\"px\",this.posY=s.top+c.y-n.y,this.posX=s.left+c.x-n.x,this._movableGeometry=c,this.$raiseEvent(\"resize\")}},end:function(){var t=this.getElement(),i=e.$window.document;i.onselectstart=e.returnTrue,t.onselectstart=e.returnTrue,this.proxy&&this.proxy.overlay&&(t.style.top=this._elementInitialPosition.top+this._movableGeometry.y-this._movableInitialGeometry.y+\"px\",t.style.left=this._elementInitialPosition.left+this._movableGeometry.x-this._movableInitialGeometry.x+\"px\",t.style.height=this._elementInitialPosition.height+this._movableGeometry.height-this._movableInitialGeometry.height+\"px\",t.style.width=this._elementInitialPosition.width+this._movableGeometry.width-this._movableInitialGeometry.width+\"px\",this.proxy.$dispose(),this.proxy=null),this.$raiseEvent(\"resizeend\")},_resizeWitHandlers:function(e,t,a,s){var e=r.copy(e),n=i.trim;t=n(t);var o=e.width>=this.minWidth?a:0,l=e.height>=this.minHeight?s:0;switch(t){case\"n-resize\":e.y+=l,e.height-=l,e=this._fitResizeBoundary(e);break;case\"ne-resize\":e.y+=l,e.height-=l,e.width+=o,e=this._fitResizeBoundary(e);break;case\"nw-resize\":e.x+=o,e.y+=l,e.height-=l,e.width-=o,e=this._fitResizeBoundary(e);break;case\"s-resize\":e.height+=l,e=this._fitResizeBoundary(e);break;case\"se-resize\":e.height+=l,e.width+=o,e=this._fitResizeBoundary(e);break;case\"sw-resize\":e.x+=o,e.height+=l,e.width-=o,e=this._fitResizeBoundary(e);break;case\"e-resize\":e.width+=o,e=this._fitResizeBoundary(e);break;case\"w-resize\":e.x+=o,e.width-=o,e=this._fitResizeBoundary(e)}return e},_fitResizeBoundary:function(e){var i=this._boundary;if(i){var r=i;if(i==t.VIEWPORT){var a=t._getViewportSize();r={x:0,y:0,width:a.width,height:a.height}}var s=e.x-r.x,n=e.y-r.y,o=r.x+r.width-e.x-e.width,l=r.y+r.height-e.y-e.height;s<0&&(e.x-=s,e.width+=s),n<0&&(e.y-=n,e.height+=n),o<0&&(e.width+=o),l<0&&(e.height+=l)}return e},_setElementStyle:function(e){var i=t.getOffset(e);i.width=e.offsetWidth,i.height=e.offsetHeight;var r=e.style;this._elementInitialPosition=i,r.position=\"absolute\",r.left=i.left+\"px\",r.top=i.top+\"px\",r.height=i.height+\"px\",r.width=i.width+\"px\"}}});");