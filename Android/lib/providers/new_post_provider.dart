import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:ui' as ui;
import 'package:flickr/models/tag.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../models/user.dart';

class NewPost {
  String title;
  String description;
  var passedFile;
  String uploadDate;
  String userId;

  List<String> stringTags;
  NewPost(
      {this.title,
      this.description,
      this.passedFile,
      this.stringTags,
      this.uploadDate,
      this.userId});
}

enum Status { Success, Fail, Loading }

class NewPostProvider with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;
  NewPost newPost;

  NewPostProvider({this.baseUrl, this.context, this.newPost});
  String uploadDate;
  List<Tag> tagsList = [];

  String privacy = "Public";

  File image;
  var _imageAsBytes;
  String imageBase64;
  int imageWidth;
  int imageHeight;
  var _url = Uri.parse("https://api.flick.photos/photos/64");

  void setPhotoParameter() async {
    _imageAsBytes = newPost.passedFile.readAsBytesSync();
    imageBase64 = base64Encode(_imageAsBytes);

    final Image image = Image(image: AssetImage(newPost.passedFile));
    Completer<ui.Image> completer = new Completer<ui.Image>();
    image.image
        .resolve(new ImageConfiguration())
        .addListener(new ImageStreamListener((ImageInfo image, bool _) {
      completer.complete(image.image);
    }));
    ui.Image info = await completer.future;
    imageWidth = info.width;
    imageHeight = info.height;
  }

  Future<User> createNewPost() async {
    setPhotoParameter();

    status = Status.Loading;
    final response = await http.post(
      _url,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, dynamic>{
        "authorId": newPost.userId,
        "title": newPost.title,
        "description": newPost.description,
        "tags": newPost.stringTags,
        "isPublic": privacy,
        "photo": "data:image/jpeg;base64," + imageBase64,
        "uploadDate": newPost.uploadDate,
        "secret": "secret",
        "height": 1920,
        "width": 2000,
      }),
    );

    if (response.statusCode == 201) {
      print(response.body);
      status = Status.Success;
      notifyListeners();

      return User.fromJson(jsonDecode(response.body));
    } else {
      status = Status.Fail;
      throw Exception('Failed to load album');
    }
  }

  void setPrivacy(String input) {
    privacy = input;
    notifyListeners();
  }
}
