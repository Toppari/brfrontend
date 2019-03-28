import React from 'react';
import { Statistic, Divider, Label, Header } from 'semantic-ui-react';
import IconLabel from './IconLabel';

const Stats = ({ name, statList }) => {
  const renderStats = () => {
    return statList.map(({ id, name, categoryName, value, iconHash }) => {
      return (
        <Statistic key={id}>
          <Statistic.Value>{value}</Statistic.Value>
          <Statistic.Label>
            <Label color="black">
              {iconHash && <IconLabel iconHash={iconHash} name={name} />}
              {categoryName}
            </Label>
          </Statistic.Label>
          <Divider hidden />
        </Statistic>
      );
    });
  };

  return (
    <React.Fragment>
      <Header
        as="h3"
        dividing
        inverted
        content={name.toUpperCase()}
        textAlign="center"
      />
      <Statistic.Group size="small">
        {renderStats()}
      </Statistic.Group>
    </React.Fragment>
  );
};

export default Stats;
