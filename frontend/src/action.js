import { ADD_COMMENT, DELETE_COMMENT, ADD_POST, EDIT_POST, SET_POSTS } from "./actionTypes";

export function addComment(comment) {
  return {
    "type": ADD_COMMENT,
    payload: comment
  }
}
export function deleteComment(comment) {
  return {
    "type": DELETE_COMMENT,
    payload: comment
  }
}
export function addPost(post) {
  return {
    "type": ADD_POST,
    payload: post
  }
}
export function editPost(post) {
  return {
    "type": EDIT_POST,
    payload: post
  }
}
export function setPosts(res) {
  return {
    "type": SET_POSTS,
    payload: res
  }
}