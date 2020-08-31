import React from 'react'
import styled from 'styled-components'
import Scroll from '../components/Scroll'

const StyledMe = styled.section`

`

const Me = () => {
  return (
    <StyledMe id='top' className='one dark cover'>
        <div className="container">
        <h1 className="alt">
      Hi! I'm <strong>Expedito</strong>
      <br />
      Web developer
    </h1>
    <p>I have made few things check it out.</p>
          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
  </StyledMe>

  )
}

export default Me
