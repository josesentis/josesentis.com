import React from 'react';
import { Query } from "react-apollo";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router";

import Header from '../../components/header';
import { AppearingText, NavigationWrapper } from '../../components/navigation';
import Layout, { Wrapper } from '../../layouts/Default';
import Project from '../../components/project';

import GET_PROJECTS from './queries';
import BackgroundImage from '../../components/backgroundImage';
import ProjectList from './styles';

class Projects extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const {
      loaded
    } = this.state;

    return (
      <Query query={GET_PROJECTS}>
        {({ loading, data }) => {
          const {
            sections: {
              projects
            },
            pages: {
              projects: {
                projectList
              }
            }
          } = data;

          return (
            <Layout location={this.props.location} title={projects} className="dark">
              <Header />
              <Wrapper>
                <NavigationWrapper>
                  <TransitionGroup>
                    {loaded && !loading && (
                      <CSSTransition classNames="loaded" timeout={300}>
                        <h1 className="title">
                          <AppearingText>
                            {projects.split('').map((char, i) => (
                              <span key={`char-${i}`} className="text active">{char}</span>
                            ))}
                          </AppearingText>
                        </h1>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
                </NavigationWrapper>
              </Wrapper>
              <Wrapper className="reading">
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
          );
        }}
      </Query>
    );
  }
}

export default withRouter(Projects);
