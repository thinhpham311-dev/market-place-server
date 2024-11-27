"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _designSystem = require("@adminjs/design-system");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DrawerComponent = function DrawerComponent(_ref) {
  var isOpen = _ref.isOpen;
  return /*#__PURE__*/_react["default"].createElement(Drawer, {
    isHidden: isOpen
  }, /*#__PURE__*/_react["default"].createElement(DrawerContent, null, /*#__PURE__*/_react["default"].createElement(H3, null, /*#__PURE__*/_react["default"].createElement(_designSystem.Button, {
    mr: "lg",
    rounded: true,
    size: "icon"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    icon: "ChevronRight"
  })), "Edit"), /*#__PURE__*/_react["default"].createElement(_designSystem.Box, {
    my: "x3",
    p: 0
  }, /*#__PURE__*/_react["default"].createElement(_designSystem.Button, null, /*#__PURE__*/_react["default"].createElement(Icon, {
    icon: "Info"
  }), "Info"), /*#__PURE__*/_react["default"].createElement(_designSystem.Button, {
    ml: "lg"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    icon: "Trash2"
  }), "Delete")), /*#__PURE__*/_react["default"].createElement(H4, null, "Primary Fields"), /*#__PURE__*/_react["default"].createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed"), /*#__PURE__*/_react["default"].createElement(FullFeaturedFormGroup, null)), /*#__PURE__*/_react["default"].createElement(DrawerFooter, null, /*#__PURE__*/_react["default"].createElement(_designSystem.Button, {
    variant: "contained"
  }, "Save")));
};
var _default = exports["default"] = DrawerComponent;