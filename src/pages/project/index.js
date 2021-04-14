import React from 'react';
import { Query } from "react-apollo";
import { withRouter } from "react-router";

import Component from '../../components/component';
import CrossNavigation from '../../components/crossNavigation';
import Header from '../../components/header';
import Layout, { Wrapper } from '../../layouts/Default';

import DATA from '../../data/content.json';
import GET_HOME_DATA from '../home/queries';
import ProjectDetail from './styles';

class Project extends React.Component {
  render () {
    const { location: { pathname } } = this.props;

    return (
      <Query query={GET_HOME_DATA}>
        {({ data }) => {
          const {
            pages: {
              projects: {
                projectList
              }
            }
          } = data;
          const project = projectList.filter(project => project.slug === pathname.replace('/projects/', ''))[0];

          return (
            <Layout
              location={this.props.location}
              title={project.title}
              description={project.abstract}
              className="dark"
            >
              <Header />
              <ProjectDetail>
                <Wrapper>
                  <div className="background-wrapper">
                    <Wrapper className="reading">
                      <h1 className="title2">
                        <span className="label">
                          {project.order.toString().length === 1 ? '0' : ''}
                          {project.order}.
                        </span>
                        <span>{project.title}</span>
                      </h1>
                      {DATA[project.slug].map((data, index) => (
                        <Component data={data} key={`component_${index}`} />
                      ))}
                      <CrossNavigation current={project.slug} projectList={projectList} />
                    </Wrapper>
                  </div>
                </Wrapper>
              </ProjectDetail>
            </Layout>);
        }}
      </Query>
    );
  }
}

export default withRouter(Project);
