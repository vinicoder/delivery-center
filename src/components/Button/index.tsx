import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  small?: boolean;
  iconLeft?: React.ComponentType<IconBaseProps>;
  iconRight?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline,
  small,
  iconLeft: IconLeft,
  iconRight: IconRight,
  ...rest
}) => {
  return (
    <Container type="button" outline={outline} small={small} {...rest}>
      {IconLeft && <IconLeft />}
      <span>{children}</span>
      {IconRight && <IconRight />}
    </Container>
  );
};

export default Button;
