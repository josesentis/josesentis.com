import gql from 'graphql-tag';

const GET_HOME_DATA = gql`
  {
    job @client
    name @client
    pages @client {
      projects {
        projectList {
          year,
          title,
          stack
          external
          externalLink
          slug
          image
          order
        }
      }
    }
  }
`;

export default GET_HOME_DATA;
