import { useState, useEffect } from 'react';
import Helmet from 'react-helmet';

const Layout = props => {
  const [isPreloaded, setIsPreloaded] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPreloaded(false);
    }, 100);
  }, [setIsPreloaded]);
  const { children } = props;

  return (
    <>
      <Helmet
        title="Expedito Andrade Portfolio"
        meta={[
          { name: 'description', content: 'Eventally' },
          { name: 'keywords', content: 'site, web' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
        {children}
      </div>
    </>
  );
};

export default Layout;
