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

export const SINGIN_MUTATION = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const SINGUP_MUTATION = gql`
  mutation SignInMutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

export const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;
