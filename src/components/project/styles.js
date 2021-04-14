import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectStyled = styled.a`
  position: relative;
  z-index: 1;
  width: 100%;

  &:not(:first-child) { margin-top: ${space(3)}; }
  &::after { display: none; }

  .title-wrapper {
    line-height: 1;
    margin-bottom: ${space(.25)};
    padding-left: ${space(1)};
    position: relative;
  }

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
    bottom: 10px;
  }

  .p { opacity: .5; }

  ${media.min('tablet')`
    padding-left: ${space(1.5)};

    &:not(:first-child) { margin-top: ${space(2)}; }

    .title-wrapper {
      margin-left: ${space(-1.5)};
      padding-left: ${space(1.5)};
    }

    .project__image { display: none !important; }
  `}

  ${media.min('desktop')`
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
