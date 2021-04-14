import { media } from '../utils/media-queries';
import { pixelate, space } from '../utils/mixins';
import { colors, typography } from '../utils/settings';

const typographyStyles = `
  a {
    color: ${colors.base500};
    display: inline-block;
    text-decoration: none;

    &:after {
      border-bottom: 2px solid currentColor;
      content: '';
      display: block;
      margin-top: -2px;
    }

    ${media.min('tablet')`&:after { margin-top: -8px; }`}
    .non-touch &:hover::after { display: none; }

    .non-touch &:hover {
      background-color: ${colors.base500};
      color: ${colors.primary};
    }

    .non-touch .dark &:hover,
    .dark &.active {
      background-color: ${colors.base100};
      color: ${colors.base500};
    }

    .non-touch .playground &:hover {
      background-color: transparent;
      color: ${colors.primary};
    }
  }

  .link {
    text-decoration: none;

    &::after { display: none; }

    .non-touch &:hover {
      background-color: transparent;
    }
  }

  &::selection {
    background-color: ${colors.primary} !important;
    color: ${colors.base500} !important;
  }

  .title,
  .title2 {
    font-weight: 400;
  }

  .title {
    font-size: 17vw;
    line-height: 1;

    @media (min-width: 1024px) {
      font-size: 175px;
    }
  }

  .title2 {
    font-size: 35px;
    line-height: 1.4;

    @media (min-width: 768px) {
      font-size: 50px;
    }
  }

  .p {
    font-size: ${pixelate(typography.baseFontSize)};
    line-height: ${space()};
  }

  .p-big {
    @media (min-width: 768px) {
      font-size: ${pixelate(typography.bigFontSize)};
      line-height: ${space(1.75)};
    }
  }

  .label {
    font-size: ${pixelate(typography.minFontSize)};
    margin-bottom: 0;
    opacity: .5;
  }

  .text.active { color: ${colors.primary}; }
`;

export default typographyStyles;
