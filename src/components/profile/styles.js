import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';
import { colors } from '../../utils/settings';

const ProfileWrapper = styled.div`
  .thanks { margin-top: ${space(2)}; }
  .content > * { max-width: 680px; }

  .say-hi {
    align-items: center;
    display: flex;
    margin: 0 auto;
    max-width: 850px;
    min-height 80vh;
    position: relative;
  }

  .profile-image {
    position: relative;
    overflow: hidden;

    &::after {
      background-color: ${colors.primary};
      bottom: 0;
      content: '';
      filter: opacity(0.5);
      left: 0;
      position: absolute;
      right 0;
      top: 0;
    }
  }

  ${media.max('tablet')`
    margin-bottom: ${space(2)};

    .profile-image {
      margin-bottom: ${space(2)};
      margin-top: ${space()};
    }
  `}

  ${media.min('tablet')`
    .thanks { margin-top: ${space(4)}; }

    .content-wrapper {
      position: relative;
      padding-bottom: 5vh;
    }

    .profile-image {
      left: 50vw;
      pointer-events: none;
      position: fixed;
      top: 50vh;
      width: 50vw;
      transform: translate(-50%, -50%);
      z-index: 0;
    }

    .content {
      padding-left: 20vw;
      position: relative;
    }
  `}

  ${media.between('tablet', 'desktop')`
    .content { margin-top: ${space(2)}; }
    .thanks { text-align: right; }

    .profile-image {
      left: 50vw !important;
      top: 50vh !important;
    }
  `}

  ${media.min('desktop')`
    .profile-image {
      max-width: 450px;
      width: 30vw;
    }

    .content { padding-left: 30vw; }
  `}

  ${media.min('desktopLarge')`
    .content { padding-left: calc(40vw + ${space(2)}); }
  `}
`;

export default ProfileWrapper;
