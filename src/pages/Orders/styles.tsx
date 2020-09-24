import styled from 'styled-components';

export const Container = styled.main`
  .card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;

    .card {
      flex: 0 0 100%;
      margin-bottom: 20px;
      text-decoration: none;
      color: initial;

      > *[class^='card-']:not(:last-child) {
        margin-bottom: 16px;
      }

      .card-info {
        border-top: solid 1px #f0f0f0;
        padding-top: 16px;
        .card-info-item {
          display: inline-block;
          margin-right: 20px;
          small {
            color: var(--color-secondary);
            margin-bottom: 2px;
            display: block;
            font-size: 12px;
          }
          div {
            display: flex;
            align-items: center;
            font-size: 18px;
            svg {
              margin-right: 5px;
              color: var(--color-primary);
            }
            span {
              color: initial;
            }
          }
        }
      }
    }
  }

  .btn-load-more {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .card-list {
      .card {
        flex: 0 0 50%;
        max-width: calc(50% - 10px);

        .card-info,
        .card-footer {
          margin-left: calc(60px + 16px);
        }
      }
    }
  }
`;
