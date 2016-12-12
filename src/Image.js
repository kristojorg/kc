/*
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

import React from 'react';
import classnames from 'classnames';

import AspectRatio from './AspectRatio';


const styleString = `
  .image-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-element {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .fadeImageIn {
    transition: opacity 0.5s ease-in-out;
  }

  .imageLoaded {
    opacity: 1;
  }

  .image-cover {
    object-fit: cover;
    height: 100%;
    position: static;
  }

  .image-contain {
    object-fit: contain;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    position: static;
  }
`;

export default class Image extends React.PureComponent {

  static defaultProps = {
    fade: true,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alt: 'image',
    display: 'contain'
  }

  constructor(props){
    super(props)
    this.state = {
      loaded: false,
    }
  }

  onImageLoad = () => {
    this.setState({
      loaded: true,
    })
  }

  getBackgroundColor = () => {
    const {display, backgroundColor, height, width} = this.props;
    if (display === 'contain' && height && width) return backgroundColor;
    if (display === 'cover') return backgroundColor;
    return null;
  }

  componentDidMount = () => {
    if (this.imageNode.complete) this.onImageLoad();
  }

  render() {
    const {display, src, fade, width, height, alt, className, backgroundColor} = this.props;

    const IMG = {
      contain: {
        backgroundColor: this.getBackgroundColor(),
        height: '100%',
        width: '100%',
      },
    }

    // if we want to contain, maintain aspect ratio of image.
    if (display === 'contain' && height && width) {
      return (
        <AspectRatio
          height={height}
          width={width}
        >
          <style dangerouslySetInnerHTML={{__html:styleString}} />
          <div style={IMG.contain} className={className}>
            <img
              alt={alt}
              className={
                classnames({
                  imageLoaded: this.state.loaded,
                  fadeImageIn: fade,
                  'image-contain':display === 'contain',
                  'image-cover': display === 'cover'},
                  'image-element'
                )}
              src={src}
              onLoad={this.onImageLoad}
              ref={(img) => { this.imageNode = img; }}
            />
          </div>
        </AspectRatio>
      )
    }

    // if we want to cover, do not maintain aspect ratio and just
    // make it 100% width and height.

    return (
      <div style={IMG.contain} className={className}>
        <style dangerouslySetInnerHTML={{__html:styleString}} />
        <img
          alt={alt}
          className={
            classnames({
              imageLoaded: this.state.loaded,
              fadeImageIn: fade,
              'image-contain':display === 'contain',
              'image-cover': display === 'cover'},
              'image-element'
            )}
          src={src}
          onLoad={this.onImageLoad}
          ref={(img) => { this.imageNode = img; }}
        />
      </div>
    )
  }
}
