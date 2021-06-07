//import 'dart:html';

import 'package:flickr/login/forgot_password.dart';
import 'package:flickr/login/sign_up.dart';
import 'package:flickr/models/user.dart';
import 'package:flickr/navigations/top_nav_bar.dart';
import 'package:flickr/providers/auth.dart';
import 'package:flickr/providers/notification_provider.dart' as io;
import 'package:flickr/providers/post_provider_integration.dart' as post;
import 'package:flickr/providers/user_provider.dart' as user;
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_signin_button/flutter_signin_button.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:provider/provider.dart';
//import 'package:responsive_widgets/responsive_widgets.dart';
import 'package:url_launcher/url_launcher.dart';

class SignIn extends StatefulWidget {
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  GoogleSignInAccount _user;
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _obscureText = true; //show password boolean
  bool _emailValid = true; //email validation
  bool _checkValue = false; //check box value
  final GlobalKey<FormState> formKey =
      GlobalKey<FormState>(); //used for validations

  void _showPassword() {
    setState(() {
      _obscureText = !_obscureText;
    });
  } //show password switch

  void _emailSwitch() {
    setState(() {
      _emailValid = !_emailValid;
    });
  } //switch to add password textfield

  _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  } //launcher to go to a certain website

  var authentication;

  Future<void> _submit() async {
    final _auth = Provider.of<Authentication>(context, listen: false);
    try {
      await _auth.signIn();
    } catch (error) {
      const errorMessage =
          'Could not authenticate you. Please try again later.';
      print(errorMessage);
      if (_auth.statusNum == 401) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text('The email or password entered were not correct.')));
      } else if (_auth.statusNum == 403) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text("This client hasn't activated their account.")));
      } else if (_auth.statusNum == 500) {
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text("This email isn't registered")));
      } else {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text("No internet Connection")));
      }
      return;
    }
    if (_auth.status == Status.Success) {
      var loggedUser = Provider.of<user.UserProvider>(context, listen: false);
      loggedUser.user = _auth.currentUser;
          var notificationProvider = Provider.of<io.NotificationProvider>(context, listen: false);
          notificationProvider.token=_auth.token;
      print(loggedUser.user.token);
      print(loggedUser.user.userId);
      Navigator.of(context).pop();
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => TopNavigationBar()),
      );
    }
  }

  Future<void> _submitWithGoogle() async {
    final _auth = Provider.of<Authentication>(context, listen: false);
    await _auth.googleSignIn.signIn().then((userData) {
      _user = userData;

      if (_user.email != null && _user.displayName != null) {
        _auth.currentUser =
            new User(googleEmail: _user.email, displayName: _user.displayName);
      }
    }).catchError((value) {
      print(value);
    });
    try {
      await _auth.signInWithGoogle();
    } catch (error) {
      const errorMessage =
          'Could not authenticate you. Please try again later.';
      print(errorMessage);
      if (_auth.statusNum == 401) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text('The email or password entered were not correct.')));
      } else if (_auth.statusNum == 403) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
            content: Text("This client hasn't activated their account.")));
      } else if (_auth.statusNum == 409) {
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text("This email is already registered.")));
        _auth.googleSignIn.signOut();
      } else {
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text("No internet Connection.")));
      }
      return;
    }
    if (authentication.status == Status.Success) {
      var loggedUser = Provider.of<user.UserProvider>(context, listen: false);
      var notificationProvider =
          Provider.of<io.NotificationProvider>(context, listen: false);
      var postProvider =
          Provider.of<post.PostProviderInteg>(context, listen: false);
      notificationProvider.token = _auth.token;
      postProvider.token = _auth.token;
      loggedUser.token = _auth.token;
      loggedUser.user = _auth.currentUser;
      Navigator.of(context).pop();
      Navigator.of(context).pop();
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => TopNavigationBar()),
      );
    }
  }

  Future<Null> refresh() async {
    await Future.delayed(Duration(seconds: 2));
    setState(() {});
  }

  void initState() {
    WidgetsFlutterBinding.ensureInitialized();
    SystemChrome.setEnabledSystemUIOverlays(
        [SystemUiOverlay.bottom, SystemUiOverlay.top]);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    authentication = Provider.of<Authentication>(context, listen: true);

    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;
    return Scaffold(
      backgroundColor: Colors.white, //set the colors of the scaffold is white

      appBar: AppBar(
        centerTitle: false,
        toolbarHeight:
            _height * 0.08, //switch off centering the title of the appbar
        leading: IconButton(
          onPressed:
              null, //an unused button to put the flickr icon with the title
          icon: Image.asset(
            "lib/assets/flickr.png",
            height: _height * 0.07,
            width: _width * 0.07, // setting the size of the flickr icon
          ),
        ),
        backgroundColor: Color(0xff212124), //set the appbar color
        automaticallyImplyLeading: true, //remove the back
        titleSpacing: -_width * 0.03, //shifting the title "flickr" to the left
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
                      horizontal: _width * 0.05,
                    ), //spacing from the left and right of each widget
                    children: <Widget>[
                      Column(
                        children: <Widget>[
                          SizedBox(
                            height: _height * 0.02,
                          ), //spacing between the appbar the next and previous widgets
                          Image.asset(
                            'lib/assets/flickr.png',
                            height: _height * 0.07,
                            width: _width * 0.07,
                          ), //adding flickr icon
                          // SizedBox(
                          // height: _height * 0.01,
                          //), //spacing between the next and previous widgets
                          Text('Log in to Flickr',
                              style: TextStyle(
                                  fontSize: 20, color: Color(0xff212124))),
                        ],
                      ),
                      SizedBox(
                        height: _height * 0.03,
                      ), //spacing between the next and previous widgets
                      TextFormField(
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
                      ), //textfield for enter email address as input
                      SizedBox(
                        height: _emailValid ? 0.035 * _height : _height * 0.01,
                      ), //spacing between the next and previous widgets
                      Container(
                          child: _emailValid
                              ? null
                              : TextFormField(
                                  controller: _passwordController,
                                  obscureText: _obscureText,
                                  decoration: InputDecoration(
                                    border: OutlineInputBorder(),
                                    labelText: "Password",
                                    labelStyle: TextStyle(
                                      fontSize: 15,
                                    ),
                                    suffixIcon: IconButton(
                                      icon: _obscureText
                                          ? Icon(FontAwesomeIcons.eye)
                                          : Icon(FontAwesomeIcons.eyeSlash),
                                      onPressed: _showPassword,
                                    ),
                                    filled: false,
                                  ),
                                  validator: (value) {
                                    if (value.isEmpty) {
                                      return 'Required!';
                                    }
                                    return null;
                                  },
                                )),
                      Container(
                        child: _emailValid
                            ? null
                            : Row(
                                children: [
                                  Checkbox(
                                      value: _checkValue,
                                      activeColor: Color(0xff128fdc),
                                      onChanged: (newValue) {
                                        setState(() {
                                          _checkValue = newValue;
                                        });
                                      }),
                                  Text(
                                    'Remember email address',
                                    style: TextStyle(
                                        color: Colors.black, fontSize: 12),
                                  )
                                ],
                              ),
                      ),

                      SizedBox(
                        height: _emailValid ? 0 : _height * 0.02,
                      ), //spacing between the next and previous widgets
                      Column(
                        children: <Widget>[
                          ButtonTheme(
                            height: 50,
                            minWidth: 300,
                            child: ElevatedButton(
                                style: ElevatedButton.styleFrom(
                                    primary: Color(0xff128fdc),
                                    shape: new RoundedRectangleBorder(
                                      borderRadius: new BorderRadius.circular(
                                          5.0), //button shape
                                    ),
                                    minimumSize: Size(
                                        MediaQuery.of(context).size.width,
                                        _height * 0.065)), //button size
                                onPressed: () async {
                                  if (formKey.currentState.validate()) {
                                    if (_emailValid == false) {
                                      // await Provider.of<Auth>(context).login(
                                      //     _emailController.text,
                                      //     _passwordController.text);
                                      authentication.currentUser = new User(
                                          email: _emailController.text,
                                          password: _passwordController.text);
                                      _submit();
                                    } else {
                                      _emailSwitch();
                                    }
                                  } else {
                                    print('unsuccessful');
                                  }
                                },
                                child: _emailValid
                                    ? Text('Next')
                                    : Text('Sign in')),
                          ),
                          Container(
                            child: _emailValid
                                ? null
                                : SizedBox(
                                    height: _height * 0.02,
                                  ),
                          ),
                          Container(
                            child: _emailValid
                                ? null
                                : RichText(
                                    text: TextSpan(
                                    text: "Forgot password?",
                                    style: TextStyle(
                                        fontSize: 15, color: Color(0xff128fdc)),
                                    recognizer: TapGestureRecognizer()
                                      ..onTap = () {
                                        Navigator.of(context).pop();
                                        Navigator.push(
                                          context,
                                          MaterialPageRoute(
                                              builder: (context) => ForgotPassword(
                                                  text: _emailController
                                                      .text)), //go to forgot password page
                                        );
                                      },
                                  )),
                          ),
                          SizedBox(
                            height: _emailValid ? null : _height * 0.02,
                          ),
                          Container(
                              child: _emailValid
                                  ? null
                                  : Divider(color: Colors.black45)),
                          SizedBox(
                            height: _height * 0.02,
                          ),
                          RichText(
                              text: TextSpan(
                            children: <TextSpan>[
                              TextSpan(
                                  text: 'Not a Flickr member?',
                                  style: TextStyle(color: Color(0xff212124))),
                              TextSpan(
                                text: " Sign up here.",
                                style: TextStyle(
                                    fontSize: 15, color: Color(0xff128fdc)),
                                recognizer: TapGestureRecognizer()
                                  ..onTap = () {
                                    Navigator.of(context).pop();
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => SignUp()),
                                    );
                                  },
                              )
                            ],
                          )),
                          SizedBox(
                            height: 0.05 * _height,
                          ),
                          SignInButton(
                            Buttons.Google,
                            text: "Sign in with Google",
                            onPressed: () {
                              _submitWithGoogle();
                            },
                          )
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
              color: Colors.white,
              child: Row(
                children: [
                  ButtonTheme(
                    height: _height * 0.1,
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
                    height: _height * 0.1,
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
                    height: _height * 0.1,
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
