import React, { useEffect } from 'react';
import { Router } from "react-router-dom";
import Helmet from 'react-helmet';
import { ApolloProvider } from '@apollo/react-hooks';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import isExplorer from '@runroom/purejs/lib/isExplorer';
import touchable from '@runroom/purejs/lib/touchable';
import axios from 'axios';

import useLoading from '../../hooks/useLoading';
import AppRouter from '../appRouter';
import Cursor from '../cursor';
import Loader from '../loader';

import { playground } from '../../../package.json';
import data from '../../data/cache';
import client from '../../utils/apollo';
import history from '../../utils/history'
import GlobalStyle from '../../styles';

const App = () => {
  axios.defaults.baseURL = playground;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const { loading, showLoader } = useLoading();

  useEffect(() => {
    if (isExplorer()) document.documentElement.classList.add('browser-ie');
    document.documentElement.classList.add(touchable() ? 'touch' : 'non-touch');

    console.log("%josesentis.com","color: blue; font-size: 20px");
  }, []);

  const title = `${data.name} - ${data.job}`;

  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.siteUrl} />
        <meta property="og:image" content={`${data.siteUrl}/${data.ogImage}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={data.description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@josesentis_" />
        <meta name="twitter:title" content={title} data-react-helmet="true" />
        <meta name="twitter:description" content={data.description} />
        <meta
          name="twitter:image"
          content={`${data.siteUrl}/${data.ogImage}`}
        />
      </Helmet>
      <GlobalStyle />
      {!loading ? (
        <ApolloProvider client={client}>
          <Cursor />
          <Router history={history}>
            <AppRouter />
          </Router>
        </ApolloProvider>
      ) : (
          <TransitionGroup>
            {showLoader && (
              <CSSTransition classNames="loaded" timeout={2000}>
                <Loader />
              </CSSTransition>
            )}
          </TransitionGroup>
        )
      }
    </>
  );
}

export default App;
