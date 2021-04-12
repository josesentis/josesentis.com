import styled from 'styled-components';

import { media } from '../../utils/media-queries';
import { space } from '../../utils/mixins';

const ProfileWrapper = styled.div`
  .background-img { filter: grayscale(100%); }
  .thanks { margin-top: ${space(4)}; }
  .content > * { max-width: 600px; }

  .social {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-top: ${space(2)};

    a {
      margin-bottom: ${space()};

      &:last-child { margin-bottom: 0; }
    }
  }

  .say-hi {
    align-items: center;
    display: flex;
    margin: 0 auto;
    max-width: 850px;
    min-height 80vh;
  }

  ${media.max('desktop')`
    margin-bottom: ${space(2)};

    .background-img { margin-bottom: ${space(2)}; }
  `}

  ${media.min('desktop')`
    // display: flex;
    // justify-content: flex-end;

    // .profile-image {
    //   align-items: flex-end;
    //   display: flex;
    //   height: 100vh;
    //   left: 0;
    //   padding: ${space(2)};
    //   padding-top: 38vh;
    //   pointer-events: none;
    //   position: fixed;
    //   top: 0;
    //   width: 50vw;
    //   z-index: 0;

    //   .background-img {
    //     max-width: 320px;
    //     width: 100%;
    //   }
    // }

    // .content-wrapper {
    //   align-items: flex-end;
    //   display: flex;
    //   height: 100vh;
    //   left: 0;
    //   position: fixed;
    //   top: 0;
    //   width: 100vw;
    // }

    // .content {
    //   height: 100%;
    //   overflow-y: auto;
    //   padding: ${space(2)};
    //   padding-left: calc(50vw + ${space(2)});
    //   padding-top: ${space(8)};
    // }
  `};

  // @media screen and (min-width: 1024px) and (min-height: 768px) {
  //   .profile-image .background-img { max-width: 380px; }
  // }

  // @media screen and (min-width: 1440px) and (min-height: 715px) {
  //   .profile-image .background-img { max-width: 440px; }
  //   .content { padding-top: ${space(10)}; }
  // }

  // @media screen and (min-width: 1440px) and (min-height: 850px) {
  //   .profile-image .background-img { max-width: 500px; }
  //   .content { padding-top: ${space(12)}; }
  // }
`;

export default ProfileWrapper;
