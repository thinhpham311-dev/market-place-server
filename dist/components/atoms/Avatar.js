"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomAvatar = void 0;
var _react = _interopRequireDefault(require("react"));
var _designSystem = require("@adminjs/design-system");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CustomAvatar = exports.CustomAvatar = function CustomAvatar(_ref) {
  var record = _ref.record,
    property = _ref.property,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '100px' : _ref$size;
  // Assuming the image URL is stored in the record properties
  var imageUrl = record.params[property];
  var avatarStyle = {
    width: size,
    height: size,
    objectFit: 'cover' // Ensures the image covers the avatar area, maintaining aspect ratio
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, imageUrl ? /*#__PURE__*/_react["default"].createElement(_designSystem.Avatar, {
    alt: "Bubble Avatar",
    src: imageUrl,
    style: avatarStyle
  }) : /*#__PURE__*/_react["default"].createElement(_designSystem.Text, null, "No image available"));
};