"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PieChartComponent;
var _react = _interopRequireDefault(require("react"));
var _recharts = require("recharts");
var _useMediaQuery = require("../../utils/hook/useMediaQuery");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var data = [{
  name: "Group A",
  value: 400
}, {
  name: "Group B",
  value: 300
}, {
  name: "Group C",
  value: 300
}, {
  name: "Group D",
  value: 200
}];
var COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
var width = 400;
function PieChartComponent() {
  var isMobile = (0, _useMediaQuery.useMediaQuery)(768);
  return /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: isMobile ? 200 : width
  }, /*#__PURE__*/_react["default"].createElement(_recharts.PieChart, null, /*#__PURE__*/_react["default"].createElement(_recharts.Pie, {
    data: data,
    cx: 180,
    cy: isMobile ? 100 : 200,
    innerRadius: isMobile ? 50 : 100,
    outerRadius: isMobile ? 80 : 150,
    fill: "#8884d8",
    paddingAngle: 5,
    dataKey: "value"
  }, data.map(function (entry, index) {
    return /*#__PURE__*/_react["default"].createElement(_recharts.Cell, {
      key: "cell-".concat(index),
      fill: COLORS[index % COLORS.length]
    });
  }))));
}