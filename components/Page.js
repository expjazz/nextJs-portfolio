import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import React from 'react'
const theme = {
  lightRed: "ffadad",
  lightBrown: "ffd6a5",
  lightGrey: "e2e0e0a6",
  lightYellow: "fdffb6",
  lightGreen: "caffbf",
  lightBlue: "9bf6ff",
  darkBlue: "a0c4ff",
  blackBlue: "bdb2ff",
  lightPurple: "ffc6ff",
  white: "fffffc",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'barskersville_pro';
    src: url('/public/Baskerville120Pro-Bold.woff2');
    font-weight: normal;
    font-style: normal;
  } */
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    /* font-family: 'barskersville_pro'; */
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.blackBlue}
  }

  .image {
		display: inline-block;
		border: 0;

		img {
			display: block;
			width: 100%;
		}

		&.avatar48 {
			width: 48px;
			height: 48px;

			img {
				width: 48px;
				height: 48px;
			}
		}

		&.fit {
			display: block;
			width: 100%;
		}

		&.featured {
			display: block;
			width: 100%;
			margin: 0 0 2em 0;
		}

		&.left {
			float: left;
			margin: 0 2em 2em 0;
		}

		&.centered {
			display: block;
			margin: 0 0 2em 0;

			img {
				margin: 0 auto;
				width: auto;
			}
		}
	}

`;

const StyledPage = styled.div`
  background: ${(props) => props.theme.white};
  color: black;
  	input[type="button"],
	input[type="submit"],
	input[type="reset"],
	button,
	.button {
		position: relative;
		display: inline-block;
		border-radius: 0.35em;
		color: #fff !important;
		text-decoration: none;
		padding: 0.75em 2.5em 0.75em 2.5em;
		background-color: #8ebebc;
		border: 0;
		cursor: pointer;
		@include vendor('background-image', ('linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))', 'url("../images/overlay.png")'));
		@include vendor('transition', 'background-color 0.35s ease-in-out');

		&:hover {
			background-color: #9ececc;
		}

		&:active {
			background-color: #7eaeac;
		}
	}

  #main {
		margin-left: 375px;

		> section {
			margin: 0;
			overflow: hidden;
			padding: 4em 0;
			box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.05), inset 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.025);
			text-align: center;
			background-image: url('../images/overlay.png');

			&.dark {
				color: #ddd;
				color: rgba(255, 255, 255, 0.75);

				h2, h3, h4, h5, h6 {
					color: inherit;
				}

				strong {
					color: #fff;
					border-color: inherit;
				}

				a {
					color: #fff;
					border-color: inherit;

					&:hover {
						border-bottom-color: rgba(255, 255, 255, 0);
					}
				}
			}

			&.cover {
				padding: 10em 0;
				background-size: cover;
				background-position: center center;
			}

			&.one {
				background-color: #81918E;
				background-image: url('../images/banner.jpg');
			}

			&.two {
				background-color: #f5fafa;
			}

			&.three {
				background-color: #ecf1f1;
			}

			&.four {
				background-color: #e8edec;
			}
		}
	}
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;
const Page = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        {children}  
      </StyledPage>      
    </ThemeProvider>
  )
}

export default Page
