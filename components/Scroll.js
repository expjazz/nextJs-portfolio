import smoothscroll from 'smoothscroll-polyfill';
import React, { useEffect } from 'react';

const Element = ({ children }) => children;

const Scroll = props => {
  useEffect(() => {
    smoothscroll.polyfill();
  });
  const scrollTo = (element, offSet = 0, timeout = null) => {
    const elemPos = element
      ? element.getBoundingClientRect().top + window.pageYOffset
      : 0;
    if (timeout) {
      setTimeout(() => {
        window.scroll({
          top: elemPos + { offSet, left: 0, behavior: 'smooth' },
          timeout,
        });
      });
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
    }
  };

  const handleClick = e => {
    e.preventDefault();

    let elem = 0;
    let scroll = true;
    const { type, element, offset, timeout } = props;
    if (type && element) {
      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[0];
          scroll = !!elem;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = !!elem;
          break;
        default:
      }
      scroll
        ? scrollTo(elem, offset, timeout)
        : console.log('element not found');
    }
  };
  return (
    <Element>
      {typeof props.children === 'object' ? (
        React.cloneElement(props.children, { onClick: handleClick })
      ) : (
        <span onClick={handleClick}>{props.children}</span>
      )}
    </Element>
  );
};

export default Scroll;
