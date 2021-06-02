///[ViewAllPhotos] class which returns screen to view all photos in a post with have more than 1 photo
import 'package:flickr/home/image_fullscreen.dart';
import 'package:flickr/models/global.dart';
import 'package:flickr/models/photos.dart';
import 'package:flickr/models/post.dart';
import 'package:flutter/material.dart';
import 'package:responsive_widgets/responsive_widgets.dart';

class ViewAllPhotos extends StatelessWidget {
  ///[textTitle] is the sting displayed is AppBar ex: "Lara uploaded 2 photos"
  String textTitle = "";
  List<Photo> photo = [
    new Photo(
      imagePath: 'www.google.com',
    )
  ];
  double _widthScreen = 0;
  Post thePost;
  ViewAllPhotos(this.textTitle, this.photo, this.thePost);

  void selectScreen(BuildContext ctx, Photo imageRoll, Post post) {
    Navigator.of(ctx).push(MaterialPageRoute(builder: (_) {
      return ImageFullscreen(imageRoll, post);
    }));
  }

  @override
  Widget build(BuildContext context) {
    _widthScreen = MediaQuery.of(context).size.width;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.grey[800], //Color(0x262221),
        toolbarOpacity: 1,
        brightness: Brightness.dark,
        title: Text(
          textTitle,
          style: appBarTitleStyle,
          maxLines: 3,
        ),
      ),
      body: Container(
        child: ListView(
          children: <Widget>[
            Column(
              children: <Widget>[
                Divider(),
                Column(
                  children: getPosts(context),
                )
              ],
            )
          ],
        ),
      ),
    );
  }

  List<Widget> getPosts(BuildContext context) {
    List<Widget> imageRoll = [];
    int index = 0;
    for (Photo image in photo) {
      // we will loop on all posts created in global.dart and add them to our home page

      imageRoll.add(drawImage(context, image));
      index++;
    }
    // This line takes each image in the list and sends it to func Draw=>which displays it
    return imageRoll;
  }

  Widget drawImage(BuildContext context, Photo image) {
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
                    image: NetworkImage(image.imagePath),
                    fit: BoxFit.cover,
                  )),
            ),
            onTap: () {
              selectScreen(context, image, thePost);
            },
          ),
        ]));
  }
} //end class
