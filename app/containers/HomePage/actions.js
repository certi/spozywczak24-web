import { CHANGE_QUERY } from './constants';

export function changeQuery(query) {
  return {
    type: CHANGE_QUERY,
    query,
  };
}
