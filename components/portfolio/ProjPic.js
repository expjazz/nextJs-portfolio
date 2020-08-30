import React from 'react'
import styled from 'styled-components'
const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  a {


  }

  .iconsProj {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  img {
    flex-grow: 2;
    border-radius: 30%;
    width: 70%;
    margin: 0 auto;
  }

  p {
    margin: 0;
  }


`


const ProjPic = ({image}) => {
  return (
    <StyledRight className="item">
      <div className="iconsProj">
        <p className="date">
          2020
        </p>
        <div className="fonts icons">
            some

        </div>
      </div>
      <a href="/#" className="image fit">
        <img src={image} alt=""/>
      </a>
        <p>here</p>

    </StyledRight>
  )
}

export default ProjPic
