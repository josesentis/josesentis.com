import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { pixelate, space } from '../../utils/mixins';
import { colors, vars } from '../../utils/settings';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${space()};
  position: relative;
  width: 100%;

  ${media.min('tablet')`
    padding: 0 ${space(2)};
  `};

  &.reading {
    max-width: ${pixelate(vars.layout.maxReadingWidth)};

    ${media.min('reader')`
      padding-left: 0;
      padding-right: 0;
    `};
  }

  &.dark { background-color: ${colors.base500}; }
`;

const LayoutStyled = styled.div`
  opacity: 1;
  transition: opacity .3s linear;

  &.home.fade-enter { opacity: 1; }

  &.fade-enter,
  &.fade-enter-active { opacity: 0; }
  &.fade-enter-done { opacity: 1; }

  &.fade-exit,
  &.fade-exit-active { opacity: 0; }

  &.playground main,
  &.dark main { background-color: ${colors.base500}; }

  &.playground main {
    color: ${colors.white};
    padding-bottom: 0;

    a { color: ${colors.primary}; }
  }

  &:not(.home) main {
    padding: ${space(5.5)} 0 ${space(1.5)};

    ${media.min('tablet')`
      padding: ${space(4.5)} 0 ${space(3)};
    `};
  }

  &.headerless main { padding-top: 0 !important; }

  &.layout-bottom main {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100vh;
    padding-bottom: ${space(3)};
  }

  &.playground {
    .intro {
      margin: ${space(2)} 0;
      max-width: 480px;

      a { margin-top: ${space()}; }
    }

    ${media.min('phone')`
      .intro { margin: ${space(3)} 0 ${space(2)}; }
    `}

    ${media.min('tablet')`
      a { margin-top: ${space(2)}; }

      .intro {
        margin: ${space(3)} 0;
      }
    `}
  }
`;

export default LayoutStyled;
export { Wrapper };
