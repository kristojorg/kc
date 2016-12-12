// @flow
/*

A will be a replacement link component.

It will allow thicker underlines mainly.

*/

import React from 'react'

type aProps = {
  to : string,
  underline: bool,
  thickness: number,
  children: any,
  color: string,
};

const A = (
  {to, underline, thickness, children, color = '#b4e7f8', ...rest} : aProps
) => {

  const style = `
    a {
      border-bottom: 3px solid ${color};
      box-shadow: inset 0 -0px 0 ${color};
      cursor: pointer;
    }
    a:hover {
      box-shadow: inset 0 -4px 0 ${color};
    }
  `;

  return (
    <span>
      <style dangerouslySetInnerHTML={{__html:style}}/>
      <a>
        {children}
      </a>
    </span>
  )
}

export default A;
