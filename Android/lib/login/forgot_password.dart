import 'package:flickr/login/send_email.dart';
import 'package:flickr/models/user.dart';
import 'package:flickr/providers/auth.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
import 'package:url_launcher/url_launcher.dart';

class ForgotPassword extends StatefulWidget {
  final String text;
  ForgotPassword({Key key, @required this.text}) : super(key: key);
  @override
  _ForgotPasswordState createState() => _ForgotPasswordState();
}

class _ForgotPasswordState extends State<ForgotPassword> {
  TextEditingController
      _emailController; //controller for using the input of the email textfield
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  var token; //used for validation of email

  void initState() {
    super.initState();
    _emailController = TextEditingController(
        text: widget.text); //intial value for the email textfield
  }

  _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  } //launcher to go to a certain link

  void noInternet() {
    ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text('No Internet Connection')));
  }

  Future<void> _forgetSubmit() async {
    final _auth = Provider.of<Authentication>(context, listen: false);
    try {
      await _auth.sendForgotPassword();
    } catch (error) {
      const errorMessage =
          'Could not authenticate you. Please try again later.';
      print(errorMessage);
      noInternet();
      return;
    }
    if (_auth.status == Status.Success) {
      Navigator.of(context).pop();
      Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) => SendEmail(
                  text: _emailController.text,
                  specialNum: 2,
                )),
      );
    }
  }

  Future<Null> refresh() async {
    await Future.delayed(Duration(seconds: 2));
    setState(() {});
  }

  Widget build(BuildContext context) {
    var authentication = Provider.of<Authentication>(context, listen: true);
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
            Container(
              child: Form(
                key: formKey,
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
                          Icon(FontAwesomeIcons.lock, color: Colors.black54),
                          SizedBox(
                            height: _height * 0.02,
                          ),
                          Text(
                            'Change your Flickr password.',
                            style: TextStyle(fontSize: 20),
                            textAlign: TextAlign.center,
                          ),
                          SizedBox(
                            height: _height * 0.03,
                          ),
                          ContainerResponsive(
                            alignment: Alignment.center,
                            widthResponsive: true,
                            heightResponsive: true,
                            child: Text(
                              "Please enter your email address below and we'll send you instructions on how to reset your password.",
                              style: TextStyle(fontSize: 15),
                              textAlign: TextAlign.center,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(
                        height: _height * 0.03,
                      ),
                      new TextFormField(
                        controller: _emailController,
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          labelText: "Email Address",
                          labelStyle: TextStyle(fontSize: 15),
                          filled: false,
                        ),
                        validator: (value) {
                          if (value.isEmpty) {
                            return 'Required!';
                          }
                          if (!RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]")
                              .hasMatch(value)) {
                            return "please enter email correctly";
                          }
                          return null;
                        },
                      ),
                      SizedBox(
                        height: _height * 0.04,
                      ),
                      Column(
                        children: <Widget>[
                          ButtonTheme(
                            child: ElevatedButton(
                                style: ElevatedButton.styleFrom(
                                    primary: Color(0xff128fdc),
                                    shape: new RoundedRectangleBorder(
                                      borderRadius:
                                          new BorderRadius.circular(5.0),
                                    ),
                                    minimumSize: Size(
                                        MediaQuery.of(context).size.width,
                                        _height * 0.065)),
                                onPressed: () {
                                  if (formKey.currentState.validate()) {
                                    authentication.currentUser = new User(
                                      email: _emailController.text,
                                    );
                                    _forgetSubmit();
                                  } else {
                                    print('unsuccessful');
                                  }
                                },
                                child: Text('Send email')),
                          ),
                          SizedBox(
                            height: _height * 0.03,
                          ),
                          RichText(
                              text: TextSpan(
                            text: "Can't access your email?",
                            style: TextStyle(
                                fontSize: 15, color: Color(0xff128fdc)),
                            recognizer: TapGestureRecognizer()
                              ..onTap =
                                  () => _launchURL("https://help.flickr.com"),
                          )),
                        ],
                      ),
                    ],
                  ),
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
