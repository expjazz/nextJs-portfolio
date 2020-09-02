import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLogo = styled.div`
  position: relative;
  margin: 1.75em 1.5em 1.5em 1.5em;
  min-height: 48px;
  cursor: default;

  h1 {
    position: relative;
    color: #fff;
    font-weight: 600;
    font-size: 1em;
    line-height: 1em;
  }

  p {
    position: relative;
    display: block;
    font-size: 0.6em;
    color: rgba(255, 255, 255, 0.5);
    line-height: 1.25em;
    margin: 0.5em 0 0 0;
  }

  .image {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Top = () => (
  <StyledLogo id="logo">
    <Link href="/">
      <>
        <span className="image avatar48">
          <img src="logo.png" height="128px" alt="" />
        </span>

        <h1 id="title">Expedito Andrade</h1>
        <p>Full Stack Developer</p>
      </>
    </Link>
  </StyledLogo>
);

export default Top;
