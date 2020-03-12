import React from 'react';
import { useDispatch } from 'react-redux';
import './Vote.css'
import { voteToAPI } from './action'

function Votes({ postid }) {
  const dispatch = useDispatch();

  const voteUp = () => {
    dispatch(voteToAPI(postid, "up"));
  }

  const voteDown = () => {
    dispatch(voteToAPI(postid, "down"));
  }

  return (
    <span>
      <button className="vote-button" onClick={voteUp}>
        <i className="Vote-up fas fa-thumbs-up"></i>
      </button>
      <button className="vote-button" onClick={voteDown}>
        <i className="Vote-down fas fa-thumbs-down"></i>
      </button>
    </span>
  );
};

export default Votes;