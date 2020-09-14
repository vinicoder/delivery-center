import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ name, label, className, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        name={name}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
