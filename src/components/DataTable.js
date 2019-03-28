import React from 'react';
import { Segment, Statistic, Header } from 'semantic-ui-react';

import HeaderDivider from './HeaderDivider';
import MatchHistory from './MatchHistory';
import Stats from './Stats';
import Player from './Player';

const DataTable = ({ playerData, matchData, isLoading }) => {
  const renderMatchHistory = () => {
    if (!matchData.length) {
      return <Header as="h5" textAlign="center" content="No matches found" />;
    }

    return matchData.map(({ id, ...rest }) => {
      return <MatchHistory key={id} {...rest} />;
    });
  };

  const renderCareerStats = () => {
    const { statCategoryList } = playerData;

    return statCategoryList.map(({ id, ...rest }) => {
      return <Stats key={id} {...rest} />;
    });
  };

  const renderData = () => {
    if (Object.keys(playerData).length && !isLoading) {
      const { name, titleName, pictureHash } = playerData;
      return (
        <Segment inverted>
          <Player name={name} titleName={titleName} avatarHash={pictureHash} />
          <HeaderDivider content="Match History" />
          {renderMatchHistory()}
          <HeaderDivider content="Career Stats" />
          {renderCareerStats()}
        </Segment>
      );
    }
  };

  return (
    <Statistic.Group inverted widths={3}>
      {renderData()}
    </Statistic.Group>
  );
};

export default React.memo(DataTable);
