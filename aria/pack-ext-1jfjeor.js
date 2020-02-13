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
aria.core.DownloadMgr.loadFileContent("aria/ext/BundleAnalyzer.js","var e=require(\"../Aria\"),t=require(\"../core/Cache\"),i=require(\"../core/ResMgr\");module.exports=e.classDefinition({$classpath:\"aria.ext.BundleAnalyzer\",$singleton:!0,$prototype:{getReport:function(){var e=t.content,r=[];for(var s in e.urls)e.urls.hasOwnProperty(s)&&r.push(s);var a={},n=[],o=[],l=require.cache,c=i.resources;for(s in l)l.hasOwnProperty(s)&&(a[s]=!0);for(s in c)if(c.hasOwnProperty(s)){var h=c[s],u=(h.loaded||h.loading||{}).logicalPath;u&&(a[u]=!0)}for(s in e.files)e.files.hasOwnProperty(s)&&(e.files[s].status!==t.STATUS_AVAILABLE?o.push(s):a[s]||n.push(s));return{downloaded:r,useless:n,error:o}}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/GeneratorBeans.js","var e=require(\"../../Aria\"),t=require(\"../../core/JsonTypes\");module.exports=e.beanDefinitions({$package:\"aria.ext.filesgenerator.GeneratorBeans\",$namespaces:{json:t},$beans:{classSkeletonTemplate:{$type:\"json:Object\",$properties:{$classpath:{$type:\"json:String\",$default:\"company.package.Class\"},$description:{$type:\"json:String\",$default:\"The description of this class and how it should be used\"},$extends:{$type:\"json:String\",$default:\"aria.core.JsObject\"},$singleton:{$type:\"json:Boolean\",$default:!1},$dependencies:{$type:\"json:Array\",$default:null,$contentType:{$type:\"json:String\"}},$implements:{$type:\"json:Array\",$default:null,$contentType:{$type:\"json:String\"}}}},interfaceSkeletonTemplate:{$type:\"json:Object\",$properties:{$classpath:{$type:\"json:String\",$default:\"company.package.IClass\"},$description:{$type:\"json:String\",$default:\"The description of this interface and how it should be implemented\"},$extends:{$type:\"json:String\",$default:null}}},htmlTemplateSkeletonTemplate:{$type:\"json:Object\",$properties:{$classpath:{$type:\"json:String\",$default:\"company.package.MyTemplate\"},$extends:{$type:\"json:String\",$default:null},$hasScript:{$type:\"json:Boolean\",$default:!1},$css:{$type:\"json:Array\",$default:null,$contentType:{$type:\"json:String\"}},content:{$type:\"json:String\"}}},cssTemplateSkeletonTemplate:{$type:\"json:Object\",$properties:{$classpath:{$type:\"json:String\",$default:\"company.package.MyCssTemplate\"},$hasScript:{$type:\"json:Boolean\",$default:!1}}},templateScriptSkeletonTemplate:{$type:\"json:Object\",$properties:{$classpath:{$type:\"json:String\",$default:\"company.package.MyTemplateScript\"}}},macroLibrarySkeletonTemplate:{$type:\"json:Object\",$properties:{$classpath:{$type:\"json:String\",$default:\"company.package.MyTemplateScript\"},$hasScript:{$type:\"json:Boolean\",$default:!1}}},cssLibrarySkeletonTemplate:{$type:\"json:Object\",$properties:{$classpath:{$type:\"json:String\",$default:\"company.package.MyTemplateScript\"},$hasScript:{$type:\"json:Boolean\",$default:!1}}},flowControllerSkeletonTemplate:{$type:\"json:Object\",$properties:{$classpath:{$type:\"json:String\",$default:\"company.package.MyFlowController\"},$description:{$type:\"json:String\",$default:\"The description of this flow controller implementation\"},$publicInterface:{$type:\"json:String\",$default:\"company.package.IMyFlowController\"},$implements:{$type:\"json:Array\",$default:[],$contentType:{$type:\"json:String\"}},$extends:{$type:\"json:String\",$default:\"aria.templates.FlowCtrl\"},$dependencies:{$type:\"json:Array\",$default:null,$contentType:{$type:\"json:String\"}}}},moduleControllerSkeletonTemplate:{$type:\"json:Object\",$properties:{$classpath:{$type:\"json:String\",$default:\"company.package.MyModuleController\"},$publicInterface:{$type:\"json:String\",$default:\"company.package.IMyModuleController\"},$implements:{$type:\"json:Array\",$default:[],$contentType:{$type:\"json:String\"}},$extends:{$type:\"json:String\",$default:\"aria.templates.ModuleCtrl\"},$description:{$type:\"json:String\",$default:\"The description of this module controller implementation\"},$dependencies:{$type:\"json:Array\",$default:null,$contentType:{$type:\"json:String\"}},$hasFlowCtrl:{$type:\"json:Boolean\",$default:!1}}},moduleControllerInterfaceSkeletonTemplate:{$type:\"interfaceSkeletonTemplate\"},flowControllerInterfaceSkeletonTemplate:{$type:\"interfaceSkeletonTemplate\"},bootstrapSkeletonTemplate:{$type:\"json:Object\",$properties:{$classpath:{$type:\"json:String\",$default:\"company.package.MyTemplate\"},$fwkpath:{$type:\"json:String\"},$fwkskin:{$type:\"json:String\"},$moduleCtrl:{$type:\"json:String\",$default:null}}}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/Class.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.Class\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this){if(this.__$write(\"/**\\n * \",18),this.__$write(data.$description,19),this.__$write(\"\\n * @class \",20),this.__$write(data.$classpath,20),this.__$write(\"\\n * @extends \",21),this.__$write(data.$extends,21),data.$singleton&&this.__$write(\"\\n * @singleton\",22),this.__$write('\\n */\\nAria.classDefinition({\\n    $classpath : \"',23),this.__$write(data.$classpath,25),this.__$write('\",\\n    $extends : \"',25),this.__$write(data.$extends,26),this.__$write('\",',26),data.$singleton&&this.__$write(\"\\n    $singleton : true,\",27),data.$dependencies){this.__$write(\"\\n    $dependencies : [\",28);var __v_1=data.$dependencies;data.$dependencies==undefined&&this.$logError(this.ITERABLE_UNDEFINED,[\"foreach\",__filename,28]);var d_ct=0;for(var d_index in __v_1)if(__v_1.hasOwnProperty(d_index)&&!this.$json.isMetadata(d_index)){var d=__v_1[d_index];d_ct++,d_ct>1&&this.__$write(\", \",28),this.__$write('\"',28),this.__$write(d,28),this.__$write('\"',28)}this.__$write(\"],\",28)}if(data.$implements){this.__$write(\"\\n    $implements : [\",29);var __v_2=data.$implements;data.$implements==undefined&&this.$logError(this.ITERABLE_UNDEFINED,[\"foreach\",__filename,29]);var i_ct=0;for(var i_index in __v_2)if(__v_2.hasOwnProperty(i_index)&&!this.$json.isMetadata(i_index)){var i=__v_2[i_index];i_ct++,i_ct>1&&this.__$write(\", \",29),this.__$write('\"',29),this.__$write(i,29),this.__$write('\"',29)}this.__$write(\"],\",29)}this.__$write(\"\\n    $constructor : function () {},\\n    $destructor : function () {},\\n    $prototype : {}\\n});\",30)}}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.Class.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/Interface.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.Interface\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write(\"/**\\n * \",18),this.__$write(data.$description,19),this.__$write(\"\\n * @class \",20),this.__$write(data.$classpath,20),this.__$write('\\n */\\nAria.interfaceDefinition({\\n    $classpath : \"',21),this.__$write(data.$classpath,23),this.__$write('\",',23),data.$extends&&(this.__$write('\\n    $extends : \"',24),this.__$write(data.$extends,24),this.__$write('\",',24)),this.__$write(\"\\n    $interface : {}\\n});\",25)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.Interface.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/HtmlTemplate.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.HtmlTemplate\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this){if(this.__$write('{Template {\\n    $classpath : \"',18),this.__$write(data.$classpath,19),this.__$write('\",',19),data.$extends&&(this.__$write('\\n    $extends : \"',20),this.__$write(data.$extends,20),this.__$write('\",',20)),this.__$write(\"\\n    $hasScript : \",21),this.__$write(data.$hasScript,21),data.$css){this.__$write(\",\\n    $css : [\",21);var __v_1=data.$css;data.$css==undefined&&this.$logError(this.ITERABLE_UNDEFINED,[\"foreach\",__filename,22]);var c_ct=0;for(var c_index in __v_1)if(__v_1.hasOwnProperty(c_index)&&!this.$json.isMetadata(c_index)){var c=__v_1[c_index];c_ct++,c_ct>1&&this.__$write(\", \",22),this.__$write('\"',22),this.__$write(c,22),this.__$write('\"',22)}this.__$write(\"]\",22)}this.__$write(\"\\n}}\\n\\n    \",23),data.content?this.__$write(data.content,25):this.__$write(\"{macro main()}\\n    {/macro}\",25),this.__$write(\"\\n    \\n{/Template}\\n\",27)}}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.HtmlTemplate.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/CssTemplate.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.CssTemplate\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write('{CSSTemplate {\\n    $classpath : \"',18),this.__$write(data.$classpath,19),this.__$write('\",\\n    $hasScript : ',19),this.__$write(data.$hasScript,20),this.__$write(\"\\n}}\\n    {macro main()}\\n        \\n       {/macro}\\n{/CSSTemplate}\",21)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.CssTemplate.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/TemplateScript.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.TemplateScript\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write('Aria.tplScriptDefinition({\\n    $classpath : \"',18),this.__$write(data.$classpath,19),this.__$write('\",\\n    $prototype : {       \\n            showAlert: function() {}\\n    }\\n});',19)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.TemplateScript.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/MacroLibrary.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.MacroLibrary\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write('{Library {\\n    $classpath : \"',18),this.__$write(data.$classpath,19),this.__$write('\",\\n    $hasScript : ',19),this.__$write(data.$hasScript,20),this.__$write(\"\\n}}\\n    {macro sayHello(name)}\\n        Hello, ${name}!\\n    {/macro}\\n{/Library}\",21)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.MacroLibrary.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/CssLibrary.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.CssLibrary\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write('{CSSLibrary {\\n    $classpath : \"',18),this.__$write(data.$classpath,19),this.__$write('\",\\n    $hasScript : ',19),this.__$write(data.$hasScript,20),this.__$write(\"\\n}}\\n    {macro example()}\\n\\n    {/macro}\\n{/CSSLibrary}\",21)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.CssLibrary.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/FlowController.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.FlowController\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this){if(this.__$write(function(){var e=data.$extends.split(\".\");data.superClassName=\"$\"+e[e.length-1]}(),19),this.__$write(\"\\n/**\\n * \",23),this.__$write(data.$description,24),this.__$write(\"\\n * @class \",25),this.__$write(data.$classpath,25),this.__$write(\"\\n * @extends \",26),this.__$write(data.$extends,26),this.__$write('\\n */\\nAria.classDefinition({\\n    $classpath : \"',27),this.__$write(data.$classpath,29),this.__$write('\",\\n    $extends : \"',29),this.__$write(data.$extends,30),this.__$write('\",',30),data.$dependencies){this.__$write(\"\\n    $dependencies : [\",31);var __v_1=data.$dependencies;data.$dependencies==undefined&&this.$logError(this.ITERABLE_UNDEFINED,[\"foreach\",__filename,31]);var d_ct=0;for(var d_index in __v_1)if(__v_1.hasOwnProperty(d_index)&&!this.$json.isMetadata(d_index)){var d=__v_1[d_index];d_ct++,d_ct>1&&this.__$write(\", \",31),this.__$write('\"',31),this.__$write(d,31),this.__$write('\"',31)}this.__$write(\"],\",31)}if(this.__$write('\\n    $implements : [\"',32),this.__$write(data.$publicInterface,32),this.__$write('\"',32),data.$implements){var __v_2=data.$implements;data.$implements==undefined&&this.$logError(this.ITERABLE_UNDEFINED,[\"foreach\",__filename,32]);var i_ct=0;for(var i_index in __v_2)if(__v_2.hasOwnProperty(i_index)&&!this.$json.isMetadata(i_index)){var i=__v_2[i_index];i_ct++,this.__$write(', \"',32),this.__$write(i,32),this.__$write('\"',32)}}this.__$write(\"],\\n    $constructor : function () {\\n        this.\",32),this.__$write(data.superClassName,34),this.__$write(\".constructor.call(this);\\n    },\\n    $destructor : function () {\\n        this.\",34),this.__$write(data.superClassName,37),this.__$write('.$destructor.call(this);\\n    },\\n    $prototype : {\\n        $publicInterfaceName : \"',37),this.__$write(data.$publicInterface,40),this.__$write('\"\\n    }\\n});',40)}}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.FlowController.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/ModuleController.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.ModuleController\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this){if(this.__$write(function(){var e=data.$extends.split(\".\");data.superClassName=\"$\"+e[e.length-1]}(),19),this.__$write(\"\\n/**\\n * \",23),this.__$write(data.$description,24),this.__$write(\"\\n * @class \",25),this.__$write(data.$classpath,25),this.__$write(\"\\n * @extends \",26),this.__$write(data.$extends,26),this.__$write('\\n */\\nAria.classDefinition({\\n    $classpath : \"',27),this.__$write(data.$classpath,29),this.__$write('\",\\n    $extends : \"',29),this.__$write(data.$extends,30),this.__$write('\",',30),data.$dependencies){this.__$write(\"\\n    $dependencies : [\",31);var __v_1=data.$dependencies;data.$dependencies==undefined&&this.$logError(this.ITERABLE_UNDEFINED,[\"foreach\",__filename,31]);var d_ct=0;for(var d_index in __v_1)if(__v_1.hasOwnProperty(d_index)&&!this.$json.isMetadata(d_index)){var d=__v_1[d_index];d_ct++,d_ct>1&&this.__$write(\", \",31),this.__$write('\"',31),this.__$write(d,31),this.__$write('\"',31)}this.__$write(\"],\",31)}if(this.__$write('\\n    $implements : [\"',32),this.__$write(data.$publicInterface,32),this.__$write('\"',32),data.$implements){var __v_2=data.$implements;data.$implements==undefined&&this.$logError(this.ITERABLE_UNDEFINED,[\"foreach\",__filename,32]);var i_ct=0;for(var i_index in __v_2)if(__v_2.hasOwnProperty(i_index)&&!this.$json.isMetadata(i_index)){var i=__v_2[i_index];i_ct++,this.__$write(', \"',32),this.__$write(i,32),this.__$write('\"',32)}}this.__$write(\"],\\n    $constructor : function () {                    \\n        this.\",32),this.__$write(data.superClassName,34),this.__$write(\".constructor.call(this);\\n    },\\n    $destructor : function () {\\n        this.\",34),this.__$write(data.superClassName,37),this.__$write('.$destructor.call(this);\\n    },\\n    $prototype : {\\n        $publicInterfaceName : \"',37),this.__$write(data.$publicInterface,40),this.__$write('\"',40),data.$hasFlowCtrl&&this.__$write(\",\\n        $hasFlowCtrl : true\",40),this.__$write(\"        \\n    }\\n});\",41)}}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.ModuleController.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/ModuleControllerInterface.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.ModuleControllerInterface\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$texts:{interfaceTxtTpl:require(\"ariatemplates/ext/filesgenerator/tpl/Interface.tpl.txt\")},$prototype:{macro_main:function(){try{with(this)this.__$write(function(){data.$extends=\"aria.templates.IModuleCtrl\"}(),23),this.__$write(interfaceTxtTpl.processTextTemplate(data),23)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.ModuleControllerInterface.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/FlowControllerInterface.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.FlowControllerInterface\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$texts:{interfaceTxtTpl:require(\"ariatemplates/ext/filesgenerator/tpl/Interface.tpl.txt\")},$prototype:{macro_main:function(){try{with(this)this.__$write(function(){data.$extends=\"aria.templates.IFlowCtrl\"}(),23),this.__$write(interfaceTxtTpl.processTextTemplate(data),23)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.FlowControllerInterface.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/tpl/Bootstrap.tpl.txt","var Aria=require(\"ariatemplates/Aria\");module.exports=Aria.classDefinition({$classpath:\"aria.ext.filesgenerator.tpl.Bootstrap\",$extends:require(\"ariatemplates/templates/TextTemplate.js\"),$constructor:function(){this.$TextTemplate.constructor.call(this)},$destructor:function(){this.$TextTemplate.$destructor.call(this)},$prototype:{macro_main:function(){try{with(this)this.__$write('\\n<!DOCTYPE html>\\n<html lang=\"en\">\\n<head>\\n        <meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\" />\\n\\n        <title>My Title</title>\\n\\n        <!-- load the framework entry point -->\\n        <script type=\"text/javascript\" src=\"',19),this.__$write(data.$fwkpath,27),this.__$write('\"></script>\\n        <script type=\"text/javascript\" src=\"',27),this.__$write(data.$fwkskin,28),this.__$write('\"></script>\\n</head>\\n<body>\\n        <div id=\\'container\\'></div>\\n        <script type=\"text/javascript\">\\n                Aria.loadTemplate({\\n                        classpath:\"',28),this.__$write(data.$classpath,34),this.__$write('\",\\n                        div:\"container\"',34),data.$moduleCtrl&&(this.__$write(',\\n                        moduleCtrl: {classpath:\"',35),this.__$write(data.$moduleCtrl,36),this.__$write('\"}',36)),this.__$write(\"\\n                });\\n        </script>\\n</body>\\n</html>\\n\",37)}catch(_ex){this.$logError(this.EXCEPTION_IN_MACRO,[\"main\",__filename,this[\"aria:currentLineNumber\"]],_ex)}},$init:function(e){aria.ext.filesgenerator.tpl.Bootstrap.processTextTemplate=aria.templates.TextTemplate.processTextTemplate},__$initTemplate:function(){return!0}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/filesgenerator/Generator.js","var e=require(\"../../Aria\"),t=require(\"../../core/JsonValidator\");require(\"./GeneratorBeans\");var i=require(\"./tpl/Class.tpl.txt\"),r=require(\"./tpl/Interface.tpl.txt\"),s=require(\"./tpl/HtmlTemplate.tpl.txt\"),a=require(\"./tpl/CssTemplate.tpl.txt\"),n=require(\"./tpl/TemplateScript.tpl.txt\"),o=require(\"./tpl/MacroLibrary.tpl.txt\"),l=require(\"./tpl/CssLibrary.tpl.txt\"),c=require(\"./tpl/FlowController.tpl.txt\"),h=require(\"./tpl/ModuleController.tpl.txt\"),u=require(\"./tpl/ModuleControllerInterface.tpl.txt\"),p=require(\"./tpl/FlowControllerInterface.tpl.txt\"),d=require(\"./tpl/Bootstrap.tpl.txt\"),_=require(\"../../core/JsObject\"),g=require(\"../../utils/Json\");module.exports=e.classDefinition({$classpath:\"aria.ext.filesgenerator.Generator\",$extends:_,$singleton:!0,$texts:{classTxtTplHandle:i,interfaceTxtTplHandle:r,htmlTemplateTxtTplHandle:s,cssTemplateTxtTplHandle:a,templateScriptTxtTplHandle:n,macroLibraryTxtTplHandle:o,cssLibraryTxtTplHandle:l,flowControllerTxtTplHandle:c,moduleControllerTxtTplHandle:h,moduleControllerInterfaceTxtTplHandle:u,flowControllerInterfaceTxtTplHandle:p,bootstrapTxtTplHandle:d},$statics:{TYPE_CLASS:\"class\",TYPE_INTERFACE:\"interface\",TYPE_HTMLTEMPLATE:\"htmlTemplate\",TYPE_CSSTEMPLATE:\"cssTemplate\",TYPE_TEMPLATESCRIPT:\"templateScript\",TYPE_MACROLIBRARY:\"macroLibrary\",TYPE_CSSLIBRARY:\"cssLibrary\",TYPE_FLOWCONTROLLER:\"flowController\",TYPE_MODULECONTROLLER:\"moduleController\",TYPE_MODULECONTROLLERINTERFACE:\"moduleControllerInterface\",TYPE_FLOWCONTROLLERINTERFACE:\"flowControllerInterface\",TYPE_BOOTSTRAP:\"bootstrap\"},$constructor:function(){this.__classNameCounter=0},$prototype:{generateFile:function(e,t){if(e&&(e=this.__isAllowedType(\"TYPE_\"+e.toUpperCase()))){var i=this.__getSkeleton(this[e+\"TxtTplHandle\"],\"aria.ext.filesgenerator.GeneratorBeans.\"+e+\"SkeletonTemplate\",t);return{type:e,classpath:i.cfg.$classpath,content:i.content}}return null},generateHtmlTemplate:function(e,t,i,r){var s=[],a={$classpath:e};if(t){var n=e+\"Script\";a.$hasScript=!0,s.push(this.generateFile(this.TYPE_TEMPLATESCRIPT,{$classpath:n}))}if(i){var o=e+\"Style\";a.$css=[o],s.push(this.generateFile(this.TYPE_CSSTEMPLATE,{$classpath:o}))}return r&&(a.content=r),s.push(this.generateFile(this.TYPE_HTMLTEMPLATE,a)),s},generateModuleCtrl:function(e,t){var i=[],r=e.lastIndexOf(\".\"),s=e.substring(0,r),a=e.substring(r+1),n=s+\".I\"+a;if(i.push(this.generateFile(this.TYPE_MODULECONTROLLERINTERFACE,{$classpath:n,$description:e+\" public interface definition\"})),i.push(this.generateFile(this.TYPE_MODULECONTROLLER,{$classpath:e,$description:\"My module controller\",$publicInterface:n,$hasFlowCtrl:t})),t){var o=s+\".I\"+a+\"Flow\",l=e+\"Flow\";i.push(this.generateFile(this.TYPE_FLOWCONTROLLERINTERFACE,{$classpath:o,$description:l+\" public interface definition\"})),i.push(this.generateFile(this.TYPE_FLOWCONTROLLER,{$classpath:l,$publicInterface:o,$description:\"My flow controller\"}))}return i},getUniqueClasspathIn:function(e){return e+\".Class\"+this.__classNameCounter++},__isAllowedType:function(e){return g.getValue(this,e)},__getSkeleton:function(e,i,r){return r||(r={}),t.normalize({json:r,beanName:i}),{cfg:r,content:e.processTextTemplate(r)}}}});");
aria.core.DownloadMgr.loadFileContent("aria/ext/StressCss.js","var e=require(\"../Aria\"),t=require(\"../utils/Object\"),i=require(\"../utils/String\");!function(){function r(e,t){return t.toUpperCase()}var a={},s=null,n=null,o=-1,l=function(e,i){if(e!==!0)aria.templates.CSSMgr.__textToDOM(t.keys(aria.templates.CSSMgr.__styleTagPool));else{var r={};for(var a in aria.templates.CSSMgr.__styleTagPool)aria.templates.CSSMgr.__styleTagPool.hasOwnProperty(a)&&(r[a]=\"tpl\"===a&&i?[i]:[]);aria.templates.CSSMgr.__reloadStyleTags(r)}},c=function(){var e=aria.ext.StressCss;e.original__load=aria.templates.CSSMgr.__load,e.original__unload=aria.templates.CSSMgr.__unload,aria.templates.CSSMgr.__load=function(){return[]},aria.templates.CSSMgr.__unload=function(){},l()},h=function(){var e=aria.ext.StressCss;aria.templates.CSSMgr.__load=e.original__load,aria.templates.CSSMgr.__unload=e.original__unload,l()},u=function(e,t){for(var r=null,a=[],s=i.trim,n=/[\\s]*(([^{]+)\\{[^}]+\\})/g;r=n.exec(e);)a.push({name:t+\": \"+s(r[2]),descriptor:r[1],location:t});return a},p=function(e){var t=aria.templates.CSSMgr,i=t.__textLoaded,r=[];for(var a in i)if(i.hasOwnProperty(a)){if(e!==!0&&\"wgt\"===t.__styleTagAssociation[a])continue;r=r.concat(u(i[a].text,a))}return r},d=function(e,t){if(e){var i=aria.templates.CSSMgr.__textLoaded[e.location];e.original=i.text,t?l(!0,e.descriptor):(i.text=i.text.replace(e.descriptor,\"\"),l())}else{if(!t)return;l(!0)}},_=function(e,t){if(e)aria.templates.CSSMgr.__textLoaded[e.location].text=e.original,l();else{if(!t)return;l()}},g=function(e){e.callback&&e.callback.fn.apply(e.callback.scope,e.callback.args)},m=function(e){var t=+new Date;e.runTime=t-e.start,a[e.name]={name:e.name,runTime:e.runTime,baseline:a.__baseline__?a.__baseline__.runTime-e.runTime:NaN},_(e.selector,e.cfg.incremental),setTimeout(function(){g(e)},15)},f=function(e,t){return function(){setTimeout(function(){$.call(t,e)},0)}},$=function(e){return e.iteration>=e.cfg.repeat?m(e):(e.iteration+=1,void e.cfg.action.call(null,e.name,e.iteration-1,f(e,this)))},y=function(e,t){for(var i in t)if(t.hasOwnProperty(i))try{var a=i.replace(/\\-([a-z])/gi,r),s=t[i];e.style[a]=\"number\"==typeof s&&\"zIndex\"!=a?s+\"px\":s}catch(n){}},v=function(){if(s)return s.parentNode.removeChild(s),s=null,!1},C=function(){var t=e.$window.document;s=t.createElement(\"iframe\");var i=t.createElement(\"iframe\");s.scrolling=\"no\",s.frameBorder=\"no\",t.body.appendChild(s),s.doc=s.contentDocument||s.contentWindow.document,s.doc.write(\"<html><head></head><body></body></html>\"),s.doc.close(),n=s.doc.createElement(\"div\");var r=s.doc.createElement(\"a\");s.resize=function(){if(s){var e=s.doc.body;y(s,{width:e.scrollWidth,height:e.scrollHeight})}},o=setInterval(s.resize,100),y(s,{position:\"fixed\",top:10,right:10,zIndex:1e4,background:\"white\",padding:2,border:\"solid 2px #aaa\",width:250,height:60,borderRadius:4,boxShadow:\"0 0 8px #eee\"}),y(s.doc.body,{font:\"12px Helvetica,Arials,sans-serif\",color:\"#444\"}),y(n,{whiteSpace:\"nowrap\"}),r.innerHTML=\"&#215;\",y(r,{position:\"absolute\",top:0,right:0,textDecoration:\"none\",fontWeight:\"bold\",cursor:\"pointer\",color:\"red\",fontSize:\"1.3em\",lineHeight:8}),r.onclick=function(){return r.onclick=null,clearInterval(o),r=null,i.parentNode.removeChild(i),v()},y(i,{height:2*e.$window.screen.height,width:e.$window.screen.width,position:\"absolute\",top:0,left:0,visible:\"hidden\",display:\"none\",zIndex:0}),t.body.appendChild(i),s.doc.body.appendChild(r),s.doc.body.appendChild(n)},b=function(e){var t=!(e.selector&&\"*\"!==e.selector.name);if(n){var i=e.cfg.allSelectors.length,r=\"Testing <strong>\"+(t?e.name:e.selector.name)+\"</strong>\",a=\"<br />\"+(t?\"baseline\":e.selector.location),s=\"<br />\"+i+\" remaining test\"+(1===i?\"\":\"s\");n.innerHTML=r+a+s}},w=function(e){if(s&&a){var t=\"<table><thead><tr><th>Selector</th><th> </th><th>ms</th><th>Total</th></tr></thead><tbody>\",i=[];for(var r in a)a.hasOwnProperty(r)&&\"__baseline__\"!==r&&i.push(a[r]);for(var o=i.sort(function(t,i){return t.baseline===i.baseline?0:e?t.baseline>i.baseline?1:-1:t.baseline>i.baseline?-1:1}).slice(0,20),l=0,c=o.length;l<c;l+=1){var h=o[l];t+='<tr><td style=\"font:11px monospace\">Removing <strong>'+h.name+'</strong></td><td style=\"text-align:right\">'+(h.baseline>0?'<span style=\"color:green\">saves</span>':'<span style=\"color:red\">adds</span>')+'</td><td style=\"text-align:right; font:11px monospace\">'+Math.abs(h.baseline)+'ms</td><td style=\"text-align:right; font:11px monospace\">'+h.runTime+\"ms</td></tr>\\n\"}t+=\"</tbody></table><hr/>\",t+='<table><tr><td style=\"text-align:right; font:10px monospace\">Selectors Tested:</td><td style=\"font:10px monospace\">'+i.length+'</td></tr><tr><td style=\"text-align:right; font:10px monospace\">Baseline Time:</td><td style=\"font:10px monospace\">'+a.__baseline__.runTime+\"ms</td></tr>\",y(s,{width:600}),n.innerHTML=t}},T=function(e){e.iteration=0,d(e.selector,e.cfg.incremental),b(e),e.start=+new Date,$(e)},x=function(e,t){if(e.allSelectors.length>0){var i=e.allSelectors.splice(0,1)[0],r={name:i.name,cfg:e,selector:i,callback:{fn:x,scope:this,args:[e,t]}};T(r)}else w(e.incremental),aria.ext.StressCss.__callback(t)},E=function(e,t){a={};var i={name:\"__baseline__\",cfg:e,selector:null,callback:{fn:x,scope:this,args:[e,t]}};T(i)},A={repeat:2,silent:!1,widget:!1,action:function(t,i,r){for(var a=0,s=e.rootTemplates.length;a<s;a+=1)e.rootTemplates[a].$refresh();r()},incremental:!1},I=function(e){e=e||{};for(var t in A)!A.hasOwnProperty(t)||t in e||(e[t]=A[t]);return e.allSelectors=p(e.widget),e};module.exports=e.classDefinition({$classpath:\"aria.ext.StressCss\",$singleton:!0,$prototype:{stressTest:function(e,t){c(),e=I(e),v(),e.silent||C(),E(e,t)},getResults:function(){return a},__callback:function(e){h(),this.$callback(e)}}})}();");
