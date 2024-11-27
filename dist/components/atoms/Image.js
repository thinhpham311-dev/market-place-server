"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;
var _styledComponents = require("@adminjs/design-system/styled-components");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ImageStyle = (0, _styledComponents.styled)(image)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 100%;\n    aaspect-ratio: 3 / 2;\n"])));
var Image = exports.Image = function Image(_ref) {
  var source = _ref.source,
    alt = _ref.alt;
  return /*#__PURE__*/React.createElement(ImageStyle, {
    src: source,
    alt: alt
  });
};