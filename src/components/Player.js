import React from 'react';
import { Card, Placeholder } from 'semantic-ui-react';

const Player = ({ name, titleName }) => {
  return (
    <Card
      image={
        <Placeholder>
          <Placeholder.Image />
        </Placeholder>
      }
      header={name}
      meta={titleName}
    />
  );
};

export default Player;
