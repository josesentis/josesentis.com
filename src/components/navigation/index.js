import React from 'react';
import { Query } from "react-apollo";
import { NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { toggleCursor } from '../cursor';
import Social from '../social';
import withLoader from '../../hocs/withLoader';
import { Wrapper } from '../../layouts/Default';

import routes from '../../utils/routes';
import GET_SECTIONS from './queries';
import NavigationWrapper, { AppearingText } from './styles';

const CustomNavLink = ({ to, className = '', children, ...props }) => (
  <div>
    <NavLink
      to={to}
      className={`title link ${className}`}
      activeClassName="active"
      exact
      {...props}
    >
      <AppearingText>
        {children}
      </AppearingText>
    </NavLink>
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
                      <CustomNavLink
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
                      </CustomNavLink>
                    </CSSTransition>
                  )}
                  {loaded && !loading && (
                    <CSSTransition classNames="loaded" timeout={500}>
                      <CustomNavLink
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
                      </CustomNavLink>
                    </CSSTransition>
                  )}
                  {loaded && !loading && (
                    <CSSTransition classNames="loaded" timeout={500}>
                      <CustomNavLink
                        to={routes.playground}
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
                      </CustomNavLink>
                    </CSSTransition>
                  )}
                  {loaded && !loading && (
                    <CSSTransition classNames="loaded" timeout={700}>
                      <CustomNavLink
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
                      </CustomNavLink>
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
