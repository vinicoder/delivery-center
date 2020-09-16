import styled from 'styled-components';

export const Container = styled.main`
  .card {
    margin-bottom: 20px;
  }

  .featured-cards {
    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      svg {
        font-size: 45px;
        color: var(--color-primary);
      }

      div {
        text-align: right;
        flex: 1;
        strong {
          font-size: 28px;
          margin-bottom: 10px;
          display: block;
          color: initial;
        }
        span {
          font-size: 18px;
          color: var(--color-secondary);
        }
      }
    }
  }

  .order-list,
  .chart {
    margin-top: 20px;
  }

  .order-list {
    .order {
      text-decoration: none;
      color: initial;
      display: block;
      .card-header-info {
        strong {
          transition: all 0.2s ease;
        }
      }
      &:not(:last-child) {
        margin-bottom: 8px;
        padding-bottom: 8px;
      }

      &:hover {
        .card-header-info {
          strong {
            color: var(--color-primary);
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .featured-cards {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .card {
        flex: 1;
        max-width: calc(33.33% - 10px);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .featured-cards {
      .card {
        svg {
          font-size: 65px;
        }

        div {
          strong {
            font-size: 26px;
            margin-bottom: 16px;
          }
          span {
            font-size: 24px;
          }
        }
      }
    }
  }
`;
