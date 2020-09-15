import styled, { css } from 'styled-components';

interface UserMenuProps {
  isOpened: boolean;
}

interface SearchProps {
  isFocused: boolean;
}

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

export const NavbarContainer = styled.nav`
  background: var(--color-primary);
  color: #fff;
  padding: 10px 0;
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 2;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767px) {
    .brand {
      width: 32px;
      height: 32px;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    height: 80px;
  }
`;

export const UserMenuContainer = styled.nav<UserMenuProps>`
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

export const SearchContainer = styled.form<SearchProps>`
  flex: 1;
  max-width: 450px;
  margin: 0 20px;
  border: solid 1px #eaeaea;
  border-radius: 8px;
  background: #fff;
  transition: all 0.2s ease;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05);
  display: flex;

  ${props =>
    props.isFocused &&
    css`
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12),
        0 10px 10px rgba(0, 0, 0, 0.08);
    `}

  input,
  button {
    appearance: none;
    border: 0;
    background: none;
    height: 32px;
  }

  input {
    flex: 1;
    width: calc(100% - 40px);
    text-overflow: ellipsis;
    padding-left: 10px;
    line-height: 32px;
  }

  button {
    color: var(--color-primary);
    width: 40px;
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    input,
    button {
      height: 40px;
    }
  }
`;

export const MenuContainer = styled.nav`
  width: 100%;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
  z-index: 1;
  position: relative;

  .container {
    overflow: hidden;
    overflow-x: auto;
    padding: 0;
    white-space: nowrap;
  }

  ul {
    list-style: none;
    padding: 0 var(--gutter-default);
    li {
      display: inline-block;

      a,
      button {
        text-transform: uppercase;
        text-decoration: none;
        padding: 8px 16px;
        color: #b5b5b5;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--menu-height);
        font-weight: bold;
        position: relative;
        transition: all 0.2s ease;

        &:after {
          content: '';
          height: 2px;
          width: 0;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin: 0 auto;
          opacity: 0;
          transition: all 0.2s ease;
        }

        &:hover {
          color: var(--color-secondary);
          &:after {
            background: var(--color-secondary);
          }
        }

        &.active {
          color: var(--color-primary);
          &:after {
            background: var(--color-primary);
          }
        }

        &:hover,
        &.active {
          &:after {
            width: 100%;
            opacity: 1;
          }
        }
      }
    }
  }

  /*

  ul {
    list-style: none;
    margin: 0 calc(var(--gutter-default) * -1);
    padding: 0 var(--gutter-default);
    display: flex;


  }

  @media screen and (max-width: 767px) {
    ul {
      min-width: 100%;
      li {
        flex: 1;
      }
    }
  } */
`;
