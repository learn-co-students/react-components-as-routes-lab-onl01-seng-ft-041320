import React from 'react';
import { directors } from '../data';

const genDirectorsDiv = director => {
  return (
    <div>
      <label>{director.name}</label>
      <ul>
        {director.movies.map( movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map(genDirectorsDiv)}
    </div>
  );
}

export default Directors
