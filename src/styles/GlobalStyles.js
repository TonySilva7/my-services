import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  :root {
    --primary-color: #252437;
    --secondary-color: #EAEAEC;
    --purple-logo: #7a75bc;
    --blue-logo: #BBE9F9;
    --my-shadow: 1px 4px 9px -6px rgba(37, 36, 55, 0.21);
    /*--my-anime: load-balls 1s cubic-bezier(.19, .57, .3, .98) infinite alternate;*/
    --my-anime: load-balls 1.9s ease infinite;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background-color: #efefef;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: var(--purple-logo);
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: #d73743;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
