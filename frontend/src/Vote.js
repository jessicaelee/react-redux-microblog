import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Vote.css'

function Vote({ postContent, makeAction, toggleEditing }) {



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