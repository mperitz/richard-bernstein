import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';

import { selectArticles, selectUser } from '../App/selectors';
import Articles from '../../components/List';
import { deleteArticle } from '../App/actions';

const ArticlesPage = ({ articles, handleDeleteClick, user }) => (
  <div>
    <Helmet>
      <title>Richard Bernstein - Articles</title>
      <meta property="og:url" content="" />
      <meta property="article:author" content="Richard Bernstein" />
      <meta property="article:tag" content={articles.map((article) => article.title).join(', ')} />
    </Helmet>
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
