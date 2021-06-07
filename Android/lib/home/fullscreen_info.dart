///[InfoImageFullscreen] class which displays a given image with zoom in and out feature and
///like comment feature
import 'package:flickr/models/global.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';

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
      backgroundColor: Colors.grey[850],
      body: ListView(
        children: [
          Container(
            margin: EdgeInsets.all(30),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _myPhoto.title == null
                    ? Container()
                    : Text(
                        "TITLE",
                        style: textStyleInfoTitle,
                      ),
                _myPhoto.title == null
                    ? Container()
                    : Container(
                        child: Text(_myPhoto.title, style: textStyleInfo),
                      ),
                //==============================================================
                SizedBox(
                  height: _myPhoto.description == null ? 0 : 30,
                ),
                _myPhoto.description == null
                    ? Container()
                    : Text(
                        "DESCRIPTION",
                        style: textStyleInfoTitle,
                      ),
                _myPhoto.description == null
                    ? Container()
                    : Container(
                        child: Text(_myPhoto.description, style: textStyleInfo),
                      ),
                //==============================================================
                /*SizedBox(
                  height: _photoUser.website == null ? 0 : 30,
                ),
                Text(
                  _photoUser.website == null ? " " : "My website",
                  style: textStyle,
                ),
                _photoUser.website == null
                    ? Container()
                    : Container(
                        child: Text(_photoUser.website, style: textStyleInfo),
                      ),*/
                //=============================================================
                SizedBox(
                  height: _post.postUsername == null ? 0 : 30,
                ),
                _post.postUsername == null
                    ? Container()
                    : Text(
                        "TAKEN BY",
                        style: textStyleInfoTitle,
                      ),
                _post.postUsername == null
                    ? Container()
                    : Container(
                        child: Text(_post.postUsername, style: textStyleInfo),
                      ),
                //=============================================================
                SizedBox(
                  height: _myPhoto.captureDate == null ? 0 : 30,
                ),
                _myPhoto.captureDate == null
                    ? Container()
                    : Text(
                        "DATE TAKEN",
                        style: textStyleInfoTitle,
                      ),
                _myPhoto.captureDate == null
                    ? Container()
                    : Container(
                        child: Text(_myPhoto.captureDate.toString(),
                            style: textStyleInfo),
                      ),
                //=============================================================
                //Tags
                SizedBox(
                  height: _myPhoto.tags == null ? 0 : 30,
                ),
                _myPhoto.tags == null
                    ? Container()
                    : Text("TAGS", style: textStyleInfoTitle),
                SizedBox(
                  height: _myPhoto.tags == null ? 0 : 5,
                ),
                _myPhoto.tags == null
                    ? Container()
                    : Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            width: _widthScreen * 0.2,
                            child: Column(
                              children: [
                                Container(
                                  height: 20,
                                  decoration: BoxDecoration(
                                      border: Border.all(
                                          width: 2, color: Colors.white),
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(4))),
                                  child: Text(
                                    " " + _myPhoto.tags[0] + "  ",
                                    style: textStyleTags,
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.center,
                                  ),
                                )
                              ],
                            ),
                          ),
                          _myPhoto.tags.length < 2
                              ? Container()
                              : Container(
                                  width: _widthScreen * 0.2,
                                  child: Column(
                                    children: [
                                      Container(
                                        height: 20,
                                        decoration: BoxDecoration(
                                            border: Border.all(
                                                width: 2, color: Colors.white),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(4))),
                                        child: Text(
                                          " " + _myPhoto.tags[1] + " ",
                                          style: textStyleTags,
                                          overflow: TextOverflow.ellipsis,
                                          textAlign: TextAlign.center,
                                        ),
                                      )
                                    ],
                                  ),
                                ),
                          _myPhoto.tags.length < 3
                              ? Container()
                              : Container(
                                  width: _widthScreen * 0.2,
                                  child: Column(
                                    children: [
                                      Container(
                                        height: 20,
                                        decoration: BoxDecoration(
                                            border: Border.all(
                                                width: 2, color: Colors.white),
                                            borderRadius: BorderRadius.all(
                                                Radius.circular(4))),
                                        child: Text(
                                          " " + _myPhoto.tags[2] + " ",
                                          style: textStyleTags,
                                          overflow: TextOverflow.ellipsis,
                                          textAlign: TextAlign.center,
                                        ),
                                      )
                                    ],
                                  ),
                                ),
                        ],
                      ),

                //=============================================================
                SizedBox(
                  height: 30,
                ),
                Text(
                  "LICENSE",
                  style: textStyleInfoTitle,
                ),
                Container(
                  child: Row(
                    children: [
                      Icon(
                        Icons.copyright_sharp,
                        color: Colors.white,
                        size: 15,
                      ),
                      Text(" All Rights Reserved", style: textStyleInfo),
                    ],
                  ),
                ),
                //==============================================================
                SizedBox(
                  height: 30,
                ),
                Text(
                  "MORE",
                  style: textStyleInfoTitle,
                ),
                Container(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Icon(
                                Icons.lock_open,
                                color: Colors.white,
                                size: 20,
                              ),
                              Text(" Public\n", style: textStyleInfo),
                            ],
                          ),
                          Row(
                            children: [
                              Icon(
                                Icons.check_circle_outline_outlined,
                                color: Colors.white,
                                size: 17,
                              ),
                              Text(" Safe", style: textStyleInfo),
                            ],
                          ),
                        ],
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Icon(
                                Icons.visibility,
                                color: Colors.white,
                                size: 20,
                              ),
                              Text(
                                  _myPhoto.views == null ? "0" : _myPhoto.views,
                                  style: textStyleInfo),
                              Text("\n"),
                            ],
                          ),
                          Row(
                            children: [
                              Icon(
                                Icons.photo_size_select_actual_outlined,
                                color: Colors.white,
                                size: 20,
                              ),
                              Text(" Photo", style: textStyleInfo),
                            ],
                          ),
                        ],
                      ),
                      SizedBox(width: 0),
                    ],
                  ),
                ),
                //===============================================================
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(
                      height: 30,
                    ),
                    Text(
                      "REPORT ABUSE",
                      style: textStyleInfoTitle,
                    ),
                    Text("Flag this photo", style: flagThisPhoto),
                  ],
                ),
              ],
            ),
          ), //big column
        ],
      ),
    );
  }
} //end class
