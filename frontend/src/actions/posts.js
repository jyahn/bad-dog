import axios from "axios";
import {
  ADD_POST,
  FETCH_POST,
  ADD_COMMENT
} from './types';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";


export function getPostFromAPI(id) {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/${id}`);
    return dispatch(getPost(response.data));
  };
}

function getPost(post) {
  return {
    type: FETCH_POST,
    post,
  };
}

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


export function sendCommentToAPI(postId, text) {
  return async function (dispatch) {
    const result = await axios.post(`${API_URL}/${postId}/comments/`, { text });
    return dispatch(addComment(postId, result.data));
  };
}

function addComment(postId, comment) {
  return { type: ADD_COMMENT, postId, comment };
}