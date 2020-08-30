import React, { useState } from 'react'
import Top from './Top'
import Nav from './Nav'
import styled from 'styled-components'
import TopNav from './TopNav'
const StyledSideNav = styled.div`
#header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
		background: #222629 url('overlay.png');
		box-shadow: inset -0.25em 0 0.25em 0 rgba(0, 0, 0, 0.1);
		color: #fff;
		height: 100%;
		left: 0;
		overflow-y: auto;
		position: fixed;
		text-align: right;
		top: 0;
;

		.top {
      flex-grow: 1;
		}

		.bottom {
			flex-shrink: 0;
			padding: 1.5em 0 0.75em 0;

			> :last-child {
				margin-bottom: 0;
			}
		}

		.icons {
			font-size: 0.8em;
			text-align: center;

			a {
				color: #41484c;
				transition: color 0.35s ease-in-out;

				&:hover {
					color: #fff;
				}
			}
		}
	}


`
const index = ({sections}) => {
  const [headerOpen, toggleHeader] = useState(false);

  return (
    < StyledSideNav className={`${headerOpen ? 'header-visible' : ' '}`}>
      <TopNav
        title='Expedito Andrade'
        onMenuClick={() => toggleHeader(!headerOpen)}
      />
      <div id="header">
        <div className="top">
          <Top
          />
          <Nav sections={sections} />
        </div>
      </div>

      {/* <section id="header">
        <Header
          avatar={pic}
          title={config.authorName}
          heading={config.heading}
        />
        <Nav sections={sections} />
        <Footer socialLinks={config.socialLinks} />
      </section> */}
    </StyledSideNav >
  )
}

export default index
