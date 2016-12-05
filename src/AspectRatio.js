/*
<AspectRatio> will wrap children in a box of the specified aspect ratio

This box will grow to fit the container it is in, respecting ratio...

Children should be set to height, width 100%.
*/

import React from 'react';


const AR = {
  cover: {
    position: 'relative',
    height: '100%',
    width: '100%',
    textAlign: 'center',
  },

  wrapper: {
    position: 'relative',
    whiteSpace: 'nowrap',
  },

  svg: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign:'bottom',
  },

  positioner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  contentBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    whiteSpace: 'normal',
  }
}

const AspectRatio = ({height, width, children}) => {

  const paddingTop = `${(height/width) * 100}%`;

  return (
    <div style={AR.cover}>
      {/* use a span bc it will fit top bottom right of svg */}
      <span style={AR.wrapper}>
        {/* Use an SVG to set the aspect ratio inside the span */}
        <svg width={width} height={height} style={AR.svg} />
        <div style={AR.positioner}>
          <div style={{paddingTop}}>
            <div style={AR.contentBox}>
              {children}
            </div>
          </div>
        </div>
      </span>
    </div>
  )
}

export default AspectRatio;
