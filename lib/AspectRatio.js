'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AR = {
  cover: {
    position: 'relative',
    height: '100%',
    width: '100%',
    textAlign: 'center'
  },

  wrapper: {
    position: 'relative',
    whiteSpace: 'nowrap'
  },

  svg: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign: 'bottom'
  },

  positioner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },

  contentBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    whiteSpace: 'normal'
  }
}; /*
   <AspectRatio> will wrap children in a box of the specified aspect ratio
   
   This box will grow to fit the container it is in, respecting ratio...
   
   Children should be set to height, width 100%.
   */

var AspectRatio = function AspectRatio(_ref) {
  var height = _ref.height;
  var width = _ref.width;
  var children = _ref.children;


  var paddingTop = height / width * 100 + '%';

  return _react2.default.createElement(
    'div',
    { style: AR.cover },
    _react2.default.createElement(
      'span',
      { style: AR.wrapper },
      _react2.default.createElement('svg', { width: width, height: height, style: AR.svg }),
      _react2.default.createElement(
        'div',
        { style: AR.positioner },
        _react2.default.createElement(
          'div',
          { style: { paddingTop: paddingTop } },
          _react2.default.createElement(
            'div',
            { style: AR.contentBox },
            children
          )
        )
      )
    )
  );
};

exports.default = AspectRatio;
module.exports = exports['default'];