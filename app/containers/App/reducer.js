import { fromJS } from 'immutable';

import {
  GET_BOOKS,
  SET_BOOKS,
  GET_ONE_BOOK,
  SET_ONE_BOOK,
  DELETE_BOOK,
  CREATE_OR_UPDATE_BOOK,
  ADD_PRAISE,
  GET_AUTHOR,
  SET_AUTHOR,
  GET_ARTICLES,
  GET_ONE_ARTICLE,
  SET_ONE_ARTICLE,
  SET_ARTICLES,
  CREATE_OR_UPDATE_ARTICLE,
  DELETE_ARTICLE,
  CLEAR_ONE_BOOK,
  CLEAR_ONE_ARTICLE,
  LOGIN,
  WHO_AM_I,
  LOGOUT,
  SET_USER,
  SET_POST_PUT_SUCCESS,
  SET_POST_PUT_ERROR,
} from './constants';

// The initial state of the App
/*
  title: String,
  publication: String,
  date: String,
  excerpt: String,
  url: String,
*/

const initialState = fromJS({
  books: [],
  selectedBook: {
    _id: '',
    title: '',
    subtitle: '',
    img: [],
    isbn: 0,
    description: '',
    publisher: '',
    url: '',
    praise: [
      { _id: `${Date.now()}-q1`, quote: '', quoteBy: '' },
      { _id: `${Date.now()}-q2`, quote: '', quoteBy: '' },
    ],
  },
  selectedArticle: {
    _id: '',
    title: '',
    publication: '',
    date: '',
    excerpt: '',
    url: '',
  },
  author: {},
  articles: [],
  user: false,
  postPutSuccess: false,
  postPutError: '',
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return state;
    case SET_BOOKS:
      return state.set('books', fromJS(action.books));
    case GET_ONE_BOOK:
      return state;
    case SET_ONE_BOOK:
      return state.set('selectedBook', fromJS(action.book));
    case CLEAR_ONE_BOOK:
      return state.set('selectedBook', initialState.get('selectedBook'));
    case DELETE_BOOK:
      return state;
    case CREATE_OR_UPDATE_BOOK:
      return state;
    case ADD_PRAISE:
      return state.setIn(['selectedBook', 'praise'], state.getIn(['selectedBook', 'praise']).push(fromJS({
        _id: `${Date.now()}`,
        quote: '',
        quoteBy: '',
      })));
    case GET_AUTHOR:
      return state;
    case SET_AUTHOR:
      return state.set('author', fromJS(action.author));
    case GET_ARTICLES:
      return state;
    case GET_ONE_ARTICLE:
      return state;
    case SET_ONE_ARTICLE:
      return state.set('selectedArticle', fromJS(action.article));
    case CLEAR_ONE_ARTICLE:
      return state.set('selectedArticle', initialState.get('selectedArticle'));
    case SET_ARTICLES:
      return state.set('articles', fromJS(action.articles));
    case CREATE_OR_UPDATE_ARTICLE:
      return state;
    case DELETE_ARTICLE:
      return state;
    case LOGIN:
      return state;
    case WHO_AM_I:
      return state;
    case LOGOUT:
      return state;
    case SET_USER:
      return state.set('user', action.bool);
    case SET_POST_PUT_SUCCESS:
      return state.set('postPutSuccess', action.bool);
    case SET_POST_PUT_ERROR:
      return state.set('postPutError', action.message);
    default:
      return state;
  }
}

export default reducer;
