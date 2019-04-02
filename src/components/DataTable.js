import React from 'react';
import { Segment, Statistic, Header, Card, Loader } from 'semantic-ui-react';

import HeaderDivider from './HeaderDivider';
import MatchHistory from './MatchHistory';
import Player from './Player';
import Stats from './Stats';

const DataTable = ({ playerData, matchData, isLoading }) => {
  const renderMatchHistory = () => {
    if (!matchData.length) {
      return <Header as="h5" textAlign="center" content="No matches found" />;
    }

    return matchData.map(({ id, ...rest }) => (
      <MatchHistory key={id} {...rest} />
    ));
  };

  const renderCareerStats = () => {
    const { statCategoryList } = playerData;

    return statCategoryList
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(({ id, ...rest }) => <Stats key={id} {...rest} />);
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
          <Card.Group itemsPerRow={1}>{renderCareerStats()}</Card.Group>
        </Segment>
      );
    }
  };

  const renderLoading = () => {
    if (isLoading) {
      return (
        <Segment inverted>
          <Loader size="large" inverted active indeterminate />
        </Segment>
      );
    }
  };

  return (
    <React.Fragment>
      {renderLoading()}
      <Statistic.Group size="tiny" widths={6} inverted>
        {renderData()}
      </Statistic.Group>
    </React.Fragment>
  );
};

export default React.memo(DataTable);
