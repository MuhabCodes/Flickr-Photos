import 'package:flutter/material.dart';
import 'comment.dart';
import 'user.dart';

class Post {
  //AssetImage image;
  List<AssetImage> image = [new AssetImage('lib/assets/photo5.jpg')];
  //List<String> image;
  //image= [];
  String description;
  User user;
  List<User> likes;
  List<Comment> comments;
  DateTime date;
  bool isLiked;
  bool isSaved;
  List<NetworkImage> imagePath = [new NetworkImage('www.google.com')];
  //List<AssetImage> img1 = [new AssetImage('lib/assets/photo5.jpg')];

  Post(this.image, this.user, this.description, this.date, this.likes,
      this.comments, this.isLiked, this.isSaved, this.imagePath);
}
