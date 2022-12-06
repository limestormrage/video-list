import React, { useState, useEffect } from 'react';
import { Movies } from '../../components/movies/movies';

type IMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

type IMovies = IMovie[]

// interface IMovie {
//   Title: string;
//   Year: string;
//   imdbID: string;
//   Type: string;
//   Poster: string;
// }

// interface IMovies {
//   movies: IMovie[] || null;
// }

export function Main(): JSX.Element {
  const [movies, setMovies] = useState<IMovies>([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=d379abfa&s=matrix')
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);

  return (
    <main className="container main">
      <Movies movies={movies} />
    </main>
  );
}
