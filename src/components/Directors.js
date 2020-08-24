import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <p>Name: {director.name}</p>
          {director.movies.map((movie, index) => (
            <ul key={index}>
              <li>{movie}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Directors
