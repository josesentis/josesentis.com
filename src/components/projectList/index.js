import React from 'react';

import BackgroundImage from '../backgroundImage';
import Project from '../project';

import { ProjectListStyled } from './styles';

class ProjectList extends React.Component {
  render () {
    const { projectList } = this.props;

    return (
      <ProjectListStyled id="project-list">
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
      </ProjectListStyled>
    );
  }
}

export default ProjectList;
