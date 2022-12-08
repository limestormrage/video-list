import React, { KeyboardEvent, useState } from 'react';
import cn from 'classnames';
import { ISearchProps } from './search.props';
import styles from './search.module.scss';

export function Search({ SearchCallBack }: ISearchProps): JSX.Element {
  const [search, setSearch] = useState<string>('');

  const handleKye = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      SearchCallBack(search);
    }
  };

  return (
    <div className="input-field col s12">
      <input
        placeholder="Search"
        id="password"
        type="search"
        className="validate"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKye}
      />
      <button
        className={cn(styles.searchButton, 'btn')}
        type="button"
        onClick={() => SearchCallBack(search)}
      >
        Search
      </button>
    </div>
  );
}
