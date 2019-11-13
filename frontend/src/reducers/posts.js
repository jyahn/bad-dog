import {
  ADD_POST,
  FETCH_POST
} from '../actions/types';

export default function rootReducer(state = {}, action) {
  switch (action.type) {

    case FETCH_POST:
      // console.log("anything?")
      return { ...state, [action.post.id]: action.post };

    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    default:
      return state;
  }
}
