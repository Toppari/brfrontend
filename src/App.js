import React, { useState } from 'react';

import useBattleriteAPI from './api/useBattleriteAPI';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, isLoading, error, getData] = useBattleriteAPI();

  const onChange = event => {
    setQuery(event.target.value);
  };

  const onClick = () => {
    if (query.length) {
      getData(query);
      setQuery('');
    }
  };

  return (
    <div>
      <h1>Search player</h1>

      <input id="player_name" type="text" value={query} onChange={onChange} placeholder="Player name"/>
      <button type="button" onClick={onClick}>Submit</button>

      <div>
        {isLoading ? <h5>Loading...</h5> : null}
        {error ? <h5>{error}</h5> : <h5>{data}</h5>}
      </div>
    </div>
  );
};

export default App;