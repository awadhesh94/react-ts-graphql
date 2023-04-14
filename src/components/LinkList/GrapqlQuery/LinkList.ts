import { gql } from '@apollo/client';

export const fEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        description
        url
      }
    }
  }
`;
