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
  return (
    <Card>
      <Card.Content>
        <Card.Header textAlign="center">
          <Header inverted dividing>
            {iconHash && (
              <Image circular src={require(`../assets/${iconHash}.png`)} />
            )}
            {statListName.toUpperCase()}
          </Header>
        </Card.Header>
        <Card.Description>
          {statList.map(({ id, categoryName, value }) => {
            return (
              <Statistic key={id}>
                <Statistic.Value>{value}</Statistic.Value>
                <Statistic.Label>
                  <Label color="black">{categoryName}</Label>
                </Statistic.Label>
                <Divider hidden />
              </Statistic>
            );
          })}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Stats;
