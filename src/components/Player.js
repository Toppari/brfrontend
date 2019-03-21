import React from 'react';
import { Card } from 'semantic-ui-react';

const Player = ({ name, titleName }) => {
  return (
    <Card
      //include player games played, winrate and
      //account level here?
      fluid
      header={name}
      meta={titleName}
    />
  );
};

export default Player;
