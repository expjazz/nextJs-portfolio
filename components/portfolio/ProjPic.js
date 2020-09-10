import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background: white;
  display: flex;
  a {
    padding: 2rem;
    background: white;
  }
  .icon {
    color: #222629;
    margin-left: 5px;
    margin-right: 5px;
  }

  img {
    flex-grow: 2;
    width: 100%;
    margin: 0 auto;
  }
`;

const ProjPic = ({ image, stack, url }) => (
  <StyledRight className="item mediaItemProj">
    <a href={url} target="_blank" className="image fit">
      <img src={image} alt="" />
    </a>
  </StyledRight>
);

export default ProjPic;
