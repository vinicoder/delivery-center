import styled, { css } from 'styled-components';

interface ButtonProps {
  outline?: boolean;
  small?: boolean;
}

export const Container = styled.button<ButtonProps>`
  border: solid 1px transparent;
  background: var(--color-primary);
  color: #fff;
  padding: 10px 18px;
  border-radius: 6px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  span ~ svg,
  svg + span {
    margin-left: 10px;
  }

  &:hover {
    background: var(--color-primary-highlighted);
    color: #fff;
  }

  ${props =>
    props.outline &&
    css`
      border-color: var(--color-primary);
      background: none;
      color: var(--color-primary);
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
      padding: 8px 16px;
    `}
`;
