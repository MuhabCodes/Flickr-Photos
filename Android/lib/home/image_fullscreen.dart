import 'package:flickr/models/global.dart';
import 'package:flickr/models/photos.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/profile/profile.dart';
import 'package:flutter/material.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
import 'package:photo_view/photo_view.dart';

class ImageFullscreen extends StatefulWidget {
  Photo myPhoto;
  double _widthScreen = 0;
  double _heightScreen = 0;
  Post post;
  ImageFullscreen(this.myPhoto, this.post);
  @override
  _ImageFullscreenState createState() =>
      _ImageFullscreenState(this.myPhoto, this.post);
}

class _ImageFullscreenState extends State<ImageFullscreen> {
  String textTitle = "";
  //NetworkImage imagePath = new NetworkImage('www.google.com');
  Photo myPhoto;
  double _widthScreen = 0;
  double _heightScreen = 0;
  Post post;
  _ImageFullscreenState(this.myPhoto, this.post);

  void selectScreen(BuildContext ctx, NetworkImage imageRoll) {
    Navigator.of(ctx).push(MaterialPageRoute(builder: (_) {
      //if (n == 1) return ViewAllPhotos(imageRoll);
    }));
  }

  void addLikers(Post post) {
    post.isLiked = post.isLiked ? false : true;
    if (!post.isLiked && post.likes != null) {
      post.likes.remove(loggedInUser);
    } else {
      post.likes.add(loggedInUser);
    }
  }

  @override
  Widget build(BuildContext context) {
    _widthScreen = MediaQuery.of(context).size.width;
    _heightScreen = MediaQuery.of(context).size.height;
    return Scaffold(
      /*appBar: AppBar(
        backgroundColor: Colors.transparent,
      ),*/
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
              alignment: Alignment.topCenter,
              child: Container(
                constraints: BoxConstraints(maxWidth: _widthScreen),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Container(
                          //this container is related to the circle avatar only (tiny box contains an avatar)
                          //color: Colors.white,
                          margin: EdgeInsets.only(
                              right: 10,
                              top: 65,
                              left: 30), //user name padding away from pp
                          child: CircleAvatar(
                            backgroundImage: post.user.profilePicture,
                          ),
                        ),
                        Container(
                          margin: EdgeInsets.only(top: 70, right: 50),
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
                        Container(
                          margin: EdgeInsets.only(right: 20, top: 50, left: 10),
                          child: IconButton(
                              //padding: EdgeInsets.only(right: 20, top: 50, left: 10),
                              icon: Icon(Icons.close_rounded,
                                  size: 35, color: Colors.white),
                              onPressed: () {
                                Navigator.pop(context);
                              }),
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
                          margin: EdgeInsets.only(bottom: 10),
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

                                    setState(() {
                                      /* post.isLiked =
                                          post.isLiked ? false : true;
                                      if (!post.isLiked && post.likes != null) {
                                        post.likes.remove(loggedInUser);
                                      } else {
                                        post.likes.add(loggedInUser);
                                        print('in add');
                                      }*/
                                    });
                                  },
                                ),
                              ],
                            ),
                            IconButton(
                                padding: EdgeInsets.only(top: 8, left: 25),
                                icon: Icon(Icons.mode_comment_outlined),
                                color: Colors.grey,
                                iconSize: 30,
                                onPressed: () {
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
                                      post.likes.length.toString() +
                                          " Faves\n" +
                                          post.comments.length.toString() +
                                          " Comments",
                                      style: appBarTitleStyle,
                                      textAlign: TextAlign.right)
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
