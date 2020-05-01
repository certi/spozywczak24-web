/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_QUERY } from './constants';

// The initial state of the App
export const initialState = {
  query: '',
  products: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_QUERY:
        // Delete prefixed '@' from the github username
        draft.query = action.query.replace(/@/gi, '');
        break;
    }
  });

export default homeReducer;
