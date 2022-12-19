import React, {
  ChangeEvent, KeyboardEvent, useState,
} from 'react';
import cn from 'classnames';
import { ISearchProps } from './search.props';
import styles from './search.module.scss';
import { filterType } from '../../const';

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

    SearchCallBack({ search: formState.search, type: target.value });
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
        {Object.values(filterType).map(({ label, type }) => (
          <label className={styles.filterLabel} key={type}>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value={type}
              onChange={onChangeFilter}
              checked={formState.type === type}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
