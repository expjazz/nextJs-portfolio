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
        titleTemplate="Expedito Andrade"
        meta={[
          { name: 'description', content: 'Eventally' },
          { name: 'keywords', content: 'site, web' },
          {
            property: 'og:description',
            content:
              'FullStack Developer, Portfolio of Expedito Andrade, Microverse Student',
          },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:creator', content: 'Expedito Andrade' },
          { name: 'twitter:title', content: 'Expedito Andrade Portfolio' },
          {
            name: 'twitter:description',
            content:
              'FullStack Developer, Portfolio of Expedito Andrade, Microverse Student',
          },
          { name: 'twitter:name', content: '@expjazz' },
          {
            name: 'keywords',
            content:
              'web development, software developer, react, node, graphql',
          },
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
