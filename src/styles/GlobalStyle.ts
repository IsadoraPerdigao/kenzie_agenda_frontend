import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-red-100: #F13045;
    --color-blue-200: #1877F2;
    --color-blue-100: #1B74E4;
    --color-green-100: #42B72A;
    --color-gray-600: #1C1E21;
    --color-gray-500: #454C53;
    --color-gray-400: #90949C;
    --color-gray-300: #BCBEBF;
    --color-gray-200: #F0F2F5;
    --color-gray-100: #FFFFFF;

  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
    font-family: sans-serif;
  }

  body {
    background-color: var(--color-gray-200);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 800;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
