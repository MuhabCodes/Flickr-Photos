///[ImageFullscreen] class which displays a given image with zoom in and ou feature and
///like comment feature
import 'package:flickr/models/global.dart';
import 'package:flickr/models/photos.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/profile/profile.dart';
import 'package:flutter/material.dart';
import 'package:photo_view/photo_view.dart';
import 'package:share_plus/share_plus.dart';

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
  //NetworkImage imageUrl = new NetworkImage('www.google.com');
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
    bool isClicked = true;
    _widthScreen = MediaQuery.of(context).size.width;
    _heightScreen = MediaQuery.of(context).size.height;
    return Scaffold(
        body: Stack(children: [
      Center(
        widthFactor: _widthScreen,
        child: PhotoView(
          minScale: PhotoViewComputedScale
              .contained, //After zooming out and releasing your finger it returns photo to it's actual size
          imageProvider: NetworkImage(myPhoto.imageUrl),
        ),
      ),
      Align(
        ///to align widgets above each other
        alignment: Alignment.topLeft,
        child: Container(
          //width: _widthScreen,
          constraints: BoxConstraints(
            maxHeight: _heightScreen, /* maxWidth: _widthScreen * 0.2*/
          ),

          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  //AppBar
                  Container(
                    margin: EdgeInsets.only(top: 30),
                    child: Row(
                      children: [
                        Row(
                          children: [
                            Column(
                              children: [
                                Container(
                                  //this container is related to the circle avatar only (tiny box contains an avatar)
                                  //color: Colors.white,
                                  margin: EdgeInsets.only(
                                      right: 10,
                                      /*top: 65,*/
                                      left:
                                          30), //user name padding away from pp
                                  child: CircleAvatar(
                                    backgroundImage:
                                        NetworkImage(post.user.userAvatar),
                                  ),
                                ),
                              ],
                            ),
                            Column(
                              children: [
                                Container(
                                  constraints: BoxConstraints(
                                      maxWidth: _widthScreen * 0.26),
                                  margin:
                                      EdgeInsets.only(top: 5 /*70*/, right: 50),
                                  child: TextButton(
                                    child: Text(
                                      post.user.username,
                                      style: appBarTitleStyle,
                                      overflow: TextOverflow.ellipsis,
                                    ),
                                    onPressed: () {
                                      /*Navigator.of(context).push(
                                                MaterialPageRoute(builder: (_) {
                                              return Profile();
                                            }));
                                          */
                                    },
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                        SizedBox(width: 50),
                        Column(
                          children: [
                            Container(
                              margin: EdgeInsets.only(
                                  right: 5, /*top: 60,*/ left: 5),
                              child: IconButton(
                                  //padding: EdgeInsets.only(right: 20, top: 50, left: 10),
                                  icon: Icon(Icons.close_rounded,
                                      size: 30, color: Colors.white),
                                  onPressed: () {
                                    Navigator.pop(context);
                                  }),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              Container(
                //margin: EdgeInsets.only(right: 5, top: 60, left: 5),
                child: IconButton(
                    //padding: EdgeInsets.only(right: 20, top: 50, left: 10),
                    icon: Icon(Icons.close_rounded,
                        size: 30, color: Colors.white),
                    onPressed: () {
                      Navigator.pop(context);
                    }),
              )
            ],
          ),
        ),
      )
    ]));
  }
} //end class
