import styled, { keyframes } from 'styled-components';

import { media } from '../../utils/media-queries';

const moveLeft1 = keyframes`
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }
  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
`;

const textStroke = `
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, .5);

  &.dark { -webkit-text-stroke: 1px rgba(25, 25, 25, 1); }
  &.light { -webkit-text-stroke: 1px rgba(255, 255, 255, 1); }
`;

const TextWrapper = styled.div`
  font-size: var(--text-font-size);
  line-height: 1.2;
  margin-top: -0.4rem;
  overflow: hidden;
  position: relative;
  width: 100vw;
  pointer-events: none;

  --offset: 40vw;
  --text-font-size: calc(var(--offset) / 2);
  --move-initial: calc(-25% + 40vw);
  --move-final: calc(-50% + 40vw);

  ${textStroke}

  div {
    animation: ${moveLeft1} 10s linear infinite;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-initial), 0, 0);
    width: fit-content;
    white-space: nowrap;
  }

  span {
    display: block;
    padding: 0 2vw;
  }

  ${media.min('tablet')`
    --offset: 20vw;
    margin-top: -0.8rem;
  `}
`;

export default TextWrapper;
export { textStroke };
