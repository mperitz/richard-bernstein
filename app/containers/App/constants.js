/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const GET_BOOKS = 'GET_BOOKS';
export const SET_BOOKS = 'SET_BOOKS';
export const GET_ONE_BOOK = 'GET_ONE_BOOK';
export const SET_ONE_BOOK = 'SET_ONE_BOOK';
export const CLEAR_ONE_BOOK = 'CLEAR_ONE_BOOK';
export const CREATE_OR_UPDATE_BOOK = 'CREATE_OR_UPDATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

export const ADD_PRAISE = 'ADD_PRAISE';

export const GET_AUTHOR = 'GET_AUTHOR';
export const SET_AUTHOR = 'SET_AUTHOR';

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ONE_ARTICLE = 'GET_ONE_ARTICLE';
export const SET_ONE_ARTICLE = 'SET_ONE_ARTICLE';
export const CLEAR_ONE_ARTICLE = 'CLEAR_ONE_ARTICLE';
export const SET_ARTICLES = 'SET_ARTICLES';
export const CREATE_OR_UPDATE_ARTICLE = 'CREATE_OR_UPDATE_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

export const LOGIN = 'LOGIN';
export const WHO_AM_I = 'WHO_AM_I';
export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER';

export const SET_LOADING = 'SET_LOADING';
export const SET_POST_PUT_SUCCESS = 'SET_POST_PUT_SUCCESS';
export const SET_POST_PUT_ERROR = 'SET_POST_PUT_ERROR';
