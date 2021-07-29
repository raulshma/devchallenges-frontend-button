import React, { useEffect, useState } from 'react';
import { defaultValues } from '../helpers/customTypes';
interface ButtonProps {
  variant?: 'default' | 'outline' | 'text';
  disableShadow?: boolean;
  disable?: boolean;
  iconLeft?: string;
  iconRight?: string;
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}
function Button({
  variant,
  disableShadow,
  disable,
  size,
  color,
  ...props
}: ButtonProps) {
  let style: string = 'font-medium text-base px-4 py-2 rounded-md';
  if (variant) {
    switch (variant) {
      case 'default':
        if (!disable) {
          style += ` ${defaultValues.textLight} ${defaultValues.bgPrimary} ${defaultValues.hoverPrimary} ${defaultValues.focusPrimary}`;
        } else {
          style += ` ${defaultValues.disabled}`;
        }
        break;
      case 'outline':
        if (!disable) {
          style += ` border-2 border-gray-700 ${defaultValues.textDark} hover:bg-blue-100  focus:bg-blue-100`;
        } else {
          style += ` ${defaultValues.disabled}`;
        }
        break;
      case 'text':
        if (!disable) {
          style += ` border-none shadow-none ${defaultValues.textDark} hover:bg-blue-100 focus:bg-blue-100`;
        } else {
          style += ` ${defaultValues.disabled} bg-transparent`;
        }
        break;
      default:
        break;
    }
  }
  if (disableShadow == false && !disable && variant != 'text') {
    style += ' shadow-md';
  }

  return (
    <button disabled={disable} className={style}>
      Default
    </button>
  );
}

Button.defaultProps = {
  type: 'default',
  disable: false,
  color: 'primary',
  size: 'md',
  disableShadow: false,
};

export default Button;
