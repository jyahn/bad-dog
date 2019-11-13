import {
  FETCH_TITLES,
  ADD_POST,
  VOTE
} from "../actions/types";


function makeTitleFromPost({ id, title, description, dog_pic, votes }) {
  return { id, title, description, dog_pic, votes };
}

export default function rootReducer(state = [], action) {
  switch (action.type) {

    case FETCH_TITLES:
      return [...action.titles];

    case ADD_POST:
      return [...state, makeTitleFromPost(action.post)];

    case VOTE:
      return state.map(title => title.id === action.postId ? { ...title, votes: action.votes } : title);

    default:
      return state;
  }
}
