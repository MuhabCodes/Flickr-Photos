import 'dart:async';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
import 'package:url_launcher/url_launcher.dart';

class SendEmail extends StatefulWidget {
  final String text;
  SendEmail({Key key, @required this.text}) : super(key: key);

  @override
  _SendEmailState createState() => _SendEmailState();
}

class _SendEmailState extends State<SendEmail> {
  bool _changeButton = true; //bool for button animation

  _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  } //launcher to go to certain site

  void _switchButton() {
    setState(() {
      _changeButton = !_changeButton;
    });
    Timer(Duration(seconds: 5), () {
      setState(() {
        _changeButton = !_changeButton;
      });
    }); //pause for 5 seconds
  } //button resend again animation

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: new NestedScrollView(
        headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
          return <Widget>[
            new SliverAppBar(
              centerTitle: false,
              leading: IconButton(
                onPressed: null,
                icon: Image.asset(
                  "lib/assets/flickr.png",
                  height: 20,
                  width: 35,
                ),
              ),
              backgroundColor: Colors.black87,
              automaticallyImplyLeading: true,
              titleSpacing: -12,
              title: Text(
                'flickr',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            )
          ];
        },
        body: ContainerResponsive(
          padding: EdgeInsets.symmetric(horizontal: 20),
          child: SafeArea(
            child: ListView(
              padding: EdgeInsets.symmetric(
                horizontal: 18,
              ),
              children: <Widget>[
                Column(
                  children: <Widget>[
                    SizedBox(
                      height: 20,
                    ),
                    Icon(FontAwesomeIcons.envelope, color: Colors.black54),
                    SizedBox(
                      height: 10,
                    ),
                    Text(
                      'Check your inbox we sent a verification link to',
                      style: TextStyle(fontSize: 15),
                      textAlign: TextAlign.center,
                    ),
                    SizedBox(
                      height: 1,
                    ),
                    Text(
                      widget.text,
                      style: TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.bold,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    SizedBox(
                      height: 1,
                    ),
                    Text(
                      "please check your email to reset your password.",
                      style: TextStyle(fontSize: 15),
                      textAlign: TextAlign.center,
                    ),
                    SizedBox(
                      height: 10,
                    ),
                  ],
                ),
                SizedBox(
                  height: 1,
                ),
                Column(
                  children: <Widget>[
                    ButtonTheme(
                      height: 50,
                      minWidth: 300,
                      child: _changeButton
                          ? ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                  primary: Colors.blue,
                                  shape: new RoundedRectangleBorder(
                                    borderRadius:
                                        new BorderRadius.circular(5.0),
                                  ),
                                  animationDuration:
                                      Duration(milliseconds: 500),
                                  minimumSize: Size(300, 50)),
                              onPressed: _switchButton,
                              child: Text('Resend email'))
                          : ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                  primary: Colors.grey[550],
                                  onPrimary: Colors.grey[550],
                                  onSurface: Colors.grey[550],
                                  shape: new RoundedRectangleBorder(
                                    borderRadius:
                                        new BorderRadius.circular(5.0),
                                  ),
                                  animationDuration: Duration(milliseconds: 50),
                                  minimumSize: Size(300, 50)),
                              onPressed: null,
                              child: Container(
                                padding: EdgeInsets.symmetric(horizontal: 20),
                                alignment: Alignment.bottomLeft,
                                margin: EdgeInsets.all(10),
                                child: Row(
                                  children: [
                                    Icon(
                                      FontAwesomeIcons.check,
                                      size: 15,
                                      color: Colors.grey[600],
                                    ),
                                    SizedBox(
                                      width: 7,
                                    ),
                                    Text(
                                      "Sent email",
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                        color: Colors.grey[600],
                                        fontSize: 15,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    RichText(
                        text: TextSpan(
                      text: "Can't access your email?",
                      style: TextStyle(fontSize: 15, color: Colors.blue),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () => _launchURL("https://help.flickr.com"),
                    )),
                  ],
                )
              ],
            ),
          ),
        ),
      ),
      bottomSheet: Container(
        height: 40,
        margin: EdgeInsets.symmetric(horizontal: 40),
        child: Row(
          children: [
            ButtonTheme(
              height: 50,
              child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                      primary: Colors.transparent,
                      onPrimary: Colors.transparent,
                      shadowColor: Colors.transparent,
                      shape: new RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(0.0),
                      ),
                      minimumSize: Size(75, 50)),
                  onPressed: () => _launchURL("https://help.flickr.com"),
                  child: Text('Help',
                      style: TextStyle(fontSize: 10, color: Colors.black))),
            ),
            ButtonTheme(
              height: 50,
              child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                      primary: Colors.transparent,
                      onPrimary: Colors.transparent,
                      shadowColor: Colors.transparent,
                      shape: new RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(0.0),
                      ),
                      minimumSize: Size(75, 50)),
                  onPressed: () =>
                      _launchURL("https://www.flickr.com/help/privacy"),
                  child: Text('Privacy',
                      style: TextStyle(fontSize: 10, color: Colors.black))),
            ),
            ButtonTheme(
              height: 50,
              minWidth: 300,
              child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                      primary: Colors.transparent,
                      onPrimary: Colors.transparent,
                      shadowColor: Colors.transparent,
                      shape: new RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(0.0),
                      ),
                      minimumSize: Size(75, 50)),
                  onPressed: () =>
                      _launchURL("https://www.flickr.com/help/terms"),
                  child: Text('Terms',
                      style: TextStyle(fontSize: 10, color: Colors.black))),
            ),
          ],
        ),
      ),
    );
  }
}
