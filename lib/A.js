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
  var _ref$unHoverLine = _ref.unHoverLine;
  var unHoverLine = _ref$unHoverLine === undefined ? true : _ref$unHoverLine;
  var _ref$hoverLine = _ref.hoverLine;
  var hoverLine = _ref$hoverLine === undefined ? true : _ref$hoverLine;
  var thickness = _ref.thickness;
  var children = _ref.children;
  var _ref$color = _ref.color;
  var color = _ref$color === undefined ? '#b4e7f8' : _ref$color;
  var className = _ref.className;

  var rest = _objectWithoutProperties(_ref, ['to', 'unHoverLine', 'hoverLine', 'thickness', 'children', 'color', 'className']);

  var borderBottom = '3px solid ' + color + ';';
  var unHoveredBorder = unHoverLine ? borderBottom : 'none;';

  // const boxShadow = `inset 0 -4px 0 ${color};`;


  var style = '\n    .a154 .unHoverLine {\n      border-bottom: ' + borderBottom + '\n      box-shadow: inset 0 -0px 0 ' + color + ';\n      cursor: pointer;\n    }\n    .a154 .hoverLine:hover {\n      cursor: pointer;\n      border-bottom: ' + borderBottom + '\n      box-shadow: inset 0 -4px 0 ' + color + ';\n    }\n  ';

  var cn = unHoverLine ? 'unHoverLine ' : '';
  if (hoverLine) cn += 'hoverLine';

  return _react2.default.createElement(
    'span',
    { className: 'a154' },
    _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: style } }),
    _react2.default.createElement(
      'a',
      {
        className: cn,
        href: to
      },
      _react2.default.createElement(
        'span',
        { className: className },
        children
      )
    )
  );
};

exports.default = A;
module.exports = exports['default'];