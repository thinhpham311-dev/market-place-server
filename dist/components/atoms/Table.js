"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _designSystem = require("@adminjs/design-system");
var _styledComponents = require("@adminjs/design-system/styled-components");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Heading6 = (0, _styledComponents.styled)(_designSystem.Header.H6)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-weight: bold;\n    padding: 0;\n"])));
var CustomTable = exports.CustomTable = function CustomTable(_ref) {
  var data = _ref.data,
    columns = _ref.columns;
  return /*#__PURE__*/_react["default"].createElement(_designSystem.Table, null, /*#__PURE__*/_react["default"].createElement(_designSystem.TableHead, null, /*#__PURE__*/_react["default"].createElement(_designSystem.TableRow, null, columns.map(function (col, idx) {
    return /*#__PURE__*/_react["default"].createElement(_designSystem.TableCell, {
      key: idx,
      style: col.style
    }, /*#__PURE__*/_react["default"].createElement(Heading6, null, col.label));
  }))), /*#__PURE__*/_react["default"].createElement(_designSystem.TableBody, null, data.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement(_designSystem.TableRow, {
      key: rowIndex
    }, columns.map(function (col, cellIndex) {
      return /*#__PURE__*/_react["default"].createElement(_designSystem.TableCell, {
        key: cellIndex,
        style: col.style
      }, row[col.key]);
    }));
  })));
};