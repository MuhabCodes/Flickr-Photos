import 'package:flickr/home/comments_fav_page.dart';

///[ImageFullscreen] class which displays a given image with zoom in and ou feature and
///like comment feature

import 'package:flickr/models/global.dart';
import 'package:flickr/models/photos.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/profile/profile.dart';
import 'package:flickr/providers/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:share_plus/share_plus.dart';

class FullscreenImage extends StatefulWidget {
  Photo myPhoto;
  double _widthScreen = 0;
  double _heightScreen = 0;
  FullscreenImage(this.myPhoto);
  @override
  ImageFullscreenState createState() => ImageFullscreenState(this.myPhoto);
}

class ImageFullscreenState extends State<FullscreenImage> {
  String textTitle = "";
  //NetworkImage imageUrl = new NetworkImage('www.google.com');
  Photo myPhoto;
  double _widthScreen = 0;
  double _heightScreen = 0;

  ImageFullscreenState(this.myPhoto);

  void selectScreen(BuildContext ctx, NetworkImage imageRoll) {
    Navigator.of(ctx).push(MaterialPageRoute(builder: (_) {
      //if (n == 1) return ViewAllPhotos(imageRoll);
    }));
  }

  @override
  Widget build(BuildContext context) {
    var userProvider = Provider.of<UserProvider>(context, listen: true);
    Post post = new Post(
        user: userProvider.user,
        description: myPhoto.description,
        title: myPhoto.title);
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
                              backgroundImage: NetworkImage(
                            userProvider.user.userAvatar,
                          )),
                        ),
                        Container(
                          child: TextButton(
                            child: Text(
                              userProvider.user.firstName,
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
                      (myPhoto.title != null) ? myPhoto.title : "",
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
                          icon: Icon(Icons.star_border),
                          color: Colors.grey,
                          iconSize: 35,
                          onPressed: () {},
                        ),
                        IconButton(
                            padding: EdgeInsets.only(top: 8, left: 15),
                            icon: Icon(Icons.mode_comment_outlined),
                            color: Colors.grey,
                            iconSize: 30,
                            onPressed: () {
                              // Navigator.of(context)
                              //     .push(MaterialPageRoute(builder: (_) {
                              //   return CommentsFavs(post, 1, false, 2);
                              // }));
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
                        Align(
                          alignment: Alignment.centerRight,
                          child: Text(
                            myPhoto.favs.toString() + (" faves"),
                            style: TextStyle(color: Colors.white, fontSize: 14),
                          ),
                        ),
                        Align(
                            alignment: Alignment.centerRight,
                            child: Text(
                              myPhoto.comments.toString() + (" comments"),
                              style:
                                  TextStyle(color: Colors.white, fontSize: 14),
                              textAlign: TextAlign.end,
                            ))
                      ],
                    )
                  ],
                ),
              ],
            )));
  }
} //end class
