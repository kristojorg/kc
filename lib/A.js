'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/*

A will be a replacement link component.

It will allow thicker underlines mainly.

*/

var A = function A(_ref) {
  var to = _ref.to;
  var underline = _ref.underline;
  var thickness = _ref.thickness;
  var children = _ref.children;
  var _ref$color = _ref.color;
  var color = _ref$color === undefined ? '#b4e7f8' : _ref$color;

  var rest = _objectWithoutProperties(_ref, ['to', 'underline', 'thickness', 'children', 'color']);

  var style = '\n    a {\n      border-bottom: 3px solid ' + color + ';\n      box-shadow: inset 0 -0px 0 ' + color + ';\n      cursor: pointer;\n    }\n    a:hover {\n      box-shadow: inset 0 -4px 0 ' + color + ';\n    }\n  ';

  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: style } }),
    _react2.default.createElement(
      'a',
      null,
      children
    )
  );
};

exports.default = A;
module.exports = exports['default'];