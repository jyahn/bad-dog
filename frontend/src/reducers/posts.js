import {
  ADD_POST,
  FETCH_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  VOTE
} from '../actions/types';

export default function rootReducer(state = {}, action) {
  switch (action.type) {

    case FETCH_POST:
      // console.log("anything?")
      return { ...state, [action.post.id]: action.post };

    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    case VOTE:
      return {
        ...state,
        [action.postId]: { ...state[action.postId], votes: action.votes }
      }

    case ADD_COMMENT:
      return {
        ...state,
        [action.postId]: { ...state[action.postId], comments: [...state[action.postId].comments, action.comment] }
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId], comments: state[action.postId].comments.filter(c => c.id !== action.commentId)
        }
      };


    default:
      return state;
  }
}
