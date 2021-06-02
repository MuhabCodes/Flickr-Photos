import 'dart:async';

import 'package:flickr/login/send_email.dart';
import 'package:flickr/login/sign_in.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
import 'package:url_launcher/url_launcher.dart';

import 'auth_services.dart';

class SignUp extends StatefulWidget {
  @override
  _SignUpState createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  var token;
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _firstNameController = TextEditingController();
  final _lastNameController = TextEditingController();
  final _ageController = TextEditingController();
  bool _obscureText = true;
  bool _changePassword = true;
  bool _checkboxCharacters = false;
  bool _checkboxSpacing = false;
  bool _loadingPassword = false;
  bool _extraLoading = true;
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();

  void _switch() {
    setState(() {
      _obscureText = !_obscureText;
    });
  } //show password switch

  void _passwordChecker() {
    setState(() {
      _changePassword = false;
    });
  }

  void _validatePassword(String index) {
    setState(() {
      if (_passwordController.text.length >= 12) {
        _checkboxCharacters = true;
      } else {
        _checkboxCharacters = false;
      }
      if (RegExp("^[a-zA-z0-9]").hasMatch(_passwordController.text)) {
        _checkboxSpacing = true;
      } else {
        _checkboxSpacing = false;
      }
      if (_checkboxCharacters && _checkboxSpacing) {
        _loadingPassword = true;
      } else
        _loadingPassword = false;
      if (!_checkboxCharacters && !_checkboxSpacing)
        _extraLoading = true;
      else if (_checkboxCharacters && _checkboxSpacing) {
        Timer(Duration(milliseconds: 1000), () {
          setState(() {
            _extraLoading = true;
          });
        });
      } else if (_passwordController.text.isEmpty)
        _extraLoading = true;
      else
        _extraLoading = false;

      if (_checkboxCharacters && _checkboxSpacing) {
        Timer(Duration(milliseconds: 1000), () {
          setState(() {
            _changePassword = true;
          });
        });
      }
    });
  } //password validations and animations

  _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  } //launcher to go to a certain website

  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: _height * 0.08,
        leading: IconButton(
          iconSize: 10,
          onPressed: null, //unused button to add flickr icon
          icon: Image.asset(
            "lib/assets/flickr.png",
            height: _height * 0.07,
            width: _width * 0.07,
            //flickr icon sizing
          ),
        ),
        backgroundColor: Color(0xff212124), //set appbar color
        titleSpacing: -_width * 0.03, //shifting the title to left
        title: Text(
          'flickr',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 30,
            fontFamily: "FreeSet",
          ),
        ),
      ),
      body: ContainerResponsive(
        widthResponsive: true,
        heightResponsive: true,
        child: Form(
          key: formKey,
          child: SafeArea(
            child: ListView(
              // padding: EdgeInsets.symmetric(
              //     horizontal: _width *
              //         0.00), //spacing from the left and right of each widget
              children: <Widget>[
                Container(
                  padding: EdgeInsets.symmetric(horizontal: _width * 0.04),
                  child: Column(
                    children: <Widget>[
                      SizedBox(
                        height: _height * 0.02,
                      ), //spacing between appbar and the next widget
                      Image.asset(
                        'lib/assets/flickr.png',
                        height: _height * 0.07,
                        width: _width * 0.07,
                      ), //adding flickr icon
                      SizedBox(
                        height: 10,
                      ), //spacing between the previous and next widget
                      Text(
                        'Sign up for Flickr',
                        style: TextStyle(fontSize: 20),
                      ),
                      SizedBox(
                        height: _height * 0.03,
                      ), //spacing between the previous and next widget
                      TextFormField(
                        controller: _firstNameController,
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          labelText: "First name",
                          labelStyle: TextStyle(
                            fontSize: 15,
                          ),
                          filled: false,
                        ),
                        validator: (value) {
                          if (value.isEmpty) {
                            return 'Required!';
                          }
                          return null;
                        },
                      ), // textfield to enter the first name input
                      SizedBox(
                        height: 9,
                      ),
                      TextFormField(
                        controller: _lastNameController,
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          labelText: "Last name",
                          labelStyle: TextStyle(
                            fontSize: 15,
                          ),
                          filled: false,
                        ),
                        validator: (value) {
                          if (value.isEmpty) {
                            return 'Required!';
                          }
                          return null;
                        },
                      ), // textfield to enter the last name input
                      SizedBox(
                        height: _height * 0.01,
                      ),
                      TextFormField(
                        controller: _ageController,
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          labelText: "Your age",
                          labelStyle: TextStyle(
                            fontSize: 15,
                          ),
                          filled: false,
                        ),
                        validator: (value) {
                          if (value.isEmpty) {
                            return 'Required!';
                          }
                          if (int.parse(value) < 13) {
                            return 'In order to use Flickr, you must be 13 or older';
                          }

                          return null;
                        },
                      ),
                      // textfield to enter the age input
                      SizedBox(
                        height: _height * 0.01,
                      ),
                      TextFormField(
                        controller: _emailController,
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          labelText: "Email address",
                          labelStyle: TextStyle(
                            fontSize: 15,
                          ),
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
                      ), // textfield to enter the Email address input
                      SizedBox(
                        height: _height * 0.01,
                      ),
                      TextFormField(
                          controller: _passwordController,
                          obscureText: _obscureText,
                          decoration: InputDecoration(
                              border: OutlineInputBorder(),
                              labelText: "Password",
                              labelStyle: TextStyle(
                                fontSize: 15,
                              ),
                              filled: false,
                              suffixIcon: IconButton(
                                icon: _obscureText
                                    ? Icon(FontAwesomeIcons.eye)
                                    : Icon(FontAwesomeIcons.eyeSlash),
                                onPressed: _switch,
                              )),
                          validator: (value) {
                            if (value.isEmpty) {
                              return 'Required!';
                            }
                            if (value.length < 12 ||
                                !RegExp("^[a-zA-z0-9]")
                                    .hasMatch(_passwordController.text)) {
                              return 'Invalid Password!';
                            }
                            return null;
                          },
                          onTap: _passwordChecker,
                          onChanged: _validatePassword),
                      SizedBox(
                          child: _extraLoading
                              ? null
                              : SizedBox(
                                  child: _loadingPassword
                                      ? Container(
                                          color: Colors.blue,
                                          height: 4,
                                        )
                                      : Container(
                                          color: Colors.blue,
                                          height: 4,
                                          margin: EdgeInsets.only(
                                              right: MediaQuery.of(context)
                                                      .size
                                                      .width /
                                                  2)))),

                      SizedBox(height: 10),
                      Container(
                        child: _changePassword
                            ? null
                            : ContainerResponsive(
                                child: Column(
                                  children: [
                                    Container(
                                      margin: EdgeInsets.only(right: 120),
                                      child: Text(
                                        "please use at least:",
                                        style: TextStyle(
                                            fontSize: 10,
                                            color: Colors.black45),
                                        textAlign: TextAlign.left,
                                      ),
                                    ),
                                    SizedBox(
                                      height: 5,
                                    ),
                                    Row(
                                      children: [
                                        Checkbox(
                                          activeColor: Colors.blue,
                                          //shape: CircleBorder(),
                                          value: _checkboxCharacters,
                                          onChanged: (string) {},
                                          checkColor: Colors.white,
                                        ),
                                        Flexible(
                                          child: Text(
                                            "12 characters",
                                            style: TextStyle(
                                                fontSize: 10,
                                                color: Colors.black45),
                                          ),
                                        ),
                                        Checkbox(
                                          activeColor: Colors.blue,
                                          value: _checkboxSpacing,
                                          onChanged: (string) {},
                                          checkColor: Colors.white,
                                          //shape: CircleBorder(),
                                        ),
                                        Flexible(
                                          child: Text(
                                            "no leading spaces",
                                            style: TextStyle(
                                                fontSize: 10,
                                                color: Colors.black45),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                      ), // textfield to enter the password input
                      SizedBox(
                        height: 10,
                      ),
                      Column(
                        children: <Widget>[
                          ButtonTheme(
                            height: 50,
                            minWidth: 300,
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
                                onPressed: () async {
                                  if (formKey.currentState.validate()) {
                                    AuthService1()
                                        .signUp(
                                            _firstNameController,
                                            _lastNameController,
                                            _ageController,
                                            _emailController.text,
                                            _passwordController.text)
                                        .then((val) {
                                      if (val.statusCode == 201) {
                                        token = val.data['token'];
                                        Navigator.of(context).pop();
                                        Navigator.push(
                                          context,
                                          MaterialPageRoute(
                                              builder: (context) => SendEmail(
                                                  text: _emailController.text)),
                                        );
                                        Fluttertoast.showToast(
                                          msg: 'Authenticated',
                                          toastLength: Toast.LENGTH_SHORT,
                                          gravity: ToastGravity.BOTTOM,
                                          timeInSecForIosWeb: 1,
                                          backgroundColor:
                                              Colors.lightGreenAccent,
                                          textColor: Colors.white,
                                          fontSize: 16.0,
                                        );
                                      }
                                    });
                                  } else {
                                    print('unsuccessful');
                                  }
                                },
                                child: Text('Sign up')),
                          ),
                        ],
                      ), //button to sign up
                      SizedBox(
                        height: _height * 0.02,
                      ),
                      ContainerResponsive(
                        widthResponsive: true,
                        heightResponsive: true,
                        padding: EdgeInsets.symmetric(horizontal: 20),
                        child: ContainerResponsive(
                          padding: EdgeInsets.symmetric(
                            horizontal: _width * 0.04,
                          ),
                          child: RichText(
                              textAlign: TextAlign.center,
                              text: TextSpan(
                                children: <TextSpan>[
                                  TextSpan(
                                    text:
                                        "By signing up, you agree with Flickr's ",
                                    style: TextStyle(
                                        color: Colors.black45, fontSize: 12),
                                  ),
                                  TextSpan(
                                    text: "Terms of Services",
                                    style: TextStyle(
                                        fontSize: 12, color: Color(0xff128fdc)),
                                    recognizer: TapGestureRecognizer()
                                      ..onTap = () => _launchURL(
                                          "https://www.flickr.com/help/terms"),
                                  ),
                                  TextSpan(
                                    text: ' and ',
                                    style: TextStyle(
                                        color: Colors.black45, fontSize: 12),
                                  ),
                                  TextSpan(
                                    text: "Privacy Policy.",
                                    style: TextStyle(
                                        fontSize: 12, color: Color(0xff128fdc)),
                                    recognizer: TapGestureRecognizer()
                                      ..onTap = () => _launchURL(
                                          "https://www.flickr.com/help/privacy"),
                                    //recognizer: TapGestureRecognizer()
                                    //..onTap = () {
                                    //Navigator.push(
                                    //context,
                                    //MaterialPageRoute(builder: (context) => SignUp()),
                                    //);
                                    //},
                                  )
                                ],
                              )),
                        ),
                      ),

                      SizedBox(
                        height: 5,
                      ),
                      Divider(color: Colors.black45),
                      SizedBox(
                        height: 5,
                      ),
                      RichText(
                          text: TextSpan(
                        children: <TextSpan>[
                          TextSpan(
                              text: 'Already a Flickr member?',
                              style: TextStyle(color: Colors.black)),
                          TextSpan(
                            text: " Log in here.",
                            style: TextStyle(
                                fontSize: 15, color: Color(0xff128fdc)),
                            recognizer: TapGestureRecognizer()
                              ..onTap = () {
                                Navigator.of(context).pop();
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => SignIn()),
                                );
                              },
                          )
                        ],
                      )),
                      SizedBox(height: _height * 0.03)
                      //three buttons (help,privacy,terms)
                    ],
                  ),
                ),
                Container(
                  //margin: EdgeInsets.only(top: _height * 0.8),
                  height: 0.08 * _height,
                  alignment: Alignment.bottomCenter,
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
                            onPressed: () =>
                                _launchURL("https://help.flickr.com"),
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
                            onPressed: () => _launchURL(
                                "https://www.flickr.com/help/privacy"),
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
        ),
      ),
    );
  }
}
