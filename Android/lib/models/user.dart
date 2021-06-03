import 'package:flutter/material.dart';

import 'post.dart';

class User {
  String email;
  String password;
  String token;
  String username;
  List<Post> posts;
  NetworkImage profilePicture = new NetworkImage(
      'https://static01.nyt.com/images/2021/05/30/multimedia/30ah-coolers1/merlin_188253867_acb3eef8-762e-4f66-a4b1-37e1e694ed93-superJumbo.jpg');
  List<User> followers;
  List<User> following;
  List<Post> savedPosts;
  bool hasStory;
  String userId;
  String profileId;
  String nsId;
  String showCaseSet;
  String firstName;
  String lastName;
  String age;
  String description;
  String website;
  String occupation;
  String homeTown;
  String city;
  String country;
  bool isPro;

  User(
      {this.age,
      this.username,
      this.profilePicture,
      this.followers,
      this.following,
      this.posts,
      this.savedPosts,
      this.hasStory,
      this.userId,
      this.profileId,
      this.nsId,
      this.showCaseSet,
      this.firstName,
      this.lastName,
      this.description,
      this.website,
      this.occupation,
      this.homeTown,
      this.city,
      this.country,
      this.email,
      this.password,
      this.token,
      this.isPro});

  factory User.fromJson(Map<String, dynamic> json) => User(
        profileId: json["profileId"],
        nsId: json["nsId"],
        showCaseSet: json["showcaseSet"],
        firstName: json["firstName"],
        lastName: json["lastName"],
        description: json["description"],
        website: json["website"],
        occupation: json["occupation"],
        homeTown: json["homeTown"],
        city: json["city"],
        country: json["country"],
      );

  factory User.fromJson2(Map<String, dynamic> json) => User(
        token: json["token"],
      );
}
