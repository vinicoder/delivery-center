import styled, { css } from 'styled-components';

interface UserMenuProps {
  isOpened: boolean;
}

export const Container = styled.nav<UserMenuProps>`
  position: relative;

  button {
    border: 0;
    background: none;
  }

  > button {
    min-width: 40px;
    height: 40px;
    color: #fff;
    border-radius: 8px;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px 0 6px;

    svg {
      margin-right: 6px;
    }

    span {
      font-size: 18px;
      max-width: 160px;
      white-space: nowrap;
      text-overflow: ellipsis;
      position: relative;
      overflow: hidden;
    }

    & + div {
      position: absolute;
      top: 100%;
      right: 0;
      background: #fff;
      border-radius: 6px 0 6px 6px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
      min-width: 160px;
      display: flex;
      flex-direction: column;
      opacity: 0;
      visibility: hidden;
      transform: translate3d(0, 20px, 0);
      transition: all 0.2s ease;

      button,
      a {
        display: flex;
        align-items: center;
        padding: 16px;
        transition: all 0.2s ease;
        svg {
          margin-right: 5px;
        }

        &:not(:last-child) {
          border-bottom: solid 1px #eaeaea;
        }

        &:hover {
          color: var(--color-primary);
        }
      }
    }
  }

  ${props =>
    props.isOpened &&
    css`
      > button {
        background: #fff;
        color: var(--color-primary);
        border-radius: 8px 8px 0 0;

        & + div {
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }
      }
    `}

  @media screen and (max-width: 767px) {
    margin: 0 -4px;

    > button {
      padding: 0;

      svg {
        margin-right: 0;
      }

      span {
        display: none;
      }
    }
  }
`;
