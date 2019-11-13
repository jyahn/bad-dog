import {
  ADD_POST,
  FETCH_POST,
  ADD_COMMENT
} from '../actions/types';

export default function rootReducer(state = {}, action) {
  switch (action.type) {

    case FETCH_POST:
      // console.log("anything?")
      return { ...state, [action.post.id]: action.post };

    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    case ADD_COMMENT:
      return {
        ...state,
        [action.postId]: { ...state[action.postId], comments: [...state[action.postId].comments, action.comment] }
      };

    default:
      return state;
  }
}
