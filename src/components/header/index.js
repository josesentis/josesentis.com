import React from 'react';
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Wrapper } from '../../layouts/Default';
import withLoader from '../../hocs/withLoader';
import { toggleCursor } from '../cursor';

import GET_DATA from './queries';
import HeaderStyled from './styles';

class Header extends React.Component {
  componentWillUnmount() {
    toggleCursor('', true);
  }

  render() {
    const { loaded } = this.props;

    return (
      <Query query={GET_DATA}>
        {({ loading, data }) => {
          const {
            job,
            name
          } = data;

          return (
            <HeaderStyled>
              <Wrapper>
                <TransitionGroup component={null}>
                  {loaded && !loading && (
                    <CSSTransition classNames="loaded" timeout={200}>
                      <div className="header">
                        <div>
                          <Link
                            to="/"
                            onMouseEnter={() => toggleCursor()}
                            onMouseLeave={() => toggleCursor()}
                          >
                            <span>{name}</span>
                            <span>folio - {new Date().getFullYear()}</span>
                          </Link>
                        </div>
                        <div>{job}</div>
                      </div>
                    </CSSTransition>
                  )}
                </TransitionGroup>
              </Wrapper>
            </HeaderStyled>
          );
        }}
      </Query>
    );
  }
};

export default withLoader(Header);
