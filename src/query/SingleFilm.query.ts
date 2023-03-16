import { gql } from '@apollo/client';

export const SingleFilm = gql`
query Film($filmId: ID) {
  film(id: $filmId) {
    created
    director
    id
    producers
    releaseDate
    title
    openingCrawl
  }
}`;