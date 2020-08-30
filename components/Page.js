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
`;

const StyledPage = styled.div`
  background: ${(props) => props.theme.white};
  color: black;
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
