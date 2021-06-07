import 'dart:async';
import 'dart:convert';

import 'package:flickr/models/global.dart';
import 'package:flickr/models/user.dart';
import 'package:flickr/providers/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';

enum Status { Success, Fail, Loading }

class PostProviderInteg with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;
  List<String> userHomePostsString;
  String userId;
  User userLoggedIn;
  List<String> followingIds;
  User userFollowingInfo;
  var loggedUser;
  PostProviderInteg(
      {this.baseUrl,
      this.context,
      this.userHomePostsString,
      this.userId,
      this.userLoggedIn,
      this.followingIds,
      this.userFollowingInfo});
/*
  var _urlUserFollowingsInteg =
      Uri.parse(host + "/people/" + loggedInUser.userId + "/info");

  var _urlUserFollowingMock =
      Uri.parse("https://run.mocky.io/v3/bfbb0fd8-09dd-4970-8803-6bb62150a171");
  Future<void> getUserFollowing() async {
    /// get request
    var response = await http.get(_urlUserFollowingsInteg);
    if (response.statusCode == 200) {
      status = Status.Success;
      notifyListeners();
      var extractData = jsonDecode(response.body);
      List<dynamic> json = extractData["following"];
      print(json);

      if (json != null) {
        getUserPublicPhotos(json);
      }
    } else {
      /// If the server did not return a 200 CREATED response,
      /// then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to load user followings');
    }
    notifyListeners();
  }

//====================================================================================================
  var _urlUserPublicPhotosMock =
      Uri.parse("https://run.mocky.io/v3/bfbb0fd8-09dd-4970-8803-6bb62150a171");
  Future<void> getUserPublicPhotos(List<dynamic> jsonFollowingIds) async {
    /// get request
    /// getPublicPhotos
    // response = await http.get(_urlUserPublicPhotosMock);
    int jsonFollowingIdsSize = jsonFollowingIds.length;
    for (int i = 0; i < jsonFollowingIdsSize; i++) {
      var _urlUserPublicPhotosInteg =
          Uri.parse(host + "/people/" + jsonFollowingIds[i] + "/photos/public");
      //each follwing has his own list of public photos
      var response = await http.get(_urlUserPublicPhotosInteg);
      if (response.statusCode == 200) {
        status = Status.Success;
        notifyListeners();
        var extractData = jsonDecode(response.body);
        List<dynamic> jsonPhotosList = extractData;
        print(jsonPhotosList);
        if (jsonPhotosList != null) {
          String userFollowingId = jsonFollowingIds[i];
          getUserFollowingInfo(userFollowingId);
          //Loops on the list of public photos of each following
          for (int j = 0; j < jsonPhotosList.length; j++) {
            addUserHomePostsInteg(jsonPhotosList[i], userFollowingInfo);
          }
        }
      } else {
        /// If the server did not return a 200 CREATED response,
        /// then throw an exception.
        status = Status.Fail;
        throw Exception('Failed to followings');
      }
      notifyListeners();
    } //end looping on following list
  }

  Future<void> getUserFollowingInfo(String userFollowingId) async {
    /// get request
    //getInfo
    var _urlUserFollowingInfo =
        Uri.parse(host + "/people/" + userFollowingId + "/info");

    var response = await http.get(_urlUserFollowingInfo);
    if (response.statusCode == 200) {
      status = Status.Success;
      notifyListeners();
      //var extractData = jsonDecode(response.body);
      Map<String, dynamic> json = jsonDecode(response.body);
      print(json);
      //userFollowingInfo = createUserFollowing(json);
      userFollowingInfo = User.fromJson(jsonDecode(response.body));
    } else {
      /// If the server did not return a 200 CREATED response,
      /// then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to followings');
    }
    notifyListeners();
  }
*/

  var _urlUserHomePosts =
      Uri.parse("https://run.mocky.io/v3/65636216-3a63-45fa-9b4a-fc1c4f644ece");
  var _urlUserFollowingsInteg =
      Uri.parse(host + "/getHome/${loggedInUser.userId}");
  Future<void> getUserHomePosts() async {
    /// get request
    loggedUser = Provider.of<UserProvider>(context, listen: false);
    var response = await http.get(_urlUserFollowingsInteg);
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

    var _urlUserFollowingInfo =
        Uri.parse(host + "/people/" + userFollowingId + "/info");

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
