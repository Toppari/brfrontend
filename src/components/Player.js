import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const Player = ({ name, titleName, avatarHash }) => {
  const avatar = () => {
    try {
      return require(`../assets/${avatarHash}.png`);
    } catch (error) {
      return require(`../assets/${avatarHash}.tga`);
    }
  };

  return (
    <Segment inverted>
      <Header
        inverted
        dividing
        as="h1"
        image={avatar()}
        content={name}
        subheader={titleName}
      />
    </Segment>
  );
};

export default Player;
