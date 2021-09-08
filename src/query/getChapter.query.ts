import gql from "graphql-tag";

export default gql`
query Chapters {
  chapters {
    id
    number
    title
  }
}
`;