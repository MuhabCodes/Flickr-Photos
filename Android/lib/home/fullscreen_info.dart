///[ImageFullscreen] class which displays a given image with zoom in and out feature and
///like comment feature

import 'package:flickr/models/global.dart';
import 'package:flickr/models/photos.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/models/user.dart';
import 'package:flickr/profile/profile.dart';
import 'package:flutter/material.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
import 'package:photo_view/photo_view.dart';

import 'comments_fav_page.dart';
import 'comments_page.dart';

class InfoImageFullscreen extends StatefulWidget {
  Photo _myPhoto;
  double _widthScreen = 0;
  double _heightScreen = 0;
  Post _post;
  User _photoUser;
  InfoImageFullscreen(this._myPhoto, this._post, this._photoUser);
  @override
  InfoImageFullscreenState createState() =>
      InfoImageFullscreenState(this._myPhoto, this._post, this._photoUser);
}

class InfoImageFullscreenState extends State<InfoImageFullscreen> {
  //String textTitle = "";
  //NetworkImage imagePath = new NetworkImage('www.google.com');

  double _widthScreen = 0;
  double _heightScreen = 0;
  Post _post;
  Photo _myPhoto;
  User _photoUser;
  InfoImageFullscreenState(this._myPhoto, this._post, this._photoUser);

  void selectScreen(BuildContext ctx, NetworkImage imageRoll) {
    Navigator.of(ctx).push(MaterialPageRoute(builder: (_) {
      //if (n == 1) return ViewAllPhotos(imageRoll);
    }));
  }

  @override
  Widget build(BuildContext context) {
    _widthScreen = MediaQuery.of(context).size.width;
    _heightScreen = MediaQuery.of(context).size.height;
    return Scaffold(
      body: Container(),
    );
  }
} //end class
