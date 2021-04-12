import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProfileWrapper = styled.div`
  .background-img { filter: grayscale(100%); }
  .thanks { margin-top: ${space(2)}; }
  .content > * { max-width: 680px; }

  .social {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-top: ${space(2)};

    a {
      margin-bottom: ${space()};

      &:last-child { margin-bottom: 0; }
    }
  }

  .say-hi {
    align-items: center;
    display: flex;
    margin: 0 auto;
    max-width: 850px;
    min-height 80vh;
  }

  ${media.max('tablet')`
    margin-bottom: ${space(2)};

    .background-img { margin-bottom: ${space(2)}; }
  `}

  ${media.min('tablet')`
    .thanks { margin-top: ${space(4)}; }

    .content-wrapper {
      position: relative;
      padding-bottom: 5vh;
    }

    .profile-image {
      padding-bottom: 5vh;
      pointer-events: none;
      position: fixed;
      bottom: 0;
      width: 50vw;
      z-index: 0;

      &.fixed {
        position: absolute;
      }
    }

    .content {
      padding-left: 20vw;
      position: relative;
    }
  `}

  ${media.between('tablet', 'desktop')`
    .content { margin-top: ${space(2)}; }
    .social { align-items: flex-end; }
    .thanks { text-align: right; }
  `}

  ${media.min('desktop')`
    .profile-image { width: 40vw; }
    .content { padding-left: 30vw; }
  `}

  ${media.min('desktopLarge')`
    .content { padding-left: 40vw; }
  `}
`;

export default ProfileWrapper;
