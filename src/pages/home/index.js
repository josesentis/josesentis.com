import React from 'react';
import { Query } from "react-apollo";
import { withRouter } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from '../../components/header';
import { AppearingText } from '../../components/navigation';
import ProjectList from '../../components/projectList';
import withLoader from '../../hocs/withLoader';
import Layout, { Wrapper } from '../../layouts/Default';

import GET_HOME_DATA from './queries';
import { Fold } from './styles';

class Home extends React.Component {
  render () {
    const { loaded } = this.props;
    const currentYear = new Date().getFullYear().toString();

    return (
      <Query query={GET_HOME_DATA}>
        {({ loading, data }) => {
          const {
            job,
            name,
            pages: {
              projects: {
                projectList
              }
            }
          } = data;

          return !loading && (
            <Layout location={this.props.location} className="home">
              <Header />
              <Wrapper>
                <Fold>
                  <TransitionGroup>
                    {loaded && !loading && (
                      <CSSTransition classNames="loaded" timeout={400}>
                        <h1 className="title">
                          {job.split(' ').map((word, j) => (
                            <AppearingText key={`job-${j}`}>
                              {word.split('').map((char, i) => (
                                <span key={`title-${i}-${j}`} className="text">{char}</span>
                              ))}
                            </AppearingText>
                          )
                          )}
                        </h1>
                      </CSSTransition>
                    )}
                    {loaded && !loading && (
                      <CSSTransition classNames="loaded" timeout={600}>
                        <div>
                          <AppearingText className="title2">
                            <span className="text">{name} — {currentYear}</span>
                          </AppearingText>
                        </div>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
                </Fold>
                <ProjectList projectList={projectList} />
              </Wrapper>
            </Layout>
          )
        }}
      </Query>
    );
  }
}

export default withLoader(withRouter(Home));