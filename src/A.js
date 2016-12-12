// @flow
/*

A will be a replacement link component.

It will allow thicker underlines mainly.

*/

import React from 'react'

type aProps = {
  to : string,
  unHoverLine: bool,
  hoverLine: bool,
  thickness: number,
  children: any,
  color: string,
};

const A = (
  {to, unHoverLine = true, hoverLine = true, thickness, children, color = '#b4e7f8', ...rest} : aProps
) => {
  const borderBottom = `3px solid ${color};`
  const unHoveredBorder = unHoverLine ? borderBottom : `none;`;

  // const boxShadow = `inset 0 -4px 0 ${color};`;

  const hoverStyle = hoverLine ?
  `
    borderBottom: ${borderBottom}
    box-shadow: inset 0 -4px 0 ${color};
  ` : ``;

  const style = `
    .a154 a {
      border-bottom: ${unHoveredBorder}
      box-shadow: inset 0 -0px 0 ${color};
      cursor: pointer;
    }
    .a154 a:hover {
      ${hoverStyle}
    }
  `;

  return (
    <span className="a154">
      <style dangerouslySetInnerHTML={{__html:style}}/>
      <a>
        {children}
      </a>
    </span>
  )
}

export default A;
