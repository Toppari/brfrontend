import React from 'react';
import { Statistic, Image } from 'semantic-ui-react';

const Stats = ({ name, value, iconHash }) => {
  return (
    <React.Fragment>
      {iconHash && (
        <Image src={require(`../assets/${iconHash}.png`)} circular />
      )}
      <Statistic horizontal label={name} value={value} />
    </React.Fragment>
  );
};

export default Stats;
