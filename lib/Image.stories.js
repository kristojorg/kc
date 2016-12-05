'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testURL = 'https://prismic-io.s3.amazonaws.com/bea-helman/72688bef7bc7e0b909b0db765e1e0a757fd63dca_r2-01544-016a.jpg';
var testURLTall = 'https://prismic-io.s3.amazonaws.com/bea-helman/ba6f413864b5f6aa12693d71a4c18fb04607b05d_img_4318.png';

(0, _storybook.storiesOf)('Image', module).add('Loaded', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 400, height: 400 }, onClick: (0, _storybook.linkTo)('Image', 'Unloaded') },
    _react2.default.createElement(_Image2.default, {
      src: testURL,
      width: 1818,
      height: 1228
    })
  );
}).add('Unloaded', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 400, height: 400 }, onClick: (0, _storybook.linkTo)('Image', 'Loaded') },
    _react2.default.createElement(_Image2.default, {
      src: null,
      width: 1818,
      height: 1228
    })
  );
}).add('Loaded.Tall', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 400, height: 400 }, onClick: (0, _storybook.linkTo)('Image', 'Unloaded.Tall') },
    _react2.default.createElement(_Image2.default, {
      src: testURLTall,
      width: 750,
      height: 1334
    })
  );
}).add('Unloaded.Tall', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 400, height: 400 }, onClick: (0, _storybook.linkTo)('Image', 'Loaded.Tall') },
    _react2.default.createElement(_Image2.default, {
      src: null,
      width: 750,
      height: 1334
    })
  );
}).add('Loaded.Cover', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 400, height: 400 }, onClick: (0, _storybook.linkTo)('Image', 'Unloaded.Cover') },
    _react2.default.createElement(_Image2.default, {
      src: testURL,
      width: 1818,
      height: 1228,
      display: 'cover'
    })
  );
}).add('Unloaded.Cover', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 400, height: 400 }, onClick: (0, _storybook.linkTo)('Image', 'Loaded.Cover') },
    _react2.default.createElement(_Image2.default, {
      src: null,
      width: 1818,
      height: 1228,
      display: 'cover'
    })
  );
}).add('Loaded.N', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 400, height: 400 }, onClick: (0, _storybook.linkTo)('Image', 'Unloaded.N') },
    _react2.default.createElement(_Image2.default, {
      src: testURL
    })
  );
}).add('Unloaded.N', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: 400, height: 400 }, onClick: (0, _storybook.linkTo)('Image', 'Loaded.N') },
    _react2.default.createElement(_Image2.default, {
      src: null
    })
  );
});