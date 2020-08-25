import React from 'react';
import { movies } from '../data';

const genMoviesDiv = movie => {
  return (
    <div>
      <label>{ movie.title }</label>
      <label>{movie.time}</label>
      <ul>
        {movie.genres.map( movie => <li>{movie}</li>)}
      </ul>
      <label>{movie.metascore}</label>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map(genMoviesDiv)}

    </div>
  );
};

export default Movies;
