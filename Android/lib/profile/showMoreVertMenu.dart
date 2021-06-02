import 'package:flickr/login/get_started.dart';
import 'package:flickr/navigations/about_button.dart';
import 'package:flickr/navigations/privacy_and_safety.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ShowMoreVertMenu extends StatefulWidget {
  @override
  _ShowMoreVertMenuState createState() => _ShowMoreVertMenuState();
}

class _ShowMoreVertMenuState extends State<ShowMoreVertMenu> {
  bool _notification = false;
  bool _useNativeCamera = false;
  _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  void switchNotification() {
    setState(() {
      _notification = !_notification;
    });
  }

  void switchNativeCamera() {
    setState(() {
      _useNativeCamera = !_useNativeCamera;
    });
  }

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    var height = size.height * 0.7;
    return Container(
      height: height,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          Container(
            height: height * 0.1,
            width: double.infinity,
            padding: EdgeInsets.only(left: 10, bottom: 10, top: 5),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                IconButton(
                    icon: Icon(
                      Icons.upgrade,
                      color: Colors.blue,
                    ),
                    onPressed: () {}),
                TextButton(
                  style: ButtonStyle(
                    alignment: Alignment.centerLeft,
                  ),
                  child: const Text(
                    'Join Pro',
                    style: TextStyle(color: Colors.blue, fontSize: 18),
                  ),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            ),
          ),
          Container(
            height: height * 0.1,
            width: double.infinity,
            padding: EdgeInsets.only(left: 20, bottom: 10, top: 5),
            child: TextButton(
              style: ButtonStyle(
                alignment: Alignment.centerLeft,
              ),
              child: const Text(
                'Auto-Uploadr',
                style: TextStyle(color: Colors.black, fontSize: 18),
              ),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ),
          Container(
            height: height * 0.1,
            padding: EdgeInsets.only(left: 20, bottom: 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                TextButton(
                  child: const Text(
                    'notifications',
                    style: TextStyle(color: Colors.black, fontSize: 18),
                  ),
                  onPressed: () => switchNotification(),
                ),
                Switch(
                  value: _notification,
                  onChanged: (_notification) {
                    switchNotification();
                  },
                )
              ],
            ),
          ),
          Container(
            height: height * 0.1,
            width: double.infinity,
            padding: EdgeInsets.only(left: 20, bottom: 10),
            child: TextButton(
              style: ButtonStyle(
                alignment: Alignment.centerLeft,
              ),
              child: const Text(
                'Privacy and Safety',
                style: TextStyle(color: Colors.black, fontSize: 18),
              ),
              onPressed: () {
                showModalBottomSheet(
                    isScrollControlled: true,
                    context: context,
                    builder: (BuildContext context) {
                      return Container(
                        height: MediaQuery.of(context).size.height * 0.95,
                        child: PrivacySafetyButton(),
                      );
                    });
              },
            ),
          ),
          Container(
            width: double.infinity,
            height: height * 0.1,
            padding: EdgeInsets.only(left: 20, bottom: 0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                TextButton(
                  child: const Text(
                    'Use Native Video Camera',
                    style: TextStyle(color: Colors.black, fontSize: 18),
                  ),
                  onPressed: () => switchNativeCamera(),
                ),
                Switch(
                    value: _useNativeCamera,
                    onChanged: (_useNativeCamera) {
                      switchNativeCamera();
                    })
              ],
            ),
          ),
          Padding(
            padding: EdgeInsets.all(20),
            child: Divider(
              height: height * 0.05,
              thickness: 2,
              color: Colors.grey[300],
            ),
          ),
          Container(
            height: height * 0.1,
            width: double.infinity,
            padding: EdgeInsets.only(left: 20, bottom: 10),
            child: TextButton(
              style: ButtonStyle(
                alignment: Alignment.centerLeft,
              ),
              child: const Text(
                'Feedback',
                style: TextStyle(color: Colors.black, fontSize: 18),
              ),
              onPressed: () => _launchURL("https://help.flickr.com/contact"),
            ),
          ),
          Container(
            height: height * 0.1,
            width: double.infinity,
            padding: EdgeInsets.only(left: 20, bottom: 10),
            child: TextButton(
              style: ButtonStyle(
                alignment: Alignment.centerLeft,
              ),
              child: const Text(
                'About',
                style: TextStyle(color: Colors.black, fontSize: 18),
              ),
              onPressed: () {
                showModalBottomSheet(
                    isScrollControlled: true,
                    context: context,
                    builder: (BuildContext context) {
                      return Container(
                        height: MediaQuery.of(context).size.height * 0.95,
                        child: AboutButton(),
                      );
                    });
              },
            ),
          ),
          Container(
            height: height * 0.1,
            width: double.infinity,
            padding: EdgeInsets.only(left: 20, bottom: 10),
            child: TextButton(
              style: ButtonStyle(
                alignment: Alignment.centerLeft,
              ),
              child: const Text(
                'Help',
                style: TextStyle(color: Colors.black, fontSize: 18),
              ),
              onPressed: () => _launchURL("https://help.flickr.com"),
            ),
          ),
          Padding(
            padding: EdgeInsets.only(top: 20, left: 20, right: 20, bottom: 5),
            child: Divider(
              height: height * 0.05,
              thickness: 2,
              color: Colors.grey[300],
            ),
          ),
          Container(
            height: height * 0.1,
            width: double.infinity,
            color: Colors.grey[900],
            padding: EdgeInsets.only(left: 20, bottom: 10),
            child: TextButton(
              style: ButtonStyle(
                alignment: Alignment.centerLeft,
              ),
              child: const Text(
                'Sign Out',
                style: TextStyle(color: Colors.white, fontSize: 18),
              ),
              onPressed: () {
                Navigator.of(context).pop();
                Navigator.of(context).pop();
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => GetStarted()),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
