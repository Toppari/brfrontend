import React from 'react';
import { Image, Popup } from 'semantic-ui-react';

const Icon = ({ name, iconHash }) => {
  return (
    <Popup
      trigger={
        <Image
          src={require(`../assets/${iconHash}.png`)}
          inline
          circular
          spaced="right"
        />
      }
      content={name}
      size="large"
      position="left center"
      inverted
    />
  );
};

export default Icon;