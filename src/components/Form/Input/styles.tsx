import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
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
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--color-primary);
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
