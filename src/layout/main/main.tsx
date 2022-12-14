import React, { useState, useEffect } from 'react';
import { Movies } from '../../components/movies/movies';
import { Preloader } from '../../components/preloader/preloader';
import { Search } from '../../components/search/search';
import { IMovie, ISearchFilm } from '../../types/types';

export function Main(): JSX.Element {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getSearchFilm = ({ search, type = 'all' }: ISearchFilm): void => {
    fetch(`http://www.omdbapi.com/?apikey=d379abfa&s=${search}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  };

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=d379abfa&s=matrix')
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);

  return (
    <main className="container main">
      <Search SearchCallBack={getSearchFilm} />
      {movies.length
        ? <Movies movies={movies} />
        : <Preloader />}
    </main>
  );
}
