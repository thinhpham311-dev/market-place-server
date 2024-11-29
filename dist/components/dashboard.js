"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _designSystem = require("@adminjs/design-system");
var _styledComponents2 = require("@adminjs/design-system/styled-components");
var _molecules = require("./molecules");
var _atoms = require("./atoms");
var _table = require("../constants/table");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BoxWrapper = (0, _styledComponents2.styled)(_designSystem.Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 24px 30px;\n"])));
var data = [{
  name: 'John',
  surname: 'Doe',
  gender: 'Male',
  age: 57
}, {
  name: 'Joanna',
  surname: 'K',
  gender: 'Female',
  age: 32
}, {
  name: 'Patrick',
  surname: 'Jogs',
  gender: 'Male',
  age: 35
}, {
  name: 'Elisabeth',
  surname: 'Briggs',
  gender: 'Female',
  age: 28
}, {
  name: 'Jda',
  surname: 'Karo',
  gender: 'Female',
  age: 22
}];
var DashboardComponent = function DashboardComponent() {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: _designSystem.theme
  }, /*#__PURE__*/_react["default"].createElement(BoxWrapper, null, /*#__PURE__*/_react["default"].createElement(_atoms.Row, {
    gap: "30"
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Column, {
    xs: "12",
    lg: "12",
    md: "12",
    sm: "12"
  }, /*#__PURE__*/_react["default"].createElement(_designSystem.Header.H3, null, "Hello Thinh Pham")), /*#__PURE__*/_react["default"].createElement(_atoms.Column, {
    xs: "12",
    lg: "12",
    md: "12",
    sm: "12"
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Card, {
    title: "Sales Overviews"
  }, /*#__PURE__*/_react["default"].createElement(_molecules.AreaChartComponent, null))), /*#__PURE__*/_react["default"].createElement(_atoms.Column, {
    xs: "12",
    lg: "5",
    md: "12",
    sm: "12"
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Card, {
    title: "Product Status"
  }, /*#__PURE__*/_react["default"].createElement(_molecules.PieChartComponent, null))), /*#__PURE__*/_react["default"].createElement(_atoms.Column, {
    xs: "12",
    lg: "7",
    md: "12",
    sm: "12"
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Card, {
    title: "Customer"
  }, /*#__PURE__*/_react["default"].createElement(_molecules.LineChartComponent, null))), /*#__PURE__*/_react["default"].createElement(_atoms.Column, {
    xs: "12",
    lg: "5",
    md: "12",
    sm: "12"
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Card, {
    title: "Sales By Category"
  }, /*#__PURE__*/_react["default"].createElement(_atoms.CustomTable, {
    columns: _table.categoryColums,
    data: data
  }))), /*#__PURE__*/_react["default"].createElement(_atoms.Column, {
    xs: "12",
    lg: "7",
    md: "12",
    sm: "12"
  }, /*#__PURE__*/_react["default"].createElement(_atoms.Card, {
    title: "Most Sold Products"
  }, /*#__PURE__*/_react["default"].createElement(_atoms.CustomTable, {
    columns: _table.productColums,
    data: data
  }))))));
};
var _default = exports["default"] = DashboardComponent;