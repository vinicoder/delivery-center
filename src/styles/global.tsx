import { createGlobalStyle } from 'styled-components';

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
    font: 16px var(--font-default);
  }

  h1,h2,h3,h4,h5,h6{
    color: var(--color-dark);
  }

  button{
    cursor: pointer;
  }

  .container{
    width: 100%;
    max-width: var(--max-width);
    padding: 0 var(--gutter-default);
    margin: 0 auto;
  }

`;
