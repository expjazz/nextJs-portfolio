import React from 'react'
import ProjPic from './ProjPic'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledProject = styled.div`
  display: flex;
  height: 100%; 
  .one {
    background: white;
  }
  
  .a {
    display: flex;
  }

  .h100 {
    height: 100%;
  }
  .item {
    width: 50%;
  }
  .title {
    font-size: 18px;
  }
  .subtitle {
    font-size: 14px;
  }
  
`
const Project = ({title, stack, subtitle, image}) => {
  console.log(image)
  return (

    <StyledProject  className="col-6 col-12-mobile">
      <motion.div 
      whileHover={{scale: 1.07, translateY: -20, boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 8px'}}>

        <div className="a">


    <article className="item one h100">
      <a href="/#" className="image fit">
      </a>
      <header>
        <h2 className='title'>{title}</h2>
      </header>
      <header>
        <h3 className='subtitle'>{subtitle}</h3>
      </header>
    </article>
    <ProjPic image={image} stack={stack} />
        </div>
      </motion.div>
  </StyledProject >
  )
}

export default Project
