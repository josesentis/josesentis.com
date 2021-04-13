import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProjectList = styled.div`
  margin: ${space(2)} 0;

  .project-image-animation { display: none; }

  ${media.min('tablet')`
    .touch & .project-image-animation { display: none; }

    .project-image-animation {
      display: block;
      height: 45vh;
      overflow: hidden;
      position: fixed !important;
      pointer-events: none;
      right: 0;
      top: calc(50% - 20vh);
      width: 40vh;
      z-index: 0;
    }

    .project-image {
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      transition: transform 0s, opacity .2s linear;
      height: 100%;
      width: 100%;

      &.is-active { opacity: 1; }
    }

    .project-image-animation.is-hover,
    .project-image-animation.loaded-exit-active {
      .project-image {
        transition: transform 6s ease-out, opacity .2s linear;
        transform: translate(-50%, -50%) scale(1.2);
      }
    }
  `}

  ${media.min('desktop')`
    .project-image-animation {
      height: 55vh;
      width: 50vh;
      top: calc(50% - 25vh);
    }
  `}

  ${media.min('desktopLarge')`
    margin: ${space(4)} 0;
  `}

  ${media.min('maxWidth')`
    .project-image-animation {
      height: 65vh;
      width: 60vh;
      top: calc(50% - 25vh);
    }
  `}
`;

export default ProjectList;
