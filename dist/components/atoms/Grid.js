"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Column = void 0;
var _styledComponents = require("@adminjs/design-system/styled-components");
var _designSystem = require("@adminjs/design-system");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
// Utility function to generate grid-column string for different breakpoints
var getWidthString = function getWidthString(span) {
  if (!span) {
    return;
  }
  ;
  return "grid-column: span ".concat(span, ";"); // Use 'span' directly
};
var Row = exports.Row = (0, _styledComponents.styled)(_designSystem.Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: repeat(12, minmax(0, 1fr)); \n    ", "; \n    padding: 10px;\n    width: 100%;\n"])), function (_ref) {
  var gap = _ref.gap;
  return gap && "grid-gap: ".concat(gap, "px");
});
var Column = exports.Column = (0, _styledComponents.styled)(_designSystem.Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 0;\n    ", "; \n    \n    @media only screen and (min-width: 768px) {\n        ", ";  \n    }\n\n    @media only screen and (min-width: 992px) {\n        ", "; \n    }\n\n    @media only screen and (min-width: 1200px) {\n        ", "; \n    }\n"])), function (_ref2) {
  var xs = _ref2.xs;
  return xs && getWidthString(xs);
}, function (_ref3) {
  var sm = _ref3.sm;
  return sm && getWidthString(sm);
}, function (_ref4) {
  var md = _ref4.md;
  return md && getWidthString(md);
}, function (_ref5) {
  var lg = _ref5.lg;
  return lg && getWidthString(lg);
});