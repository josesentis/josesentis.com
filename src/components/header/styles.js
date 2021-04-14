import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space, pixelate } from '../../utils/mixins';
import { colors, typography } from '../../utils/settings';

const HeaderStyled = styled.header`
  color: ${colors.base500};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  will-change: transform;
  z-index: 12;

  .dark & { background-color: ${colors.base100}; }

  &.nav-open {
    background-color: transparent;
    color: ${colors.base100};
  }

  .header-wrapper {
    align-items: center;
    color: inherit;
    display: flex;
    justify-content: space-between;
    padding: ${space()} 0;

    .home & { transform: translateY(-100%); }

    &.loaded-enter-done {
      transition: transform .7s cubic-bezier(.215, .61, .355, 1);
      transform: translateY(0);
    }
  }

  .nav-toggle {
    color: inherit;
    font-family: ${typography.bodyFontFamily.join(', ')};
    font-size: ${pixelate(typography.bigFontSize)};
    line-height: ${space(1.75)};
    padding: 0;

    .non-touch &:hover {
      color: ${colors.primary};
    }
  }

  .header {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    font-family: ${typography.secondaryFontFamily.join(', ')};
    transition: transform 0s;

    > div {
      max-width: 150px;

      &:last-child { display: none; }
    }

    a {
      background-color: transparent !important;
      color: inherit !important;
      text-decoration: none;
      &::after { display: none; }

      span { display: block; }
    }
  }

  ${media.min('phone')`
    .header > div {
      &:first-child { margin-right: ${space(2)}; }
      &:last-child { display: initial; }
    }
  `};

  ${media.min('maxWidth')`
    .header-wrapper { padding: ${space(1.25)} 0; }
  `};
`;

export default HeaderStyled;
