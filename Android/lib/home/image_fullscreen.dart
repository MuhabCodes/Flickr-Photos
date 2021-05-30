import 'package:flickr/models/global.dart';
import 'package:flutter/material.dart';
import 'package:responsive_widgets/responsive_widgets.dart';

class ImageFullscreen extends StatelessWidget {
  String textTitle = "";
  NetworkImage imagePath = new NetworkImage('www.google.com');
  double _widthScreen = 0;
  double _heightScreen = 0;
  ImageFullscreen(this.imagePath);

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
      appBar: AppBar(
        backgroundColor: Colors.transparent,
      ),
      body: Container(
          //margin: EdgeInsets.only(bottom: 10),
          child: Column(children: <Widget>[
        //all containers of the home page will be inside this widget

        ContainerResponsive(
          //image Container
          constraints: BoxConstraints(
            maxHeight: _heightScreen * 0.85,
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
      ])),
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
