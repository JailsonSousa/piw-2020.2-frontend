import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		min-height: 100%;
    height: 100%;
    min-width: fit-content;
	}

	body {
    background: #148cf1;
		-webkit-font-smoothing: antialiased !important;
	}

	body, input, button {
		color: #222;
		font-size: 14px;
		font-family: Arial, Helvetica, sans-serif;
	}

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  a { color: inherit; }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
