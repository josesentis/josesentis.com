import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectStyled = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;

  &:not(:first-child) { margin-top: ${space(3)}; }

  a {
    background-color: transparent !important;
    color: currentColor !important;
    display: block;

    &::after { display: none; }
  }

  .title-wrapper {
    line-height: 1;
    margin-bottom: ${space(.25)};
    padding-left: ${space(1)};
    position: relative;
  }

  .project__image {
    margin: 0 0 ${space()};

    &::before { padding-bottom: 75%; }

    &::after {
      background: rgba(0, 0, 0, 0.4) !important;
      padding-bottom: 75%;
      opacity: 1 !important;
      z-index: 1 !important;
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

    &:not(:first-child) { margin-top: ${space(4)}; }

    .title-wrapper {
      margin-left: ${space(-1.5)};
      padding-left: ${space(1.5)};
    }

    .project__image { display: none !important; }
  `}
`;

export default ProjectStyled;
