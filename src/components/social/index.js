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
    >
      GitHub
    </a>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
    >
      Linkedin
    </a>
    <a
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
    >
      Instagram
    </a>
    <a
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleCursor()}
      onMouseLeave={() => toggleCursor()}
    >
      Twitter
    </a>
    {email && (
      <a
        href={`mailto:${email}`}
        onMouseEnter={() => toggleCursor()}
        onMouseLeave={() => toggleCursor()}
      >
        Say Hi!
      </a>
    )}
  </SocialStyled>
);

export default Social;