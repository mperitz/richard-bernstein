import { createSelector } from 'reselect';

import { immutableIsValue } from '../../utils/helpers';

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const selectHome = (state) => state.get('home');

const selectBooks = () => createSelector(
  selectHome,
  (homeState) => {
    const books = homeState.get('books');
    const withChina1945 = books.filter((book) => immutableIsValue(book, 'title', 'China 1945'));
    const without = books.filter((book) => !immutableIsValue(book, 'title', 'China 1945'));
    return withChina1945.concat(without).toJS();
  }
);

const selectPraise = () => createSelector(
  selectHome,
  (homeState) => homeState.get('praise').toJS()
);

const selectDescription = () => createSelector(
  selectHome,
  (homeState) => homeState.get('description').toJS()
);

const selectSelectedBook = () => createSelector(
  selectHome,
  (homeState) => homeState.get('selectedBook').toJS()
);

const selectAuthor = () => createSelector(
  selectHome,
  (homeState) => homeState.get('author').toJS()
);

const selectArticles = () => createSelector(
  selectHome,
  (homeState) => homeState.get('articles').sort((current, next) => {
    const currentDate = (new Date(current.get('date'))).getTime();
    const nextDate = (new Date(next.get('date'))).getTime();
    if (currentDate > nextDate) return -1;
    if (currentDate < nextDate) return 1;
    if (currentDate === nextDate) return 0;
    return 0;
  }).toJS()
);

const selectSelectedArticle = () => createSelector(
  selectHome,
  (homeState) => homeState.get('selectedArticle').toJS()
);

const selectUser = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);

const selectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);

const selectPostPutSuccess = () => createSelector(
  selectHome,
  (homeState) => homeState.get('postPutSuccess')
);

const selectPostPutError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('postPutError')
);

export {
  makeSelectLocation,
  selectHome,
  selectBooks,
  selectPraise,
  selectDescription,
  selectSelectedBook,
  selectAuthor,
  selectArticles,
  selectSelectedArticle,
  selectUser,
  selectLoading,
  selectPostPutSuccess,
  selectPostPutError,
};
