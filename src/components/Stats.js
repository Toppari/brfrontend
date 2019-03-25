import React from 'react';
import { Statistic, Image } from 'semantic-ui-react';

const Stats = ({ name, value, iconHash }) => {
  const icon = () => {
    try {
      return require(`../assets/${iconHash}.tga`);
    } catch (error) {
      return require(`../assets/${iconHash}.png`);
    }
  };

  return (
    <React.Fragment>
      {iconHash && <Image src={icon()} circular />}
      <Statistic horizontal label={name} value={value} />
    </React.Fragment>
  );
};

export default Stats;
