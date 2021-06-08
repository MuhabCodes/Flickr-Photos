import React from 'react';
import './Post.css';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';

const PostFaveButton = () => (
  <button type="button" id="post-fave-button" onClick={handleFave}>
    <div className="post-comment-count">
      { isFaved ? <AiTwotoneStar style={{ fontSize: 20 }} />
        : <AiOutlineStar style={{ fontSize: 20 }} /> }
    </div>
  </button>
);

export default PostFaveButton;
