import 'package:flickr/home/home.dart';
import 'package:flickr/models/comment.dart';
import 'package:flickr/models/global.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:responsive_widgets/responsive_widgets.dart';

bool postComment(String commentController, Post thePost) {
  bool isAdded = false;
  if (commentController.isEmpty == false) {
    thePost.comments.add(
      new Comment(loggedInUser, commentController, DateTime.now(), false),
    );
    isAdded = true;
  }
  return isAdded;
}
