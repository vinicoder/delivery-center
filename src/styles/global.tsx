import { createGlobalStyle } from 'styled-components';

import { shade } from 'polished';

import bgSignin from 'assets/bg-signin.svg';

export default createGlobalStyle`

  :root{
    --font-default: 'Roboto', sans-serif;

    --max-width: 1024px;
    --gutter-default: 20px;
    --header-height: 60px;
    --menu-height: 45px;

    --color-default: #7E7E7E;
    --color-primary: #FE5200;
    --color-secondary: #A7A7A7;
    --color-detail: #FADEC1;
    --color-dark: #3B3B3B;
    --color-light: #F7F7F7;
    --color-danger: #AD3800;

    --color-primary-highlighted: ${shade(0.05, '#FE5200')};
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    height: 100%;
  }

  html, body{
    min-height: 100%;
  }

  body{
    min-height: 100%;
    color: var(--color-default);
    background-color: var(--color-light);
    -webkit-font-smoothing: antialiased;

    &:not(.signin){
      padding-top: calc(var(--header-height) + var(--menu-height));
    }

    &.signin{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      background: var(--color-light) url(${bgSignin}) 60vw center / auto 70% no-repeat;
    }
  }

  body, input, select, textarea, button{
    font: 16px / 100% var(--font-default);
  }

  h1,h2,h3,h4,h5,h6{
    color: var(--color-dark);
    line-height: 1em;
  }

  h1{ font-size: 2.2rem; }
  h2{ font-size: 2.0rem; }
  h3{ font-size: 1.8rem; }
  h4{ font-size: 1.6rem; }
  h5{ font-size: 1.4rem; }
  h6{ font-size: 1.2rem; }

  .text-default{ color: var(--color-danger) !important; }
  .text-primary { color: var(--color-primary) !important; }
  .text-secondary { color: var(--color-secondary) !important; }
  .text-detail { color: var(--color-detail) !important; }
  .text-dark { color: var(--color-dark) !important; }
  .text-light { color: var(--color-light) !important; }
  .text-danger { color: var(--color-danger) !important; }

  button{
    cursor: pointer;
  }

  .img-fluid{
    max-width: 100%;
    height: auto;
  }

  .container{
    width: 100%;
    max-width: var(--max-width);
    padding: 0 var(--gutter-default);
    margin: 0 auto;
  }

  .row{
    display: flex;
    flex-wrap: wrap;
    margin: 0 calc(var(--gutter-default) / 2 * -1);

    .col{
      flex-basis: 0;
      flex-grow: 1;
      min-width: 0;
      flex: 0 0 100%;
      max-width: 100%;
      padding: 0 calc(var(--gutter-default) / 2);
    }
  }

  .btn-group{
    display: flex;
    align-items: center;
    > *{
      &:not(:last-child){
        margin-right: 8px;
      }
    }
  }

  .card{
    background: #FFF;
    border-radius: 8px;
    border: solid 2px transparent;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.06);
    padding: var(--gutter-default);

    .card-title {
      color: var(--color-primary);
      font-size: 24px;
      font-weight: normal;
    }

    .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .card-date {
          background: var(--color-detail);
          width: 60px;
          height: 60px;
          padding: 10px;
          border-radius: 10px;
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          margin-right: 16px;

          strong {
            color: var(--color-primary);
          }

          span {
            font-size: 16px;
            margin-top: 5px;
          }
        }

        .card-header-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;

          span {
            font-size: 16px;
            text-transform: uppercase;
            color: var(--color-secondary);
          }
          strong {
            display: block;
            margin-top: 5px;
            font-size: 24px;
            color: initial;
          }
        }
      }

    &.card-hover{
      transition: all .2s ease;
      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12),
          0 10px 10px rgba(0, 0, 0, 0.08);
        transform: translate3d(0,-2px,0);
      }
    }

    &.card-outline{
      border-color: var(--color-primary);
      background: none;
      box-shadow: none;
    }
  }

  .section-title{
    & + .description{
      margin-top: 10px;
      line-height: 1.3em;
    }
    &.section-title-thin{
      font-weight: normal;
      margin-top: 5px;
      margin-bottom: 10px;
      display: inline-block;
    }
  }

  .section-header{
    margin-bottom: var(--gutter-default);
    .col:last-child{
      margin-top: 20px;
      display: flex;
      align-items: center;
    }
  }


  main{
    padding: calc(var(--gutter-default) + 10px) 0;
  }

  .alert {
    text-align: center;
    button {
      margin: 0 auto;
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 768px){

    :root{
      --gutter-default: 30px;
      --header-height: 80px;
    }

    .row{
      .col{
        flex: 0 0 50%;
        max-width: 50%;
      }
    }


    .section-title{
      & + .description{
      font-size: 18px;
      }
    }

    h1{ font-size: 2.8rem; }
    h2{ font-size: 2.6rem; }
    h3{ font-size: 2.4rem; }
    h4{ font-size: 2.2rem; }
    h5{ font-size: 2.0rem; }
    h6{ font-size: 1.8rem; }

    .section-header{
      .col:last-child{
        margin-top: 0px;
        justify-content: flex-end;
      }
    }

  }

`;
