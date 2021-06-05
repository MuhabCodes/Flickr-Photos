///[ImageFullscreen] class which displays a given image with zoom in and out feature and
///like comment feature

import 'package:flickr/models/global.dart';
import 'package:flickr/models/photos.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/profile/profile.dart';
import 'package:flutter/material.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
import 'package:photo_view/photo_view.dart';

import 'comments_fav_page.dart';
import 'comments_page.dart';

class ImageFullscreen extends StatefulWidget {
  Photo myPhoto;
  double _widthScreen = 0;
  double _heightScreen = 0;
  Post post;
  ImageFullscreen(this.myPhoto, this.post);
  @override
  ImageFullscreenState createState() =>
      ImageFullscreenState(this.myPhoto, this.post);
}

class ImageFullscreenState extends State<ImageFullscreen> {
  String textTitle = "";
  //NetworkImage imagePath = new NetworkImage('www.google.com');
  Photo myPhoto;
  double _widthScreen = 0;
  double _heightScreen = 0;
  Post post;
  ImageFullscreenState(this.myPhoto, this.post);

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
