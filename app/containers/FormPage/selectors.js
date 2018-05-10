import { createSelector } from 'reselect';

const selectForm = (state) => state.get('form');

const selectFormDataField = (type, field) => createSelector(
  selectForm,
  (formState) => formState.getIn([type, field])
);

export {
  selectFormDataField,
};
