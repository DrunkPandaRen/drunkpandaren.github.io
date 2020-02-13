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
aria.core.DownloadMgr.loadFileContent("aria/html/beans/ElementCfg.js","var e=require(\"../../Aria\"),t=require(\"../../core/JsonTypes\"),i=require(\"../../templates/CfgBeans\");module.exports=e.beanDefinitions({$package:\"aria.html.beans.ElementCfg\",$namespaces:{json:t,html:i},$beans:{Properties:{$type:\"json:Object\",$properties:{id:{$type:\"json:String\",$mandatory:!1},tagName:{$type:\"json:String\",$sample:\"div\",$mandatory:!0},attributes:{$type:\"html:HtmlAttribute\",$default:{}},bind:{$type:\"json:Object\",$default:{},$restricted:!1},on:{$type:\"json:Object\",$default:{},$restricted:!1}},$restricted:!1}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/beans/InputElementCfg.js","var e=require(\"../../Aria\"),t=require(\"./ElementCfg\"),i=require(\"../../widgetLibs/CommonBeans\");module.exports=e.beanDefinitions({$package:\"aria.html.beans.InputElementCfg\",$namespaces:{base:t,common:i},$beans:{Properties:{$type:\"base:Properties\",$properties:{bind:{$type:\"base:Properties.bind\",$properties:{disabled:{$type:\"common:BindingRef\"}}}}}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/beans/TextInputCfg.js","var e=require(\"../../Aria\"),t=require(\"../../core/JsonTypes\"),i=require(\"./ElementCfg\"),r=require(\"./InputElementCfg\"),a=require(\"../../widgetLibs/CommonBeans\");module.exports=e.beanDefinitions({$package:\"aria.html.beans.TextInputCfg\",$namespaces:{json:t,base:i,baseInput:r,common:a},$beans:{Properties:{$type:\"base:Properties\",$properties:{tagName:{$type:\"base:Properties.tagName\",$mandatory:!0},bind:{$type:\"baseInput:Properties.bind\",$properties:{value:{$type:\"common:BindingRef\"}}},on:{$type:\"base:Properties.on\",$properties:{type:{$type:\"common:Callback\"}}},autoselect:{$type:\"json:Boolean\",$default:!1}}}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/beans/AutoCompleteCfg.js","var e=require(\"../../Aria\"),t=require(\"../../core/JsonTypes\"),i=require(\"./TextInputCfg\");module.exports=e.beanDefinitions({$package:\"aria.html.beans.AutoCompleteCfg\",$namespaces:{json:t,input:i},$beans:{Properties:{$type:\"input:Properties\",$properties:{bind:{$type:\"input:Properties.bind\",$properties:{suggestions:{$type:\"json:Array\",$contentType:{$type:\"json:Object\"},$default:[]}}}}}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/beans/CheckBoxCfg.js","var e=require(\"../../Aria\"),t=require(\"./InputElementCfg\"),i=require(\"../../widgetLibs/CommonBeans\");module.exports=e.beanDefinitions({$package:\"aria.html.beans.CheckBoxCfg\",$namespaces:{base:t,common:i},$beans:{Properties:{$type:\"base:Properties\",$properties:{bind:{$type:\"base:Properties.bind\",$properties:{checked:{$type:\"common:BindingRef\"}}}}}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/beans/RadioButtonCfg.js","var e=require(\"../../Aria\"),t=require(\"../../core/JsonTypes\"),i=require(\"./InputElementCfg\"),r=require(\"../../widgetLibs/CommonBeans\");module.exports=e.beanDefinitions({$package:\"aria.html.beans.RadioButtonCfg\",$namespaces:{json:t,base:i,common:r},$beans:{Properties:{$type:\"base:Properties\",$properties:{value:{$type:\"json:String\"},bind:{$type:\"base:Properties.$properties.bind\",$properties:{selectedValue:{$type:\"common:BindingRef\"}}}}}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/beans/SelectCfg.js","var e=require(\"../../Aria\"),t=require(\"../../core/JsonTypes\"),i=require(\"./ElementCfg\"),r=require(\"../../widgetLibs/CommonBeans\"),a=require(\"../../templates/CfgBeans\");module.exports=e.beanDefinitions({$package:\"aria.html.beans.SelectCfg\",$namespaces:{json:t,base:i,common:r,html:a},$beans:{Properties:{$type:\"base:Properties\",$properties:{options:{$type:\"json:Array\",$contentType:{$type:\"json:MultiTypes\",$contentTypes:[{$type:\"ListItemCfg\"},{$type:\"json:String\"}]},$default:[]},bind:{$type:\"base:Properties.bind\",$properties:{selectedIndex:{$type:\"common:BindingRef\"},value:{$type:\"common:BindingRef\"},disabled:{$type:\"common:BindingRef\"}}}}},ListItemCfg:{$type:\"json:Object\",$restricted:!1,$properties:{value:{$type:\"json:MultiTypes\",$mandatory:!1,$contentTypes:[{$type:\"json:Integer\"},{$type:\"json:String\"}]},label:{$type:\"json:String\",$mandatory:!0},attributes:{$type:\"html:HtmlAttribute\"}}}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/beans/TemplateCfg.js","var e=require(\"../../Aria\"),t=require(\"../../core/JsonTypes\"),i=require(\"../../templates/CfgBeans\");module.exports=e.beanDefinitions({$package:\"aria.html.beans.TemplateCfg\",$namespaces:{json:t,html:i},$beans:{Properties:{$type:\"json:Object\",$properties:{attributes:{$type:\"html:HtmlAttribute\"},id:{$type:\"json:String\",$mandatory:!1},classpath:{$type:\"json:PackageName\",$mandatory:!0},type:{$type:\"json:String\",$default:\"div\"},data:{$type:\"json:ObjectRef\",$mandatory:!1},moduleCtrl:{$type:\"html:ModuleCtrl\",$mandatory:!1},args:{$type:\"json:Array\",$contentType:{$type:\"json:MultiTypes\"},$default:[]},baseTabIndex:{$type:\"json:Integer\",$default:0}}}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/beans/TextAreaCfg.js","var e=require(\"../../Aria\"),t=require(\"../../core/JsonTypes\"),i=require(\"./ElementCfg\"),r=require(\"./InputElementCfg\"),a=require(\"../../widgetLibs/CommonBeans\");module.exports=e.beanDefinitions({$package:\"aria.html.beans.TextAreaCfg\",$namespaces:{json:t,base:i,baseInput:r,common:a},$beans:{Properties:{$type:\"base:Properties\",$properties:{tagName:{$type:\"base:Properties.tagName\",$mandatory:!0},bind:{$type:\"baseInput:Properties.bind\",$properties:{value:{$type:\"common:BindingRef\"}}},on:{$type:\"base:Properties.on\",$properties:{type:{$type:\"common:Callback\"}}},autoselect:{$type:\"json:Boolean\",$default:!1}}}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/DisabledTrait.js","var e=require(\"../Aria\"),t=require(\"../utils/Type\"),i=require(\"../utils/Json\");module.exports=e.classDefinition({$classpath:\"aria.html.DisabledTrait\",$prototype:{initDisabledWidgetAttribute:function(){var e=this._cfg.bind,r=e.disabled;if(r){var a=this._transform(r.transform,r.inside[r.to],\"toWidget\");t.isBoolean(a)?this._domElt.disabled=a:i.setValue(r.inside,r.to,this._domElt.disabled)}},onDisabledBind:function(e,t,i){this._domElt&&\"disabled\"===e&&(this._domElt.disabled=t)}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/Element.js","var e=require(\"../Aria\");require(\"./beans/ElementCfg\");var t=require(\"../core/JsonValidator\"),i=require(\"../utils/Html\"),r=require(\"../utils/Delegate\"),a=require(\"../templates/DomEventWrapper\"),n=require(\"../utils/Dom\"),s=require(\"../utils/Type\"),o=require(\"../widgetLibs/BindableWidget\");!function(){function l(t){t.writeMarkup=e.empty,t.writeMarkupBegin=e.empty,t.writeMarkupEnd=e.empty,t.initWidget=e.empty}module.exports=e.classDefinition({$classpath:\"aria.html.Element\",$extends:o,$constructor:function(e,i,r){this.tagName&&(e.tagName=this.tagName);var a=t.normalize({json:e,beanName:this.$cfgBean});if(this.$BindableWidget.constructor.apply(this,arguments),!a)return l(this);var n=e.id;this._id=n?this._context.$getId(n):this._createDynamicId(),this._domElt=null,this.__delegateId=null,this.__delegateFallbackEvents=null,this._registerBindings(),this._normalizeCallbacks()},$destructor:function(){this.__delegateId&&(r.remove(this.__delegateId),this.__delegateId=null,this.__delegateFallbackEvents=null),this.$BindableWidget.$destructor.call(this),this._domElt=null},$prototype:{tagName:null,$cfgBean:\"aria.html.beans.ElementCfg.Properties\",_normalizeCallbacks:function(){var e,t=this._cfg.on,i=!1,a=r,n=[];for(var o in t)if(t.hasOwnProperty(o)){i=!0,a.isDelegated(o)||n.push(o),e=t[o],s.isArray(e)||(e=[e]);for(var l=0,u=e.length;l<u;l++)e[l]=this.$normCallback.call(this._context._tpl,e[l]);t[o]=e}i&&(this.__delegateId=a.add({fn:this._delegate,scope:this}),this.__delegateFallbackEvents=n)},_delegate:function(e){var t,i,r=e.type,n=this._cfg.on[r];if(n){for(var s=new a(e),o=0,l=n.length;o<l&&(t=n[o],i=t.fn.call(t.scope,s,t.args),i!==!1);o++);return s.$dispose(),i}},writeMarkup:function(e){this._openTag(e),e.write(\"/>\")},writeMarkupBegin:function(e){this._openTag(e),e.write(\">\")},writeMarkupEnd:function(e){e.write(\"</\"+this._cfg.tagName+\">\")},onbind:e.empty,initWidget:function(){this._domElt=n.getElementById(this._id)},getDom:function(){return this._domElt},_openTag:function(e){var t=this._cfg,a=i.buildAttributeList(t.attributes),n=[\"<\",t.tagName,\" id='\",this._id,\"' \"];a&&n.push(a,\" \");var s=this.__delegateId;if(s){var o=r;n.push(o.getMarkup(s),\" \");for(var l=this.__delegateFallbackEvents,u=0,c=l.length;u<c;u++)n.push(o.getFallbackMarkup(l[u],s,!1),\" \")}e.write(n.join(\"\"))},_notifyDataChange:function(e,t){this._cfg&&this.onbind(t,this._transform(this._cfg.bind[t].transform,e.newValue,\"toWidget\"),e.oldValue)},_chainListener:function(e,t,i,r){var a=e[t]||[];s.isArray(a)||(a=[a]),r?a.push(i):a.splice(0,0,i),e[t]=a},getId:function(){return this._cfg.id}}})}();");
aria.core.DownloadMgr.loadFileContent("aria/html/InputElement.js","var e=require(\"../Aria\"),t=require(\"./DisabledTrait\"),i=require(\"./Element\");!function(){module.exports=e.classDefinition({$classpath:\"aria.html.InputElement\",$extends:i,$statics:{INVALID_USAGE:\"Widget %1 can only be used as a %2.\",BINDING_NEEDED:\"The property '%2' from Widget %1 should be bound to a data model\"},$constructor:function(e,t,i,r){e.attributes=e.attributes||{},e.attributes.type=r,this.$Element.constructor.call(this,e,t,i)},$prototype:{tagName:\"input\",$cfgBean:\"aria.html.beans.InputElementCfg.Properties\",$init:function(e){var i=t.prototype;for(var r in i)i.hasOwnProperty(r)&&!e.hasOwnProperty(r)&&(e[r]=i[r])},writeMarkupBegin:function(e){this.$logError(this.INVALID_USAGE,[this.$class,\"container\"])},writeMarkupEnd:e.empty,initWidget:function(){this.$Element.initWidget.call(this),this.initDisabledWidgetAttribute()},onbind:function(e,t,i){this.$Element.onbind.apply(this,arguments),this.onDisabledBind(e,t,i)}}})}();");
aria.core.DownloadMgr.loadFileContent("aria/html/CheckBox.js","var e=require(\"../Aria\");require(\"./beans/CheckBoxCfg\");var t=require(\"./InputElement\"),i=require(\"../utils/Json\");!function(){function r(e){var t=this._bindingListeners.checked,r=this._transform(t.transform,e.target.getProperty(\"checked\"),\"fromWidget\");i.setValue(t.inside,t.to,r,t.cb)}module.exports=e.classDefinition({$classpath:\"aria.html.CheckBox\",$extends:t,$constructor:function(e,t,i){e.on=e.on||{},this._chainListener(e.on,\"click\",{fn:r,scope:this}),this.$InputElement.constructor.call(this,e,t,i,\"checkbox\")},$prototype:{$cfgBean:\"aria.html.beans.CheckBoxCfg.Properties\",initWidget:function(){this.$InputElement.initWidget.call(this);var e=this._cfg.bind;if(e.checked){var t=this._transform(e.checked.transform,e.checked.inside[e.checked.to],\"toWidget\");null!=t&&(this._domElt.checked=t)}else this.$logWarn(this.BINDING_NEEDED,[this.$class,\"checked\"])},onbind:function(e,t,i){this.$InputElement.onbind.apply(this,arguments),\"checked\"===e&&(this._domElt.checked=t)}}})}();");
aria.core.DownloadMgr.loadFileContent("aria/html/controllers/Suggestions.js","var e=require(\"../../Aria\"),t=require(\"../../utils/Json\"),i=require(\"../../utils/Type\"),r=require(\"../../core/Timer\");!function(){function a(){this.getSuggestions=function(e,t){this.pendingSuggestion={entry:e,callback:t}},this.getAllSuggestions=function(e){this.pendingSuggestion={callback:e}},this.$dispose=e.empty}function n(e){var t=e.scope;t._autoDisposeHandler=!1,t.$logError(t.INVALID_RESOURCES_HANDLER,e.classpath)}function s(t){var i=t.scope,r=e.getClassInstance(t.classpath),a=i._resourcesHandler.pendingSuggestion;i._resourcesHandler=r,i._autoDisposeHandler=!0,a&&(a.entry?r.getSuggestions(a.entry,a.callback):r.getAllSuggestions(a.callback))}function o(e){r.addCallback({fn:s,args:e,scope:{},delay:12})}function l(t,i){var r=e.getClassRef(t);if(r)return new r;var s={scope:i,classpath:t};return e.load({classes:[t],oncomplete:{fn:o,args:s},onerror:{fn:n,args:s}}),new a}module.exports=e.classDefinition({$classpath:\"aria.html.controllers.Suggestions\",$constructor:function(){this._init()},$destructor:function(){this.dispose()},$statics:{INVALID_RESOURCES_HANDLER:\"Invalid resources handler '%1'\"},$prototype:{_init:function(){this.data={suggestions:[],value:null},this._resourcesHandler=null,this._autoDisposeHandler=!1},dispose:function(){this._autoDisposeHandler&&this._resourcesHandler&&this._resourcesHandler.$dispose()},setResourcesHandler:function(e){i.isString(e)&&(e=l(e,this),this._autoDisposeHandler=!0),this._resourcesHandler=e},suggestValue:function(e){this._resourcesHandler.getSuggestions(e,{fn:this._callback,scope:this})},_callback:function(e){t.setValue(this.data,\"suggestions\",e||[])},setSelected:function(e){t.setValue(this.data,\"value\",e),this.empty()},empty:function(){t.setValue(this.data,\"suggestions\",[])}}})}();");
aria.core.DownloadMgr.loadFileContent("aria/html/HtmlLibrary.js","var e=require(\"../Aria\"),t=require(\"../widgetLibs/WidgetLib\");module.exports=e.classDefinition({$classpath:\"aria.html.HtmlLibrary\",$extends:t,$singleton:!0,$prototype:{widgets:{TextInput:\"aria.html.TextInput\",TextArea:\"aria.html.TextArea\",Template:\"aria.html.Template\",CheckBox:\"aria.html.CheckBox\",RadioButton:\"aria.html.RadioButton\",Select:\"aria.html.Select\"}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/RadioButton.js","var e=require(\"../Aria\");require(\"./beans/RadioButtonCfg\");var t=require(\"./InputElement\"),i=require(\"../utils/Json\");!function(){function r(e){var t=this._bindingListeners.selectedValue,r=this._transform(t.transform,this._cfg.value,\"fromWidget\");i.setValue(t.inside,t.to,r)}module.exports=e.classDefinition({$classpath:\"aria.html.RadioButton\",$extends:t,$constructor:function(e,t,i){e.on=e.on||{},this._chainListener(e.on,\"click\",{fn:r,scope:this}),this.$InputElement.constructor.call(this,e,t,i,\"radio\")},$prototype:{$cfgBean:\"aria.html.beans.RadioButtonCfg.Properties\",initWidget:function(){this.$InputElement.initWidget.call(this);var e=this._cfg.bind,t=e.selectedValue;if(t){var i=this._transform(t.transform,t.inside[t.to],\"toWidget\");this._domElt.checked=i===this._cfg.value}else this.$logWarn(this.BINDING_NEEDED,[this.$class,\"selectedValue\"])},onbind:function(e,t,i){this.$InputElement.onbind.apply(this,arguments),\"selectedValue\"===e&&(this._domElt.checked=t===this._cfg.value)}}})}();");
aria.core.DownloadMgr.loadFileContent("aria/html/Select.js","var e=require(\"../Aria\");require(\"./beans/SelectCfg\");var t=require(\"../utils/Type\"),i=require(\"./DisabledTrait\"),r=require(\"./Element\"),a=require(\"../utils/String\"),n=require(\"../utils/Json\");module.exports=e.classDefinition({$classpath:\"aria.html.Select\",$extends:r,$statics:{BINDING_NEEDED:\"The property '%2' from Widget %1 should be bound to a data model\",WRONG_OPTIONS:\"Can't use the options property if an html body content is defined for %1\"},$constructor:function(e,t,i){e.attributes=e.attributes||{},e.on=e.on||{},this._chainListener(e.on,\"click\",{fn:this.__updateDataModel,scope:this}),this._chainListener(e.on,\"change\",{fn:this.__updateDataModel,scope:this}),this._chainListener(e.on,\"blur\",{fn:this.__updateDataModel,scope:this}),this.$Element.constructor.call(this,e,t,i)},$prototype:{tagName:\"select\",$cfgBean:\"aria.html.beans.SelectCfg.Properties\",$init:function(e){var t=i.prototype;for(var r in t)t.hasOwnProperty(r)&&!e.hasOwnProperty(r)&&(e[r]=t[r])},writeMarkup:function(e){this._openTag(e),e.write(\">\");var i=this._cfg.options;if(i){this.options=[];for(var r=a,n=0,s=i.length;n<s;n++){e.write(\"<option \");var o=i[n];o=t.isString(o)?{label:o,value:o}:{label:o.label,attributes:o.attributes,value:null==o.value?o.label:o.value};var l=r.encodeForQuotedHTMLAttribute(o.value);if(e.write('value=\"'+l+'\"'),o.attributes){var u=aria.utils.Html.buildAttributeList(o.attributes);e.write(u)}e.write(\">\"),e.write(r.escapeHTML(o.label)),e.write(\"</option>\"),this.options[n]=o}}e.write(\"</\"+this._cfg.tagName+\">\")},writeMarkupBegin:function(e){this.options&&this.$logError(this.WRONG_OPTIONS,[this.$class]),this._openTag(e),e.write(\">\")},writeMarkupEnd:function(e){e.write(\"</\"+this._cfg.tagName+\">\")},initWidget:function(){this.$Element.initWidget.call(this),this.setOptions();var e=this.getSelectedIndexFromBindings();null!=e&&(this._domElt.selectedIndex=e),this.initDisabledWidgetAttribute(),this.__updateDataModel()},isIndexValid:function(e){return t.isNumber(e)&&e>=0&&e<=this.options.length-1},getSelectedIndexFromBindings:function(){var e=this._cfg.bind,t=!1;if(e.selectedIndex){var i=this._transform(e.selectedIndex.transform,e.selectedIndex.inside[e.selectedIndex.to],\"toWidget\");if(null!=i)return this.isIndexValid(i)||(i=-1),i;t=!0}if(e.value){var r=this._transform(e.value.transform,e.value.inside[e.value.to],\"toWidget\");if(null!=r)return this.getIndex(r);t=!0}t||this.$logWarn(this.BINDING_NEEDED,[this.$class,\"selectedIndex\"])},setOptions:function(){if(!this.options&&(this.options=[],this._domElt.options))for(var e=0,t=this._domElt.options.length;e<t;e++){var i={value:this._domElt.options[e].value,label:this._domElt.options[e].label};this.options.push(i)}},onbind:function(e,t,i){\"selectedIndex\"===e?(this._domElt.selectedIndex=t,this.setValueInDataModel(),this.isIndexValid(t)||this.setIndexInDataModel()):\"value\"===e&&(this._domElt.selectedIndex=this.getIndex(t),this.setIndexInDataModel(),this._domElt.selectedIndex===-1&&this.setValueInDataModel()),this.onDisabledBind(e,t,i)},getIndex:function(e){if(this.options)for(var t=0,i=this.options.length;t<i;t++)if(this.options[t].value===e)return t;return-1},__updateDataModel:function(e){this.setIndexInDataModel(),this.setValueInDataModel()},setValueInDataModel:function(){var e=this._bindingListeners.value;if(e){var t=this._domElt.selectedIndex,i=\"\";t!=-1&&(i=this.options[this._domElt.selectedIndex].value);var r=this._transform(e.transform,i,\"fromWidget\");n.setValue(e.inside,e.to,r,e.cb)}},setIndexInDataModel:function(){var e=this._bindingListeners.selectedIndex;if(e){var t=this._transform(e.transform,this._domElt.selectedIndex,\"fromWidget\");n.setValue(e.inside,e.to,t,e.cb)}}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/Template.js","var e=require(\"../Aria\");require(\"./beans/TemplateCfg\");var t=require(\"../templates/TemplateTrait\"),i=require(\"../utils/Html\"),r=require(\"../templates/TemplateCtxt\"),a=require(\"../utils/Dom\"),s=require(\"../core/environment/Customizations\"),n=require(\"../widgetLibs/BaseWidget\"),o=require(\"../core/JsonValidator\");module.exports=e.classDefinition({$classpath:\"aria.html.Template\",$extends:n,$events:{ElementReady:\"\"},$statics:{ERROR_SUBTEMPLATE:\"#ERROR IN SUBTEMPLATE#\"},$constructor:function(e,t){this.$BaseWidget.constructor.apply(this,arguments),e.id?this._domId=this._context.$getId(e.id):this._domId=this._createDynamicId(),this._subTplDiv=null,this.subTplCtxt=null,this._needCreatingModuleCtrl=e.moduleCtrl&&null==e.moduleCtrl.getData,this._tplcfg={classpath:s.getTemplateCP(e.classpath),args:e.args,id:this._domId,moduleCtrl:e.moduleCtrl},this._checkCfgConsistency(e);var i=new r;this.subTplCtxt=i,this._initCtxDone=!1,this.isDiffered=!1,this._cssClassNames=\"\"},$destructor:function(){this._subTplDiv=null,this.subTplCtxt&&(this.subTplCtxt.$dispose(),this.subTplCtxt=null),this._deleteTplcfg(),this.$BaseWidget.$destructor.apply(this,arguments)},$prototype:{$init:function(e){var i=t.prototype;for(var r in i)i.hasOwnProperty(r)&&!e.hasOwnProperty(r)&&(e[r]=i[r])},_checkCfgConsistency:function(e){var t=o;this._cfgOk=t.validateCfg(\"aria.html.beans.TemplateCfg.Properties\",e),this._needCreatingModuleCtrl&&(this._cfgOk=this._cfgOk&&t.validateCfg(\"aria.templates.CfgBeans.InitModuleCtrl\",e.moduleCtrl))},_onTplLoad:function(e,t){var i=this._tplcfg;if(!i)return void(t.autoDispose&&e.moduleCtrlPrivate.$dispose());var r=this._subTplDiv;i.tplDiv=r,i.data=this._cfg.data,e.moduleCtrl?i.moduleCtrl=e.moduleCtrl:i.context=this._context,t.autoDispose&&(null==i.toDispose?i.toDispose=[e.moduleCtrlPrivate]:i.toDispose.push(e.moduleCtrlPrivate));var a=this.subTplCtxt;a.parent=this._context,e=a.initTemplate(i),this._initCtxDone=!0,e?(a.dataReady(),r&&a._cfg&&(r.className=r.className+\" \"+a.getCSSClassNames(!0),a.$onOnce({Ready:this.__innerTplReadyCb,scope:this}),a.$refresh()),this.tplcfg=null):(a.$dispose(),this.subTplCtxt=null),r=null},initWidget:function(){aria.html.Template.superclass.initWidget.call(this);var e=a.getElementById(this._domId);if(this._subTplDiv=e,this._initCtxDone){var t=this.subTplCtxt;e.className=e.className+\" \"+this._cssClassNames,t.linkToPreviousMarkup(e),t.viewReady()}},writeMarkup:function(t){if(this._cfgOk){var r=this._tplcfg;if(e.load({templates:[r.classpath],classes:this._needCreatingModuleCtrl?[this._cfg.moduleCtrl.classpath]:null,oncomplete:{scope:this,fn:this._onModuleCtrlLoad}}),this._tplcfg){var a=this._cfg.type,s=[\"<\",a,' id=\"',this._domId,'\"'];if(this._cfg.attributes&&s.push(\" \"+i.buildAttributeList(this._cfg.attributes)),s.push(\">\"),this._initCtxDone){var n=this.subTplCtxt;this._cssClassNames=n.getCSSClassNames(!0);var o=n.getMarkup();null!=o?s.push(o):s.push(this.ERROR_SUBTEMPLATE)}else this.isDiffered=!0;s.push(\"</\"+a+\">\"),t.write(s.join(\"\"))}else t.write(\"<div>\"+this.ERROR_SUBTEMPLATE+\"</div>\")}},getId:function(){return this._cfg.id}}});");
aria.core.DownloadMgr.loadFileContent("aria/html/TextInput.js","var e=require(\"../Aria\");require(\"./beans/TextInputCfg\");var t=require(\"../utils/Caret\"),i=require(\"../DomEvent\"),r=require(\"./InputElement\"),a=require(\"../utils/Type\"),s=require(\"../utils/Array\"),n=require(\"../utils/Json\"),o=require(\"../core/Timer\");!function(){function l(e,t){e.fn.call(e.scope,t,e.args)}function u(e){this._typeCallback=null;for(var t,i=0,r=e.length;i<r;i++)t=this.$normCallback.call(this._context._tpl,e[i]),l(t,this._domElt.value)}function c(e,t){this._typeCallback=o.addCallback({fn:u,scope:this,delay:12,args:t})}function h(e){this._hasPlaceholder&&(s.contains(m,e.keyCode)?e.preventDefault():this._removePlaceholder())}function p(e){var t=this._bindingListeners.value,i=this._transform(t.transform,e.target.getValue(),\"fromWidget\");this._hasFocus=!1,this._hasPlaceholder?n.setValue(t.inside,t.to,\"\",t.cb):n.setValue(t.inside,t.to,i,t.cb),this._firstFocus=!0}function d(e){this._hasFocus=!0;var t;this._hasPlaceholder?t=this._setCaretForPlaceholder:this._cfg.autoselect&&(t=this._autoselect),t&&o.addCallback({fn:t,scope:this,delay:4})}function f(e){this._hasPlaceholder?t.setPosition(this._domElt,0,0):this._cfg.autoselect&&this._autoselect()}var m=null,g=null;module.exports=e.classDefinition({$classpath:\"aria.html.TextInput\",$extends:r,$statics:{},$onload:function(){var e=i;m=[e.KC_END,e.KC_RIGHT,e.KC_ARROW_RIGHT,e.KC_DOWN,e.KC_ARROW_DOWN,e.KC_DELETE,e.KC_BACKSPACE]},$constructor:function(t,i,r){t.attributes=t.attributes||{};var a=t.attributes.type||\"text\";t.on=t.on||{},g=\"placeholder\"in e.$window.document.createElement(\"input\"),t.placeholder&&g&&(t.attributes.placeholder=t.placeholder),this._registerListeners(t),this._reactOnType=this._registerType(t.on,i),this._firstFocus=!0,this._hasFocus=!1,this._hasPlaceholder=!1,this.$InputElement.constructor.call(this,t,i,r,a)},$destructor:function(){this._typeCallback&&o.cancelCallback(this._typeCallback),this.$InputElement.$destructor.call(this)},$prototype:{tagName:\"input\",$cfgBean:\"aria.html.beans.TextInputCfg.Properties\",initWidget:function(){this.$InputElement.initWidget.call(this);var e=this._cfg.bind;if(e.value){var t=this._transform(e.value.transform,e.value.inside[e.value.to],\"toWidget\");null!=t&&(this._domElt.value=t)}else this.$logWarn(this.BINDING_NEEDED,[this.$class,\"value\"]);this._setPlaceholder()},onbind:function(e,t,i){this.$InputElement.onbind.apply(this,arguments),\"value\"===e&&(t=null!=t?t+\"\":\"\",t&&this._removePlaceholder(),this._domElt.value=t,this._setPlaceholder())},focus:function(){this._domElt.focus()},_registerType:function(e,t){e.type&&(this._chainListener(e,\"keydown\",{fn:c,scope:this,args:a.isArray(e.type)?e.type:[e.type]}),delete e.type)},_autoselect:function(){this._firstFocus&&(this._firstFocus=!1,t.select(this._domElt))},_setPlaceholder:function(){if(!g&&this._cfg.placeholder){var e=this._domElt;if(\"\"===e.value){e.value=this._cfg.placeholder;var i=new aria.utils.ClassList(e);i.add(\"placeholder\"),i.$dispose(),this._hasFocus&&t.setPosition(e,0,0),this._hasPlaceholder=!0,this._domElt.unselectable=\"on\"}}},_removePlaceholder:function(){if(this._hasPlaceholder){var e=this._domElt,t=new aria.utils.ClassList(e);e.value=\"\",this._hasPlaceholder=!1,t.remove(\"placeholder\"),t.$dispose(),this._domElt.unselectable=\"off\"}},_registerListeners:function(e){var t=e.on;this._chainListener(t,\"blur\",{fn:p,scope:this}),(!g&&e.placeholder||e.autoselect)&&(this._chainListener(t,\"focus\",{fn:d,scope:this}),this._chainListener(t,\"click\",{fn:f,scope:this}),this._chainListener(t,\"keydown\",{fn:h,scope:this}),this._chainListener(t,\"type\",{fn:this._setPlaceholder,scope:this}))},_setCaretForPlaceholder:function(){this._hasPlaceholder&&t.setPosition(this._domElt,0,0)}}})}();");
aria.core.DownloadMgr.loadFileContent("aria/html/TextArea.js","var e=require(\"../Aria\");require(\"./beans/TextAreaCfg\");var t=require(\"./TextInput\");module.exports=e.classDefinition({$classpath:\"aria.html.TextArea\",$extends:t,$constructor:function(e,t,i){this.$TextInput.constructor.call(this,e,t,i),delete e.attributes.type},$prototype:{tagName:\"textarea\",$cfgBean:\"aria.html.beans.TextAreaCfg.Properties\",writeMarkup:function(e){this.$Element.writeMarkupBegin.call(this,e),this.$Element.writeMarkupEnd.call(this,e)}}});");
