import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../pages/home';
import About from '../pages/about';
import Project from '../pages/project';
import Playground from '../pages/playground';
import NotFound from '../pages/notFound';

import content from '../data/content.json';

const AppRouter = () => {
  return (
    <Route
      render={({ location }) => {
        window.scrollTo(0, 0);

        return (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 800, exit: 600 }}
              classNames={'fade'}
            >
              <Switch location={location}>
                <Route path='/' component={Home} exact />
                <Route path="/about" component={About} exact />
                <Route path="/playground" component={Playground} exact />
                {Object.keys(content).map(project => <Route key={project} path={`/projects/${project}`} component={Project} exact />)}
                <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        );
      }}>
    </Route>
  );
};

export default withRouter(AppRouter);
