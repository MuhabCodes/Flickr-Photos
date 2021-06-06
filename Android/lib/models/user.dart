// To parse this JSON data, do
//
//     final loggedUser = loggedUserFromJson(jsonString);

import 'dart:convert';

class User {
  User({
    this.password,
    this.age,
    this.token,
    this.userId,
    this.followers,
    this.following,
    this.isActivated,
    this.followersCount,
    this.followingCount,
    this.userAvatar,
    this.person,
    this.isPro,
    this.albums,
    this.email,
    this.photos,
    this.photosCount,
    this.firstName,
    this.lastName,
    this.googleEmail,
    this.displayName,
    this.googleToken,
    this.favs,
    this.tags,
    this.username,
  });
  String email;
  String googleEmail;
  String password;
  String token;
  String googleToken;
  String userId;
  List<dynamic> followers;
  List<dynamic> following;
  String username;
  bool isActivated;
  int followersCount;
  int followingCount;
  String userAvatar;
  String age;
  bool isPro;
  List<dynamic> albums;
  List<Photo> photos;
  int photosCount;
  String firstName;
  String lastName;
  String emailVisibility = "Anyone";
  String cityVisibility = "Anyone";
  Person person;
  String displayName;
  int favs;
  int tags;

  factory User.fromRawJson(String str) => User.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory User.fromJson(Map<String, dynamic> json) => User(
        userId: json["userId"],
        followers: List<dynamic>.from(json["followers"].map((x) => x)),
        following: List<dynamic>.from(json["following"].map((x) => x)),
        isActivated: json["isActivated"],
        followersCount: json["followersCount"],
        followingCount: json["followingCount"],
        userAvatar: json["userAvatar"],
        isPro: json["isPro"],
        albums: List<dynamic>.from(json["albums"].map((x) => x)),
        email: json["email"],
        photos: List<Photo>.from(json["photos"].map((x) => Photo.fromJson(x))),
        photosCount: json["photosCount"],
        firstName: json["firstName"],
        displayName: json["displayName"],
        lastName: json["lastName"],
        person: Person.fromJson(json["person"]),
        favs: json["favs"],
        tags: json["tags"],
      );

  Map<String, dynamic> toJson() => {
        "userId": userId,
        "followers": List<dynamic>.from(followers.map((x) => x)),
        "following": List<dynamic>.from(following.map((x) => x)),
        "isActivated": isActivated,
        "followersCount": followersCount,
        "followingCount": followingCount,
        "userAvatar": userAvatar,
        "isPro": isPro,
        "albums": List<dynamic>.from(albums.map((x) => x)),
        "email": email,
        "photos": List<dynamic>.from(photos.map((x) => x.toJson())),
        "photosCount": photosCount,
        "firstName": firstName,
        "lastName": lastName,
        "person": person.toJson(),
        "favs": favs,
        "tags": tags,
      };
  factory User.fromJson2(Map<String, dynamic> json) => User(
        token: json["token"],
      );
}

class Person {
  Person({
    this.dateCreated,
    this.id,
    this.realName,
    this.city,
    this.homeTown,
    this.occupation,
    this.country,
    this.description,
  });

  DateTime dateCreated;
  String id;
  String realName = "   asdasd";
  String city;
  String homeTown;
  String occupation;
  String country;
  String description;

  factory Person.fromRawJson(String str) => Person.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory Person.fromJson(Map<String, dynamic> json) => Person(
        dateCreated: DateTime.parse(json["dateCreated"]),
        id: json["_id"],
        realName: json["realName"],
        city: json["city"],
        homeTown: json["homeTown"],
        occupation: json["occupation"],
        country: json["country"],
        description: json["description"],
      );

  Map<String, dynamic> toJson() => {
        "dateCreated": dateCreated.toIso8601String(),
        "_id": id,
        "realName": realName,
        "city": city,
        "homeTown": homeTown,
        "occupation": occupation,
        "country": country,
        "description": description,
      };
}

class Photo {
  Photo({
    this.views,
    this.isPublic,
    this.tags,
    this.peopleInPhoto,
    this.id,
    this.description,
    this.title,
    this.captureDate,
    this.uploadDate,
    this.secret,
    this.imageUrl,
    this.width,
    this.height,
    this.user,
    this.photoV,
    this.favs,
    this.comments,
    this.v,
  });
  bool selected = false;
  int views;
  bool isPublic;
  List<String> tags;
  List<dynamic> peopleInPhoto;
  String id;
  String description;
  String title;
  DateTime captureDate;
  DateTime uploadDate;
  String secret;
  String imageUrl;
  int width;
  int height;
  String user;
  int photoV;
  int favs;
  int comments;
  int v;

  factory Photo.fromRawJson(String str) => Photo.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory Photo.fromJson(Map<String, dynamic> json) => Photo(
        views: json["views"],
        isPublic: json["isPublic"],
        tags: List<String>.from(json["tags"].map((x) => x)),
        peopleInPhoto: List<dynamic>.from(json["peopleInPhoto"].map((x) => x)),
        id: json["_id"],
        description: json["description"] == null ? null : json["description"],
        title: json["title"] == null ? null : json["title"],
        captureDate: DateTime.parse(json["captureDate"]),
        uploadDate: DateTime.parse(json["uploadDate"]),
        secret: json["secret"],
        imageUrl: json["imageUrl"],
        width: json["width"],
        height: json["height"],
        favs: json["favs"],
        comments: json["comments"],
        user: json["user"],
        photoV: json["v"] == null ? null : json["v"],
        v: json["__v"] == null ? null : json["__v"],
      );

  Map<String, dynamic> toJson() => {
        "views": views,
        "isPublic": isPublic,
        "tags": List<dynamic>.from(tags.map((x) => x)),
        "peopleInPhoto": List<dynamic>.from(peopleInPhoto.map((x) => x)),
        "_id": id,
        "description": description == null ? null : description,
        "title": title == null ? null : title,
        "captureDate": captureDate.toIso8601String(),
        "uploadDate": uploadDate.toIso8601String(),
        "favs": favs,
        "comments": comments,
        "secret": secret,
        "imageUrl": imageUrl,
        "width": width,
        "height": height,
        "user": user,
        "v": photoV == null ? null : photoV,
        "__v": v == null ? null : v,
      };
}

class DateWithImages {
  DateTime date;
  List<Photo> images;
  DateWithImages({this.date, this.images});
}
