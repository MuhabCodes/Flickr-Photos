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

class ShareLinkScreen extends StatefulWidget {
  Photo _myPhoto;

  Post _post;

  ShareLinkScreen(
    this._myPhoto,
    this._post,
  );
  @override
  ShareLinkScreenState createState() => ShareLinkScreenState(
        this._myPhoto,
        this._post,
      );
}

class ShareLinkScreenState extends State<ShareLinkScreen> {
  Post _post;
  Photo _myPhoto;

  ShareLinkScreenState(
    this._myPhoto,
    this._post,
  );

  void selectScreen(BuildContext ctx, NetworkImage imageRoll) {
    Navigator.of(ctx).push(MaterialPageRoute(builder: (_) {}));
  }

  @override
  Widget build(BuildContext context) {
    return SnackBar(
        content: Column(
      children: [
        Container(
          height: globalHeightScreen * 0.4,
        )
      ],
    ));
    /*Container(
      height: globalHeightScreen * 0.4,
      color: Colors.transparent,
      constraints: BoxConstraints(
        maxHeight: globalHeightScreen * 0.4,
      ),
      child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Container(
              height: globalHeightScreen * 0.4,
              width: double.infinity,
              padding: EdgeInsets.only(left: 10, bottom: 10, top: 5),
              color: Colors.blue,
            ),
          ]),
    );
  */
  }
} //end class
