///[ImageFullscreen] class which displays a given image with zoom in and ou feature and
///like comment feature
import 'package:flickr/models/global.dart';
import 'package:flickr/models/photos.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/profile/profile.dart';
import 'package:flutter/material.dart';
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
        appBar: isClicked
            ? AppBar(
                backgroundColor: Colors.black,
                automaticallyImplyLeading: false,
                title: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Container(
                          //this container is related to the circle avatar only (tiny box contains an avatar)
                          //user name padding away from pp

                          child: CircleAvatar(
                            backgroundImage: NetworkImage(post.user.userAvatar),
                          ),
                        ),
                        Container(
                          child: TextButton(
                            child: Text(
                              post.user.username,
                              style: appBarTitleStyle,
                            ),
                            onPressed: () {
                              Navigator.of(context)
                                  .push(MaterialPageRoute(builder: (_) {
                                return Profile();
                              }));
                            },
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
              )
            : null,
        body: Container(
          decoration: BoxDecoration(color: Colors.black),
          child: InkWell(
              onTap: () {
                setState(() {
                  isClicked = !isClicked;
                });
              },
              child: Align(
                  alignment: Alignment.center,
                  child: Image.network(myPhoto.imageUrl))),
        ),
        bottomSheet: Container(
            height: _heightScreen * 0.15,
            color: Colors.black,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Container(
                  padding: EdgeInsets.only(
                    left: 20,
                    bottom: 10,
                  ),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      (post.title != null) ? post.title : "MyTitle",
                      style: postTitleStyle,
                    ),
                  ),
                ),
                Divider(
                  height: 10,
                  color: Colors.white,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        IconButton(
                          icon: post.isLiked
                              ? Icon(Icons.star)
                              : Icon(Icons.star_border),
                          color: Colors.grey,
                          iconSize: 35,
                          onPressed: () {
                            addLikers(post);

                            setState(() {});
                          },
                        ),
                        IconButton(
                            padding: EdgeInsets.only(top: 8, left: 15),
                            icon: Icon(Icons.mode_comment_outlined),
                            color: Colors.grey,
                            iconSize: 30,
                            onPressed: () {
                              Navigator.of(context)
                                  .push(MaterialPageRoute(builder: (_) {
                                return CommentsFavs(post, 1, false, 2);
                              }));
                              setState(() {});
                            }),
                        IconButton(
                            padding: EdgeInsets.only(top: 8, left: 25),
                            icon: Icon(Icons.share_outlined),
                            color: Colors.grey,
                            iconSize: 30,
                            onPressed: () {
                              setState(() {
                                Share.share(myPhoto.imageUrl);
                              });
                            }),
                        IconButton(
                            padding:
                                EdgeInsets.only(top: 9, left: 25, right: 20),
                            icon: Icon(Icons.info_outline),
                            color: Colors.grey,
                            iconSize: 32,
                            onPressed: () {
                              setState(() {});
                            }),
                      ],
                    ),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Text(
                          post.likes.length.toString() + (" faves"),
                          style: TextStyle(color: Colors.white, fontSize: 14),
                          textAlign: TextAlign.end,
                        ),
                        Text(
                          post.comments.length.toString() + (" comments"),
                          style: TextStyle(color: Colors.white, fontSize: 14),
                          textAlign: TextAlign.end,
                        )
                      ],
                    )
                  ],
                ),
              ],
            )));
  }
} //end class
