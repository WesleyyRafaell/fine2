import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-display: swap;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 100;
		src: url('/fonts/inter-v12-latin-100.woff2') format('woff2')
	}

	@font-face {
		font-display: swap;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 300;
		src: url('/fonts/inter-v12-latin-300.woff2') format('woff2')
	}

	@font-face {
		font-display: swap;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		src: url('/fonts/inter-v12-latin-600.woff2') format('woff2')
	}

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
		html {
			font-size: 62.5%;
		}

		body {
			font-family: ${theme.font.family};
			font-size: ${theme.font.sizes.medium};
		}
	`}

`
export default GlobalStyle
