import styled from 'styled-components';

export const Container = styled.nav`
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
