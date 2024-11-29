"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrderStatus = exports.getOrders = exports.getOrderById = exports.createOrder = exports.confirmOrder = void 0;
var _index = require("../../models/index.js");
var _errorHandler = require("../../utils/errorHandler.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var createOrder = exports.createOrder = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, reply) {
    var userId, _req$body, items, branch, totalPrice, customerData, branchData, newOrder, savedOrder, _handleError, statusCode, message, details;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          userId = req.user.userId;
          _req$body = req.body, items = _req$body.items, branch = _req$body.branch, totalPrice = _req$body.totalPrice;
          _context.next = 5;
          return _index.Customer.findById(userId);
        case 5:
          customerData = _context.sent;
          _context.next = 8;
          return _index.Branch.findById(branch);
        case 8:
          branchData = _context.sent;
          if (customerData) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", reply.status(404).send({
            message: "Customer not found"
          }));
        case 11:
          newOrder = new _index.Order({
            customer: userId,
            items: items.map(function (item) {
              return {
                id: item.id,
                item: item.item,
                count: item.count
              };
            }),
            branch: branchData,
            totalPrice: totalPrice,
            deliveryLocation: {
              latitude: customerData.liveLocation.latitude,
              longtitude: customerData.liveLocation.longtitude,
              address: customerData.address || "No address available"
            },
            pickupLocation: {
              latitude: branchData.liveLocation.latitude,
              longtitude: branchData.liveLocation.longtitude,
              address: branchData.address || "No address available"
            }
          });
          _context.next = 14;
          return newOrder.save();
        case 14:
          savedOrder = _context.sent;
          return _context.abrupt("return", reply.status(200).send({
            message: "Created orders successfully",
            order: savedOrder
          }));
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          // Use the custom error handler to format the error
          _handleError = (0, _errorHandler.handleError)(_context.t0), statusCode = _handleError.statusCode, message = _handleError.message, details = _handleError.details;
          return _context.abrupt("return", reply.status(statusCode).send({
            message: message,
            details: details
          }));
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 18]]);
  }));
  return function createOrder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var confirmOrder = exports.confirmOrder = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, reply) {
    var orderId, userId, deliveryPersonLocation, deliveryPerson, order, _handleError2, statusCode, message, details;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          orderId = req.params.orderId;
          userId = req.user.userId;
          deliveryPersonLocation = req.body.deliveryPersonLocation;
          _context2.next = 6;
          return _index.DeliveryPartner.findById(userId);
        case 6:
          deliveryPerson = _context2.sent;
          if (deliveryPerson) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", reply.status(404).send({
            message: "Delivery Person not found"
          }));
        case 9:
          _context2.next = 11;
          return _index.Order.findById(orderId);
        case 11:
          order = _context2.sent;
          if (order) {
            _context2.next = 14;
            break;
          }
          return _context2.abrupt("return", reply.status(404).send({
            message: "Order not found"
          }));
        case 14:
          if (!(order.status !== "available")) {
            _context2.next = 16;
            break;
          }
          return _context2.abrupt("return", reply.status(400).send({
            message: "Order is not available"
          }));
        case 16:
          order.status = "confirmed";
          order.deliveryPartner = userId;
          order.deliveryPersonLocation = {
            latitude: deliveryPersonLocation === null || deliveryPersonLocation === void 0 ? void 0 : deliveryPersonLocation.latitude,
            longtitude: deliveryPersonLocation === null || deliveryPersonLocation === void 0 ? void 0 : deliveryPersonLocation.longtitude,
            address: (deliveryPersonLocation === null || deliveryPersonLocation === void 0 ? void 0 : deliveryPersonLocation.address) || ""
          };
          req.server.io.to(orderId).emit("orderConfirmed", order);
          _context2.next = 22;
          return order.save();
        case 22:
          return _context2.abrupt("return", reply.status(200).send({
            message: "Order confirmed successfully"
          }));
        case 25:
          _context2.prev = 25;
          _context2.t0 = _context2["catch"](0);
          // Use the custom error handler to format the error
          _handleError2 = (0, _errorHandler.handleError)(_context2.t0), statusCode = _handleError2.statusCode, message = _handleError2.message, details = _handleError2.details;
          return _context2.abrupt("return", reply.status(statusCode).send({
            message: message,
            details: details
          }));
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 25]]);
  }));
  return function confirmOrder(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateOrderStatus = exports.updateOrderStatus = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, reply) {
    var orderId, _req$body2, status, deliveryPersonLocation, userId, deliveryPerson, order, _handleError3, statusCode, message, details;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          orderId = req.params.orderId;
          _req$body2 = req.body, status = _req$body2.status, deliveryPersonLocation = _req$body2.deliveryPersonLocation;
          userId = req.user.userId;
          _context3.next = 6;
          return _index.DeliveryPartner.findById(userId);
        case 6:
          deliveryPerson = _context3.sent;
          if (deliveryPerson) {
            _context3.next = 9;
            break;
          }
          return _context3.abrupt("return", reply.status(404).send({
            message: "Delivery Person not found"
          }));
        case 9:
          _context3.next = 11;
          return _index.Order.findById(orderId);
        case 11:
          order = _context3.sent;
          if (order) {
            _context3.next = 14;
            break;
          }
          return _context3.abrupt("return", reply.status(404).send({
            message: "Order not found"
          }));
        case 14:
          if (!['cancelled', 'delivered'].includes(order.status)) {
            _context3.next = 16;
            break;
          }
          return _context3.abrupt("return", reply.status(400).send({
            message: "Order cannot be updated"
          }));
        case 16:
          if (!(order.deliveryPartner.toString() !== userId)) {
            _context3.next = 18;
            break;
          }
          return _context3.abrupt("return", reply.status(403).send({
            message: "Unauthorized"
          }));
        case 18:
          order.status = status;
          order.deliveryPartner = userId;
          order.deliveryPersonLocation = deliveryPersonLocation;
          req.server.io.to(orderId).emit("liveTrackingUpdates", order);
          _context3.next = 24;
          return order.save();
        case 24:
          return _context3.abrupt("return", reply.status(200).send({
            message: "Order confirmed successfully"
          }));
        case 27:
          _context3.prev = 27;
          _context3.t0 = _context3["catch"](0);
          // Use the custom error handler to format the error
          _handleError3 = (0, _errorHandler.handleError)(_context3.t0), statusCode = _handleError3.statusCode, message = _handleError3.message, details = _handleError3.details;
          return _context3.abrupt("return", reply.status(statusCode).send({
            message: message,
            details: details
          }));
        case 31:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 27]]);
  }));
  return function updateOrderStatus(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getOrders = exports.getOrders = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, reply) {
    var _req$query, status, customerId, deliveryPartnerId, branchId, query, orders, _handleError4, statusCode, message, details;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$query = req.query, status = _req$query.status, customerId = _req$query.customerId, deliveryPartnerId = _req$query.deliveryPartnerId, branchId = _req$query.branchId;
          query = {};
          if (status) {
            query.status = status;
          }
          if (customerId) {
            query.customer = customerId;
          }
          if (deliveryPartnerId) {
            query.deliveryPartner = deliveryPartnerId;
            query.branch = branchId;
          }
          _context4.next = 8;
          return _index.Order.find(query).populate("customer branch items.item deliveryPartner");
        case 8:
          orders = _context4.sent;
          return _context4.abrupt("return", reply.status(200).send({
            message: "Get Orders List successfully",
            orders: orders
          }));
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          // Use the custom error handler to format the error
          _handleError4 = (0, _errorHandler.handleError)(_context4.t0), statusCode = _handleError4.statusCode, message = _handleError4.message, details = _handleError4.details;
          return _context4.abrupt("return", reply.status(statusCode).send({
            message: message,
            details: details
          }));
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function getOrders(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getOrderById = exports.getOrderById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, reply) {
    var orderId, order, _handleError5, statusCode, message, details;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          orderId = req.params.orderId;
          _context5.next = 4;
          return _index.Order.findById(orderId).populate("customer branch items.item deliveryPartner");
        case 4:
          order = _context5.sent;
          if (order) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", reply.status(404).send({
            message: "Order not found"
          }));
        case 7:
          return _context5.abrupt("return", reply.status(200).send({
            message: "Get Order successfully",
            order: order
          }));
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          // Use the custom error handler to format the error
          _handleError5 = (0, _errorHandler.handleError)(_context5.t0), statusCode = _handleError5.statusCode, message = _handleError5.message, details = _handleError5.details;
          return _context5.abrupt("return", reply.status(statusCode).send({
            message: message,
            details: details
          }));
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getOrderById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();