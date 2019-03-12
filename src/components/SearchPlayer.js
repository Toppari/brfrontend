import React, { useState } from 'react';
import {
  Button,
  Input,
  Loader,
  Dimmer,
  Message,
  Label,
  Segment,
  Statistic,
  Card,
  Placeholder,
} from 'semantic-ui-react';

import useBattleriteAPI from '../api/useBattleriteAPI';

const SearchPlayer = () => {
  const [inputValue, setInputValue] = useState('');
  const [validationError, setValidationError] = useState('');
  const [data, isLoading, dataError, getData] = useBattleriteAPI();

  const onChange = event => setInputValue(event.target.value);

  const onClick = () => {
    if (inputValue.length >= 3) {
      //Add toLowerCase to not do new request for same input
      getData(`/player?name=${inputValue.toLowerCase()}`);
      setInputValue('');
      setValidationError('');
    } else {
      setValidationError('Player name must be 3 characters or more');
    }
  };

  const renderData = () => {
    if (data) {
      return data.map(({ id, name, titleName, pictureHash, stats }) => {
        return (
          <Segment key={id}>
            <Card
              image={
                <Placeholder>
                  <Placeholder.Image />
                </Placeholder>
              }
              header={name}
              meta={titleName}
            />
            {stats.map(({ id, name, value }) => {
              return (
                <Statistic
                  size="tiny"
                  horizontal
                  label={name}
                  value={value}
                  key={id}
                />
              );
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

      <Input
        size="big"
        action={searchButton()}
        placeholder="Player name"
        onChange={onChange}
        value={inputValue}
        error={validationError && true}
        icon="users"
        iconPosition="left"
      />
      {validationError && (
        <Label basic color="red" pointing="left">
          {validationError}
        </Label>
      )}

      <div>
        {isLoading && (
          <Dimmer active inverted>
            <Loader active content="Loading" />
          </Dimmer>
        )}
        {dataError && (
          <Message negative compact>
            <Message.Header>Something went wrong:</Message.Header>
            <p>{dataError}</p>
          </Message>
        )}
      </div>

      <Statistic.Group widths="three">{renderData()}</Statistic.Group>
    </div>
  );
};

export default SearchPlayer;
