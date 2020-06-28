import React from 'react';
import { Base } from './Base';
import { Gradient } from './Gradient';
import { OutlineGradient } from './OutlineGradient';

export const BASE_BUTTON = 'BASE_BUTTON';
export const GRADIENT_BUTTON = 'GRADIENT_BUTTON';
export const OUTLINE_GRADIENT_BUTTON = 'OUTLINE_GRADIENT_BUTTON';

export const Button = ({ type, ...rest }) => {
  switch (type) {
    case GRADIENT_BUTTON:
      return <Gradient {...rest} />;
    case OUTLINE_GRADIENT_BUTTON:
      return <OutlineGradient {...rest} />;
    case BASE_BUTTON:
    default:
      return <Base {...rest} />;
  }
};
