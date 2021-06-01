import 'package:flickr/models/photos.dart';
import 'package:flutter/material.dart';
import 'comment.dart';
import 'user.dart';

///[Post] class
class Post {
  //List<AssetImage> image = [new AssetImage('lib/assets/photo5.jpg')];
  String description;
  String title;
  User user;
  List<User> likes;
  List<Comment> comments;
  DateTime date;
  bool isLiked;
  bool isSaved;
  //List<NetworkImage> imagePath = [new NetworkImage('www.google.com')];
  List<Photo> photo = [
    new Photo(
      imagePath: 'www.google.com',
    )
  ];

  Post(
    this.photo,
    this.user,
    this.description,
    this.date,
    this.likes,
    this.comments,
    this.isLiked,
    this.isSaved, {
    this.title,
  });
}
