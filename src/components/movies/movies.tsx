import React from 'react';
import { Movie } from '../movie/movie';
import styles from './movies.module.scss';
import { IMoviesProps } from './movies.props';

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
