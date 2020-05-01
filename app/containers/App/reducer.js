/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS, LOAD_PRODUCTS_ERROR
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentQuery: false,
  userData: {
    products: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PRODUCTS:
        draft.loading = true;
        draft.error = false;
        draft.userData.products = false;
        break;

      case LOAD_PRODUCTS_SUCCESS:
        draft.userData.products = action.products;
        draft.loading = false;
        draft.currentQuery = action.searchstring;
        break;

      case LOAD_PRODUCTS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      // case LOAD_REPOS:
      //   draft.loading = true;
      //   draft.error = false;
      //   draft.userData.repositories = false;
      //   break;
      //
      // case LOAD_REPOS_SUCCESS:
      //   draft.userData.repositories = action.repos;
      //   draft.loading = false;
      //   draft.currentUser = action.username;
      //   break;
      //
      // case LOAD_REPOS_ERROR:
      //   draft.error = action.error;
      //   draft.loading = false;
      //   break;
    }
  });

export default appReducer;
