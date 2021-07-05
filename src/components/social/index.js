import React from 'react';

import { toggleCursor } from '../cursor';

import SocialStyled from './styles';

const Social = ({ github, twitter, instagram, linkedin, email = '', scroll = false }) => (
  <SocialStyled className="social">
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
      data-scroll={scroll ? 'true' : ''}
    >
      GitHub
    </a>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
      data-scroll={scroll ? 'true' : ''}
    >
      Linkedin
    </a>
    <a
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
      data-scroll={scroll ? 'true' : ''}
    >
      Instagram
    </a>
    <a
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
      data-scroll={scroll ? 'true' : ''}
    >
      Twitter
    </a>
    {email && (
      <a
        href={`mailto:${email}`}
        onMouseEnter={() => toggleCursor()}
        onMouseLeave={() => toggleCursor()}
        data-scroll={scroll ? 'true' : ''}
      >
        Say Hi!
      </a>
    )}
  </SocialStyled>
);

export default Social;