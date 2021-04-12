import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { colors } from '../../utils/settings';

const LoaderWrapper = styled.div`
  align-items: center;
  background-color: ${colors.base500};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity .3s ease-out;
  z-index: 10;

  .title { color: ${colors.white}; }

  ${media.max('phone')`
    .title { font-size: 50px !important; }
  `}

  ${media.min('phone')`
    .title { font-size: 78px; }
  `}

  ${media.min('tablet')`
    .title { font-size: 125px; }
  `}

  ${media.min('desktop')`
    .title {
      font-size: 165px;
      text-align: center;
    }
  `}

  .text {
    transition: transform 1s cubic-bezier(.215, .61, .355, 1) !important;

    &:nth-child(1) { transition-delay: .15s !important; }
    &:nth-child(2) { transition-delay: .2s !important; }
    &:nth-child(3) { transition-delay: .25s !important; }
    &:nth-child(4) { transition-delay: .3s !important; }
    &:nth-child(5) { transition-delay: .35s !important; }
    &:nth-child(6) { transition-delay: .4s !important; }
    &:nth-child(7) { transition-delay: .45s !important; }
    &:nth-child(8) { transition-delay: .5s !important; }
    &:nth-child(9) { transition-delay: .55s !important; }
    &:nth-child(10) { transition-delay: .6s !important; }
    &:nth-child(11) { transition-delay: .65s !important; }
  }

  &.loaded-enter-active .text { transform: translateY(0); }
  &.loaded-enter-done { opacity: 0; }
`;

export default LoaderWrapper;
