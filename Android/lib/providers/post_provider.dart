import 'dart:async';

///Importing library to send http requests.
import 'dart:convert';

import 'package:flickr/models/global.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../models/about.dart';

enum Status { Success, Fail, Loading }

class PostProvider with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;
  List<String> userHomePostsString;
  String userId;
  User userLoggedIn;
  List<String> followingIds;
  PostProvider(
      {this.baseUrl,
      this.context,
      this.userHomePostsString,
      this.userId,
      this.userLoggedIn,
      this.followingIds});

  var _urlFollowingIds =
      Uri.parse("https://run.mocky.io/v3/d5891262-174f-4016-ab95-07fb2bc5e570");

  var _urlUserHomePosts =
      Uri.parse("https://run.mocky.io/v3/8b56c903-aa47-4432-a540-5d8c6873afb2");
  Future<void> getUserHomePosts() async {
    // get request
    var response = await http.get(_urlUserHomePosts);
    if (response.statusCode == 200) {
      //about = About.fromJson(jsonDecode(response.body));
      status = Status.Success;
      notifyListeners();
      var extractData = jsonDecode(response.body);
      List<dynamic> json = extractData["posts"];
      //userHomePostsString = extractData["posts"];
      print(json);
      for (int i = 0; i < json.length; i++) {
        addUserHomePosts(json[i]);
      }
    } else {
      // If the server did not return a 200 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to followings');
    }
    notifyListeners();
  }

  Future<About> putLikePost() async {
    // post request from backend

    status = Status.Loading;
    final response = await http.put(
      _urlUserHomePosts,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{}),
    );
    if (response.statusCode == 200) {
      print(response.body);
      status = Status.Success;
      notifyListeners();
      // If the server did return a 201 CREATED response,
      // then parse the JSON.

      return About.fromJson(jsonDecode(response.body));
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to load album');
    }
  }
}
