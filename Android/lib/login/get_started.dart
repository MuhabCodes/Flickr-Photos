import 'dart:async';

import 'package:flickr/login/sign_in.dart';
import 'package:flickr/login/splash_screen.dart';
import 'package:flickr/providers/auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';

class GetStarted extends StatefulWidget {
  static final List<String> _imageList = [
    'lib/assets/columnone.jpg',
    'lib/assets/columntwo.jpg',
    'lib/assets/columnthree.jpg',
    'lib/assets/columnfour.jpg',
  ];
  @override
  State<GetStarted> createState() => _GetStartedState();
}

class _GetStartedState extends State<GetStarted> with WidgetsBindingObserver {
  final List<String> _qoutesHeader = [
    'Powerful',
    'Keep your memories safe',
    'Organisation simplified',
    'Sharing made easy',
  ];
  final List<String> _qoutes = [
    'Save all your photos and videos in one place.',
    'Your uploaded photos stay private until you choose to share them.',
    'Search, edit and organise in seconds.',
    'Share with friends, family and the world',
  ];
  var authentication;

  Future<void> _getStartedSubmit() async {
    final _auth = Provider.of<Authentication>(context, listen: false);
    try {
      await _auth.getStarted();
    } catch (error) {
      const errorMessage =
          'Could not authenticate you. Please try again later.';
      print(errorMessage);
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text('No Internet Connection')));
      return;
    }
    if (_auth.status == Status.Success) {
      Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) => LoadingScreen(
                  nextScreen: SignIn(),
                )),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    authentication = Provider.of<Authentication>(context, listen: true);
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;
    return Scaffold(
      body: Stack(
        children: [
          Swiper(
            loop: false,
            pagination: SwiperPagination(
                margin: EdgeInsets.only(bottom: _height * 0.23),
                builder: new DotSwiperPaginationBuilder(
                  space: _width * 0.025,
                  size: _width * 0.025,
                  activeSize: _width * 0.025,
                  activeColor: Colors.white,
                  color: Colors.grey,
                )), //locate the pagnition and designed as dots
            itemCount: GetStarted._imageList.length,
            itemBuilder: (context, index) {
              return Stack(
                children: [
                  Image.asset(
                    GetStarted._imageList[index],
                    fit: BoxFit.cover,
                    width: double.infinity,
                  ),
                  Container(
                    padding: EdgeInsets.symmetric(horizontal: 18),
                    alignment: Alignment.center,
                    margin: EdgeInsets.only(
                      top: _height * 0.55,
                    ),
                    child: Column(
                      children: [
                        Flexible(
                          child: Text(
                            "${_qoutesHeader[index]}",
                            textAlign: TextAlign.center,
                            style: TextStyle(
                                fontSize: 17,
                                color: Colors.white,
                                fontWeight: FontWeight.bold),
                          ),
                        ),
                        SizedBox(height: _height * 0.01),
                        Flexible(
                          child: Container(
                            child: Text("${_qoutes[index]}",
                                textAlign: TextAlign.center,
                                maxLines: 4,
                                style: TextStyle(
                                  fontSize: 15,
                                  color: Colors.white,
                                )),
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              );
            },
          ),
          Container(
            alignment: Alignment.topCenter,
            padding:
                EdgeInsets.only(top: MediaQuery.of(context).size.height * 0.25),
            child: Text(
              "flickr",
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontSize: 65,
                fontWeight: FontWeight.bold,
                fontFamily: "FreeSet",
              ),
            ),
          ),
          Container(
            alignment: Alignment.bottomCenter,
            padding: EdgeInsets.only(
                bottom: MediaQuery.of(context).size.height * 0.1),
            child: ElevatedButton(
                onPressed: () {
                  _getStartedSubmit();
                },
                child: const Text(
                  'Get started',
                  style: TextStyle(fontSize: 12),
                ),
                style: ElevatedButton.styleFrom(
                    minimumSize: Size(MediaQuery.of(context).size.width / 1.3,
                        MediaQuery.of(context).size.height / 10),
                    primary: Colors.transparent,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(0.0),
                      side: BorderSide(
                        color: Colors.white,
                      ),
                    ))),
          ),
          Container(
            alignment: Alignment.bottomLeft,
            margin:
                EdgeInsets.only(right: _width * 0.05, bottom: _height * 0.04),
            child: Row(
              children: [
                Icon(
                  FontAwesomeIcons.camera,
                  size: 14,
                  color: Colors.white,
                ),
                SizedBox(
                  width: _width * 0.02,
                ),
                Text(
                  "Ben flasher",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 14,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
