import 'package:flutter/material.dart';

import 'post.dart';
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
    this.isPro,
    this.albums,
    this.email,
    this.photos,
    this.photosCount,
    this.firstName,
    this.lastName,
    this.description,
    this.website,
    this.occupation,
    this.homeTown,
    this.city,
    this.country,
    this.favs,
    this.tags,
    this.username,
  });
  String email;
  String password;
  String token;
  String userId;
  List<dynamic> followers;
  List<dynamic> following;
  String isActivated;
  int followersCount;
  int followingCount;
  String userAvatar;
  String age;
  String isPro;
  List<dynamic> albums;
  List<dynamic> photos;
  int photosCount;
  String firstName;
  String lastName;
  String description;
  String website;
  String occupation;
  String homeTown;
  String city;
  String country;
  int favs;
  int tags;
  String username;

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
        photos: List<dynamic>.from(json["photos"].map((x) => x)),
        photosCount: json["photosCount"],
        firstName: json["firstName"],
        lastName: json["lastName"],
        description: json["description"],
        website: json["website"],
        occupation: json["occupation"],
        homeTown: json["homeTown"],
        city: json["city"],
        country: json["country"],
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
        "photos": List<dynamic>.from(photos.map((x) => x)),
        "photosCount": photosCount,
        "firstName": firstName,
        "lastName": lastName,
        "description": description,
        "website": website,
        "occupation": occupation,
        "homeTown": homeTown,
        "city": city,
        "country": country,
        "favs": favs,
        "tags": tags,
      };
  factory User.fromJson2(Map<String, dynamic> json) => User(
        token: json["token"],
      );
}
