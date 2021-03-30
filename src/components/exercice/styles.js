import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ExerciceStyled = styled.div`
  margin: ${space(4)} auto;

  &:last-child { margin-bottom: 0; }

  h2 {
    font-weight: 700;
    margin-bottom: ${space()};
  }

  ${media.max('tablet')`
    .content-text { margin-top: ${space()}; }
  `}

  ${media.min('tablet')`
    align-items: center;
    display: flex;
    margin: ${space(6)} auto;
    max-width: 1200px;

    .content {
      align-items: center;
      justify-content: center;
      display: flex;
      margin-top: ${space()};
      width: 40%;

      a { margin-top: 0; }
    }

    .content-text { max-width: 340px; }

    &:nth-child(5n-4) {
      .background-img {
        margin-right: ${space(2)};
        width: calc(45% - ${space(2)});
      }
    }

    &:nth-child(5n-3) {
      flex-direction: row-reverse;

      .background-img {
        width: calc(40% - ${space(2)});
        margin-left: ${space(2)};
        margin-right: 5%;
      }
    }

    &:nth-child(5n-2) {
      .background-img {
        margin-left: 10%;
        margin-right: ${space(2)};
        width: calc(45% - ${space(2)});
      }
    }

    &:nth-child(5n-1) {
      flex-direction: column;

      .background-img,
      .content { width: calc(45%); }

      .content {
        justify-content: flex-start;
        margin-top: ${space(2)};
      }
    }

    &:nth-child(5n) {
      flex-direction: row-reverse;

      .background-img {
        width: calc(45% - ${space(2)});
        margin-left: ${space(2)};
      }
    }
  `}

  ${media.min('desktop')`
    &:nth-child(5n-3) .background-img { width: calc(35% - ${space(2)}); }

    &:nth-child(5n-1) {
      .background-img,
      .content { width: calc(40%); }
    }

    &:nth-child(5n-4) .background-img,
    &:nth-child(5n-2) .background-img,
    &:nth-child(5n) .background-img { width: calc(40% - ${space(2)}); }
  `}

  ${media.min('desktopLarge')`
    &:nth-child(5n-3) .background-img { width: calc(30% - ${space(2)}); }

    &:nth-child(5n-1) {
      .background-img,
      .content { width: calc(35%); }
    }

    &:nth-child(5n-4) .background-img,
    &:nth-child(5n-2) .background-img,
    &:nth-child(5n) .background-img { width: calc(35% - ${space(2)}); }
  `}
`;

export default ExerciceStyled;
