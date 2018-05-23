import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Book from '../../components/Book';
import { selectBooks } from '../App/selectors';

const BookPage = ({ books, match }) => (
  !!books.length && <div>
    <Book selectedBook={books.filter((book) => book._id === match.params.id)[0]} />
  </div>
);

BookPage.propTypes = {
  books: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  books: selectBooks(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(BookPage);