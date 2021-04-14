import React from 'react';
// import AnimateHeight from 'react-animate-height';
import { Link } from 'react-router-dom';

import { toggleCursor } from '../cursor';
import BackgroundImage from '../backgroundImage';

import ProjectStyled from './styles';

class Project extends React.PureComponent {
  state = {
    hover: false
  }

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
    const { hover } = this.state;

    const content = (
      <>
        <div className="title-wrapper">
          <span className="label">
            {order.toString().length === 1 ? '0' : ''}
            {order}.
          </span>
          <span>
            {title}
          </span>
        </div>
        <p className="p">{stack} - {year}</p>
      </>
    );

    return (
      <ProjectStyled
        className={`project ${hover ? 'active' : ''}`}
        onMouseEnter={() => {
          this.setState({ hover: true });
          this._projectImage.parentNode.classList.add('is-hover');
          this._projectImage.classList.add('is-active');
          toggleCursor();
        }}
        onMouseLeave={() => {
          this.setState({ hover: false });
          toggleCursor();
          this._projectImage.parentNode.classList.remove('is-hover');
          this._projectImage.classList.remove('is-active');
        }}
      >
        <h2 className="project__title title2">
          {external ? (
            <a
              className="external project__touch-title"
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <Link className="project__touch-title" to={`projects/${slug}`} onClick={e => e.stopPropagation()}>
              {content}
            </Link>
          )}
        </h2>
        <div className="project__content">
          <BackgroundImage src={image} className="project__image" />
        </div>
      </ProjectStyled>
    );
  }
}

export default Project;
