import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { PopularQuery } from "../graphql/PopularQuery";

const Movies = () => {
  const { error, loading, data } = useQuery(PopularQuery);
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    if (data) {
      setPopMovies(data.movies);
      console.log(data);
    }
  }, [data]);
  return (
    <div className="movie">
      {popMovies.map((movie) => {
        return (
          <>
            <div className="movie-container">
              <h1 key={movie.id}> {movie.name}</h1>
              <img src={movie.img.url} alt={movie.img.__typename}></img>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Movies;
