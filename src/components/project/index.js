import React from 'react';
// import AnimateHeight from 'react-animate-height';
import { Link } from 'react-router-dom';

import { toggleCursor } from '../cursor';
import BackgroundImage from '../backgroundImage';

import ProjectStyled from './styles';

class Project extends React.PureComponent {
  componentDidMount () {
    const { title } = this.props.project;
    this._projectImage = document.getElementById(title.replace(' ', '-'));
  }

  render () {
    const {
      project: {
        year,
        external,
        externalLink,
        slug,
        order,
        image,
        stack
      }
    } = this.props;
    const title = this.props.project.title || slug;

    return (
      <ProjectStyled
        className="project"
        onMouseEnter={() => {
          this._projectImage.classList.add('is-active');
          toggleCursor();
        }}
        onMouseLeave={() => {
          this._projectImage.classList.remove('is-active');
          toggleCursor();
        }}
        href={external ? externalLink : `projects/${slug}`}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : ''}
      >
        <BackgroundImage src={image} className="project__image" />
        <h2 className="project__title title2">
          <div className="title-wrapper">
            <span className="label">
              {order.toString().length === 1 ? '0' : ''}
              {order}.
            </span>
            <span>{title}</span>
          </div>
          <p className="p">{stack} - {year}</p>
        </h2>
      </ProjectStyled>
    );
  }
}

export default Project;
