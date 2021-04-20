import React from 'react';
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import withLoader from '../../hocs/withLoader';
import { Wrapper } from '../../layouts/Default';
import { toggleCursor } from '../cursor';
import Navigation from '../navigation';

import GET_DATA from './queries';
import HeaderStyled from './styles';

class Header extends React.Component {
  state = {
    showNavigation: false
  }

  componentWillUnmount () {
    toggleCursor('', true);
  }

  toggleNavigation = () => {
    const { showNavigation } = this.state;

    if (showNavigation) document.documentElement.classList.remove('no-overflow');
    else document.documentElement.classList.add('no-overflow');

    this.setState({ showNavigation: !showNavigation });
  }

  render () {
    const { loaded } = this.props;
    const { showNavigation } = this.state;

    return (
      <Query query={GET_DATA}>
        {({ loading, data }) => {
          const {
            job,
            name
          } = data;

          return (
            <>
              <HeaderStyled className={`${showNavigation ? 'nav-open' : ''}`}>
                <Wrapper>
                  <TransitionGroup component={null}>
                    {loaded && !loading && (
                      <CSSTransition classNames="loaded" timeout={200}>
                        <div className="header-wrapper">
                          <div className="header">
                            <div>
                              <Link
                                to="/"
                                onMouseEnter={() => toggleCursor()}
                                onMouseLeave={() => toggleCursor()}
                              >
                                <span>{name}</span>
                                <span>folio — {new Date().getFullYear()}</span>
                              </Link>
                            </div>
                            <div>{job}</div>
                          </div>
                          <button
                            className="nav-toggle"
                            onClick={this.toggleNavigation}
                          >
                            {showNavigation && 'close'}
                            {!showNavigation && 'menu'}
                          </button>
                        </div>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
                </Wrapper>
              </HeaderStyled>
              {showNavigation && (
                <CSSTransition classNames="loaded" timeout={200}>
                  <Navigation />
                </CSSTransition>
              )}
            </>
          );
        }}
      </Query>
    );
  }
};

export default withLoader(Header);
