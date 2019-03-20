import React from 'react';
import { Statistic } from 'semantic-ui-react';

const Stats = ({ name, value }) => (
  <Statistic horizontal label={name} value={value} />
);

export default Stats;
