import React from 'react';
import { Query } from "react-apollo";
import { withRouter } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import BackgroundImage from '../../components/backgroundImage';
import Header from '../../components/header';
// import Navigation from '../components/navigation';
import { AppearingText } from '../../components/navigation';
import Project from '../../components/project';
import withLoader from '../../hocs/withLoader';
import Layout, { Wrapper } from '../../layouts/Default';

import GET_PROJECTS from './queries';
import { Fold, ProjectList } from './styles';

class Home extends React.Component {
  render () {
    const { loaded } = this.props;

    return (
      <Query query={GET_PROJECTS}>
        {({ loading, data }) => {
          const {
            job,
            pages: {
              projects: {
                projectList
              }
            }
          } = data;

          return (
            <Layout location={this.props.location} className="home">
              <Header />
              <Wrapper>
                <Fold>
                  <TransitionGroup>
                    {loaded && !loading && (
                      <CSSTransition classNames="loaded" timeout={300}>
                        <h1 className="title">
                          {job.split(' ').map((word, j) => (
                            <AppearingText>
                              {word.split('').map((char, i) => (
                                <span key={`title-${i}-${j}`} className="text">{char}</span>
                              ))}
                            </AppearingText>
                          )
                          )}
                        </h1>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
                </Fold>
                <ProjectList id="project-list">
                  {projectList.map(project => (
                    <Project
                      key={project.title.replace(' ', Math.random())}
                      project={project}
                    />
                  ))}
                  <div className="project-image-animation" id="project-image">
                    {projectList.map(project => (
                      <BackgroundImage
                        key={project.title.replace(' ', Math.random())}
                        className="project-image"
                        lazyEffect={false}
                        id={project.title.replace(' ', '-')}
                        src={project.image}
                      />
                    ))}
                  </div>
                </ProjectList>
              </Wrapper>
            </Layout>
          )
        }}
      </Query>
    );
  }
}

export default withLoader(withRouter(Home));

// <Navigation />
