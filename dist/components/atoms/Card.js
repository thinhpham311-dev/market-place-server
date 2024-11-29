"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _react = _interopRequireDefault(require("react"));
var _designSystem = require("@adminjs/design-system");
var _excluded = ["children", "title", "buttonText"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Card = exports.Card = function Card(_ref) {
  var children = _ref.children,
    title = _ref.title,
    buttonText = _ref.buttonText,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_designSystem.Box, {
    "data-css": "default-dashboard",
    variant: "container"
  }, /*#__PURE__*/_react["default"].createElement(_designSystem.Box, {
    flex: true,
    flexDirection: "row"
  }, /*#__PURE__*/_react["default"].createElement(_designSystem.Box, {
    flexGrow: 1
  }, /*#__PURE__*/_react["default"].createElement(_designSystem.Header.H4, null, title)), /*#__PURE__*/_react["default"].createElement(_designSystem.Box, {
    flexShrink: 0
  }, /*#__PURE__*/_react["default"].createElement(_designSystem.Button, props, buttonText))), /*#__PURE__*/_react["default"].createElement(_designSystem.Box, null, children));
};