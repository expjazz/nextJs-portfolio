import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import ProjPic from './ProjPic';

const StyledProject = styled.div`
  display: flex;
  height: fit-content;
  margin: 0;
  header {
    padding: 1em 2em;
  }
  .flexCol {
    flex-direction: column;
  }
  .opacity-0 {
    opacity: 0;
  }
  .icons {
    span {
      margin: 0 2rem;
    }
  }
  .one {
    background: white;
  }
  a {
    border: none;
    outline: none;
    :visited {
      border: none;
      outline: none;
    }
  }

  .a {
    display: flex;
  }
  .item {
    ${({ isSmall }) => (isSmall ? 'width: 100%;' : 'width: 50%;')}
    margin: 0;
  }
  .title {
    font-weight: bold;
  }
  .subtitle {
  }
`;
const Project = ({
  title,
  stack,
  subtitle,
  image,
  githubUrl,
  projectUrl,
  id,
}) => {
  const isSmall = useMediaQuery({ maxDeviceWidth: 800 });
  const { scrollYProgress } = useViewportScroll();
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(false);
  const card = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const cardPos = card.current.getBoundingClientRect().y;
      setShow(yPos > cardPos - 100);
    };
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  });

  return (
    <StyledProject
      className={`col-12 ${show ? 'opacity-1' : 'opacity-0'}`}
      isSmall={isSmall}
    >
      <motion.div
        whileHover={{
          scale: 1.03,
          translateY: -20,
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 8px',
        }}
        transition={{ duration: 0.7 }}
        animate={show ? { opacity: 1, x: 0 } : { opacity: 0 }}
        initial={{ opacity: 0, x: -800 }}
        exit={{ x: 1000 }}
      >
        <div className="a projSmall" ref={card}>
          <article className="item one h100 mediaItemProj">
            <a href="/#" target="_blank" className="image fit"></a>
            <header>
              <h2 className="title">{title}</h2>
            </header>
            <header>
              <h3 className="subtitle">{subtitle}</h3>
            </header>
            <div className="iconsProj">
              <div className="containerss">
                <div className="wave"></div>
              </div>
              <div className="fonts icons">
                <a href={githubUrl} target="_blank">
                  {' '}
                  <motion.span
                    className="icon fa-github"
                    whileHover={{ color: '#e27689' }}
                    transition={{ stype: 'spring', stiffness: 300 }}
                  ></motion.span>
                </a>
                <a href={projectUrl} target="_blank">
                  <motion.span
                    whileHover={{ color: '#e27689' }}
                    className="icon fa-globe"
                  ></motion.span>
                </a>
              </div>
            </div>
          </article>

          <ProjPic image={image} stack={stack} url={projectUrl} />
        </div>
      </motion.div>
    </StyledProject>
  );
};

export default Project;
