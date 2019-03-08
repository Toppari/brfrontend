import React, { useState } from 'react';

import useBattleriteAPI from '../api/useBattleriteAPI';

const SearchPlayer = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, isLoading, error, getData] = useBattleriteAPI();

  const onChange = event => {
    setInputValue(event.target.value);
  };

  const onClick = () => {
    if (inputValue.length) {
      getData(`/player?name=${inputValue}`);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Search player</h1>

      <input
        id="player_name"
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="Player name"
      />
      <button type="button" onClick={onClick}>
        Submit
      </button>

      <div>
        {isLoading ? <h5>Loading...</h5> : null}
        {data ? <h5>{data}</h5> : null}
        {error && <h5>Something went wrong. Check console.</h5>}
      </div>
    </div>
  );
};

export default SearchPlayer;
