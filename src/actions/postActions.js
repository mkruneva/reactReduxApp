import { GET_POSTS, NEW_POST } from './types';

// each action is a function
// thunk middleware allows to call the dispatch function directly to make async requests
export function getPosts() {
  return function(dispatch) {
    // dispatch - promise resolver
  }
}