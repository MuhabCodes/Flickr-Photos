import 'package:flickr/login/sign_in.dart';
import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class GetStarted extends StatelessWidget {
  static final List<String> _imageList = [
    'lib/assets/columnone.jpg',
    'lib/assets/columntwo.jpg',
    'lib/assets/columnthree.jpg',
    'lib/assets/columnfour.jpg',
  ]; //list of panorama image blocks   (private for this class)
  final List<String> _qoutesHeader = [
    'Powerful',
    'Keep your memories safe',
    'Organisation simplified',
    'Sharing made easy',
  ]; //list of qoutes headers
  final List<String> _qoutes = [
    'Save all your photos and videos in one place.',
    'Your uploaded photos stay private until you choose to share them.',
    'Search, edit and organise in seconds.',
    'Share with friends, family and the world',
  ]; //list of qoutes
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Swiper(
            loop: false,
            pagination: SwiperPagination(
                margin: EdgeInsets.only(
                    bottom: MediaQuery.of(context).size.height * 0.23),
                builder: new DotSwiperPaginationBuilder(
                  space: 5,
                  size: 6,
                  activeSize: 6,
                  activeColor: Colors.white,
                  color: Colors.grey,
                )), //locate the pagnition and designed as dots
            itemCount: _imageList.length,
            itemBuilder: (context, index) {
              return Stack(
                children: [
                  Image.asset(
                    _imageList[index],
                    fit: BoxFit.cover,
                    width: double.infinity,
                  ),
                  Container(
                    padding: EdgeInsets.symmetric(horizontal: 18),
                    alignment: Alignment.center,
                    margin: EdgeInsets.only(
                      top: MediaQuery.of(context).size.height * 0.5,
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
                        SizedBox(height: 2),
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
                EdgeInsets.only(top: MediaQuery.of(context).size.height * 0.3),
            child: Text(
              "flickr",
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontSize: 40,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Container(
            alignment: Alignment.bottomCenter,
            padding: EdgeInsets.only(
                bottom: MediaQuery.of(context).size.height * 0.1),
            child: ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => SignIn()),
                  );
                },
                child: const Text(
                  'Get started',
                  style: TextStyle(fontSize: 12),
                ),
                style: ElevatedButton.styleFrom(
                    minimumSize: Size(MediaQuery.of(context).size.width / 2,
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
            margin: EdgeInsets.all(10),
            child: Row(
              children: [
                Icon(
                  FontAwesomeIcons.camera,
                  size: 10,
                  color: Colors.white,
                ),
                SizedBox(
                  width: 2,
                ),
                Text(
                  "Ben flasher",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 10,
                    fontWeight: FontWeight.bold,
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
