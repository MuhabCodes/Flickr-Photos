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
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
            height: globalHeightScreen * 0.4,
            child: IconButton(
                icon: Icon(Icons.copy_rounded, size: 55, color: Colors.black),
                onPressed: () {})),
        /*Text(
          "Copy Link",
          style: TextStyle(
            color: Colors.black,
          ),
        )*/
      ],
    );
  }
} //end class
