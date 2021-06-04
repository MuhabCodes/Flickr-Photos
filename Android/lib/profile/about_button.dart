import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
// ignore: unused_import
import 'package:url_launcher/url_launcher.dart';

class AboutButton extends StatelessWidget {
  _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;
    return Scaffold(
        appBar: AppBar(
          automaticallyImplyLeading: false,
          backgroundColor: Color(0xff212124),
          title: Text("About"),
          actions: [
            IconButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                icon: Icon(Icons.close))
          ],
          toolbarHeight: 0.09 * _height,
        ),
        body: Column(
          children: [
            TextButton(
              onPressed: () =>
                  _launchURL("https://www.flickr.com/help/guidelines/"),
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.121),
                primary: Colors.transparent,
                side: BorderSide(
                  width: 0.5,
                  color: Colors.grey[300],
                ),
              ),
              child: Text(
                "Community Guidlines",
                style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            TextButton(
              onPressed: () => _launchURL("https://www.flickr.com/help/terms"),
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.121),
                primary: Colors.transparent,
                side: BorderSide(
                  width: 0.5,
                  color: Colors.grey[300],
                ),
              ),
              child: Text(
                "Terms of Service (Updated)",
                style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            TextButton(
              onPressed: () =>
                  _launchURL("https://www.flickr.com/help/privacy"),
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.121),
                primary: Colors.transparent,
                side: BorderSide(
                  width: 0.5,
                  color: Colors.grey[300],
                ),
              ),
              child: Text(
                "Privacy Policy (Updated)",
                style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            TextButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.121),
                primary: Colors.transparent,
                side: BorderSide(
                  width: 0.5,
                  color: Colors.grey[300],
                ),
              ),
              child: Text(
                "Credits",
                style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            TextButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.121),
                primary: Colors.transparent,
                side: BorderSide(
                  width: 0.5,
                  color: Colors.grey[300],
                ),
              ),
              child: Text(
                "Cover Photo",
                style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            TextButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.121),
                primary: Colors.transparent,
                side: BorderSide(
                  width: 0.5,
                  color: Colors.grey[300],
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Build version",
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 5),
                  Text(
                    "4.16.3 (40160030)",
                    style: TextStyle(
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
            ),
            TextButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.121),
                primary: Colors.transparent,
                side: BorderSide(
                  width: 0.5,
                  color: Colors.grey[300],
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Build ID",
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                    ),
                    textAlign: TextAlign.start,
                  ),
                  SizedBox(height: 5),
                  Text(
                    "40160030",
                    style: TextStyle(
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ));
  }
}
