import styled, { css } from 'styled-components';

interface ButtonProps {
  outline?: boolean;
  small?: boolean;
  iconPosition?: 'left' | 'right' | 'only' | 'only-sm';
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

  svg {
    margin-right: 10px;
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

  ${props =>
    props.iconPosition === 'only' &&
    css`
      padding-right: 0;
      padding-left: 0;
      width: 38px;
      svg {
        display: initial;
        margin: 0 !important;
      }

      span {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `}

    ${props =>
    props.iconPosition === 'only-sm' &&
    css`
      svg {
        display: none;
      }

      span {
        margin-left: 0 !important;
      }

      @media screen and (max-width: 767px) {
        padding-right: 0;
        padding-left: 0;
        width: 38px;
        svg {
          display: initial;
          margin: 0 !important;
        }

        span {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      }
    `}

    ${props =>
    props.iconPosition === 'right' &&
    css`
      svg {
        order: 2;
        margin-right: 0;
        margin-left: 10px;
      }
    `}
`;
