import { createGlobalStyle } from 'styled-components';

import { textStroke } from '../components/movingText/styles';
import { space } from '../utils/mixins';
import { colors, typography } from '../utils/settings';
import typographyStyles from './typography';
import fontStyles from './fonts';
import utils from './utils';

const GlobalStyle = createGlobalStyle`
  ${fontStyles}

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
  blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img,
  ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center,
  dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure,
  figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  blockquote,
  q {
    quotes: none;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: none;
  }

  button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: none repeat scroll 0 0 transparent;
    border: 0;
    font-family: 'Space Mono', monospace;
    outline: none;
  }

  iframe {
    border: 0;
  }

  img {
    display: block;
    height: auto;
    -ms-interpolation-mode: bicubic;
    max-width: 100%;
    width: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::before,
  *::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /* stylelint-disable */
    -webkit-font-smoothing: antialiased !important;
    font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    /* stylelint-enable */
    text-rendering: optimizeLegibility !important;
  }

  * { cursor:none !important; }
  ::-webkit-scrollbar-track-piece { background-color: transparent; }
  ::-webkit-scrollbar { width: 0px; }

  body {
    background-color: ${colors.base100};
    color: ${colors.base500};
    font-family: ${typography.bodyFontFamily.join(', ')};
    font-size: ${typography.baseFontSize}px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: ${space()};
    margin: 0;
    padding: 0;
  }

  b,
  strong {
    font-weight: 700;
  }

  p {
    margin: 0 0 ${space()};

    &:last-child { margin-bottom: 0; }
  }

  ul {
    margin: 0;

    li {
      list-style: none;
    }
  }

  .stroke {
    ${textStroke}
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
  }

  html {
    --pos-y: 0;

    overflow: hidden;
  }

  *[data-scroll] {
    transform: translate3d(0, var(--pos-y), 0);
    // visibility: hidden;
  }

  .no-overflow { overflow: hidden; }

  ${typographyStyles}
  ${utils}
`;

export default GlobalStyle;
