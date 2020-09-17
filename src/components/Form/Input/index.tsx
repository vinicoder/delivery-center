import React, {
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import { InputContainer, ErrorLabel } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  className,
  error,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const inputId = useMemo(() => {
    return btoa(name + label);
  }, [name, label]);

  return (
    <div className={className}>
      <InputContainer
        isFocused={isFocused}
        isFilled={isFilled}
        isError={!!error}
        data-testid="input-container"
      >
        {label && <label htmlFor={inputId}>{label}</label>}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          name={name}
          id={inputId}
          ref={inputRef}
          {...rest}
        />
      </InputContainer>

      {error && <ErrorLabel htmlFor={inputId}>{error}</ErrorLabel>}
    </div>
  );
};

export default Input;
