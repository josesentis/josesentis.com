import React, { useEffect } from 'react';
import { Router } from "react-router-dom";
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
import client from '../../utils/apollo';
import history from '../../utils/history'
import GlobalStyle from '../../styles';
import firmLogger from '../../utils/firm-logger';

const App = () => {
  axios.defaults.baseURL = playground;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const { loading, showLoader } = useLoading();

  useEffect(() => {

    if (isExplorer()) document.documentElement.classList.add('browser-ie');
    document.documentElement.classList.add(touchable() ? 'touch' : 'non-touch');

    firmLogger();
  }, []);

  return (
    <>
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
