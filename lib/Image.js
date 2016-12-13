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

var _AspectRatio = require('./AspectRatio');

var _AspectRatio2 = _interopRequireDefault(_AspectRatio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleString = '\n  .image-wrapper {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .image-element {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n  }\n\n  .fadeImageIn {\n    transition: opacity 0.5s ease-in-out;\n  }\n\n  .imageLoaded {\n    opacity: 1;\n  }\n\n  .image-cover {\n    object-fit: cover;\n    height: 100%;\n    position: static;\n  }\n\n  .image-contain {\n    object-fit: contain;\n    height: 100%;\n    width: 100%;\n    max-width: 100%;\n    max-height: 100%;\n    position: static;\n  }\n';

// let client = true;
var client = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

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

    _this.getBackgroundColor = function () {
      var _this$props = _this.props;
      var display = _this$props.display;
      var backgroundColor = _this$props.backgroundColor;
      var height = _this$props.height;
      var width = _this$props.width;

      if (display === 'contain' && height && width) return backgroundColor;
      if (display === 'cover') return backgroundColor;
      return null;
    };

    _this.componentDidMount = function () {
      console.log('THIS', _this);
      if (_this.imageNode.complete) _this.onImageLoad();
    };

    _this.state = {
      loaded: client ? false : true
    };
    return _this;
  }

  Image.prototype.render = function render() {
    var _this2 = this;

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
        backgroundColor: this.getBackgroundColor(),
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
        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styleString } }),
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
            onLoad: this.onImageLoad,
            ref: function ref(img) {
              _this2.imageNode = img;
            }
          })
        )
      );
    }

    // if we want to cover, do not maintain aspect ratio and just
    // make it 100% width and height.

    return _react2.default.createElement(
      'div',
      { style: IMG.contain, className: className },
      _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styleString } }),
      _react2.default.createElement('img', {
        alt: alt,
        className: (0, _classnames2.default)({
          imageLoaded: this.state.loaded,
          fadeImageIn: fade,
          'image-contain': display === 'contain',
          'image-cover': display === 'cover' }, 'image-element'),
        src: src,
        onLoad: this.onImageLoad,
        ref: function ref(img) {
          _this2.imageNode = img;
        }
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