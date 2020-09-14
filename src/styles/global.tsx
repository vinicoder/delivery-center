import { createGlobalStyle } from 'styled-components';

import { shade } from 'polished';

export default createGlobalStyle`

  :root{
    --font-default: 'Roboto', sans-serif;

    --max-width: 1024px;
    --gutter-default: 20px;

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

  html, body{
    min-height: 100%;
  }

  body{
    color: var(--color-default);
    background: var(--color-light);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px / 100% var(--font-default);
  }

  h1,h2,h3,h4,h5,h6{
    color: var(--color-dark);
    line-height: 1em;
  }

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
    margin: 0 calc(var(--gutter-default) * -1);

    .col{
      flex-basis: 0;
      flex-grow: 1;
      min-width: 0;
      flex: 0 0 100%;
      max-width: 100%;
      padding: 0 var(--gutter-default);
    }
  }

  .card{
    background: #FFF;
    border-radius: 8px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.06);
    padding: var(--gutter-default);
  }

  @media screen and (min-width: 768px){

    :root{
      --gutter-default: 30px;
    }

    .row{
      .col{
        flex: 0 0 50%;
        max-width: 50%;
      }
    }

  }


`;
