///this page contains functions which are commonly used between all home screens

import 'package:flickr/models/comment.dart';
import 'package:flickr/models/global.dart';
import 'package:flickr/models/post.dart';

///[postComment] adds a comment to the lick on clicking post button in comments page
bool postComment(String commentController, Post thePost) {
  bool isAdded = false;
  if (commentController.isEmpty == false) {
    thePost.comments.add(
      new Comment(
        loggedInUser,
        commentController,
        DateTime.now(),
      ),
    );
    isAdded = true;
  }
  return isAdded;
}

///[addLikers] adds the user who liked to likes list on clicking like button
void addLikers(Post post) {
  post.isLiked = post.isLiked ? false : true;
  if (!post.isLiked && post.likes != null) {
    post.likes.remove(loggedInUser);
  } else {
    post.likes.add(loggedInUser);
  }
}
