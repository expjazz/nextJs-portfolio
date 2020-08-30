import React from 'react'
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';
import styled from 'styled-components';
const StyledNav = styled.nav`

		ul {
			list-style: none;
			padding-left: 0;
			margin-bottom: 0;

			li {
				padding-left: 0;

				&.active {

					a {
						background: rgba(0, 0, 0, 0.15);
						box-shadow: inset 0 0 0.25em 0 rgba(0, 0, 0, 0.125);
						color: #fff;

						span:before {
							color: #e27689;
						}
					}
				}

				a {
					display: block;
					padding: 0.5em 1.5em 0.5em 1.5em;
					color: rgba(255, 255, 255, 0.5);
					text-decoration: none;
					outline: 0;
					border: 0;
					transition: none;

					span {
						position: relative;
						display: block;
						font-size: 0.8em;

						&:before {
							position: absolute;
							left: 0;
							color: #41484c;
							text-align: center;
							width: 1.25em;
							line-height: 1.75em;
						}
					}

					
				}
			}
		}


`

const Nav = ({ sections }) => {
  console.log(sections.map(id => id.id))
  return (
    <StyledNav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`} id="top-link">
                    <span className={`icon ${s.icon}`}>{s.name}</span>
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>
      </ul>
      </StyledNav>
      )
    }
    
export default Nav
