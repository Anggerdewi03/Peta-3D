// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Coordinate/setting/CameraUnits.html":'\x3cdiv class\x3d"unit-type"\x3e\r\n  \x3ctd class\x3d"display"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"titleNode" class\x3d"unit-label"\x3e\x3c/div\x3e\r\n  \x3c/td\x3e\r\n  \x3ctd class\x3d"units"\x3e\r\n    \x3cfieldset id\x3d"unit-type" data-dojo-attach-point\x3d"fieldset"\x3e\r\n      \x3cdiv class\x3d"unit-item" data-dojo-attach-point\x3d"metricNode"\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"" id\x3d"" data-dojo-attach-point\x3d"metric" checked\x3d"checked" /\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"metricLabel" for\x3d"" title\x3d${nls.metric}\x3e${nls.metric}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"unit-item" data-dojo-attach-point\x3d"englishNode"\x3e\r\n        \x3cinput data-dojo-type\x3d"dijit/form/RadioButton" name\x3d"" id\x3d"" data-dojo-attach-point\x3d"english" /\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"englishLabel" for\x3d"" title\x3d${nls.english}\x3e${nls.english}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3c/fieldset\x3e\r\n  \x3c/td\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./CameraUnits.html jimu/utils dijit/form/Select".split(" "),function(c,b,d,e,f,g,h){return c([d,e,f],{templateString:g,postCreate:function(){this.inherited(arguments);this.titleNode.innerHTML=h.sanitizeHTML(this.title);b.setAttr(this.titleNode,"title",this.title);b.setAttr(this.fieldset,"id",this.id);b.setAttr(this.metric,"name",this.id);b.setAttr(this.metric,"id",this.id+"-metric");
b.setAttr(this.metricLabel,"for",this.id+"-metric");b.setAttr(this.english,"name",this.id);b.setAttr(this.english,"id",this.id+"-english");b.setAttr(this.englishLabel,"for",this.id+"-english")},setConfig:function(a){a||(a="metric");this._selectItem(a)},getConfig:function(){var a="";this.metric.get("checked")?a="metric":this.english.get("checked")&&(a="english");return a},_selectItem:function(a){this[a]&&this[a].setChecked&&this[a].setChecked(!0)}})});