import styled from 'styled-components';

export const Container = styled.nav`
  overflow: auto;
  margin: 0 calc(var(--gutter-default) * -1);
  padding: 0 var(--gutter-default);

  ol {
    list-style: none;
    display: inline-flex;
    align-items: center;
    border: solid 1px #e2e2e2;
    padding: 8px 16px;
    border-radius: 16px;
    margin-bottom: 20px;
    li {
      display: inline-flex;
      align-items: center;
      a,
      span {
        display: block;
        text-decoration: none;
        white-space: nowrap;
      }

      svg {
        margin: 0 5px;
        margin-bottom: -2px;
      }

      a {
        color: var(--color-primary);
      }
    }
  }
`;
