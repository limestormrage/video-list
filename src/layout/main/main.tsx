import React, { useState } from 'react';
import { Movies } from '../../components/movies/movies';

export function Main(): JSX.Element {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  return (
    <main className="container main">
      <Movies />
    </main>
  );
}
