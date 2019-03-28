import React from 'react';
import { Divider, Header } from 'semantic-ui-react';

const HeaderDivider = ({ content, ...rest }) => {
  return (
    <Divider inverted horizontal>
      <Header inverted content={content} size="large" {...rest} />
    </Divider>
  );
};

export default HeaderDivider;