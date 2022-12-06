import React from 'react';
import { Movie } from '../movie/movie';
import styles from './movies.module.scss';

type IMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IMoviesProps {
  movies: IMovie[];
}

export function Movies({ movies }: IMoviesProps): JSX.Element {
  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </div>
  );
}
