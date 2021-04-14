import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectStyled = styled.a`
  position: relative;
  z-index: 1;
  width: 100%;

  &::after { display: none; }

  &:not(:first-child) { margin-top: ${space(3)}; }

  .title-wrapper {
    padding-left: ${space(1)};
    position: relative;
  }

  .p { opacity: .5; }

  .project__image {
    margin: 0 0 ${space()};

    &::after {
      z-index: 1 !important;
      opacity: 1 !important;
      background: rgba(0, 0, 0, 0.4) !important;
    }
  }

  .label {
    left: 0;
    position: absolute;
    bottom: 12px;
  }

  ${media.min('tablet')`
    padding-left: ${space(1.5)};

    .project__title {
      margin-bottom: ${space(1.5)};

      .title-wrapper {
        margin-left: ${space(-1.5)};
        padding-left: ${space(1.5)};
      }
    }

    .title-wrapper {
      margin-left: ${space(-1)};
    }

    .label { bottom: 14px; }

    .project__image {
      position: fixed !important;
      right: 0;
      height: 40vh;
      width: 40vh;
      top: calc(50% - 20vh);
      z-index: 0;
    }

    .non-touch & .project__image { display: none; }
  `}

  ${media.min('desktop')`
    .label { bottom: 16px; }

    .project__image {
      height: 50vh;
      width: 50vh;
      top: calc(50% - 25vh);
    }
  `}

  ${media.min('maxWidth')`
    .project__image {
      height: 60vh;
      width: 60vh;
      top: calc(50% - 25vh);
    }
  `}
`;

export default ProjectStyled;
