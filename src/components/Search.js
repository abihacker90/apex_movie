import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const SEARCH_MOVIE = gql`
  query SearchMovies($name: String!) {
    searchMovies(filter: {name: $name}) {
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
  }
`;

function Search() {
  const [name, setName] = useState("");
  const [getMovies, {loading, error, data, called}] = useLazyQuery(SEARCH_MOVIE, {
    variables: {
        name
    },
})
console.log({loading, error, data, called})
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getMovies()}>Search</button>
    </div>
  );
}


export default Search;