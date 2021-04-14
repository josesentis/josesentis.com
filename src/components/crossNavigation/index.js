import React from 'react';
import { Link } from 'react-router-dom';

import { toggleCursor } from '../cursor';
import CrossNavigationStyled from './styles';

class CrossNavigation extends React.Component {
  render () {
    const { current, projectList } = this.props;


    return (
      <CrossNavigationStyled>
        {projectList.map(project => {
          const { external, externalLink, slug, order, title } = project;

          const content = (
            <h3>
              <span className="label">
                {order.toString().length === 1 ? '0' : ''}
                {order}.
                  </span>
              {title}
            </h3>
          );

          return (
            <li key={title.replace(' ', Math.random())}>
              {external ? (
                <a
                  className="link"
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => toggleCursor()}
                  onMouseLeave={() => toggleCursor()}
                >
                  {content}
                </a>
              ) : (
                <Link
                  to={`/projects/${slug}`}
                  className={`link ${slug === current ? 'active' : ''}`}
                  onMouseEnter={() => toggleCursor()}
                  onMouseLeave={() => toggleCursor()}
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </CrossNavigationStyled>
    );

  }
};

export default CrossNavigation;
