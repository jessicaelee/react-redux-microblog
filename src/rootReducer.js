import { ADD_COMMENT, DELETE_COMMENT, ADD_POST, EDIT_POST } from "./actionTypes";

// const INITIAL_STATE = []

const INITIAL_STATE = [
  {
    title:"blah test",
    description:"blah description",
    body:"blahdy",
    id:"idkthisisapostid",
    comments:[
      {
        message:"HI!",
        id:"asldfhklj",
        postid:"idkthisisapostid"
      }
    ]
  }
]

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state.map(post => {
        if (post.id === action.payload.postid) {
          return { ...post, comments: [...post.comments, action.payload] };
        } else {
          return post;
        }
      });
    case DELETE_COMMENT:
      return state.map(post => {
        if (post.id === action.payload.postid) {
          const newComments = post.comments.filter(comment => comment.id !== action.payload.id);
          return { ...post, comments: newComments };
        } else {
          return post;
        }
      })
    case ADD_POST:
      return [...state, action.payload];
    case EDIT_POST:
      return state.map(post => {
        if (post.id === action.payload.id) {
          return action.payload;
        } else {
          return post;
        }
      });
    default:
      console.warn("Unexpected action type:", action.type);
      return state;
  }
}

export default rootReducer;