///[ImageFullscreen] class which displays a given image with zoom in and ou feature and
///like comment feature
import 'package:flickr/models/global.dart';
import 'package:flickr/models/photos.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/profile/profile.dart';
import 'package:flutter/material.dart';

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
                            backgroundImage: post.user.profilePicture,
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
                              setState(() {});
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
                        ),
                        Text(
                          post.comments.length.toString() + (" comments"),
                          style: TextStyle(color: Colors.white, fontSize: 14),
                        )
                      ],
                    )
                  ],
                ),
              ],
            )));
  }
} //end class

/*
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
      body: Stack(
        children: [
          Center(
            widthFactor: _widthScreen,
            child: PhotoView(
              minScale: PhotoViewComputedScale
                  .contained, //After zooming out and releasing your finger it returns photo to it's actual size
              imageProvider: NetworkImage(myPhoto.imagePath),
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
                  // crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Column(
                      children: [
                        Row(
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
                                          top: 65,
                                          left:
                                              30), //user name padding away from pp
                                      child: CircleAvatar(
                                        backgroundImage:
                                            post.user.profilePicture,
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
                                          EdgeInsets.only(top: 70, right: 50),
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
                                      right: 5, top: 60, left: 5),
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
                      ],
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        ContainerResponsive(
                          //My Title container
                          widthResponsive: true,
                          heightResponsive: true,
                          margin: EdgeInsets.only(left: 20, bottom: 10),
                          child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  (post.title != null) ? post.title : "MyTitle",
                                  style: postTitleStyle,
                                ),
                              ]),
                        ),
                        Container(
                          //Draw horizontal line
                          margin: EdgeInsets.only(bottom: 5),
                          constraints: BoxConstraints.expand(
                              height: 20, width: _widthScreen),
                          decoration: BoxDecoration(
                            // 'decoration:' doesn't allow writing 'color:' after or before it
                            border: Border.all(
                              color:
                                  Colors.transparent, // white as border color
                              width: 0,
                            ),
                            color: Colors.transparent,
                          ),
                          //color: Colors.white,
                          child: Row(
                            children: <Widget>[
                              Padding(
                                padding: EdgeInsets.symmetric(horizontal: 10.0),
                                child: Container(
                                  height: 2.2,
                                  width: _widthScreen - 21, //340.0,
                                  color: Colors.grey,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Row(
                          children: [
                            Stack(
                              alignment: Alignment(0, 0),
                              children: <Widget>[
                                Icon(
                                  Icons.star_border,
                                  size: 35,
                                  color: post.isLiked
                                      ? Colors.transparent
                                      : Colors.grey,
                                ),
                                IconButton(
                                  icon: Icon(Icons.star),
                                  color: post.isLiked
                                      ? Colors.white
                                      : Colors.transparent,
                                  iconSize: 35,
                                  onPressed: () {
                                    addLikers(post);

                                    setState(() {});
                                  },
                                ),
                              ],
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
                                  setState(() {});
                                }),
                            IconButton(
                                padding: EdgeInsets.only(
                                    top: 9, left: 25, right: 20),
                                icon: Icon(Icons.info_outline),
                                color: Colors.grey,
                                iconSize: 32,
                                onPressed: () {
                                  setState(() {});
                                }),
                            Column(
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: [
                                  Text(
                                    post.likes == null
                                        ? "0 Faves"
                                        : (post.likes.length.toString() +
                                            " Faves"),
                                    style: appBarTitleStyle,
                                    textAlign: TextAlign.right,
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                  Text(
                                    post.comments == null
                                        ? "0 Comments"
                                        : (post.comments.length.toString() +
                                            " Comments"),
                                    style: appBarTitleStyle,
                                    textAlign: TextAlign.right,
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                ]),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              )),
        ],
      ),
    );
  }
} //end class

*/
