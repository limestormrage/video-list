import React from 'react';

export function Movie(): JSX.Element {
  return (
    <div className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" alt="афиша фильма" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Card Title
        </span>
        <p>
          Year
          {' '}
          <span className="right">Type</span>
        </p>
      </div>
    </div>
  );
}
