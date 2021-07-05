import React from 'react';

import { toggleCursor } from '../cursor';

import SocialStyled from './styles';

const Social = ({ github, twitter, instagram, linkedin, email = '' }) => (
  <SocialStyled className="social">
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
      data-scroll
    >
      GitHub
    </a>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
      data-scroll
    >
      Linkedin
    </a>
    <a
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
      data-scroll
    >
      Instagram
    </a>
    <a
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
      data-scroll
    >
      Twitter
    </a>
    {email && (
      <a
        href={`mailto:${email}`}
        onMouseEnter={() => toggleCursor()}
        onMouseLeave={() => toggleCursor()}
        data-scroll
      >
        Say Hi!
      </a>
    )}
  </SocialStyled>
);

export default Social;