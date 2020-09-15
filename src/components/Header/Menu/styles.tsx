import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
  z-index: 1;
  position: relative;
  overflow: auto;
  white-space: nowrap;

  .container {
    padding: 0;
    text-align: center;
  }

  ul {
    list-style: none;
    display: inline-flex;
    flex-flow: row nowrap;
    padding: 0 var(--gutter-default);
    li {
      display: inline-block;
      flex: 1;

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
          bottom: 0;
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

  @media screen and (max-width: 767px) {
    ul {
      min-width: 100%;
    }
  }
`;
