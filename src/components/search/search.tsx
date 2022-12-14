import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import cn from 'classnames';
import { ISearchProps } from './search.props';
import styles from './search.module.scss';

const initialState = {
  search: '',
  type: 'all',
};

export function Search({ SearchCallBack }: ISearchProps): JSX.Element {
  const [formState, setFormState] = useState(initialState);

  const handleKye = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      SearchCallBack(formState);
    }
  };

  const onChangeFilter = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setFormState((prevState) => ({
      ...prevState,
      type: target.value,
    }));
    SearchCallBack(formState);
  };

  return (
    <div className="input-field col s12">
      <input
        placeholder="Search"
        id="password"
        type="search"
        className="validate"
        value={formState.search}
        onChange={(e) => setFormState((prevState) => ({
          ...prevState,
          search: e.target.value,
        }))}
        onKeyDown={handleKye}
      />
      <button
        className={cn(styles.searchButton, 'btn')}
        type="button"
        onClick={() => SearchCallBack(formState)}
      >
        Search
      </button>
      <div>
        <label className={styles.filterLabel}>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="all"
            onChange={onChangeFilter}
            checked={formState.type === 'all'}
          />
          <span>All</span>
        </label>
        <label className={styles.filterLabel}>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="movie"
            onChange={onChangeFilter}
            checked={formState.type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label className={styles.filterLabel}>
          <input
            className="with-gap"
            name="type"
            type="radio"
            value="series"
            onChange={onChangeFilter}
            checked={formState.type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
}
