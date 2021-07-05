import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';
import { colors } from '../../utils/settings';

const NavigationWrapper = styled.div`
  &.navigation {
    background-color: ${colors.base500};
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;

    .title {
      background-color: transparent !important;
      color: ${colors.base100};
      margin-left: -4px;
    }

    .non-touch & .link:hover { color: ${colors.primary}; }
  }

  .navigation-wrapper {
    height: 100%;
    padding-bottom: ${space(1.5)};
    padding-top: ${space(5)};
    position: relative;
  }

  .social a { color: ${colors.base100}; }
  .loaded-enter-done:last-child .title { padding-bottom: 0; }

  ${media.max('desktop')`
    &.navigation {
      align-items: center;
      display: flex;
      justify-content: flex-start;
    }

    .double-link {
      line-height: 1.1;

      &-desktop { display: none; }

      span:not(.text) {
        display: block;
        overflow: hidden;
      }
    }
  `}

  ${media.min('phone')`
    .title { margin-left: -10px; }
  `}

  ${media.min('tablet')`
    .title { margin-left: -12px; }

    .navigation-wrapper {
      padding-bottom: ${space(2)};
      padding-top: ${space(4)};
    }
  `}

  ${media.min('desktop')`
    .title { margin-left: -15px; }
    .double-link-mobile { display: none; }

    .navigation-wrapper {
      align-items: center;
      display: flex;
    }

    .social {
      bottom: ${space(2)};
      flex-direction: row;
      margin-top: 0;
      position: absolute;
      right: ${space(2)};

      a { margin: 0 0 0 ${space()}; }
    }
  `}
`;

const AppearingText = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  z-index: 1;

  .text {
    display: inline-block;
    transform: translateY(100%);
    transition: transform 0s;

    &:nth-child(1) { transition-delay: .2s !important; }
    &:nth-child(2) { transition-delay: .25s !important; }
    &:nth-child(3) { transition-delay: .3s !important; }
    &:nth-child(4) { transition-delay: .35s !important; }
    &:nth-child(5) { transition-delay: .4s !important; }
    &:nth-child(6) { transition-delay: .45s !important; }
    &:nth-child(7) { transition-delay: .5s !important; }
    &:nth-child(8) { transition-delay: .55s !important; }
    &:nth-child(9) { transition-delay: .6s !important; }
    &:nth-child(10) { transition-delay: .65s !important; }
    &:nth-child(11) { transition-delay: .7s !important; }
  }

  .loaded-enter-done & .text {
    transition: transform .8s cubic-bezier(.215, .61, .355, 1);
    transform: translateY(0);
  }
`;

export default NavigationWrapper;
export { AppearingText };
