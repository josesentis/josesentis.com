import styled from 'styled-components';

import { colors } from '../../utils/settings';
import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectStyled = styled.div`
  padding-bottom: ${space()};
  padding-top: ${space()};
  padding-left: ${space(1.5)};
  position: relative;
  transition: color .2s ease-out;
  z-index: 1;

  .title-wrapper {
    margin-left: ${space(-1)};
    padding-left: ${space(1)};
    position: relative;
  }

  .p { opacity: .5; }

  .project__image {
    margin: ${space()} 0;

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

  .project__touch-title .label { opacity: 1; }

  // .touch & {
  //   .project__non-touch-title,
  //   .project__content { display: none; }
  // }

  // .non-touch & {
    // color: ${colors.base300};
    // &.active { color: ${colors.white}; }
    // .project__touch-title { display: none; }
  // }

  // .project__touch-title::after { display: none; }

  ${media.min('tablet')`
    .project__title {
      margin-bottom: ${space(1.5)};

      .title-wrapper {
        margin-left: ${space(-1.5)};
        padding-left: ${space(1.5)};
      }
    }

    .label { bottom: 14px; }

    // .project__text,
    // .project__title {
    //   position: relative;
    //   z-index: 1;
    // }

    // .project__text {
    //   margin-bottom: ${space(2)};
    //   column-count: 2;
    //   column-gap: ${space(2)};
    // }

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
