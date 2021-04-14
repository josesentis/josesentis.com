import React from 'react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { toggleCursor } from '../cursor';
import Social from '../social';
import withLoader from '../../hocs/withLoader';
import { Wrapper } from '../../layouts/Default';

import routes from '../../utils/routes';
import GET_SECTIONS from './queries';
import NavigationWrapper, { AppearingText } from './styles';

const NavLink = ({ to, className = '', children }) => (
  <div>
    <Link
      to={to}
      className={`title link ${className}`}
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
    >
      <AppearingText>
        {children}
      </AppearingText>
    </Link>
  </div>
);

class Navigation extends React.Component {
  componentWillUnmount () {
    toggleCursor('', true);
  }

  render () {
    const { loaded } = this.props;

    return (
      <Query query={GET_SECTIONS}>
        {({ loading, data }) => {
          const {
            sections: {
              playground,
              projects,
              about
            },
            social: {
              github,
              linkedin,
              instagram,
              twitter
            }
          } = data;

          return (
            <NavigationWrapper className="navigation">
              <Wrapper className="navigation-wrapper">
                <TransitionGroup className="navigation-links">
                  {loaded && !loading && (
                    <CSSTransition classNames="loaded" timeout={300}>
                      <NavLink to={routes.home}>
                        {projects.split('').map((char, i) => (
                          <span key={`char-${i}`} className="text">{char}</span>
                        ))}
                      </NavLink>
                    </CSSTransition>
                  )}
                  {loaded && !loading && (
                    <CSSTransition classNames="loaded" timeout={500}>
                      <NavLink
                        to={routes.playground}
                        className="double-link double-link-mobile"
                      >
                        {playground.split('<hr />').map((half, j) => (
                          <span>
                            {half.split('').map((char, i) => (
                              <span key={`char-playground-${i}-${j}-mobile`} className="text">{char}</span>
                            ))}
                          </span>
                        )
                        )}
                      </NavLink>
                    </CSSTransition>
                  )}
                  {loaded && !loading && (
                    <CSSTransition classNames="loaded" timeout={500}>
                      <NavLink
                        to={routes.playground}
                        className="double-link double-link-desktop"
                      >
                        {playground.split('<hr />').map((half, j) => half.split('').map((char, i) => (
                          <span key={`char-playground-${i}-${j}-desktop`} className="text">{char}</span>
                        ))
                        )}
                      </NavLink>
                    </CSSTransition>
                  )}
                  {loaded && !loading && (
                    <CSSTransition classNames="loaded" timeout={700}>
                      <NavLink to={routes.about}>
                        {about.split('').map((char, i) => (
                          <span key={`char-about-${i}`} className="text">{char}</span>
                        ))}
                      </NavLink>
                    </CSSTransition>
                  )}
                </TransitionGroup>
                <Social
                  twitter={twitter}
                  github={github}
                  linkedin={linkedin}
                  instagram={instagram}
                />
              </Wrapper>
            </NavigationWrapper>
          );
        }}
      </Query>
    );
  }
}

export default withLoader(Navigation);
export { AppearingText, NavigationWrapper };
