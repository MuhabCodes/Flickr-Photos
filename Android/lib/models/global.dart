import 'package:flutter/material.dart';

import 'comment.dart';
import 'post.dart';
import 'user.dart';

TextStyle textStyle = new TextStyle(
  fontFamily: 'Gotham',
  fontSize: 15,
  color: Colors.black,
);
TextStyle textStyleBold = new TextStyle(
    fontFamily: 'Gotham',
    fontWeight: FontWeight.bold,
    color: Colors.black,
    fontSize: 15);
TextStyle textStyleLigthGrey = new TextStyle(
  fontFamily: 'Gotham',
  color: Colors.grey,
  fontSize: 14,
  fontWeight: FontWeight.bold,
);
TextStyle textStyleDarkGrey = new TextStyle(
  fontFamily: 'Gotham',
  color: Colors.grey,
  fontSize: 13,
  fontWeight: FontWeight.bold,
);
TextStyle appBarTitleStyle = new TextStyle(
  color: Colors.white,
  fontSize: 15,
  fontWeight: FontWeight.bold,
);

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
    false,
    [
      new NetworkImage(
          'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920')
    ]);
final User user = new User(
    'Hannah Hatem',
    new NetworkImage(
        'https://assets.bonappetit.com/photos/5aec939cabfd55654bd1e6bf/master/pass/rose-sangria-verde-1.jpg'),
    [follower1, follower2, follower3],
    [follower1, follower2, follower3],
    [],
    [],
    false);
User loggedInUser = new User(
    'LoggedIn user',
    new NetworkImage(
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-tipsy-mermaid-punch-3-1531851652.jpg?crop=0.564xw:1.00xh;0.223xw,0&resize=640:*'),
    [follower1, follower2, follower3],
    [follower1, follower2, follower3],
    [],
    [],
    false);

User follower1 = new User(
    'ZiadAkram',
    new NetworkImage(
        'https://www.shemazing.net/wp-content/uploads/2018/06/beefeater-pink-peppercorn-rose-656x415.jpg'),
    [],
    [],
    [],
    [],
    true);
User follower2 = new User(
    'Mehrez',
    new NetworkImage(
        'https://www.dusttexhonolulu.com/wp-content/uploads/2019/06/summer-drinks.jpg'),
    [],
    [],
    [],
    [],
    false);
User follower3 = new User(
    'MostafaUsama',
    new NetworkImage(
        'https://static01.nyt.com/images/2021/05/30/multimedia/30ah-coolers1/merlin_188253867_acb3eef8-762e-4f66-a4b1-37e1e694ed93-superJumbo.jpg'),
    [],
    [],
    [],
    [],
    true);

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
      false,
      [
        new NetworkImage(
            'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920'),
        new NetworkImage(
            'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920'),
        new NetworkImage(
            'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920'),
      ]),
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
      false,
      [
        new NetworkImage(
            'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920')
      ]),
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
      false,
      [
        new NetworkImage(
            'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920')
      ]),
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
      false,
      [
        new NetworkImage(
            'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920')
      ]),
];

String getPostTime(DateTime postTime) {
  DateTime timeNow = DateTime.now();
  String result = "now";

  if (timeNow == postTime) {
    result = "now";
  } else if (timeNow.year == postTime.year) {
    if (timeNow.month == postTime.month &&
        timeNow.day == postTime.day &&
        timeNow.hour == postTime.hour &&
        timeNow.minute > postTime.minute) {
      if ((timeNow.minute - postTime.minute) == 1 &&
          (timeNow.second - postTime.second) <= 59) {
        result = (timeNow.minute - postTime.minute).toString() + "m";
      } else {
        result = (timeNow.minute - postTime.minute).toString() + "m";
      }
    } else if (timeNow.month == postTime.month &&
        timeNow.day == postTime.day &&
        (timeNow.hour - postTime.hour) == 1) {
      int temp1 = 0;

      temp1 = 60 - postTime.minute;
      temp1 = timeNow.minute + temp1;
      if (temp1 <= 59 && temp1 > 0)
        result = (temp1).toString() + "m";
      else
        result = "1h";
    } else if (timeNow.month == postTime.month &&
        timeNow.day == postTime.day &&
        timeNow.hour > postTime.hour) {
      if ((timeNow.hour - postTime.hour) == 1) {
        result = (timeNow.hour - postTime.hour).toString() + "h";
      } else {
        result = (timeNow.hour - postTime.hour).toString() + "h";
      }
    } else if (timeNow.month == postTime.month && timeNow.day > postTime.day) {
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
    } else if (timeNow.month > postTime.month) {
      if ((timeNow.month - postTime.month) == 1) {
        result = (timeNow.month - postTime.month).toString() + "mo";
      } else {
        result = (timeNow.month - postTime.month).toString() + "mo";
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
