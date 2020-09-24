import styled from 'styled-components';

export const Container = styled.main`
  .section-content {
    .btn-return {
      margin: 0 auto;
      margin-top: 20px;
    }
  }

  .card {
    margin-bottom: 20px;

    .card-info {
      .card-info-item {
        width: 100%;
        margin-top: 20px;
        display: inline-block;
        > small {
          color: var(--color-secondary);
          margin-bottom: 2px;
          display: block;
          font-size: 12px;
        }
        > div {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          font-size: 18px;
          line-height: 1.2em;
          svg {
            margin-right: 5px;
            color: var(--color-primary);
          }
          > span {
            color: initial;
            flex: 1;
          }
        }
        ul {
          list-style: none;
          li {
            padding: 16px 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            color: initial;

            div {
              color: var(--color-secondary);
              font-size: 14px;
              flex: 0 0 100%;
              margin-top: 5px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }

            &:not(:nth-last-child(-n + 2)) {
              border-bottom: solid 1px #f0f0f0;
            }

            &:last-child {
              font-size: 18px;
              svg {
                color: var(--color-primary);
                margin-bottom: -2px;
              }
            }
          }
        }
      }
    }
  }
`;
