import React, { useState } from 'react';

import useBattleriteAPI from '../api/useBattleriteAPI';

const SearchPlayer = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, isLoading, error, getData] = useBattleriteAPI();

  const onChange = event => setInputValue(event.target.value);

  const onClick = () => {
    if (inputValue.length) {
      //Add toLowerCase to not do new request for same input
      getData(`/player?name=${inputValue.toLowerCase()}`);
      setInputValue('');
    }
  };

  const renderData = () => {
    if (data) {
      return data.map(({ id, name, titleId, pictureId, stats }) => {
        return (
          <div key={id}>
            <ul>
              <li>name: {name}</li>
              <li>titleId: {titleId}</li>
              <li>pictureId: {pictureId}</li>
            </ul>
            {stats.map(({id, name, value}) => {
              return (
                <ul key={id}>
                  <li>{name} = {value}</li>
                </ul>
              );
            })}
          </div>
        );
      });
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
        {renderData()}
        {isLoading ? <h5>Loading...</h5> : null}
        {error && (
          <h5>Something went wrong. Check console for more information.</h5>
        )}
      </div>
    </div>
  );
};

export default SearchPlayer;
