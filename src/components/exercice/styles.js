import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space, columns } from '../../utils/mixins';

const ExerciceStyled = styled.div`
  h2 {
    font-weight: 700;
    margin-bottom: ${space()};
  }

  .content-text { margin-top: ${space()}; }

  ${media.max('phone')`
    margin: ${space(4)} 0;
    width: 100%;
  `}

  ${media.min('phone')`
    margin: ${space(2)} 0;

    ${columns(2)}

    &:nth-child(2n) .background-img {
      margin-top: ${space(2)};
    }
  `}

  ${media.min('tablet')`
    ${columns(3)}

    &:nth-child(3n - 2) .background-img {
      margin-top: 0;
    }

    &:nth-child(3n - 1) .background-img {
      margin-top: ${space(2)};
    }

    &:nth-child(3n) .background-img {
      margin-top: ${space(4)};
    }
  `}

  ${media.min('desktop')`
    ${columns(4, 2)}

    &:nth-child(4n - 3) .background-img {
      margin-top: 0;
    }

    &:nth-child(4n - 2) .background-img {
      margin-top: ${space(2)};
    }

    &:nth-child(4n - 1) .background-img {
      margin-top: ${space(4)};
    }

    &:nth-child(4n) .background-img {
      margin-top: ${space(6)};
    }
  `}

  ${media.min('desktopLarge')`
    ${columns(4, 3)}

    &:nth-child(4n - 3) .background-img {
      margin-top: 0;
    }

    &:nth-child(4n - 2) .background-img {
      margin-top: ${space(3)};
    }

    &:nth-child(4n - 1) .background-img {
      margin-top: ${space(6)};
    }

    &:nth-child(4n) .background-img {
      margin-top: ${space(9)};
    }
  `}
`;

export default ExerciceStyled;
