import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';

const MainMenu = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (event, { name }) => setActiveItem(name);

  return (
    <Menu inverted>
      <Container>
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
          to="/about"
          name="about"
          content="About"
          active={activeItem === 'about'}
          onClick={handleItemClick}
          icon="info"
        />
      </Container>
    </Menu>
  );
};

export default MainMenu;
