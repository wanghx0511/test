var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var MainInfoUI = (function (_super) {
        __extends(MainInfoUI, _super);
        function MainInfoUI() {
            return _super.call(this) || this;
        }
        MainInfoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.MainInfoUI.uiView);
        };
        return MainInfoUI;
    }(View));
    MainInfoUI.uiView = { "type": "View", "props": { "width": 1920, "height": 1080 }, "child": [{ "type": "Image", "props": { "y": 30, "x": 36, "width": 174, "skin": "ui/Icn84005.png", "height": 183 } }, { "type": "ProgressBar", "props": { "y": 113, "x": 220, "width": 127, "skin": "ui/progress_time.png", "height": 24 } }, { "type": "Label", "props": { "y": 59, "x": 215, "width": 135, "text": "大魔王", "strokeColor": "#9f4342", "stroke": 3, "height": 46, "fontSize": 40, "color": "#f9f3f3", "bold": true } }, { "type": "Image", "props": { "y": 501, "x": 839, "width": 189, "var": "start", "skin": "ui/2306700.png", "height": 179 } }] };
    ui.MainInfoUI = MainInfoUI;
})(ui || (ui = {}));
(function (ui) {
    var StageInfoUI = (function (_super) {
        __extends(StageInfoUI, _super);
        function StageInfoUI() {
            return _super.call(this) || this;
        }
        StageInfoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.StageInfoUI.uiView);
        };
        return StageInfoUI;
    }(View));
    StageInfoUI.uiView = { "type": "View", "props": { "width": 1920, "name": "Level", "height": 1080 }, "child": [{ "type": "Image", "props": { "y": 490, "x": -275, "width": 2460, "skin": "comp/stage/caozuotai.png", "name": "Table", "height": 590 } }, { "type": "Sprite", "props": { "y": 177, "x": 320, "width": 1182.9999999999998, "name": "Furniture", "height": 321 }, "child": [{ "type": "Image", "props": { "y": 120.99999999999999, "x": -83.00000000000001, "width": 147, "skin": "comp/stage/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 120.99999999999999, "x": 188.00000000000003, "width": 147, "skin": "comp/stage/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 122, "x": 783.0000000000001, "width": 147, "skin": "comp/stage/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 122, "x": 1035.9999999999998, "width": 147, "skin": "comp/stage/zhuozi2.png", "name": "Desk1_R3", "height": 120 } }, { "type": "Image", "props": { "y": 127.00000000000004, "x": 280, "width": 192, "skin": "comp/stage/zhuozi2.png", "name": "Desk1_R2", "height": 155 } }, { "type": "Image", "props": { "y": 127.00000000000004, "x": 629.9999999999998, "width": 192, "skin": "comp/stage/zhuozi2.png", "name": "Desk1_R2", "height": 155 } }, { "type": "Image", "props": { "y": 132, "x": 9.000000000000043, "width": 227, "skin": "comp/stage/zhuozi2.png", "name": "Desk1_R1", "height": 186 } }, { "type": "Image", "props": { "y": 112, "x": 430, "width": 275, "skin": "comp/stage/zhuozi2.png", "name": "Desk1_R1", "height": 252 } }, { "type": "Image", "props": { "y": 135, "x": 865, "width": 227, "skin": "comp/stage/zhuozi2.png", "name": "Desk1_R1", "height": 186 } }] }] };
    ui.StageInfoUI = StageInfoUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map