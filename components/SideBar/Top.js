import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

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
      img {
        height: 128px;
      }
		}
	
`



const Top = () => {
  return (
    <StyledLogo>
     <Link href='/'>
      <span className='image'>
        <img src="logo.png" alt=""/> 
      </span>   
     </Link> 
    </StyledLogo>
  )
}

export default Top
