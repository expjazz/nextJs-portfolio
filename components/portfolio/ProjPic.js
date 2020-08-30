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

  .icon {
    color: #222629;
    margin-left: 5px;
    margin-right: 5px;
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

    
.containerss {
  position: relative;
  background: #222629;
  height: 60%;
  width: 50%;
  padding: 0;
}

.date {
    position: absolute;
    left: 11%;
    bottom: -7px;
    color: white;
    font-weight: 600;
    font-size: 18px;
}

.wave {
  position: absolute;
  height: 40%;
  width: 100%;
  background: #222629;
  bottom: 0;
}

.wave::before, .wave::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 50%;
}

.wave::before {
  width: 55%;
  height: 109%;
  background-color:#f5fafa ;
  right: -1.5%;
  top: 60%;
}
.wave::after {
  width: 55%;
  height: 100%;
  background-color: #222629;
  left: 0;
  top: 40%;
}
.bCont {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: flex-end
}
.bottom {
    box-sizing: border-box;
    min-width: 0px;
    
    background-color: #222629;
    color: white;
    display: inline;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    right: 0px;
    bottom: 0px;
    clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);
    margin: 0px;
    padding: 10px 10px 10px 20px;
    height: 70%;
}


`


const ProjPic = ({image}) => {
  return (
    <StyledRight className="item">
      <div className="iconsProj">
        <div className="containerss">
          <div className="wave">
        <p className="date">
          2020
        </p>

          </div>
        </div>
        <div className="fonts icons">
        <span className="icon fa-github"></span>
        <span className="icon fa-globe"></span>
        </div>
      </div>
      <a href="/#" className="image fit">
        <img src={image} alt=""/>
      
      </a>
      <div className="bCont">

            <div className="bottom">
                <p>here</p>
            </div>
      </div>

    </StyledRight>
  )
}

export default ProjPic
