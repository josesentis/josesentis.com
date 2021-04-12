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
  }

  &.loaded-enter-active .text { transform: translateY(0); }
  &.loaded-enter-done { opacity: 0; }
`;

export default LoaderWrapper;
