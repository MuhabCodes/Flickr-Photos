import React from 'react';
import './Post.css';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

const PostCommentButton = () => (
  <button type="button" id="post-comment-button" data-testid="post-comment-test">
    <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 18, color: 'grey' }} />
  </button>
);

export default PostCommentButton;
