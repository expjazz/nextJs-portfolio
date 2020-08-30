import React from 'react'
import ProjPic from './ProjPic'
import styled from 'styled-components';

const StyledProject = styled.div`
  display: flex;
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
const Project = ({title, subtitle, image}) => {
  console.log(image)
  return (
    <StyledProject  className="col-6 col-12-mobile" >
    <article className="item one">
      <a href="/#" className="image fit">
      </a>
      <header>
        <h2 className='title'>{title}</h2>
      </header>
      <header>
        <h3 className='subtitle'>{subtitle}</h3>
      </header>
    </article>
    <ProjPic image={image} />
  </StyledProject >
  )
}

export default Project
