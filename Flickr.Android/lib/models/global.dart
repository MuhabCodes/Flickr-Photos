import 'package:flutter/material.dart';

import 'comment.dart';
import 'post.dart';
import 'user.dart';

TextStyle textStyle = new TextStyle(fontFamily: 'Gotham', fontSize: 10);
TextStyle textStyleBold = new TextStyle(
    fontFamily: 'Gotham',
    fontWeight: FontWeight.bold,
    color: Colors.black,
    fontSize: 10);
TextStyle textStyleLigthGrey =
    new TextStyle(fontFamily: 'Gotham', color: Colors.grey, fontSize: 10);

Post post1 = new Post(
    /*[new Image.asset('lib/assets/istanbul.jpg')]*/
    //['lib/assets/photo_1.jpeg']
    [new AssetImage('lib/assets/photo_1.jpeg')],
    user,
    "My first post",
    DateTime.now(),
    [follower1, follower2, follower3],
    [],
    false,
    false);
final User user = new User(
    'Hannah Hatem',
    AssetImage('lib/assets/photo_1.jpeg'),
    [follower1, follower2, follower3],
    [follower1, follower2, follower3],
    [],
    [],
    false);

User follower1 = new User(
    'ZiadAkram', AssetImage('lib/assets/follower3.jpeg'), [], [], [], [], true);
User follower2 = new User(
    'Mehrez', AssetImage('lib/assets/follower2.jpg'), [], [], [], [], false);
User follower3 = new User('MostafaUsama',
    AssetImage('lib/assets/their_profile.jpeg'), [], [], [], [], true);

//Create a list which contains the posts in home page

List<Post> userHomePosts = [
  new Post(
      /*[new Image.asset('lib/assets/istanbul.jpg')]*/
      //['lib/assets/istanbul.jpg']
      [
        new AssetImage('lib/assets/perfume1.jpeg'),
        new AssetImage('lib/assets/perfume2.jpeg'),
        new AssetImage('lib/assets/toothpaste.jpeg'),
      ],
      user,
      "Deeply Exhausted",
      DateTime.now(),
      [follower1, follower2, follower3],
      [
        new Comment(follower1, "This was amazing!", DateTime.now(), false),
        new Comment(follower2, "Cool one", DateTime.now(), false),
      ],
      false,
      false),
  new Post(
      //['lib/assets/post2.jpg']
      [new AssetImage('lib/assets/post2.jpg')],
      follower1,
      "This is such a great post though",
      DateTime.now(),
      [user, follower2, follower3, follower1, follower2],
      [
        new Comment(follower3, "This was super cool!", DateTime.now(), false),
        new Comment(follower1, "I can't believe it's not \nbutter!",
            DateTime.now(), false),
        new Comment(user, "I know rite!", DateTime.now(), false),
        new Comment(follower3, "I'm batman", DateTime.now(), false)
      ],
      false,
      false),
  new Post(
      //['lib/assets/photo5.jpg']
      [new AssetImage('lib/assets/photo5.jpg')],
      follower2,
      "Found this in my backyard. \nThought I'd post it jk lol lol lolol",
      DateTime.now(),
      [user, follower2, follower3, follower3, follower1],
      [
        new Comment(follower3, "This was super cool!", DateTime.now(), false),
        new Comment(follower1, "I can't believe it's not \nbutter!",
            DateTime.now(), false),
        new Comment(user, "I know rite!", DateTime.now(), false),
      ],
      false,
      false),
  new Post(
      //['lib/assets/photo5.jpg']
      [new AssetImage('lib/assets/photo5.jpg')],
      follower3,
      "Found this in my backyard. \nThought I'd post it jk lol lol lolol",
      DateTime.now(),
      [
        user,
        follower2,
        follower3,
      ],
      [
        new Comment(follower3, "This was super cool!", DateTime.now(), false),
        new Comment(follower1, "I can't believe it's not \nbutter!",
            DateTime.now(), false),
        new Comment(user, "I know rite!", DateTime.now(), false),
      ],
      false,
      false),
];

String getPostTime(DateTime postTime) {
  DateTime timeNow = DateTime.now();
  String result = "now";

  if (timeNow == postTime) {
    result = "now";
  } else if (timeNow.year == postTime.year) {
    if (timeNow.day != postTime.day && timeNow.month > postTime.month) {
      if ((timeNow.month - postTime.month) == 1) {
        result = (timeNow.month - postTime.month).toString() + "mo";
      } else {
        result = (timeNow.month - postTime.month).toString() + "mo";
      }
    }
    if (timeNow.month == postTime.month && timeNow.day > postTime.day) {
      if ((timeNow.day - postTime.day) >= 1 &&
          (timeNow.day - postTime.day) <= 6) {
        result = (timeNow.day - postTime.day).toString() + "d";
      } else if ((timeNow.day - postTime.day) <= 13) {
        result = /* (timeNow.day - postTime.day).toString() + */ "1w";
      } else if ((timeNow.day - postTime.day) <= 20) {
        result = /*(timeNow.day - postTime.day).toString() + */ "2w";
      } else if ((timeNow.day - postTime.day) <= 29) {
        result = /*(timeNow.day - postTime.day).toString() + */ "3w";
      }
    }
    if (timeNow.month == postTime.month &&
        timeNow.day == postTime.day &&
        timeNow.hour > postTime.hour) {
      if ((timeNow.hour - postTime.hour) == 1) {
        result = (timeNow.hour - postTime.hour).toString() + "h";
      } else {
        result = (timeNow.hour - postTime.hour).toString() + "h";
      }
    }
    if (timeNow.month == postTime.month &&
        timeNow.day == postTime.day &&
        timeNow.hour == postTime.hour &&
        timeNow.minute > postTime.minute) {
      if ((timeNow.minute - postTime.minute) == 1) {
        result = (timeNow.minute - postTime.minute).toString() + "m";
      } else {
        result = (timeNow.minute - postTime.minute).toString() + "m";
      }
    }
  } //else if
  else if (timeNow.year > postTime.year) {
    if ((timeNow.year - postTime.year) == 1) {
      result = (timeNow.year - postTime.year).toString() + "y";
    } else {
      result = (timeNow.year - postTime.year).toString() + "y";
    }
  } else {
    result = "unConditional";
  }
  return result;
}
