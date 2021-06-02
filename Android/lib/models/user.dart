import 'package:flutter/material.dart';
import 'post.dart';

///[User] class used when generating a comment, logged in user, when liking a comment
class User {
  String username;
  List<Post> posts;
  NetworkImage profilePicture = new NetworkImage(
      'https://static01.nyt.com/images/2021/05/30/multimedia/30ah-coolers1/merlin_188253867_acb3eef8-762e-4f66-a4b1-37e1e694ed93-superJumbo.jpg');
  List<User> followers;
  List<User> following;
  List<Post> savedPosts;
  bool hasStory;
  int userId;

  User(this.username, this.profilePicture,
      {this.followers,
      this.following,
      this.posts,
      this.savedPosts,
      this.hasStory,
      this.userId});
}
