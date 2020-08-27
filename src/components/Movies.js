import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div>{movie.title} {movie.time} <ul><li>{movie.genres.join('</li><li>')}</li></ul></div>)}
    </div>
  );
};

export default Movies;
