import React from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'outline' | 'text';
  disableShadow?: boolean;
  disable?: boolean;
  startIcon?: React.ElementType;
  endIcon?: React.ElementType;
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

function Button({
  variant = 'default',
  disableShadow = false,
  disable = false,
  size = 'md',
  color = 'primary',
  startIcon: IconLeft,
  endIcon: IconRight,
  ...props
}: ButtonProps) {
  let classes: string = `btn ${
    size !== 'md' ? 'btn-' + size : ''
  } btn-${variant}-${disable ? 'disabled' : color}`;

  if (disableShadow == false && !disable && variant != 'text') {
    classes += ' shadow-md hover:shadow-lg focus:shadow-lg';
  }

  return (
    <button disabled={disable} className={classes} {...props}>
      {IconLeft && <IconLeft />}Default{IconRight && <IconRight />}
    </button>
  );
}

export default Button;
