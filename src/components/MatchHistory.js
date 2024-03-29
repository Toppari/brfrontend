import React from 'react';
import { Statistic } from 'semantic-ui-react';

const MatchHistory = ({ createdAt, gameType }) => {
  const date = new Date(createdAt).toLocaleDateString('en-GB');

  return <Statistic text value={gameType} label={date} />;
};

export default MatchHistory;
