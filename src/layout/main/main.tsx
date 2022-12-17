import React, { useState, useEffect } from 'react';
import { Movies } from '../../components/movies/movies';
import { Preloader } from '../../components/preloader/preloader';
import { Search } from '../../components/search/search';
import { IMovie, ISearchFilm } from '../../types/types';

const DEFAULT_FILM = 'matrix';
const API_KEY = process.env.REACT_APP_API_KEY;

export function Main(): JSX.Element {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);

  const getSearchFilm = ({ search, type }: ISearchFilm): void => {
    setIsLoadingMovies(true);
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search || DEFAULT_FILM}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search ? data.Search : []);
        setIsLoadingMovies(false);
      });
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${DEFAULT_FILM}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setIsLoadingMovies(false);
      });
  }, []);

  return (
    <main className="container main">
      <Search SearchCallBack={getSearchFilm} />
      {isLoadingMovies
        ? <Preloader />
        : <Movies movies={movies} />}
    </main>
  );
}
