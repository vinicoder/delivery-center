import React, { SelectHTMLAttributes, useEffect, useMemo, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  className?: string;
  options: {
    value: string | number;
    label: string;
  }[];
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  const selectId = useMemo(() => {
    return btoa(name + label);
  }, [name, label]);

  useEffect(() => {
    if (selectRef.current && labelRef.current) {
      selectRef.current.style.paddingLeft = `${labelRef.current.offsetWidth}px`;
    }
  }, []);

  return (
    <Container>
      {label && (
        <label ref={labelRef} htmlFor={selectId}>
          {label}
        </label>
      )}

      <select ref={selectRef} name={name} id={selectId} {...rest}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <span>
        <FiChevronDown />
      </span>
    </Container>
  );
};

export default Select;
