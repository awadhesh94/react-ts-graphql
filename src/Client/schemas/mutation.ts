import gql from 'graphql-tag';

export const ADD_POST_MUTATION = gql`
  mutation CreateNewPostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      description
      url
    }
  }
`;
