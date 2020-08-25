import React from 'react';
import { actors } from '../data';

const genActorDiv = actor => {
  return (
    <div className="actor">
      <label>{actor.name}</label>
      <ul>
        { actor.movies.map( movie => <li>{movie}</li> ) }
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map(genActorDiv)}
    </div>
  );
};

export default Actors;
