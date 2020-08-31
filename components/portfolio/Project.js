import React from 'react'
import ProjPic from './ProjPic'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledProject = styled.div`
  display: flex;
  height: fit-content; 
  margin: 0; 
  
  .icons {
    span {
      margin: 0 2rem;
    }
  } 
  .one {
    background: white;
   }
  
  .a {
    display: flex;
  }
  .item {
    width: 50%;
    margin: 0;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
  }
  .subtitle {
    font-size: 14px;
  }
  
`
const Project = ({title, stack, subtitle, image}) => {
  console.log(image)
  return (

    <StyledProject  className="col-12">
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
      <div className="iconsProj">
        <div className="containerss">
          <div className="wave">
          </div>
        </div>
        <div className="fonts icons">
        <motion.span className="icon fa-github"
        whileHover={{color: '#e27689'}} transition={{stype: 'spring', stiffness: 300}}
        ></motion.span>
        <motion.span 
        whileHover={{color: '#e27689'}}
        className="icon fa-globe"></motion.span>
        </div>
      </div> 
    </article>


    <ProjPic image={image} stack={stack} />
        </div>
      </motion.div>
  </StyledProject >
  )
}

export default Project
