import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  outline?: boolean;
  small?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
  iconPosition?: 'left' | 'right' | 'only' | 'only-sm';
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline,
  small,
  icon: Icon,
  iconPosition,
  ...rest
}) => {
  return (
    <Container
      type="button"
      outline={outline}
      small={small}
      {...rest}
      iconPosition={iconPosition}
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </Container>
  );
};

export default Button;
