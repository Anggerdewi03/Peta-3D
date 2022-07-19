// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/DashboardTheme/_build-generate_module":function(){define(["dojo/text!./common.css","dojo/text!./styles/default/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/DashboardTheme/common.css":'.jimu-dashboard-panel{position: relative; z-index: 60; overflow: visible;}.jimu-dashboard-panel .title{position: relative; height: 30px; width: 100%; cursor: move;}.jimu-dashboard-panel .title-label{overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 30px; position: absolute; left: 20px; right: 72px; font-size: 14px; font-weight: normal;}.jimu-dashboard-panel.minimized .title-label{display: none;}.jimu-rtl .jimu-dashboard-panel .title-label{right: 48px; left: 96px;}.jimu-dashboard-panel .title .icon-close{font-size: 12px; cursor: pointer; margin: 6px 10px; color: #FFF;}.jimu-dashboard-panel .jimu-panel-content {height: 100%;}#map {position: relative !important; background-color: rgb(238, 238, 238); overflow: hidden; min-width: 1px; min-height: 1px; left: auto !important; top: auto !important; right: auto !important; bottom: auto !important; padding: 0px; z-index: auto; width: 100% !important; height: 100% !important;}.hidden {display: none !important;}.jimu-dnd-layout {position: absolute; top: 80px; left: 0; right: 0; bottom: 0;}.jimu-edit-layout {position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 100;}.jimu-dnd-layout.modify-btn {border-radius: 24px; -webkit-border-radius: 24px; -moz-border-radius: 24px; position: absolute; top: 20px; right: 20px; left: auto; height: 48px; line-height: 48px; cursor: pointer; z-index: 110; background-color: rgba(102,102,102,0.3); border: none; font-size: 14px;}.jimu-rtl .jimu-dnd-layout.modify-btn {left: 20px; right: auto;}.jimu-dnd-layout.modify-btn \x3e div {border-radius: 18px; -webkit-border-radius: 18px; -moz-border-radius: 18px; margin: 6px; height: 36px; line-height: 36px; cursor: pointer; padding: 0 24px; color: #FFF; background-image: linear-gradient(90deg, #FF6400 1%, #FF9A19 98%); border: none;}.jimu-dnd-layout.modify-btn \x3e div:hover{background-color: #CC6600; background-image: none;}.jimu-dnd-layout.modify-btn .feature-action{color: #FFF; font-size: 12px; margin-right: 10px;}.jimu-rtl .jimu-dnd-layout.modify-btn .feature-action{margin-right: auto; margin-left: 10px;}.layout-actionbar .jimu-btn {background: #0D93AF; border-radius: 0; height: 40px; margin-top: 25px; line-height: 40px; padding: 0 24px;}.layout-actionbar .jimu-btn-vacation {background: transparent; border-radius: 0; height: 40px; margin-top: 25px; line-height: 40px; color: #979797; border: 1px solid #979797; cursor: pointer; min-width: 70px; display: inline-block; padding: 0 15px; text-align: center; padding: 0 24px; font-size: 14px;}.layout-actionbar .jimu-btn-vacation:hover {background: #0D93AF; color: #FFFFFF; border: 1px solid transparent;}.layout-actionbar .save-btn,.layout-actionbar .add-btn,.layout-actionbar .cancel-btn {height: 36px; line-height: 36px;}.layout-actionbar .save-btn{background-image: linear-gradient(90deg, #0D93AF 0%, #1EC5D8 100%); border-radius: 100px; border: none;}.layout-actionbar .save-btn:hover{background-color: #0C839C; background-image: none;}.layout-actionbar .add-btn{background-image: linear-gradient(90deg, #FF7912 1%, #FFB250 96%); border-radius: 100px; border: none;}.layout-actionbar .add-btn:hover{background-color: #CC6600; background-image: none;}.layout-actionbar .cancel-btn {border-radius: 100px;}.layout-actionbar .cancel-btn:hover{background-color: #0C839C;}.layout-actionbar .save-btn {margin-left: 10px; margin-right: 10px;}.jimu-edit-layout .layout-container {width: 100%; height: calc(100% - 80px);}.jimu-edit-layout .lm_item_container \x3e .lm_dragmask,.jimu-edit-layout .lm_item_container \x3e .lm_dragmask .lm_drag_handler {display: block !important;}.jimu-edit-layout .lm_item_container \x3e .lm_dragmask .lm_drag_handler {position: absolute; top: 0; left: 0; bottom: 0; right: 0; cursor: move;}.jimu-edit-layout .layout-actionbar {width: 100%; height: 80px; background: #444444;}.lm_header .lm_tab{font-family: "Avenir Light" !important;}.jimu-edit-layout .lm_header .lm_tabs .lm_close_tab,.jimu-edit-layout .lm_header .lm_controls .lm_maximise {display: none !important;}.jimu-dnd-layout .lm_controls .lm_close,.jimu-dnd-layout .lm_close_tab {display: none !important;}.jimu-dnd-layout .lm_header .lm_tabdropdown_list {z-index: 105;}.jimu-dnd-layout.config .lm_splitter .lm_drag_handle {cursor: default;}.jimu-edit-layout .lm_header {cursor: pointer;}.lm_header.no-tabs \x3e .lm_tabs{display: none;}.lm_stack.highlight .lm_stack_highlight {display: block; background-color: rgba(232, 75, 75, 0.4); border: 2px solid #e84b4b; z-index: 105;}.lm_content {position: relative;}.lm_content .jimu-panel {width: 100%; height: 100%;}.jimu-dnd-layout.config .lm_content .tip {display: block;}.lm_content .tip {position: relative; top: 50%; margin: -70px 10px 0 10px; display: none;}.lm_content .tip .idx {width: 90px; height: 90px; border: 1px solid #666666; border-radius: 45px; text-align: center; color: #666; font-size: 36px; margin: 15px auto; line-height: 90px;}.lm_content .tip .label {color: #666; text-align: center;}.jimu-edit-layout .maptip {position: relative; top: 50%; margin: -18px 10px 0 10px; text-align: center; color: #666; font-size: 36px;}.jimu-rtl .lm_header .lm_tab {float: right;}.jimu-rtl .lm_header .lm_controls {left: 3px; right: auto;}.jimu-rtl .lm_header .lm_controls\x3eli {float: right;}.jimu-rtl .lm_header .lm_tabdropdown_list {right: auto; left: 0;}',
"url:themes/DashboardTheme/styles/default/style.css":'.lm_goldenlayout{background:#000000}.lm_content{background:#222222}.lm_dragProxy .lm_content{box-shadow:2px 2px 4px rgba(0,0,0,0.9)}.lm_dropTargetIndicator{box-shadow:inset 0 0 30px #000000;outline:1px dashed #cccccc;transition:all 200ms ease}.lm_dropTargetIndicator .lm_inner{background:#000000;opacity:.2}.lm_splitter{background:#000000;opacity:.001;transition:opacity 200ms ease}.lm_splitter:hover,.lm_splitter.lm_dragging{background:#444444;opacity:1}.lm_header{height:20px;user-select:none}.lm_header.lm_selectable{cursor:pointer}.lm_header .lm_tab{font-family:Arial,sans-serif;font-size:12px;color:#999999;background:#111111;box-shadow:2px -2px 2px rgba(0,0,0,0.3);margin-right:2px;padding-bottom:2px;padding-top:2px}.lm_header .lm_tab .lm_close_tab{width:11px;height:11px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAATElEQVR4nG3OwQ0DMQwDwZGRBtR/j1YJzMc5+IDoR+yCVO29g+pu981MFgqZmRdAfU7+CYWcbF11LwALjpBL0N0qybNx/RPU+gOeiS/+XCRwDlTgkQAAAABJRU5ErkJggg\x3d\x3d);background-position:center center;background-repeat:no-repeat;top:4px;right:6px;opacity:.4}.lm_header .lm_tab .lm_close_tab:hover{opacity:1}.lm_header .lm_tab.lm_active{border-bottom:none;box-shadow:0 -2px 2px #000000;padding-bottom:3px}.lm_header .lm_tab.lm_active .lm_close_tab{opacity:1}.lm_selected .lm_header{background-color:#452500}.lm_tab:hover,.lm_tab.lm_active{background:#222222;color:#dddddd}.lm_header .lm_controls .lm_tabdropdown:before{color:#ffffff}.lm_controls\x3eli{position:relative;background-position:center center;background-repeat:no-repeat;opacity:.4;transition:opacity 300ms ease}.lm_controls\x3eli:hover{opacity:1}.lm_controls .lm_popout{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAPklEQVR4nI2Q0QoAIAwCNfr/X7aXCpGN8snBdgejJOzckpkxs9jR6K6T5JpU0nWl5pSXTk7qwh8SnNT+CAAWCgkKFpuSWsUAAAAASUVORK5CYII\x3d)}.lm_controls .lm_maximise{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAKElEQVR4nGP8////fwYCgImQAgYGBgYWKM2IR81/okwajIpgvsMbVgAwgQYRVakEKQAAAABJRU5ErkJggg\x3d\x3d)}.lm_controls .lm_close{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAQUlEQVR4nHXOQQ4AMAgCQeT/f6aXpsGK3jSTuCVJAAr7iBdoAwCKd0nwfaAdHbYERw5b44+E8JoBjEYGMBq5gAYP3usUDu2IvoUAAAAASUVORK5CYII\x3d)}.lm_maximised .lm_header{background-color:#000000}.lm_maximised .lm_controls .lm_maximise{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJ0lEQVR4nGP8//8/AzGAiShVI1YhCwMDA8OsWbPwBmZaWhoj0SYCAN1lBxMAX4n0AAAAAElFTkSuQmCC)}.lm_transition_indicator{background-color:#000000;border:1px dashed #555555}.lm_popin{cursor:pointer}.lm_popin .lm_bg{background:#ffffff;opacity:.3}.lm_popin .lm_icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAAAWklEQVR4nJWOyw3AIAxDHcQC7L8jbwT3AlJBfNp3SiI7dtRaLSlKKeoA1oEsKSQZCEluexw8Tm3ohk+E7bnOUHUGcNh+HwbBygw4AZ7FN/Lt84p0l+yTflV8AKQyLdcCRJi/AAAAAElFTkSuQmCC);background-position:center center;background-repeat:no-repeat;border-left:1px solid #eeeeee;border-top:1px solid #eeeeee;opacity:.7}.lm_popin:hover .lm_icon{opacity:1}.claro .dijitSelect{background-color: #222;}.claro .dijitSelectHover,.claro .dijitSelectFocused{border: 1px solid #999;}.claro .dijitSelect .dijitArrowButton {background-color: #222;}.claro .dijitMenu{border:1px solid #999;}.claro .dijitMenu .dijitMenuItem{color: white;}.claro .dijitMenu .dijitMenuItem,.claro .dijitMenu .dijitMenuItem td{background-color: #333; border: 1px solid #333;}.claro .dijitMenu .dijitMenuItem:hover,.claro .dijitMenu .dijitMenuItem:hover td {background: #666; background: -ms-linear-gradient(#666, #666); background: linear-gradient(#666, #666);}.claro .dijitMenu .dijitMenuItemSelected,.claro .dijitMenu .dijitMenuItemSelected td{background-color: #666;}.claro .dijitMenu .dijitMenuItemSelected td{color: white;}.claro .dijitMenuItem .esriTravelModesTypeName{color: #fff;}.claro .dijitMenuItem .dijitMenuItemSelected td:hover .esriTravelModesTypeName{color: #666;}.claro .dijitDialog {background-color: #222;}.claro .dijitDialogTitle {color: #fff;}.claro .dijitDialogTitleBar {border: 0px solid #222; border-bottom: 1px solid #000; background-color: #222; background-image: none;}.claro .dijitTooltipContainer,.claro .dijitDialogPaneContent {background-color: #222; border: 0px solid #222; color: #fff;}.claro .dijitDialogPaneContent {float: right;}.claro .dijitTextBox {border-color: #999; background-color: #222;}.claro .dijitTextBox, .claro .dijitInputInner {color: #fff;}.claro .dijitTextBoxFocused {background-color: #222; border: 1px solid #fff;}.claro .dijitTextBoxHover {background-color: #666;}.claro .dijitTextBoxFocused .dijitInputContainer {background: #222;}.claro .dijitTab{background: #222; color: white;}.claro .dijitTabContainerTop-tabs .dijitTabChecked{background: #333;}.claro .dijitTabContainerTop-dijitContentPane{background: #222; color: white;}.claro .dijitTooltipContainer {background: #222; color: white; border-color: #999;}.claro .dijitColorPalette{background: #222;}.claro .dijitComboBox .dijitButtonNode,.claro .dijitSelect .dijitArrowButton {background-image: none; background-color: transparent;}.claro .dijitComboBox .dijitArrowButtonContainer,.claro .dijitSelect .dijitArrowButtonContainer {border-width: 0 !important;}.claro .dijitSelect .dijitButtonContents {border-style: none;}.claro .dijitButton .dijitButtonNode {border: 0px solid #000000; background-image: none; background-color: #666; padding: 5px 18px 8px 18px; font-size: 14px;}.claro .dijitButtonHover .dijitButtonNode {background-color: #333;}.claro .dijitTreeRow{background-color: #333; color: white;}.claro .dijitTabPaneWrapper, .claro .dijitToolbar{background-color: #222;}.claro .dijitToolbar .dijitToggleButtonChecked .dijitButtonNode{background-color: #666;}.claro .dijitDropDownButton .dijitButtonNode,.claro .dijitButton .dijitButtonNode,.claro .dijitToggleButton .dijitButtonNode{color: white;}.claro .dijitButtonDisabled .dijitButtonNode{color: #bbb;}.claro .dgrid-header, .dgrid-header-row, .dgrid-footer {background-color: #222;}.claro .dijitTooltipConnector{background-image: url("../dark-styles/images/tooltip_dark.png");}.claro .dojoxCheckedMultiSelectFocused .dojoxCheckedMultiSelectWrapper {border: 1px solid #b5bcc7;}.claro .dojoxCheckedMultiSelect .dojoxCheckedMultiSelectWrapper {background-color: #222;}.claro .dojoxCheckedMultiSelectHover .dojoxCheckedMultiSelectWrapper {background-color: #666;}.arcgisSearch .searchGroup .searchInput{background: #222; color: white;}.arcgisSearch .searchMenu{background-color: #333; color: white;}.arcgisSearch .searchMenu li:hover, .arcgisSearch .searchMenu li:focus{background-color: #666;}.simpleDirections .esriDirectionsButton{background-color: #999; border: none;}.simpleDirections .esriDirectionsPressedButton, .simpleDirections .esriDirectionsPressedButton:hover {background-color: #999; border: 2px solid #FFFFFF;}.simpleDirections .esriResultsContainer{background-color: #999;}.templatePicker {border-color: #666; border-radius: 0;}.templatePicker * {background-color: transparent !important;}.esriTemplatePicker * {border: none !important;}.templatePicker .dojoxGridMasterMessages {color: #666;}.claro .templatePicker .dijitToolbar {padding: 5px 0; background: transparent !important; background-image: none !important; background-color: #c1c1c1 !important; border: none !important;}.claro .templatePicker .dijitToolbar .dijitButtonHover .dijitButtonNode,.claro .templatePicker .dijitToolbar .dijitDropDownButtonHover .dijitButtonNode,.claro .templatePicker .dijitToolbar .dijitToggleButtonHover .dijitButtonNode,.claro .templatePicker .dijitToolbar .dijitComboButtonHover .dijitButtonNode {background-image: none !important; background-color: #262626; background-color: rgba(0, 0, 0, 0.5) !important;}.templatePicker .grid .dojoxGridRowOver .dojoxGridCell {color: #cccccc !important;}.templatePicker .grid .dojoxGridCellFocus {border: none !important;} .esriAttributeInspector .dijitTextBox{background-color: #333 !important; border: none;}.esriAttributeInspector .dijitTextBoxHover{background-color: #666 !important; background-image: none;}.esriAttributeInspector .dijitTextBoxFocused {background-color: #666 !important;}.esriAttributeInspector .dijitButton .dijitButtonNode {border: 1px solid #ccc !important; background-color: #4c4c4c !important; color: #fff !important;}.esriAttributeInspector .atiButton.disable .dijitButtonNode{background-color: #aaa !important; color: #4c4c4c !important;}.esriAttributeInspector .dijitTextBoxFocused .dijitInputContainer {background: transparent;}.jimu-widget-edit .esriDrawingToolbar {background: #666;}.simpleDirections .esriLinkButton {color: #FFF;}.simpleDirections .esriDirectionsDDLArrow {border-top-color: #FFF;}.esriMeasurement .esriToggleButton .dijitButtonNode {color: #FFF;}.esri-area-measurement-3d__measurement,.esri-direct-line-measurement-3d__measurement {background-color: transparent;}.esriPopup .contentPane,.esriPopup .actionsPane,.esriPopup .pointer,.esriPopup .outerPointer {background: #222; color: #FFF;}.esriPopup a {color: #ccc;}.esriPopup a:hover {color: #fff;}.esriMobileInfoView {background: #222; color: #FFF;}.esriMobileInfoView .esriMobileInfoViewItem {color: #fff;}.arcgisSearch .searchBtn {background-color: #222; color: #CCC;}.arcgisSearch .searchBtn:hover,.arcgisSearch .searchBtn:focus {background-color: #333;}.arcgisSearch .searchClear {background-color: #666;}.esriImageServiceMeasureButtonContainer, .esriMeasureButton, .esriMeasureButton .dijitButtonNode,.esriImageServiceMeasure .dijitDropDownButton .dijitButtonNode{background-color: #222;}.esri-select {color: #FFF; border: 1px solid rgba(255,255,255,0.25);}.jimu-icon-close-8{background-position: -0px -0px;width:8px;height:8px;}.jimu-icon-close-8.jimu-state-hover{background-position: -13px -0px;width:8px;height:8px;}.jimu-icon-close-8:hover{background-position: -13px -0px;width:8px;height:8px;}.jimu-icon-down-arrow-8{background-position: -0px -13px;width:8px;height:8px;}.jimu-icon-down-arrow-8.jimu-state-hover{background-position: -13px -13px;width:8px;height:8px;}.jimu-icon-down-arrow-8:hover{background-position: -13px -13px;width:8px;height:8px;}.jimu-icon-left-arrow-8{background-position: -0px -26px;width:8px;height:8px;}.jimu-icon-right-arrow-8{background-position: -0px -39px;width:8px;height:8px;}.jimu-icon-right-arrow-8.jimu-state-hover{background-position: -13px -39px;width:8px;height:8px;}.jimu-icon-right-arrow-8:hover{background-position: -13px -39px;width:8px;height:8px;}.jimu-icon-add{background-position: -0px -60px;width:16px;height:16px;}.jimu-icon-add.jimu-state-disabled{background-position: -63px -60px;width:16px;height:16px;}.jimu-icon-add.jimu-state-hover{background-position: -21px -60px;width:16px;height:16px;}.jimu-icon-add:hover{background-position: -21px -60px;width:16px;height:16px;}.jimu-icon-checkbox{background-position: -0px -81px;width:16px;height:16px;}.jimu-icon-checkbox.jimu-state-hover{background-position: -21px -81px;width:16px;height:16px;}.jimu-icon-checkbox:hover{background-position: -21px -81px;width:16px;height:16px;}.jimu-icon-checkbox.jimu-state-disabled{background-position: -63px -81px;width:16px;height:16px;}.jimu-icon-checked{background-position: -0px -102px;width:16px;height:16px;}.jimu-icon-checked.jimu-state-hover{background-position: -21px -102px;width:16px;height:16px;}.jimu-icon-checked:hover{background-position: -21px -102px;width:16px;height:16px;}.jimu-icon-checked.jimu-state-disabled{background-position: -63px -102px;width:16px;height:16px;}.jimu-icon-close{background-position: -0px -123px;width:16px;height:16px;}.jimu-icon-close.jimu-state-hover{background-position: -21px -123px;width:16px;height:16px;}.jimu-icon-close:hover{background-position: -21px -123px;width:16px;height:16px;}.jimu-icon-delete{background-position: -0px -144px;width:16px;height:16px;}.jimu-icon-delete.jimu-state-hover{background-position: -21px -144px;width:16px;height:16px;}.jimu-icon-delete:hover{background-position: -21px -144px;width:16px;height:16px;}.jimu-icon-delete.jimu-state-disabled{background-position: -63px -144px;width:16px;height:16px;}.jimu-icon-down{background-position: -0px -165px;width:16px;height:16px;}.jimu-icon-down.jimu-state-hover{background-position: -21px -165px;width:16px;height:16px;}.jimu-icon-down:hover{background-position: -21px -165px;width:16px;height:16px;}.jimu-icon-down.jimu-state-disabled{background-position: -63px -165px;width:16px;height:16px;}.jimu-icon-edit{background-position: -0px -186px;width:16px;height:16px;}.jimu-icon-edit.jimu-state-hover{background-position: -21px -186px;width:16px;height:16px;}.jimu-icon-edit:hover{background-position: -21px -186px;width:16px;height:16px;}.jimu-icon-edit.jimu-state-disabled{background-position: -63px -186px;width:16px;height:16px;}.jimu-icon-error{background-position: -0px -207px;width:16px;height:16px;}.jimu-icon-folder-close{background-position: -0px -228px;width:16px;height:16px;}.jimu-icon-folder-close.jimu-state-hover{background-position: -21px -228px;width:16px;height:16px;}.jimu-icon-folder-close:hover{background-position: -21px -228px;width:16px;height:16px;}.jimu-icon-folder-open{background-position: -0px -249px;width:16px;height:16px;}.jimu-icon-folder-open.jimu-state-hover{background-position: -21px -249px;width:16px;height:16px;}.jimu-icon-folder-open:hover{background-position: -21px -249px;width:16px;height:16px;}.jimu-icon-search{background-position: -0px -270px;width:16px;height:16px;}.jimu-icon-search.jimu-state-disabled{background-position: -63px -270px;width:16px;height:16px;}.jimu-icon-search.jimu-state-hover{background-position: -21px -270px;width:16px;height:16px;}.jimu-icon-search:hover{background-position: -21px -270px;width:16px;height:16px;}.jimu-icon-setting{background-position: -0px -291px;width:16px;height:16px;}.jimu-icon-setting.jimu-state-hover{background-position: -21px -291px;width:16px;height:16px;}.jimu-icon-setting:hover{background-position: -21px -291px;width:16px;height:16px;}.jimu-icon-setting.jimu-state-disabled{background-position: -63px -291px;width:16px;height:16px;}.jimu-icon-up{background-position: -0px -312px;width:16px;height:16px;}.jimu-icon-up.jimu-state-hover{background-position: -21px -312px;width:16px;height:16px;}.jimu-icon-up:hover{background-position: -21px -312px;width:16px;height:16px;}.jimu-icon-up.jimu-state-disabled{background-position: -63px -312px;width:16px;height:16px;}.jimu-icon-white-close{background-position: -0px -333px;width:16px;height:16px;}::-webkit-scrollbar {border-radius: 3px; width: 6px; background-color: #000000;}::-webkit-scrollbar-thumb {border-radius: 3px; background: #999999;}::-webkit-scrollbar-thumb:hover {background: #EEEEEE;}.feature-action {color: rgba(255, 255, 255, 0.5);}.feature-action:hover {color: #FFF;}.jimu-panel{background-color: #222; border: none;}.jimu-widget-frame.jimu-container{background-color: #222; padding-bottom: 0;}.jimu-widget{color: white;}.jimu-widget-subtitle {color: #fff;}.jimu-input{background: #222; border: 1px solid #999; color: #ccc;}.jimu-search .jimu-input {background: #222 !important; color: #fff}.jimu-input:focus{border: 1px solid #fff; color: #fff;}.jimu-btn{background-color: #666; color: #ffffff;}.jimu-btn-vacation{}.jimu-btn:hover{background-color: #333; color: #ffffff;}.jimu-btn-vacation:hover{}.jimu-btn:active{background-color: #333; color: #ffffff;}.jimu-btn.jimu-state-disabled{background-color: #666; color: #999;}.jimu-btn.jimu-priority-secondary{}.jimu-btn.jimu-priority-secondary:hover{}.jimu-btn.jimu-priority-secondary:active{}.jimu-btn.jimu-priority-secondary.jimu-state-disabled{}.jimu-tab3 .tab-item-td{color: #999; border-bottom: 1px solid #666;}.jimu-tab3 .tab-item-td.jimu-state-active{color: #fff; border-bottom: 2px solid #fff; font-weight: bold;}.jimu-tab\x3e.control\x3e.tab{background-color: #222; border-top: 1px solid #222; border-left: 1px solid #222; border-right: 1px solid #222; border-bottom: 1px solid #666;}.jimu-tab\x3e.control\x3e.tab.jimu-state-selected{background-color: #222; border-top: 1px solid #666; border-left: 1px solid #666; border-right: 1px solid #666; border-bottom: 1px solid #222; color: #fff;}.jimu-tab\x3e.jimu-viewstack{background-color: #222;}.jimu-tab.nested\x3e.control\x3e.tab{background-color: #222;}.jimu-tab.nested\x3e.control\x3e.tab.jimu-state-selected{background-color: #222;}.jimu-simple-table .simple-table-row:hover{background-color: #666; color: white;}.jimu-simple-table .simple-table-row.jimu-state-active{background-color: #999; color: white;}.popup-menu .menu-content {background: #222;}.popup-menu .menu-title .label {color: #FFF;}.popup-menu .popup-menu-item:hover,.popup-menu .popup-menu-item.selected {background: #666;}.popup-menu .popup-menu-item .icon {width: 40px; height: 40px;}.popup-menu .popup-menu-item .icon div {color: #FFF;}.popup-menu .popup-menu-item .label {color: #FFF;}.jimu-draw-box .draw-item {color: white;}.jimu-draw-box .draw-items .draw-item{border: 1px solid #666;}.jimu-draw-box .draw-item.jimu-state-active {background-color: #666;}.jimu-dropmenu .drop-menu{background-color: #333333 !important; color: #ffffff; border: 1px solid #999999 !important; box-shadow: none !important;}.jimu-dropmenu .menu-item:hover{background-color: #666666 !important; color: #ffffff !important;}.jimu-dropmenu .menu-item-line {border: 1px solid #999999 !important;}.jimu-dijit-dropdownmenu {background: url("../dark-styles/images/dropdown.svg") center center no-repeat;}.jimu-dijit-dropdownmenu:hover, .jimu-dijit-dropdownmenu.showing {background-image: url("../dark-styles/images/dropdown_hover.svg");}.jimu-dijit-dropdownmenu-items-container {background: #666; color: #fff;}.esriPopup .related-records-popup-projector .content-box .item, .esriMobileInfoView.esriMobilePopupInfoView .content-box .item {background-color: #333; color: #fff; padding-left: 4px;}.esriPopup .related-records-popup-projector .content-box .item.oddLine, .esriMobileInfoView.esriMobilePopupInfoView .content-box .item.oddLine {background-color: transparent;}.jimu-input.flDropDown{background-color: #4c4c4c !important; border: 1px solid #999; color: #ccc;}.jimu-input.searchtextbox {background-color: #4c4c4c !important; border: 1px solid #999; color: #ccc;}.jimu-widget-share{color: white;}.jimu-widget-share .subTitle{color: white;}.jimu-widget-share .shareLink .inputsText {color: #ccc;}.jimu-widget-share .shareLink .optionsRow .labels{color: #ccc;}.jimu-widget-onscreen-icon,.jimu-widget-placeholder {background-color: rgba(0, 0, 0, 0.5); width: 36px !important; height: 36px !important; border: none; border-radius: 0; -webkit-border-radius: 0; -moz-border-radius: 0; opacity: 1;}.jimu-widget-onscreen-icon img {width: 16px; height: 16px; margin: 10px;}.jimu-widget-placeholder .inner {width: 12px; height: 12px; margin: 0 auto; line-height: 40px; border-radius: 0; -webkit-border-radius: 0; -moz-border-radius: 0; background-color: transparent;}.jimu-tree .jimu-tree-selected-leaf-node \x3e .dijitTreeRow{background-color: #222; color: white;}.jimu-tree .jimu-tree-not-leaf-node \x3e .dijitTreeRowSelected{background-color: #222;}.jimu-tree .jimu-tree-not-leaf-node \x3e .dijitTreeRowSelected.dijitTreeRowHover {background-color:#666;}.jimu-popup{background-color: #333; color: white;}.jimu-popup \x3e .title{color: white; border-bottom: 1px solid #666;}.jimu-transparency .dijitRuleLabelContainer .dijitRuleLabel.dijitRuleLabelH{color: #fff;}.jimu-multiple-layers-featureset-chooser .btn-select{background-color: #222; color: #fff;}.jimu-multiple-layers-featureset-chooser .btn-select.selected{background-color: #666; border: 3px solid #CCCCCC;}.jimu-multiple-layers-featureset-chooser.disabled .btn-select{background-color: #222 !important; border: 1px solid #666 !important; color: #666 !important;}.jimu-multiple-layers-featureset-chooser .btn-select,.jimu-multiple-layers-featureset-chooser .current-draw-item .arrow {background-color: transparent !important;}.jimu-multiple-layers-featureset-chooser .current-draw-item .arrow{opacity: 0.5;}.jimu-multiple-layers-featureset-chooser .current-draw-item .arrow:hover{opacity: 1;}.jimu-multiple-layers-featureset-chooser .current-draw-item{background-color: #222; border: 1px solid #999; color: #ccc;}.jimu-multiple-layers-featureset-chooser .current-draw-item.pressed{background-color: #000; color: white; border: none;}.jimu-multiple-layers-featureset-chooser.disabled .current-draw-item{background-color: #222 !important; border: 1px solid #666 !important; color: #666 !important;}.jimu-multiple-layers-featureset-chooser.disabled .current-draw-item .arrow{opacity: 0.5 !important;}.jimu-multiple-layers-featureset-chooser.disabled .current-draw-item .select-icon{opacity: 0.5;}.jimu-multiple-layers-featureset-chooser .btn-clear .clear-icon{background: url("../dark-styles/images/icon-clear.png") center center no-repeat;}.jimu-multiple-layers-featureset-chooser .btn-clear{background-color: #222; border: 1px solid #999;}.jimu-multiple-layers-featureset-chooser .btn-clear .clear-text{color: #ccc;}.jimu-multiple-layers-featureset-chooser .btn-clear:hover {background-color: #FF0000; border: none;}.jimu-multiple-layers-featureset-chooser .btn-clear:hover .clear-text{color: white;}.jimu-multiple-layers-featureset-chooser.disabled .btn-clear{background-color: #222 !important; border: 1px solid #666666 !important;}.jimu-multiple-layers-featureset-chooser.disabled .btn-clear .clear-icon{opacity: 0.5 !important;}.jimu-multiple-layers-featureset-chooser.disabled .btn-clear .clear-text{color: #666 !important;}.jimu-single-filter,.jimu-filter-set{background: #333;}.jimu-filter-set .jimu-single-filter{background: transparent;}.jimu-single-filter-parameter .prompt{color: white;}.jimu-filter .desktop-add-section .add-menu{background-color: #333; box-shadow: 0px 0px 6px 0px rgba(255,255,255,0.50);}.jimu-filter .content-section \x3e .back-arrow{background: url("../dark-styles/images/arrow-back-white_normal.svg") no-repeat center;}.jimu-filter.mobile-mode .mobile-add-section .add-menu{background: #444;}.jimu-filter.mobile-mode .mobile-add-section .add-menu .add-menu-item{background: #333;}.jimu-filter .desktop-add-section .add-menu .add-menu-item:hover{background: #000;}.jimu-mobile-filter-popup{background: #333;}.jimu-mobile-filter-popup .jimu-filter{color: white;}.jimu-filter .allExpsBox{background: black;}.jimu-filter .value-type-popup{background-color: #444; color: white;}.jimu-filter .value-type-popup li:hover {background: #666;}.jimu-icon{background-image: url("../dark-styles/sprite.png");}.jimu-widget-zoom {background-color: transparent;}.jimu-widget-zoomslider.vertical .zoom-in {border-bottom: none;}.jimu-widget-zoom .esri-zoom .esri-widget {color: white; background: rgba(0,0,0,0.5); border-radius: 0; -webkit-border-radius: 0; -moz-border-radius: 0; margin-bottom: 5px;}.jimu-widget-home {color: white; background: rgba(0,0,0,0.5); border-radius: 0; -webkit-border-radius: 0; -moz-border-radius: 0;}.jimu-widget-navigate {background-color: transparent;}.jimu-widget-navigate .control-mode {color: white; background: rgba(0,0,0,0.5); border-radius: 0; -webkit-border-radius: 0; -moz-border-radius: 0; margin-bottom: 5px;}.jimu-widget-mylocation {color: white; background: rgba(0,0,0,0.5); border-radius: 0; -webkit-border-radius: 0; -moz-border-radius: 0;}.jimu-widget-fullScreen{z-index: 110;}.jimu-widget-fullScreen .fullScreen{background-color: rgba(0,0,0,0.2)}.jimu-widget-search .arcgisSearch .searchMenu li.active{background-color: #666; color: #FFF;}.jimu-widget-search .arcgisSearch .searchMenu li{background-color: #333; color: #FFF;}.jimu-widget-search .arcgisSearch .searchMenu li:hover,.jimu-widget-search .arcgisSearch .searchMenu li:focus {background-color: #666;}.jimu-widget-search .arcgisSearch .searchBtn:hover,.jimu-widget-search .arcgisSearch .searchBtn:focus {background-color: #333;}.jimu-widget-measurement .esri-direct-line-measurement-3d,.jimu-widget-measurement .esri-area-measurement-3d {background-color: transparent; color: inherit;}.jimu-widget-measurement select {background-color: transparent;}.jimu-widget-measurement select option {color: #333;}.jimu-widget-measurement .esri-button {background-color: #666; border-color: transparent; color: #fff;}.jimu-widget-measurement .esri-button:hover {background-color: #333;}.jimu-widget-measurement .esri-direct-line-measurement-3d__measurement-item--disabled,.jimu-widget-measurement .esri-area-measurement-3d__measurement-item--disabled {color: rgba(255,255,255,0.4);}.jimu-widget-measurement__hint {color: white;}.jimu-widget-measurement__header {border-bottom-color: rgba(255,255,255,0.5);}.jimu-button-group \x3e button {background-color: rgba(0,0,0,0.5); border: 0; line-height: 22px; color: white;}.jimu-button-group \x3e button:hover {background-color: rgba(0,0,0,0.75);}.jimu-button-group \x3e button.jimu-state-active {background-color: #24b5cc;}.jimu-button-group \x3e button + button::before {border-left-color: rgba(255,255,255,0.5);}.jimu-widget-share .shareLink .backBtn,.jimu-rtl .jimu-widget-share .shareLink .backBtn{background: url("../dark-styles/images/share/arrow-back.svg") no-repeat; background-position: 50% 50%;}.jimu-widget-share .shareLink .backBtn:hover,.jimu-rtl .jimu-widget-share .shareLink .backBtn:hover {background: url("../dark-styles/images/share/arrow-back_hover.svg") no-repeat; background-position: 50% 50%;}.jimu-rtl .shareLink .backBtn{transform: scaleX(-1); filter: FlipH;}.jimu-widget-share .shareLink .optionsRow .markers {background: url("../dark-styles/images/share/marker.svg") no-repeat; background-position: 50% 50%;}.jimu-widget-share .shareLink .optionsRow .markers:hover {background: url("../dark-styles/images/share/marker_hover.svg") no-repeat; background-position: 50% 50%;}.jimu-widget-share .shareLink .optionsRow .markers.selected {background: url("../dark-styles/images/share/marker_selected.svg") no-repeat; background-position: 50% 50%;}.jimu-widget-share .shareLink .email {background: url("../dark-styles/images/share/email.svg") no-repeat;}.jimu-widget-share .shareLink .email:hover {background: url("../dark-styles/images/share/email_hover.svg") no-repeat;}.jimu-widget-share .shareLink .facebook {background: url("../dark-styles/images/share/facebook.svg") no-repeat;}.jimu-widget-share .shareLink .facebook:hover {background: url("../dark-styles/images/share/facebook_hover.svg") no-repeat;}.jimu-widget-share .shareLink .twitter {background: url("../dark-styles/images/share/twitter.svg") no-repeat;}.jimu-widget-share .shareLink .twitter:hover {background: url("../dark-styles/images/share/twitter_hover.svg") no-repeat;}.jimu-widget-share .shareLink .googlePlus {background: url("../dark-styles/images/share/gplus.svg") no-repeat;}.jimu-widget-share .shareLink .googlePlus:hover {background: url("../dark-styles/images/share/gplus_hover.svg") no-repeat;}.jimu-widget-share .shareLink .shareLinkOptionsWrapper .optionsRow .shareCheckBoxes {width: 16px; height: 16px;}.jimu-widget-layerlist .ground-tip \x3e hr {border-color: #999;}.jimu-widget-layerlist .ground-tip span {background-color: #222; color: #999;}.esri-layer-list .esri-layer-list__no-items,.jimu-widget-layerlist .jimu-widget-layeritem .jimu-checkbox .label {color: #999;}.jimu-widget-layerlist .esri-layer-list__item-actions-menu-item {color: rgba(255,255,255,0.5);}.jimu-widget-layerlist .esri-layer-list__item-actions-menu-item:hover {background-color: transparent; color: white;}.jimu-widget-layerlist .esri-layer-list__item-actions-menu-item--active,.jimu-widget-layerlist .esri-layer-list__item-actions-menu-item--active:hover {background-color: transparent; color: #ededed;}.jimu-widget-layerlist .esri-layer-list__item {color: white;}.jimu-widget-legend .esri-legend {background-color: #222; color: white;}.jimu-widget-legend .esri-legend__service {border-bottom: 1px solid rgba(255,255,255,0.5);}.jimu-widget-basemap-gallery .esri-basemap-gallery__item-title,.jimu-widget-basemap-gallery .esri-basemap-gallery__item:hover .esri-basemap-gallery__item-title,.jimu-widget-basemap-gallery .esri-basemap-gallery__item:focus .esri-basemap-gallery__item-title,.jimu-widget-basemap-gallery .esri-basemap-gallery__item--selected .esri-basemap-gallery__item-title,.jimu-widget-basemap-gallery .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:hover .esri-basemap-gallery__item-title,.jimu-widget-basemap-gallery .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:focus .esri-basemap-gallery__item-title {color: white;}.jimu-widget-basemap-gallery .esri-basemap-gallery__item:hover,.jimu-widget-basemap-gallery .esri-basemap-gallery__item:focus{border-left-color: #444; background-color: #444;}.jimu-widget-basemap-gallery .esri-basemap-gallery__item--selected,.jimu-widget-basemap-gallery .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:hover,.jimu-widget-basemap-gallery .esri-basemap-gallery__item.esri-basemap-gallery__item--selected:focus {border-left-color: #666; background-color: #666;}a {color: #FFFFFF;}.jimu-main-background{background-color: #222222;}.jimu-widget-dnd-header{background: #444444;}.jimu-widget-dnd-header .logo{border-color: rgba(255,255,255,0.5);}.jimu-widget-dnd-header .titles{height: 100%; overflow: hidden;}.jimu-widget-dnd-header .jimu-title,.jimu-widget-dnd-header .links,.jimu-widget-dnd-header .links .jimu-link,.jimu-widget-dnd-header .signin-section .jimu-link{color: #FFFFFF;}.jimu-widget-dnd-header .jimu-subtitle {opacity: 0.8; color: #FFFFFF;}.lm_header {background: #222222;}.lm_content {border: none;}.lm_header .lm_tab,.lm_header .lm_tab.lm_active {background: #222222; margin-top: 0; margin-right: 0; border: none; box-shadow: none; padding-bottom: 4px;}.lm_header .lm_tabdropdown_list .lm_tab {background: #333;}.lm_header .lm_tab {color: #666;}.lm_header .lm_tab:hover,.lm_header .lm_tab.lm_active {color: #999;}.lm_header .lm_tab .lm_left,.lm_header .lm_tab .lm_right {display: none;}.lm_stack_highlight {width: 100%; height: 100%; border: 3px solid #49BDCA; box-sizing: border-box; background: transparent; display: none; position: relative; top: -100%;}.lm_header .lm_tab.highlight {background: transparent; box-shadow: 0px 0px 2px 2px #e84b4b inset;}.lm_splitter {background: #000; opacity: 1; transition: none;}.lm_splitter:hover,.lm_splitter.lm_dragging {background: #333;}.jimu-dnd-layout.config .lm_splitter:hover,.jimu-dnd-layout.config .lm_splitter.lm_dragging {background: #000;}.jimu-dnd-mobile-panel .splitter {background: #000000;}.jimu-dnd-mobile-panel .widget-area .panel-header {background: #000000; color: #FFFFFF;}.jimu-dnd-mobile-panel .widget-area .panel-header .count {color: #999999;}.jimu-dashboard-panel .title{background: #000000; color: #FFFFFF;}.jimu-dnd-mobile-controller .icon-section {width: 30px; height: 30px; background: url("../dark-styles/images/menu.svg") center no-repeat; background-size: 14px;}.jimu-dnd-layout, .jimu-edit-layout .layout-container {border: 5px solid #000;}',
"*now":function(a){a(['dojo/i18n!*preload*themes/DashboardTheme/nls/main*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])}}});define([],function(){});