export const GRAPHQL_API = 'https://tmdb.sandbox.zoosh.ie/dev/grphql';
export const SEARCH_QUERY = `
query SearchMovies {
    searchMovies(query: "") {
      id
      name
      overview
      releaseDate
      cast {
        id
        person {
          name
        }
        role {
          ... on Cast {
            character
          }
        }
      }
    }
  }`;