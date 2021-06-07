import 'dart:async';

// import 'package:flickr/models/global.dart';
import 'package:flickr/models/user.dart';
import 'package:flickr/providers/auth.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
import 'package:url_launcher/url_launcher.dart';

// ignore: must_be_immutable
class SendEmail extends StatefulWidget {
  final String text;
  int specialNum;
  SendEmail({Key key, @required this.text, @required this.specialNum})
      : super(key: key);

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

  Future<void> _resendSubmit() async {
    final _auth = Provider.of<Authentication>(context, listen: false);
    try {
      if (widget.specialNum == 1) {
        _auth.currentUser = new User(
          email: widget.text,
        );
        await _auth.resendConfirmation();
        _switchButton();
      } else {
        _auth.currentUser = new User(
          email: widget.text,
        );
        await _auth.sendForgotPassword();
        _switchButton();
      }
    } catch (error) {
      const errorMessage =
          'Could not authenticate you. Please try again later.';

      print(errorMessage);
      if (_auth.statusNum == 404) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text('The server can not find the requested resource.')));
      } else if (_auth.statusNum == 409) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text("Indicates that the user is already activated.")));
      } else {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text("No Internet Connection")));
      }
      return;
    }
    if (_auth.status == Status.Success) {}
  }

  Future<Null> refresh() async {
    await Future.delayed(Duration(seconds: 2));
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: _height * 0.08,
        centerTitle: false,
        leading: IconButton(
          onPressed: null,
          icon: Image.asset(
            "lib/assets/flickr.png",
            height: _height * 0.07,
            width: _width * 0.07,
          ),
        ),
        backgroundColor: Color(0xff212124),
        automaticallyImplyLeading: true,
        titleSpacing: -_width * 0.03,
        title: Text(
          'flickr',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 30,
            fontFamily: "FreeSet",
          ),
        ),
      ),
      body: RefreshIndicator(
        onRefresh: refresh,
        child: Stack(
          children: [
            ContainerResponsive(
              child: SafeArea(
                child: ListView(
                  padding: EdgeInsets.symmetric(
                    horizontal: _width * 0.08,
                  ),
                  children: <Widget>[
                    Column(
                      children: <Widget>[
                        SizedBox(
                          height: _height * 0.04,
                        ),
                        Icon(FontAwesomeIcons.solidEnvelope,
                            color: Colors.black54),
                        SizedBox(
                          height: _height * 0.02,
                        ),
                        Text(
                          "Check your inbox",
                          style: TextStyle(fontSize: 20),
                        ),
                        SizedBox(
                          height: _height * 0.03,
                        ),
                        RichText(
                            textScaleFactor: 1.1,
                            textAlign: TextAlign.center,
                            text: TextSpan(children: <TextSpan>[
                              TextSpan(
                                text: "We sent a verification link to ",
                                style: TextStyle(color: Colors.black),
                              ),
                              TextSpan(
                                text: widget.text,
                                style: TextStyle(
                                    color: Colors.black,
                                    fontWeight: FontWeight.bold),
                              ),
                              TextSpan(
                                text:
                                    " please check your email to reset your password.",
                                style: TextStyle(color: Colors.black),
                              ),
                            ])),
                      ],
                    ),
                    SizedBox(
                      height: _height * 0.04,
                    ),
                    Column(
                      children: <Widget>[
                        ButtonTheme(
                          height: 50,
                          minWidth: 300,
                          child: _changeButton
                              ? ElevatedButton(
                                  style: ElevatedButton.styleFrom(
                                      primary: Color(0xff128fdc),
                                      shape: new RoundedRectangleBorder(
                                        borderRadius:
                                            new BorderRadius.circular(5.0),
                                      ),
                                      animationDuration:
                                          Duration(milliseconds: 500),
                                      minimumSize: Size(
                                          MediaQuery.of(context).size.width,
                                          _height * 0.065)),
                                  onPressed: () {
                                    _resendSubmit();
                                  },
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
                                      animationDuration:
                                          Duration(milliseconds: 50),
                                      minimumSize: Size(
                                          MediaQuery.of(context).size.width,
                                          _height * 0.065)),
                                  onPressed: null,
                                  child: Container(
                                    padding:
                                        EdgeInsets.symmetric(horizontal: 20),
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
                          height: _height * 0.03,
                        ),
                        RichText(
                            text: TextSpan(
                          text: "Can't access your email?",
                          style:
                              TextStyle(fontSize: 15, color: Color(0xff128fdc)),
                          recognizer: TapGestureRecognizer()
                            ..onTap =
                                () => _launchURL("https://help.flickr.com"),
                        )),
                      ],
                    )
                  ],
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.only(top: _height * 0.8),
              height: 0.1 * _height,
              //alignment: Alignment.bottomCenter,
              //color: Colors.white,
              child: Row(
                children: [
                  ButtonTheme(
                    child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                            primary: Colors.transparent,
                            onPrimary: Colors.transparent,
                            shadowColor: Colors.transparent,
                            shape: new RoundedRectangleBorder(
                              borderRadius: new BorderRadius.circular(0.0),
                            ),
                            minimumSize: Size(_width / 3, _height * 0.1)),
                        onPressed: () => _launchURL("https://help.flickr.com"),
                        child: Text('Help',
                            style: TextStyle(
                              fontSize: 15,
                              color: Colors.black,
                              fontWeight: FontWeight.w300,
                            ))),
                  ),
                  ButtonTheme(
                    child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                            primary: Colors.transparent,
                            onPrimary: Colors.transparent,
                            shadowColor: Colors.transparent,
                            shape: new RoundedRectangleBorder(
                              borderRadius: new BorderRadius.circular(0.0),
                            ),
                            minimumSize: Size(
                                MediaQuery.of(context).size.width / 3,
                                _height * 0.1)),
                        onPressed: () =>
                            _launchURL("https://www.flickr.com/help/privacy"),
                        child: Text('Privacy',
                            style: TextStyle(
                              fontSize: 15,
                              color: Colors.black,
                              fontWeight: FontWeight.w300,
                            ))),
                  ),
                  ButtonTheme(
                    child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                            primary: Colors.transparent,
                            onPrimary: Colors.transparent,
                            shadowColor: Colors.transparent,
                            shape: new RoundedRectangleBorder(
                              borderRadius: new BorderRadius.circular(0.0),
                            ),
                            minimumSize: Size(_width / 3, _height * 0.1)),
                        onPressed: () =>
                            _launchURL("https://www.flickr.com/help/terms"),
                        child: Text('Terms',
                            style: TextStyle(
                              fontSize: 15,
                              color: Colors.black,
                              fontWeight: FontWeight.w300,
                            ))),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
