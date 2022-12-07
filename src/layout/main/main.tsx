import React, { useState, useEffect } from 'react';
import { Movies } from '../../components/movies/movies';
import { Preloader } from '../../components/preloader/preloader';
import { IMovie } from '../../types/types';

export function Main(): JSX.Element {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=d379abfa&s=matrix')
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);

  return (
    <main className="container main">
      {movies.length
        ? <Movies movies={movies} />
        : <Preloader />}
    </main>
  );
}
