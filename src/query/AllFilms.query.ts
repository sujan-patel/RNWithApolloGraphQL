import gql from "graphql-tag";

export const AllFilms =  gql`
query AllFilms {
  allFilms {
    films {
      id
      title
      director
      releaseDate
      speciesConnection {
        species {
          name
          classification
        }
      }
    }
  }
}
`;