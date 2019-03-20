import React from 'react';
import { Statistic } from 'semantic-ui-react';

const MatchHistory = props => {
  return <Statistic value={props.gameType} label={props.createdAt} />;
};

export default MatchHistory;
