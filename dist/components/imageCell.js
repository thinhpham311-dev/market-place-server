"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _designSystem = require("@adminjs/design-system");
var _atoms = require("../components/atoms");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ImageCellComponent = function ImageCellComponent(_ref) {
  var record = _ref.record,
    property = _ref.property;
  return /*#__PURE__*/_react["default"].createElement(_designSystem.Box, {
    "data-css": "default-dashboard",
    variant: "container"
  }, /*#__PURE__*/_react["default"].createElement(_atoms.CustomAvatar, {
    record: record,
    property: property === null || property === void 0 ? void 0 : property.name,
    size: 100
  }));
};
var _default = exports["default"] = ImageCellComponent;