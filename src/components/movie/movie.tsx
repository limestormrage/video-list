import React from 'react';

type IMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IMovieProps {
  movie: IMovie;
}

export function Movie({ movie }: IMovieProps): JSX.Element {
  const {
    Title: title,
    Year: year,
    imdbID,
    Type: type,
    Poster: poster,
  } = movie;

  return (
    <div className="card movie" id={imdbID}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster} alt="афиша фильма" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year}
          {' '}
          <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}
