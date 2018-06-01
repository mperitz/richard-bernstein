import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectArticles, selectUser } from '../App/selectors';
import Articles from '../../components/List';
import { deleteArticle } from '../App/actions';

const ArticlesPage = ({ articles, handleDeleteClick, user }) => (
  <div>
    <Articles listArr={articles} handleDelete={handleDeleteClick} authorized={user} />
  </div>
);

ArticlesPage.propTypes = {
  articles: PropTypes.array.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  user: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articles: selectArticles(),
  user: selectUser(),
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteClick: (id) => dispatch(deleteArticle(id)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(ArticlesPage);
