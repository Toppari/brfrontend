import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

const MainMenu = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (event, { name }) => setActiveItem(name);

  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          content="Home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
          icon="home"
        />
      </Menu>
    </Segment>
  );
};

export default MainMenu;
