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

  const HeaderDivider = ({ content }) => {
    return (
      <Divider inverted horizontal>
        <Header inverted content={content} size="large" />
      </Divider>
    );
  };

  //TODO: prevent rerendering this if the data is same
  const renderData = () => {
    if (Object.keys(playerData).length && !isLoading) {
      const { id, name, titleName, pictureHash, statCategoryList } = playerData;
      return (
        <Segment key={id} inverted>
          <Player name={name} titleName={titleName} avatarHash={pictureHash} />

          <HeaderDivider content="Match History" />
          {matchData.length &&
            matchData.map(match => {
              return <MatchHistory key={match.id} {...match} />;
            })}

          <HeaderDivider content="Career Stats" />
          {statCategoryList.map(({ name, statList }) => {
            return statList.map(({ id, name, value, iconHash }) => {
              return (
                <Stats key={id} name={name} value={value} iconHash={iconHash} />
              );
            });
          })}
        </Segment>
      );
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

      <React.Fragment>
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

      <Statistic.Group inverted widths={3}>
        {renderData()}
      </Statistic.Group>
    </div>
  );
};

export default SearchPlayer;
