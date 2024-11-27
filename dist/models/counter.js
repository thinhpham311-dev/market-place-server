"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var counterSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  sequence_value: {
    type: Number,
    "default": 0
  }
});
var Counter = _mongoose["default"].model('Counter', counterSchema);
var _default = exports["default"] = Counter;