import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import messages from './messages';
import { NotFoundContainer, NotFoundText } from './styled';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NotFoundContainer>
        <Helmet>
          <title>Not Found - Richard Bernstein</title>
        </Helmet>
        <NotFoundText>
          <FormattedMessage {...messages.header} />
        </NotFoundText>
      </NotFoundContainer>
    );
  }
}
