import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <p>Name: {actor.name}</p>
          {actor.movies.map((movie, index) => (
            <ul key={index}>
              <li>{movie}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;
