import React, { useState } from 'react';
import {
  Button,
  Loader,
  Dimmer,
  Message,
  Label,
  Segment,
  Statistic,
  Form,
  Divider,
  Header,
} from 'semantic-ui-react';

import useBattleriteAPI from '../api/useBattleriteAPI';
import Stats from './Stats';
import Player from './Player';
import MatchHistory from './MatchHistory';

const SearchPlayer = () => {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const [data, isLoading, dataError, getData] = useBattleriteAPI();

  const onChange = event => {
    setInputValue(event.target.value);
    setValidationError('');
  };

  const onClick = () => {
    if (inputValue.length >= 3 && inputValue.replace(/\s/g, '').length) {
      //Add toLowerCase to not do new request for same input
      //Trim whitespace
      getData(inputValue.toLowerCase().trim());
      setInputValue('');
    } else {
      setValidationError('Username must be 3 characters or more');
    }
  };

  const renderData = () => {
    if (Object.keys(data).length) {
      return data.player.map(({ id, name, titleName, pictureHash, stats }) => {
        return (
          <Segment key={id} inverted>
            <Player name={name} titleName={titleName} avatarHash={pictureHash} />
            <Header content="Match History" textAlign="center" size="large" />
            {data.match && <MatchHistory {...data.match} />}
            <Divider />
            <Header content="Career Stats" textAlign="center" size="large" />
            {stats.map(({ id, name, value }) => {
              return <Stats key={id} name={name} value={value} />;
            })}
          </Segment>
        );
      });
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

      {validationError && (
        <Label basic color="red">
          {validationError}
        </Label>
      )}

      <div>
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
      </div>

      <Statistic.Group inverted widths={3}>
        {renderData()}
      </Statistic.Group>
    </div>
  );
};

export default SearchPlayer;
