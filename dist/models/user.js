"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryPartner = exports.Customer = exports.Admin = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var userSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    "enum": ["Customer", "Admin", "DeliveryPartner"],
    required: true
  },
  isActivated: {
    type: Boolean,
    "default": false
  }
});
var customerSchema = new _mongoose["default"].Schema(_objectSpread(_objectSpread({}, userSchema.obj), {}, {
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  role: {
    type: String,
    "enum": ["Customer"],
    "default": "Customer"
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
  }
}));
var deliveryPartnerSchema = new _mongoose["default"].Schema(_objectSpread(_objectSpread({}, userSchema.obj), {}, {
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    "enum": ["DeliveryPartner"],
    "default": "DeliveryPartner"
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
  branch: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Branch"
  }
}));
var adminSchema = new _mongoose["default"].Schema(_objectSpread(_objectSpread({}, userSchema.obj), {}, {
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    "enum": ["Admin"],
    "default": "Admin"
  }
}));
var Customer = exports.Customer = _mongoose["default"].model("Customer", customerSchema);
var DeliveryPartner = exports.DeliveryPartner = _mongoose["default"].model("DeliveryPartner", deliveryPartnerSchema);
var Admin = exports.Admin = _mongoose["default"].model("Admin", adminSchema);