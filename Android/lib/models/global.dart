///This file contains data used across the app
import 'package:flickr/models/photos.dart';
import 'package:flutter/material.dart';

import 'comment.dart';
import 'post.dart';
import 'user.dart';

///Some text foramts used in several files
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
TextStyle postTitleStyle = new TextStyle(
  color: Colors.white,
  fontSize: 15,
);

///is the list of posts which are displayed is home page
///and it's data is received through a get request
List<Post> userHomePostsMock = [];

///[this function is called in PostProvider Class
///to fill in the data members of the post
bool addUserHomePosts(Map<String, dynamic> json) {
  Post newPost = new Post(
      photo: [
        new Photo(imagePath: json["photoUrl"]),
      ],
      postId: json["postId"],
      user: new User(
          username: json["username"],
          profilePicture: new NetworkImage(json["userAvatar"])),
      title: json["title"],
      description: json["description"],
      date: DateTime(2021, 05, 31, 20, 38, 59),
      likes: [
        new User(
            username: json["likes"][0]["userName"],
            profilePicture:
                new NetworkImage(json["likes"][0]["userAvatarUrl"])),
      ],
      comments: [
        new Comment(
          new User(
              username: json["likes"][0]["userName"],
              profilePicture:
                  new NetworkImage(json["likes"][0]["userAvatarUrl"])),
          json["commenters"][0]["text"],
          DateTime(2021, 05, 31, 20, 38, 59),
        )
      ]);
  //print(newPost.like);
  userHomePostsMock.add(newPost);
  if (userHomePostsMock.length == 1) {
    userHomePostsMock.add(post1);
  }
  return true;
}

User loggedInUser = new User(
  username: 'LoggedIn user',
  profilePicture: new NetworkImage(
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-tipsy-mermaid-punch-3-1531851652.jpg?crop=0.564xw:1.00xh;0.223xw,0&resize=640:*'),
  following: [follower1, follower2, follower3],
  followers: [follower1, follower2, follower3],
);

User userBenFlasher = new User(
  'LoggedIn user',
  new NetworkImage(
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-tipsy-mermaid-punch-3-1531851652.jpg?crop=0.564xw:1.00xh;0.223xw,0&resize=640:*'),
  following: [follower1, follower2, follower3],
  followers: [follower1, follower2, follower3],
);
Post postBenFlasher = new Post(
  photo: [
    new Photo(
      imagePath:
          'https://live.staticflickr.com/4532/38021230015_8934884e7b_h.jpg',
    ),
  ],
  title: "Sutro Shore",
  user: user,
  description: "My first post",
  date: DateTime.now(),
  likes: [follower1, follower2, follower3],
  comments: [
    new Comment(
      follower1,
      "This was amazing!",
      DateTime.now(),
    ),
    new Comment(
      follower2,
      "Cool one",
      DateTime.now(),
    ),
  ],
);
Post post1 = new Post(
  photo: [
    new Photo(
      imagePath:
          'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920',
    ),
    new Photo(
      imagePath:
          'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920',
    )
  ],
  user: user,
  description: "My first post",
  date: DateTime.now(),
  likes: [follower1, follower2, follower3],
  comments: [
    new Comment(
      follower1,
      "This was amazing!",
      DateTime.now(),
    ),
    new Comment(
      follower2,
      "Cool one",
      DateTime.now(),
    ),
  ],
);
final User user = new User(
  username: 'Hannah Hatem',
  profilePicture: new NetworkImage(
      'https://assets.bonappetit.com/photos/5aec939cabfd55654bd1e6bf/master/pass/rose-sangria-verde-1.jpg'),
  following: [follower1, follower2, follower3],
  followers: [follower1, follower2, follower3],
);

User follower1 = new User(
  username: 'ZiadAkram',
  profilePicture: new NetworkImage(
      'https://www.shemazing.net/wp-content/uploads/2018/06/beefeater-pink-peppercorn-rose-656x415.jpg'),
  followers: [],
  following: [],
);
User follower2 = new User(
  username: 'Mehrez',
  profilePicture: new NetworkImage(
      'https://www.dusttexhonolulu.com/wp-content/uploads/2019/06/summer-drinks.jpg'),
  followers: [],
  following: [],
);
User follower3 = new User(
  username: 'MostafaUsama',
  profilePicture: new NetworkImage(
      'https://static01.nyt.com/images/2021/05/30/multimedia/30ah-coolers1/merlin_188253867_acb3eef8-762e-4f66-a4b1-37e1e694ed93-superJumbo.jpg'),
  following: [],
  followers: [],
);
/*
//Create a list which contains the posts in home page
List<Post> userHomePosts = [
  new Post(
    [
      new Photo(
        imagePath:
            'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920',
      ),
      new Photo(
        imagePath:
            'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920',
      ),
      new Photo(
        imagePath:
            'https://img.static-af.com/images/meta/IDname/CITY-IST-1?aspect_ratio=2:1&max_width=1920',
      ),
    ],
    user,
    "Deeply Exhausted",
    DateTime(2021, 05, 31, 20, 38, 59),
    [follower1, follower2, follower3],
    [
      new Comment(
        follower1,
        "This was amazing!",
        DateTime.now(),
      ),
      new Comment(
        follower2,
        "Cool one",
        DateTime.now(),
      ),
    ],
    false,
    false,
  ),
  new Post(
    [
      new Photo(
        imagePath:
            'https://www.shemazing.net/wp-content/uploads/2018/06/beefeater-pink-peppercorn-rose-656x415.jpg',
      ),
      new Photo(
        imagePath:
            'https://www.shemazing.net/wp-content/uploads/2018/06/beefeater-pink-peppercorn-rose-656x415.jpg',
      ),
    ],
    follower1,
    "This is such a great post though",
    DateTime.now(),
    [user, follower2, follower3, follower1, follower2],
    [
      new Comment(
        follower3,
        "This was super cool!",
        DateTime.now(),
      ),
      new Comment(
        follower1,
        "I can't believe it's not \nbutter!",
        DateTime.now(),
      ),
      new Comment(
        user,
        "I know rite!",
        DateTime.now(),
      ),
      new Comment(
        follower3,
        "I'm batman",
        DateTime.now(),
      )
    ],
    false,
    false,
  ),
  new Post(
    //['lib/assets/photo5.jpg']
    [
      new Photo(
        imagePath:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-tipsy-mermaid-punch-3-1531851652.jpg?crop=0.564xw:1.00xh;0.223xw,0&resize=640:*',
      ),
    ],
    follower2,
    "Found this in my backyard. \nThought I'd post it jk lol lol lolol",
    DateTime.now(),
    [user, follower2, follower3, follower3, follower1],
    [
      new Comment(
        follower3,
        "This was super cool!",
        DateTime.now(),
      ),
      new Comment(
        follower1,
        "I can't believe it's not \nbutter!",
        DateTime.now(),
      ),
      new Comment(
        user,
        "I know rite!",
        DateTime.now(),
      ),
    ],
    false,
    false,
  ),
  new Post(
    [
      new Photo(
        imagePath:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-tipsy-mermaid-punch-3-1531851652.jpg?crop=0.564xw:1.00xh;0.223xw,0&resize=640:*',
      ),
    ],
    follower3,
    "Found this in my backyard. \nThought I'd post it jk lol lol lolol",
    DateTime.now(),
    [
      user,
      /*follower2,
      follower3,*/
    ],
    [
      new Comment(
        follower3,
        "This was super cool!",
        DateTime.now(),
      ),
      new Comment(
        follower1,
        "I can't believe it's not \nbutter!",
        DateTime.now(),
      ),
      new Comment(
        user,
        "I know rite!",
        DateTime.now(),
      ),
    ],
    false,
    false,
  ),
];

*/

///[getPostTime] this function calculates returns how long
///the post or comment has been posted
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
        result = "1w";
      } else if ((timeNow.day - postTime.day) <= 20) {
        result = "2w";
      } else if ((timeNow.day - postTime.day) <= 29) {
        result = "3w";
      }
    } else if ((timeNow.month - postTime.month) == 1) {
      int temp1 = 0;

      temp1 = 31 - postTime.day;
      temp1 = timeNow.day + temp1;
      if (temp1 <= 6 && temp1 > 0)
        result = (temp1).toString() + "d";
      else if (temp1 <= 7 && temp1 > 14)
        result = (temp1).toString() + "1w";
      else if (temp1 <= 14 && temp1 > 21)
        result = (temp1).toString() + "2w";
      else
        result = "1m";
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
      if (postTime.month == 12) {
        int temp1 = timeNow.month;
        result = (temp1).toString() + "m";
      } else
        result = (timeNow.year - postTime.year).toString() + "y";
    } else {
      result = (timeNow.year - postTime.year).toString() + "y";
    }
  } else {
    result = "unConditional";
  }
  return result;
}

double convertDateToNum(DateTime postTime) {
  double total = 0;
  total = postTime.year +
      postTime.month +
      postTime.hour +
      postTime.minute / 10 +
      postTime.second / 100;

  return total;
}
