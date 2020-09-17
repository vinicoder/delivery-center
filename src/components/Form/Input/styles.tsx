import styled, { css } from 'styled-components';

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  border: solid 1px #eaeaea;
  border-radius: 8px;
  background: #fff;
  transition: all 0.2s ease;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);

  label,
  input {
    padding: 0 10px;
  }

  label {
    position: absolute;
    height: 100%;
    pointer-events: none;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
  }

  input {
    background: none;
    appearance: none;
    border: 0;
    height: 40px;
    width: 100%;
    border-radius: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--color-primary);
    `}

  ${props =>
    props.isError &&
    css`
      border-color: var(--color-danger);
    `}

  ${props =>
    (props.isFilled || props.isFocused) &&
    css`
      label {
        height: 20px;
        font-size: 12px;
      }

      input {
        padding-top: 12px;
      }
    `}
`;

export const ErrorLabel = styled.label`
  color: var(--color-danger);
  margin: 5px 0;
  font-size: 14px;
  display: block;
`;
