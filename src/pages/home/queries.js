import gql from 'graphql-tag';

const GET_PROJECTS = gql`
  {
    job @client
    name @client
    pages @client {
      projects {
        projectList {
          title,
          stack
          external
          externalLink
          slug
          image
          order
          year
        }
      }
    }
  }
`;

export default GET_PROJECTS;
