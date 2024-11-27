"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LineChartComponent;
var _react = _interopRequireDefault(require("react"));
var _recharts = require("recharts");
var _useMediaQuery = require("../../utils/hook/useMediaQuery");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var data = [{
  name: "Page A",
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: "Page B",
  uv: 3000,
  pv: 1398,
  amt: 2210
}, {
  name: "Page C",
  uv: 2000,
  pv: 9800,
  amt: 2290
}, {
  name: "Page D",
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: "Page E",
  uv: 1890,
  pv: 4800,
  amt: 2181
}, {
  name: "Page F",
  uv: 2390,
  pv: 3800,
  amt: 2500
}, {
  name: "Page G",
  uv: 3490,
  pv: 4300,
  amt: 2100
}];
var width = 400;
function LineChartComponent() {
  var isMobile = (0, _useMediaQuery.useMediaQuery)(768);
  return /*#__PURE__*/_react["default"].createElement(_recharts.ResponsiveContainer, {
    width: "100%",
    height: isMobile ? 200 : width
  }, /*#__PURE__*/_react["default"].createElement(_recharts.LineChart, {
    data: data,
    margin: {
      top: 20,
      right: 0,
      left: 0,
      bottom: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_recharts.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.XAxis, {
    dataKey: "name"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, {
    yAxisId: "left"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.YAxis, {
    yAxisId: "right",
    orientation: "right"
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Tooltip, null), /*#__PURE__*/_react["default"].createElement(_recharts.Legend, null), /*#__PURE__*/_react["default"].createElement(_recharts.Line, {
    yAxisId: "left",
    type: "monotone",
    dataKey: "pv",
    stroke: "#0088fe",
    activeDot: {
      r: 8
    }
  }), /*#__PURE__*/_react["default"].createElement(_recharts.Line, {
    yAxisId: "right",
    type: "monotone",
    dataKey: "uv",
    stroke: "#ff8042"
  })));
}