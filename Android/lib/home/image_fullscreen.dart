import 'package:flickr/models/global.dart';
import 'package:flickr/models/post.dart';
import 'package:flutter/material.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
import 'package:photo_view/photo_view.dart';

class ImageFullscreen extends StatelessWidget {
  String textTitle = "";
  NetworkImage imagePath = new NetworkImage('www.google.com');
  double _widthScreen = 0;
  double _heightScreen = 0;
  Post post;
  ImageFullscreen(this.imagePath, this.post);

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
              imageProvider: imagePath,
            ),
          ),
          Align(
              alignment: Alignment.topCenter,
              child: Container(
                constraints: BoxConstraints(maxWidth: _widthScreen),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
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
                      margin: EdgeInsets.only(top: 55, right: 50),
                      child: TextButton(
                        child: Text(
                          post.user.username,
                          style: appBarTitleStyle,
                        ),
                        onPressed: () {},
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.only(right: 20, top: 50, left: 10),
                      child: IconButton(
                          //padding: EdgeInsets.only(right: 20, top: 50, left: 10),
                          icon: Icon(Icons.close_rounded,
                              size: 35, color: Colors.white),
                          onPressed: () {}),
                    )
                  ],
                ),
              ))
        ],
      ),
      /*Container(
          //margin: EdgeInsets.only(bottom: 10),
          child: Column(children: <Widget>[
        //all containers of the home page will be inside this widget

        ContainerResponsive(
          //image Container
          constraints: BoxConstraints(
            maxHeight: _heightScreen,
            maxWidth: _widthScreen,
          ),

          decoration: BoxDecoration(
              // 'decoration:' doesn't allow writing 'color:' after or before it

              color: Colors.black,
              image: DecorationImage(
                image: imagePath,
                fit: BoxFit.fitWidth,
              )),
        ),
      ]))*/
    );
  }

  Widget drawImage(BuildContext context, NetworkImage image) {
    return Container(
        margin: EdgeInsets.only(bottom: 10),
        child: Column(children: <Widget>[
          //all containers of the home page will be inside this widget

          InkWell(
            child: ContainerResponsive(
              //image Container
              constraints: BoxConstraints(
                maxHeight: 282,
                maxWidth: _widthScreen,
              ),

              decoration: BoxDecoration(
                  // 'decoration:' doesn't allow writing 'color:' after or before it
                  border: Border.all(
                    color: Colors.white, // white as border color
                    width: 5,
                  ),
                  color: Colors.white,
                  image: DecorationImage(
                    image: imagePath,
                    fit: BoxFit.cover,
                  )),
            ),
            onTap: () {},
          ),
        ]));
  }
} //end class
