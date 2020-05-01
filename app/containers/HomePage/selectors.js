/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectQuery = () =>
  createSelector(
    selectHome,
    homeState => homeState.query,
  );

export { selectHome, makeSelectQuery };
