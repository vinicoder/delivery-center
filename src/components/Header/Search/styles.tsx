import styled, { css } from 'styled-components';

interface SearchProps {
  isFocused: boolean;
}

export const Container = styled.form<SearchProps>`
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
    height: 35px;
  }

  input {
    flex: 1;
    width: calc(100% - 40px);
    text-overflow: ellipsis;
    padding-left: 10px;
    line-height: 35px;
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
