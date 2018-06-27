import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import { Navbar as Container, HeaderContainer, Header, SubHeader, ButtonContainer, Button, ButtonText } from './styled';
import { Link } from '../common';
import messages from './messages';

const Navbar = ({ user, onLogout }) => (
  <Container>
    <Link to="/">
      <HeaderContainer>
        <Header>RICHARD BERNSTEIN</Header>
        <SubHeader>Journalist & Author</SubHeader>
      </HeaderContainer>
    </Link>
    <ButtonContainer>
      <Link to="/about">
        <Button>
          <ButtonText><FormattedMessage {...messages.about} /></ButtonText>
        </Button>
      </Link>
      <Link to="/books">
        <Button>
          <ButtonText><FormattedMessage {...messages.books} /></ButtonText>
        </Button>
      </Link>
      <Link to="/articles">
        <Button>
          <ButtonText><FormattedMessage {...messages.articles} /></ButtonText>
        </Button>
      </Link>
      {!!user && <Button onClick={onLogout}>
        <ButtonText><FormattedMessage {...messages.logout} /></ButtonText>
      </Button>}
    </ButtonContainer>
  </Container>
);

Navbar.propTypes = {
  user: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
