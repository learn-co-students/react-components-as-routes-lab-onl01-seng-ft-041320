import React from 'react';
import { directors } from '../data';

class Directors extends React.Component {
  render() {
    return (
      <div>
        <h1>Directors Page</h1>
        {directors.map(dir => {
          return (
            <div>
              <h2>{dir.name}</h2>
              <h3>Movies:</h3>
              <ul>
                {dir.movies.map(movie => <li>{movie}</li>)}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Directors
