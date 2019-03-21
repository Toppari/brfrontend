import React from 'react';
import { Statistic } from 'semantic-ui-react';

const MatchHistory = ({ gameType, createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString('en-GB');

  return <Statistic value={gameType} label={date} />;
};

export default MatchHistory;
