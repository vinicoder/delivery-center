import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
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

  const inputId = useMemo(() => {
    return btoa(name + label);
  }, [name, label]);

  useEffect(() => {
    handleInputBlur();
  }, [handleInputBlur]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} className={className}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        name={name}
        id={inputId}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
