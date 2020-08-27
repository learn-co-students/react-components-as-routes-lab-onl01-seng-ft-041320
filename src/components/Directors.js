import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => <div>{director.name}<ul><li>{director.movies.join('</li><li>')}</li></ul></div>)}
    </div>
  );
}

export default Directors
