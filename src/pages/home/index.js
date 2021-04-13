import React from 'react';
import { Query } from "react-apollo";
import { withRouter } from "react-router";

import Header from '../../components/header';
import Layout, { Wrapper } from '../../layouts/Default';
// import Navigation from '../components/navigation';
import Project from '../../components/project';
import BackgroundImage from '../../components/backgroundImage';

import GET_PROJECTS from './queries';
import ProjectList from './styles';


class Home extends React.Component {
  render () {
    return (
      <Query query={GET_PROJECTS}>
        {({ loading, data }) => {
          const {
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

export default withRouter(Home);

// <Navigation />
