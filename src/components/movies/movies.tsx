import React from 'react';
import { Movie } from '../movie/movie';

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
    <div className="movies">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </div>
  );
}
