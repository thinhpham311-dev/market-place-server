"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RadialBarChartComponent;
var _react = _interopRequireDefault(require("react"));
var _recharts = require("recharts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var data = [{
  name: "18-24",
  uv: 18,
  pv: 2400,
  fill: "#8884d8"
}, {
  name: "25-29",
  uv: 26,
  pv: 4567,
  fill: "#83a6ed"
}, {
  name: "30-34",
  uv: 31,
  pv: 1398,
  fill: "#8dd1e1"
}, {
  name: "35-39",
  uv: 35.22,
  pv: 9800,
  fill: "#82ca9d"
}, {
  name: "40-49",
  uv: 45.63,
  pv: 3908,
  fill: "#a4de6c"
}, {
  name: "50+",
  uv: 51.63,
  pv: 4800,
  fill: "#d0ed57"
}, {
  name: "unknown",
  uv: 99.67,
  pv: 4800,
  fill: "#ffc658"
}];
var style = {
  top: "50%",
  right: "-30%",
  lineHeight: "24px",
  transform: "translate(0%, -50%)"
};
function RadialBarChartComponent() {
  return /*#__PURE__*/_react["default"].createElement(_recharts.RadialBarChart, {
    width: 300,
    height: 300,
    cx: "50%",
    cy: "50%",
    innerRadius: "20%",
    outerRadius: "90%",
    barSize: 10,
    data: data
  }, /*#__PURE__*/_react["default"].createElement(_recharts.RadialBar, {
    minAngle: 15,
    label: {
      position: "insideStart",
      fill: "#fff"
    },
    background: true,
    clockWise: true,
    dataKey: "uv"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Legend, {
    iconSize: 10,
    layout: "vertical",
    verticalAlign: "middle",
    wrapperStyle: style
  }));
}