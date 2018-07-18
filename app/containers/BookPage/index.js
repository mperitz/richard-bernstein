import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';

import Book from '../../components/Book';
import { selectBooks } from '../App/selectors';

const BookPage = ({ books, match }) => {
  const selectedBook = books.filter((book) => book._id === match.params.id)[0];
  return (
    !!books.length && <div>
      <Helmet>
        <title>{`${selectedBook.title} - Richard Bernstein`}</title>
        <meta property="og:url" content={`richardbernstein.net/${selectedBook._id}`} />
        <meta property="og:title" content={selectedBook.title} />
        <meta property="book:tag" content={selectedBook.imgSrc} />
      </Helmet>
      <Book selectedBook={selectedBook} />
    </div>
  );
};

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
