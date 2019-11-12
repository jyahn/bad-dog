import axios from "axios";
import {
  ADD_POST
} from './types';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";


export function addPostToAPI(title, description, dog_pic) {
  return async function (dispatch) {
    const response = await axios.post(`${API_URL}`, {
      title,
      description,
      dog_pic
    });
    return dispatch(addPost(response.data));
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}