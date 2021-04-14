import React from 'react';

import SocialStyled from './styles';

const Social = ({ github, twitter, instagram, linkedin, email = '' }) => (
  <SocialStyled className="social">
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      Linkedin
    </a>
    <a
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>
    <a
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
    >
      Twitter
    </a>
    {email && (
      <a
        href={`mailto:${email}`}
      >
        Say Hi!
      </a>
    )}
  </SocialStyled>
);

export default Social;