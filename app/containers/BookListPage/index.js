import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';

import BooksList from '../../components/CardList';
import { selectBooks, selectUser } from '../App/selectors';
import { deleteBook } from '../App/actions';

class BookListPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
    user: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Books - Richard Bernstein</title>
          <meta property="og:url" content="richardbernstein.net/books" />
          <meta property="book:author" content="Richard Bernstein" />
          <meta property="book:tag" content={this.props.books.map((book) => book.title).join(', ')} />
        </Helmet>
        <BooksList cardsArr={this.props.books} handleDelete={this.props.handleDeleteClick} authorized={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  books: selectBooks(),
  user: selectUser(),
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteClick: (id) => dispatch(deleteBook(id)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(BookListPage);
