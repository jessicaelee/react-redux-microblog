import React from 'react';
import { useDispatch } from 'react-redux';
import './Vote.css'
import { voteToAPI } from './action'

function Vote({ postid }) {
  const dispatch = useDispatch();

  const voteUp = () => {
    dispatch(voteToAPI(postid, "up"));
  }

  const voteDown = () => {
    dispatch(voteToAPI(postid, "down"));
  }

  return (
    <div>
      <button onClick={voteUp}>
        <i className="Vote-up fas fa-thumbs-up"></i>
      </button>
      <button onClick={voteDown}>
        <i className="Vote-down fas fa-thumbs-down"></i>
      </button>
    </div>
  );
};

export default Vote;