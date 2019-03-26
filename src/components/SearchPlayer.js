import React, { useState } from 'react';
import {
  Button,
  Loader,
  Dimmer,
  Message,
  Label,
  Form,
} from 'semantic-ui-react';

import useBattleriteAPI from '../api/useBattleriteAPI';
import DataTable from './DataTable';

const SearchPlayer = () => {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const [
    playerData,
    matchData,
    isLoading,
    dataError,
    getDataByUsername,
  ] = useBattleriteAPI();

  const onChange = event => {
    setInputValue(event.target.value);
    setValidationError('');
  };

  const onClick = () => {
    if (inputValue.length >= 3 && inputValue.replace(/\s/g, '').length) {
      //Add toLowerCase to not do new request for same input
      getDataByUsername(inputValue.toLowerCase().trim());
      setInputValue('');
    } else {
      setValidationError('Username must be 3 characters or more');
    }
  };

  const searchButton = () => {
    return <Button primary onClick={onClick} content="Search" icon="search" />;
  };

  return (
    <div>
      <h3>Search player</h3>

      <Form>
        <Form.Input
          fluid
          autoFocus
          onChange={onChange}
          action={searchButton()}
          value={inputValue}
          error={validationError !== ''}
          placeholder="Battlerite Username"
          size="big"
          icon="users"
          iconPosition="left"
        />
      </Form>

      <React.Fragment>
        {validationError && (
          <Label basic color="red">
            {validationError}
          </Label>
        )}
        {isLoading && (
          <Dimmer active inverted>
            <Loader active size="large" content="Loading" />
          </Dimmer>
        )}
        {dataError && (
          <Message negative compact>
            <Message.Header>Something went wrong</Message.Header>
            <p>{dataError}</p>
          </Message>
        )}
      </React.Fragment>

      <DataTable
        playerData={playerData}
        matchData={matchData}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SearchPlayer;
