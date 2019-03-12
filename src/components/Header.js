import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

const Header = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (event, { name }) => setActiveItem(name);

  return (
    <Segment inverted>
      <Menu inverted secondary icon="labeled">
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          content="Home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
          icon="home"
        />

        <Menu.Item
          as={Link}
          to="/search/player"
          name="search-player"
          content="Search player"
          active={activeItem === 'search-player'}
          onClick={handleItemClick}
          icon="search"
        />
      </Menu>
    </Segment>
  );
};

export default Header;
