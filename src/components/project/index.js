import React from 'react';
import { Link } from 'react-router-dom';

import BackgroundImage from '../backgroundImage';
import { toggleCursor } from '../cursor';

import ProjectStyled from './styles';

const Content = ({ order, title, year, stack, image }) => (
  <>
    <BackgroundImage src={image} className="project__image" />
    <h2 className="project__title title2">
      <div className="title-wrapper">
        <span className="label">
          {order.toString().length === 1 ? '0' : ''}
          {order}.
        </span>
        <span>{title}</span>
      </div>
      <p className="p">{year} - {stack}</p>
    </h2>
  </>
);

class Project extends React.PureComponent {
  componentDidMount () {
    const { title } = this.props.project;
    this._projectImage = document.getElementById(title.replace(' ', '-'));
  }

  render () {
    const {
      project: {
        external,
        externalLink,
        slug,
        ...props
      }
    } = this.props;
    const title = this.props.project.title || slug;

    return (
      <ProjectStyled
        className="project"
        data-scroll
        onMouseEnter={() => {
          this._projectImage.classList.add('is-active');
          toggleCursor();
        }}
        onMouseLeave={() => {
          this._projectImage.classList.remove('is-active');
          toggleCursor();
        }}
      >
        {external ? (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Content
              title={title}
              {...props}
            />
          </a>
        ) : (
          <Link to={`projects/${slug}`}>
            <Content
              title={title}
              {...props}
            />
          </Link>
        )}
      </ProjectStyled>
    );
  }
}

export default Project;
