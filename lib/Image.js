'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /*
                   Goals of this Component
                   
                   props {
                     display: 'cover' | 'contain'
                     src
                     fade: bool
                     background color
                     image size??
                     alt
                     classname
                   }
                   
                   Render a square that either has the full image cropped or contained.
                   
                   When the image is loading, display the background color. If the mode is set to
                   cover and there is a placeholder color, display that in the middle with the right
                   aspect ratio according to the size.
                   
                   It will also handle image load errors too!
                   
                   
                   
                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Image.css');

var _AspectRatio = require('./AspectRatio');

var _AspectRatio2 = _interopRequireDefault(_AspectRatio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = (_temp = _class = function (_React$PureComponent) {
  _inherits(Image, _React$PureComponent);

  function Image(props) {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.onImageLoad = function () {
      _this.setState({
        loaded: true
      });
    };

    _this.state = {
      loaded: false
    };
    return _this;
  }

  Image.prototype.render = function render() {
    var _props = this.props;
    var display = _props.display;
    var src = _props.src;
    var fade = _props.fade;
    var width = _props.width;
    var height = _props.height;
    var alt = _props.alt;
    var className = _props.className;
    var backgroundColor = _props.backgroundColor;


    var IMG = {
      contain: {
        backgroundColor: height && width && backgroundColor,
        height: '100%',
        width: '100%'
      }
    };

    // if we want to contain, maintain aspect ratio of image.
    if (display === 'contain' && height && width) {
      return _react2.default.createElement(
        _AspectRatio2.default,
        {
          height: height,
          width: width
        },
        _react2.default.createElement(
          'div',
          { style: IMG.contain, className: className },
          _react2.default.createElement('img', {
            alt: alt,
            className: (0, _classnames2.default)({
              imageLoaded: this.state.loaded,
              fadeImageIn: fade,
              'image-contain': display === 'contain',
              'image-cover': display === 'cover' }, 'image-element'),
            src: src,
            onLoad: this.onImageLoad
          })
        )
      );
    }

    // if we want to cover, do not maintain aspect ratio and just
    // make it 100% width and height.

    return _react2.default.createElement(
      'div',
      { style: IMG.contain, className: className },
      _react2.default.createElement('img', {
        alt: alt,
        className: (0, _classnames2.default)({
          imageLoaded: this.state.loaded,
          fadeImageIn: fade,
          'image-contain': display === 'contain',
          'image-cover': display === 'cover' }, 'image-element'),
        src: src,
        onLoad: this.onImageLoad
      })
    );
  };

  return Image;
}(_react2.default.PureComponent), _class.defaultProps = {
  fade: true,
  backgroundColor: 'rgba(0,0,0,0.1)',
  alt: 'image',
  display: 'contain'
}, _temp);
exports.default = Image;
module.exports = exports['default'];