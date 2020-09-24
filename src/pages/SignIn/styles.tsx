import styled from 'styled-components';

export const Container = styled.main`
  .col {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:last-child {
      img {
        margin: 20px auto;
        display: block;
      }
    }
  }

  .card {
    h1 {
      margin-bottom: 8px;
    }

    .description {
      margin-bottom: 24px;
    }

    form {
      .input-control {
        margin-bottom: 10px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .row {
      .col:first-child {
        display: none;
      }
    }
    .card {
      form {
        button[type='submit'] {
          width: 100%;
        }
      }
    }
  }
`;
