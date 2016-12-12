'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _A = require('./A');

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testURL = 'https://prismic-io.s3.amazonaws.com/bea-helman/ba6f413864b5f6aa12693d71a4c18fb04607b05d_img_4318.png';

(0, _storybook.storiesOf)('A', module).add('Hovered', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 400, height: 400 }, onClick: (0, _storybook.linkTo)('A', 'Unhover') },
    _react2.default.createElement(
      _A2.default,
      {
        to: testURL,
        thickness: 5
      },
      'This is a test link!'
    )
  );
}).add('Unhovered', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 400, height: 400 }, onClick: (0, _storybook.linkTo)('A', 'Unhover') },
    _react2.default.createElement(_A2.default, {
      to: testURL,
      thickness: 5
    })
  );
});