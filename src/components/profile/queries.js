import gql from 'graphql-tag';

const GET_PROFILE = gql`
  {
    social @client {
      github
      linkedin
      instagram
      twitter
      email
    }
    pages @client {
      about {
        content
        image
        sayhi
      }
    }
  }
`;

export default GET_PROFILE;
