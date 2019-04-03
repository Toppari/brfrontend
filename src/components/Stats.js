import React from 'react';
import {
  Statistic,
  Divider,
  Label,
  Header,
  Card,
  Image,
} from 'semantic-ui-react';

const Stats = ({ name: statListName, iconHash, statList }) => {
  const renderStatList = () => {
    return statList.map(({ id, categoryName, value }) => {
      return (
        <Statistic key={id}>
          <Statistic.Value>{value}</Statistic.Value>
          <Statistic.Label>
            <Label color="black">{categoryName}</Label>
          </Statistic.Label>
          <Divider hidden />
        </Statistic>
      );
    });
  };

  const renderIcon = () => {
    if (iconHash) {
      return <Image src={require(`../assets/${iconHash}.png`)} circular />;
    }
  };

  return (
    <Card>
      <Card.Content>
        <Card.Header textAlign="center">
          <Header inverted dividing>
            {renderIcon()}
            {statListName.toUpperCase()}
          </Header>
        </Card.Header>
        <Card.Description>{renderStatList()}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Stats;
