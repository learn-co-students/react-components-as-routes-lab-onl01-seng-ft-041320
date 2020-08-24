import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <p>Title: {movie.title}</p>
          <p>Time: {movie.time}</p>
          {movie.genres.map((genre, index) => (
            <ul key={index}>
              <li>{genre}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Movies;
