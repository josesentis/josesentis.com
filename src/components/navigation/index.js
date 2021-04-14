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

const NavLink = ({ to, className = '', children, ...props }) => (
  <div>
    <Link
      to={to}
      className={`title link ${className}`}
      {...props}
    >
      <AppearingText>
        {children}
      </AppearingText>
    </Link>
  </div>
);

class Navigation extends React.Component {
  state = {
    linkName: false
  }

  componentWillUnmount () {
    toggleCursor('', true);
  }

  toggleLink = linkName => {
    if (linkName) this.setState({ linkName });
    else this.setState({ linkName: false });
  }

  render () {
    const { loaded } = this.props;
    const { linkName } = this.state;

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
              twitter,
              email
            }
          } = data;

          return (
            <NavigationWrapper className="navigation">
              <Wrapper className="navigation-wrapper">
                <TransitionGroup className="navigation-links">
                  {loaded && !loading && (
                    <CSSTransition classNames="loaded" timeout={300}>
                      <NavLink
                        to={routes.home}
                        onMouseEnter={() => {
                          this.toggleLink('projects');
                          toggleCursor();
                        }}
                        onMouseLeave={() => {
                          this.toggleLink(false);
                          toggleCursor();
                        }}
                        className={!linkName || linkName === 'projects' ? '' : 'hide'}
                      >
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
                        className={`double-link double-link-mobile ${!linkName || linkName === 'playground' ? '' : 'hide'}`}
                        onMouseEnter={() => {
                          this.toggleLink('playground')
                          toggleCursor();
                        }}
                        onMouseLeave={() => {
                          this.toggleLink(false);
                          toggleCursor();
                        }}
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
                        className=""
                        onMouseEnter={() => {
                          this.toggleLink('playground')
                          toggleCursor();
                        }}
                        onMouseLeave={() => {
                          this.toggleLink(false);
                          toggleCursor();
                        }}
                        className={`double-link double-link-desktop ${!linkName || linkName === 'playground' ? '' : 'hide'}`}
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
                      <NavLink
                        to={routes.about}
                        onMouseEnter={() => {
                          this.toggleLink('about')
                          toggleCursor();
                        }}
                        onMouseLeave={() => {
                          this.toggleLink(false);
                          toggleCursor();
                        }}
                        className={!linkName || linkName === 'about' ? '' : 'hide'}
                      >
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
                  email={email}
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
