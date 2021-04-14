import gql from 'graphql-tag';

const GET_SECTIONS = gql`
  {
    social @client {
      github
      linkedin
      instagram
      twitter
    }
    sections @client {
      playground
      projects
      about
    }
  }
`;

export default GET_SECTIONS;
