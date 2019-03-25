import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const Player = ({ name, titleName, avatarHash }) => {
  return (
    <Segment inverted>
      <Header
        inverted
        as="h1"
        image={require(`../assets/${avatarHash}.png`)}
        content={name}
        subheader={titleName}
      />
    </Segment>
  );
};

export default Player;
