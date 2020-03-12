import { ADD_COMMENT, DELETE_COMMENT, ADD_POST, EDIT_POST, SET_POSTS, UPDATE_VOTES } from "./actionTypes";

const INITIAL_STATE = { loading: true, posts: [] }

function rootReducer(state = INITIAL_STATE, action) {
  let updatedPosts;
  switch (action.type) {
    case SET_POSTS:
      return { posts: action.payload }
    case ADD_COMMENT:
      updatedPosts = state.posts.map(post => {
        if (post.id === action.payload.postid) {
          return { ...post, comments: [...post.comments, action.payload] };
        } else {
          return post;
        }
      });
      return { posts: updatedPosts }
    case DELETE_COMMENT:
      updatedPosts = state.posts.map(post => {
        if (post.id === action.payload.postid) {
          const newComments = post.comments.filter(comment => comment.id !== action.payload.id);
          return { ...post, comments: newComments };
        } else {
          return post;
        };
      });
      return { posts: updatedPosts }
    case ADD_POST:
      return { posts: [...state.posts, action.payload] };
    case EDIT_POST:
      updatedPosts = state.posts.map(post => {
        if (post.id === action.payload.id) {
          return { ...action.payload, comments: action.payload.comments };
        } else {
          return post;
        }
      });
      return { posts: updatedPosts };
    case UPDATE_VOTES:
      updatedPosts = state.posts.map(post => {
        if (post.id === action.payload.postid) {
          return { ...post, votes: action.payload.votes };
        } else {
          return post;
        }
      });
      return { posts: updatedPosts }
    default:
      console.warn("Unexpected action type:", action.type);
      return state;
  }
}

export default rootReducer;