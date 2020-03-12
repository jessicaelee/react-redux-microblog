import { ADD_COMMENT, DELETE_COMMENT, ADD_POST, EDIT_POST, SET_POSTS, UPDATE_VOTES, SORT_POSTS } from "./actionTypes";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/api";



async function request(dispatch, endpoint, paramsOrData = {}, verb = "get") {
  console.debug("API Call:", endpoint, paramsOrData, verb);

  try {
    return (await axios({
      method: verb,
      url: `${BASE_URL}/${endpoint}`,
      [verb === "get" ? "params" : "data"]: paramsOrData
    })).data;

  } catch (err) {
    console.error("API Error:", err.response);
  }
}

export function getPostsFromAPI() {
  return async function (dispatch) {
    let res = await request(dispatch, `posts`);
    dispatch(setPosts(res));
  }
}

export function addPostToAPI(postData) {
  return async function (dispatch) {
    let res = await request(dispatch, `posts/`, postData, "post");
    dispatch(addPost(res));
  }
}

export function getOnePostFromAPI(id) {
  return async function (dispatch) {
    let res = await request(dispatch, `posts/${id}`);
    dispatch(editPost(res));
  }
}

export function updatePostInAPI(postData, id, comments) {
  return async function (dispatch) {
    let res = await request(dispatch, `posts/${id}`, postData, "put");
    dispatch(editPost(res, comments));
  }
}

export function addCommentToAPI(postid, text) {
  return async function (dispatch) {
    let res = await request(dispatch, `posts/${postid}/comments/`, { text }, "post");
    dispatch(addComment(res, postid));
  }
}

export function deleteCommentFromAPI({ postid, id }) {
  return async function (dispatch) {
    await request(dispatch, `posts/${postid}/comments/${id}`, {}, "delete");
    dispatch(deleteComment(postid, id));
  }
}

export function voteToAPI(postid, direction) {
  return async function (dispatch) {
    const { votes } = await request(dispatch, `posts/${postid}/vote/${direction}`, {}, "post");
    dispatch(updateVotes(postid, votes))
  }
}

export function sortPosts(posts) {
  return {
    type: SORT_POSTS,
    payload: posts
  }
}

function updateVotes(postid, votes) {
  return {
    type: UPDATE_VOTES,
    payload: { postid, votes }
  }
}

function addComment(res, postid) {
  return {
    type: ADD_COMMENT,
    payload: { ...res, postid }
  }
}
function deleteComment(postid, id) {
  return {
    type: DELETE_COMMENT,
    payload: { postid, id }
  }
}
function addPost(res) {
  return {
    type: ADD_POST,
    payload: { ...res, comments: [] }
  }
}
function editPost(res, comments) {
  return {
    type: EDIT_POST,
    payload: { comments, ...res }
  }
}
function setPosts(res) {
  return {
    type: SET_POSTS,
    payload: res
  }
}
