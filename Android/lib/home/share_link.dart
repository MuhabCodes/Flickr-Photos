///[ImageFullscreen] class which displays a given image with zoom in and out feature and
///like comment feature
import 'package:flickr/models/global.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';

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

  @override
  Widget build(BuildContext context) {
    return SnackBar(
        content: Column(
      children: [
        Container(
            height: globalHeightScreen * 0.4,
            child: IconButton(
                icon: Icon(
                  Icons.share_outlined,
                  size: 30,
                  color: Colors.grey,
                ),
                onPressed: () {}))
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
