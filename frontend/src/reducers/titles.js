import {
  FETCH_TITLES,
  ADD_POST
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

    default:
      return state;
  }
}
