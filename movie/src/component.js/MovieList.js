import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, ratingChanged }) => {
  return (
    <div className="list">
      {movies.map((movie) => (
        <MovieCard movie={movie} ratingChanged={ratingChanged} />
      ))}
    </div>
  );
};

export default MovieList;
