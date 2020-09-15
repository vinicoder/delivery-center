import styled from 'styled-components';

export const Container = styled.div`
  border: solid 1px var(--color-primary);
  color: var(--color-primary);
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  appearance: none;
  background: none;
  position: relative;
  pointer-events: none;

  label {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    position: absolute;
    padding: 0 6px 0 12px;
    left: 0;
    &:after {
      content: ':';
    }
  }

  select {
    appearance: none;
    background: none;
    border: 0;
    color: var(--color-primary);
    padding: 0 40px 0 12px;
    cursor: pointer;
    pointer-events: all;
    height: 38px;
    text-align: center;
  }

  span {
    font-size: 18px;
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
