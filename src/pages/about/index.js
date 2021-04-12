import React from 'react';
import { Query } from "react-apollo";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router";

import Header from '../../components/header';
import Layout, { Wrapper } from '../../layouts/Default';
import { AppearingText, NavigationWrapper } from '../../components/navigation';
import Profile from '../../components/profile';
import withLoader from '../../hocs/withLoader';

import GET_ABOUT from './queries';

class About extends React.Component {
  render() {
    const { loaded } = this.props;

    return (
      <Query query={GET_ABOUT}>
        {({ loading, data }) => {
          const {
            about
          } = data.sections;

          return (
            <Layout location={this.props.location} title={about} className="about">
              <Header />
              <Wrapper>
                <NavigationWrapper className="fixed">
                  <TransitionGroup>
                    {loaded && !loading && (
                      <CSSTransition classNames="loaded" timeout={300}>
                        <h1 className="title">
                          <AppearingText>
                            {about.split('').map((char, i) => (
                              <span key={`char-${i}`} className="text active">{char}</span>
                            ))}
                          </AppearingText>
                        </h1>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
                </NavigationWrapper>
                <Profile />
              </Wrapper>
            </Layout>
          );
        }}
      </Query>
    );
  }
}

export default withLoader(withRouter(About));
