import React from 'react';
import { Divider, Header, Segment, Statistic } from 'semantic-ui-react';

import MatchHistory from './MatchHistory';
import Stats from './Stats';
import Player from './Player';

const DataTable = ({ playerData, matchData, isLoading }) => {
  const HeaderDivider = ({ content }) => {
    return (
      <Divider inverted horizontal>
        <Header inverted content={content} size="large" />
      </Divider>
    );
  };

  const renderData = () => {
    if (Object.keys(playerData).length && !isLoading) {
      const { id, name, titleName, pictureHash, statCategoryList } = playerData;
      return (
        <Segment key={id} inverted>
          <Player name={name} titleName={titleName} avatarHash={pictureHash} />
          <HeaderDivider content="Match History" />
          {matchData.length &&
            matchData.map(match => {
              return <MatchHistory key={match.id} {...match} />;
            })}
          <HeaderDivider content="Career Stats" />
          {statCategoryList.map(({ name, statList }) => {
            return statList.map(({ id, name, value, iconHash }) => {
              return (
                <Stats key={id} name={name} value={value} iconHash={iconHash} />
              );
            });
          })}
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
