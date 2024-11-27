"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var branchSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  liveLocation: {
    latitude: {
      type: Number
    },
    longtitude: {
      type: Number
    }
  },
  address: {
    type: String
  },
  deliveryPartners: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "DeliveryPartner",
    unique: true
  }]
});
var Branch = _mongoose["default"].model("Branch", branchSchema);
var _default = exports["default"] = Branch;