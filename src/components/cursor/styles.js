import styled from 'styled-components';

import { space } from '../../utils/mixins';
import { colors } from '../../utils/settings';

const Circle = styled.span`
  background-color: ${colors.base500};
  border-radius: 50%;
  display: none;
  height: ${space()};
  left: 50vw;
  mix-blend-mode: difference;
  position: fixed;
  pointer-events: none;
  top: 50vh;
  transform: translate(-50%, -50%);
  transition: color .1s ease-out, width .2s ease-out, height .2s ease-out;
  width: ${space()};
  will-change: color, width, height;
  z-index: 9999;

  .non-touch &.moved { display: block; }

  .dark & {
    background-color: ${colors.base100};

    &.hover { border-bottom-color: ${colors.base100}; }
  }

  &.hover {
    background: transparent;
    border-bottom: 30px solid ${colors.primary};
    border-left: 14px solid transparent;
    border-radius: 0;
    border-right: 14px solid transparent;
    height: 0;
    transform: rotate(-25deg) translate(-5px, -5px);
    width: 0;
  }

  &.rotating-text {
    height: 110px;
    width: 110px;
  }
`;

export default Circle;
