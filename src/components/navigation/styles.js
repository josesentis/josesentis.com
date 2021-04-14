import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';
import { colors } from '../../utils/settings';

const NavigationWrapper = styled.div`
  align-items: flex-end;
  background-color: ${colors.base500};
  display: flex;
  justify-content: flex-end;
  min-height: 100%;
  position: fixed;
  width: 100%;
  z-index: 10;

  .title {
    color: ${colors.base100};
    margin-bottom: ${space(1)};
    margin-left: -7px;
  }

  .navigation-wrapper {
    align-items: flex-end;
    display: flex;
    height: 100%;
  }

  .loaded-enter-done:last-child .title { margin-bottom: 0; }

  ${media.max('desktop')`
    .double-link {
      line-height: 1;

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
    .title { margin-left: -15px; }
  `}

  ${media.min('desktop')`
    .title {
      margin-left: -18px;

      .home & { margin-bottom: ${space()}; }
    }

    .double-link-mobile { display: none; }
  `}
`;

const AppearingText = styled.div`
  display: block;
  position: relative;
  overflow: hidden;

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
