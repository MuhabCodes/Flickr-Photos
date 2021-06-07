import 'dart:async';

///Importing library to send http requests.
import 'dart:convert';

import 'package:flickr/models/global.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

enum Status { Success, Fail, Loading }

class PostProvider with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;
  List<String> userHomePostsString;
  String userId;
  User userLoggedIn;
  List<String> followingIds;
  User userFollowingInfo;

  PostProvider(
      {this.baseUrl,
      this.context,
      this.userHomePostsString,
      this.userId,
      this.userLoggedIn,
      this.followingIds,
      this.userFollowingInfo});

  var _urlUserHomePosts =
      Uri.parse("https://run.mocky.io/v3/0feac5cd-e53b-4545-bb6d-262324505047");

  Future<void> getUserHomePosts() async {
    /// get request
    var response = await http.get(_urlUserHomePosts);
    if (response.statusCode == 200) {
      status = Status.Success;
      notifyListeners();
      var extractData = jsonDecode(response.body);
      List<dynamic> json = extractData["posts"];
      print(json);
      if (json != null) {
        //String userFollowingId = jsonFollowingIds[i];

        for (int i = 0; i < json.length; i++) {
          userId = json[i]["ownerId"];
          getUserFollowingInfo(userId);
          //addUserHomePosts(json[i]);
          addUserHomePostsInteg(json[i], userFollowingInfo);
        }
      } else
        print("List of posts was empty");
    } else {
      /// If the server did not return a 200 CREATED response,
      /// then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to followings');
    }
    notifyListeners();
  }

  Future<void> getUserFollowingInfo(String userFollowingId) async {
    /// get request
    //getInfo
    var _urlUserFollowingInfo = Uri.parse(
        "https://run.mocky.io/v3/349cc68c-4152-4d82-a435-516df0e31a5f");

    var response = await http.get(_urlUserFollowingInfo);
    if (response.statusCode == 200) {
      status = Status.Success;
      notifyListeners();
      //var extractData = jsonDecode(response.body);
      Map<String, dynamic> json = jsonDecode(response.body);
      print(json);
      userFollowingInfo = User.fromJson(jsonDecode(response.body));
    } else {
      /// If the server did not return a 200 CREATED response,
      /// then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to create userPost');
    }
    notifyListeners();
  }
}
