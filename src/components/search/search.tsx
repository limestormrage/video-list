import React, { useState } from 'react';

export function Search(): JSX.Element {
  const [search, setSearch] = useState<string>('');

  return (
    <div className="input-field col s12">
      <input
        placeholder="Search"
        id="password"
        type="search"
        className="validate"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
