import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import BookForm from '../../components/BookForm';
import ArticleForm from '../../components/ArticleForm';
import { FormWrapper } from './styled';
import { selectPostPutSuccess, selectUser } from '../App/selectors';
import { setPostPutSuccess, clearOneBook, clearOneArticle } from '../App/actions';

class FormPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    dispatchClearPostPutSuccess: PropTypes.func.isRequired,
    dispatchClearBook: PropTypes.func.isRequired,
    dispatchClearArticle: PropTypes.func.isRequired,
    postPutSuccess: PropTypes.bool.isRequired,
    user: PropTypes.bool.isRequired,
  };

  componentWillUnmount() {
    this.props.dispatchClearPostPutSuccess();
    this.props.dispatchClearBook();
    this.props.dispatchClearArticle();
  }

  render() {
    const isBooksRoute = this.props.location.pathname.includes('books');
    return (
      <FormWrapper>
        <Helmet>
          <title>Richard Bernstein - Edit</title>
        </Helmet>
        {this.props.postPutSuccess && <Redirect to={isBooksRoute ? '/books' : '/articles'} />}
        {!this.props.user && <Redirect to="/not-found" />}
        {isBooksRoute ? <BookForm id={this.props.match.params.id} /> : <ArticleForm id={this.props.match.params.id} />}
      </FormWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  postPutSuccess: selectPostPutSuccess(),
  user: selectUser(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchClearPostPutSuccess: () => dispatch(setPostPutSuccess(false)),
  dispatchClearBook: () => dispatch(clearOneBook()),
  dispatchClearArticle: () => dispatch(clearOneArticle()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(FormPage);
