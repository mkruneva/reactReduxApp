// evaluates any actions that are commited - get and post requests 
import { GET_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],     // representing posts taken from GET_POSTS action
  item: {}       // representing post taken from NEW_POST action
}

// evaluate the type we are dealing with
// actions must have a type and that is what we are evaluating
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return state; // returns different state
    case NEW_POST:
      return state; // returns different state
    default: 
      return state;
  }
}