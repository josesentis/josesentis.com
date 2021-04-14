import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const SocialStyled = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: ${space(2)};

  a {
    color: inherit;
    margin-bottom: ${space()};

    &:last-child { margin-bottom: 0; }
  }

  ${media.between('tablet', 'desktop')`
    .social { align-items: flex-end; }
  `}
`;

export default SocialStyled;
