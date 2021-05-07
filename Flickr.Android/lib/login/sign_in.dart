import 'package:flickr/login/forgot_password.dart';
import 'package:flickr/login/sign_up.dart';
import 'package:flickr/navigations/top_nav_bar.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
import 'package:url_launcher/url_launcher.dart';

class SignIn extends StatefulWidget {
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white, //set the colors of the scaffold is white

      body: new NestedScrollView(
        headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
          return <Widget>[
            new SliverAppBar(
              centerTitle: false, //switch off centering the title of the appbar
              leading: IconButton(
                onPressed:
                    null, //an unused button to put the flickr icon with the title
                icon: Image.asset(
                  "lib/assets/flickr.png",
                  height: 20,
                  width: 35, // setting the size of the flickr icon
                ),
              ),
              backgroundColor: Colors.grey[900], //set the appbar color
              automaticallyImplyLeading: true, //remove the back
              titleSpacing: -12, //shifting the title "flickr" to the left
              title: Text(
                'flickr',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            )
          ];
        },
        body: ContainerResponsive(
          widthResponsive: true,
          heightResponsive: true,
          child: Form(
            key: formKey,
            child: SafeArea(
              child: ListView(
                padding: EdgeInsets.symmetric(
                  horizontal: 18,
                ), //spacing from the left and right of each widget
                children: <Widget>[
                  Column(
                    children: <Widget>[
                      SizedBox(
                        height: 20,
                      ), //spacing between the appbar the next and previous widgets
                      Image.asset(
                        'lib/assets/flickr.png',
                        height: 20,
                        width: 35,
                      ), //adding flickr icon
                      SizedBox(
                        height: 10,
                      ), //spacing between the next and previous widgets
                      Text('Log in to Flickr', style: TextStyle(fontSize: 20)),
                    ],
                  ),
                  SizedBox(
                    height: 20,
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
                    height: 9,
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
                                  icon: Icon(FontAwesomeIcons.eye),
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
                                  activeColor: Colors.blue,
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
                    height: 10,
                  ), //spacing between the next and previous widgets
                  Column(
                    children: <Widget>[
                      ButtonTheme(
                        height: 50,
                        minWidth: 300,
                        child: ElevatedButton(
                            style: ElevatedButton.styleFrom(
                                shape: new RoundedRectangleBorder(
                                  borderRadius: new BorderRadius.circular(
                                      5.0), //button shape
                                ),
                                minimumSize: Size(
                                    MediaQuery.of(context).size.width,
                                    50)), //button size
                            onPressed: () async {
                              if (formKey.currentState.validate()) {
                                if (_emailValid == false) {
                                  // await Provider.of<Auth>(context).login(
                                  //     _emailController.text,
                                  //     _passwordController.text);
                                  Navigator.of(context).pop();
                                  Navigator.of(context).pop();
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) =>
                                            TopNavigationBar()),
                                  );
                                } else {
                                  _emailSwitch();
                                }
                              } else {
                                print('unsuccessful');
                              }
                            },
                            child:
                                _emailValid ? Text('Next') : Text('Sign in')),
                      ),
                      Container(
                        child: _emailValid
                            ? null
                            : SizedBox(
                                height: 20,
                              ),
                      ),
                      Container(
                        child: _emailValid
                            ? null
                            : RichText(
                                text: TextSpan(
                                text: "Forgot password?",
                                style:
                                    TextStyle(fontSize: 15, color: Colors.blue),
                                recognizer: TapGestureRecognizer()
                                  ..onTap = () {
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
                      SizedBox(height: 5),
                      Container(
                          child: _emailValid
                              ? null
                              : Divider(color: Colors.black45)),
                      SizedBox(
                        height: 20,
                      ),
                      Text('Not a Flickr member?',
                          style: TextStyle(fontSize: 12)),
                      SizedBox(
                        height: 5,
                      ),
                      RichText(
                          text: TextSpan(
                        text: "Sign up here.",
                        style: TextStyle(fontSize: 15, color: Colors.blue),
                        recognizer: TapGestureRecognizer()
                          ..onTap = () {
                            Navigator.of(context).pop();
                            Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) => SignUp()),
                            );
                          },
                      )),
                    ],
                  ),
                  SizedBox(height: 250),
                  ContainerResponsive(
                    color: Colors.white,
                    margin: EdgeInsets.symmetric(horizontal: 18),
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
                                    borderRadius:
                                        new BorderRadius.circular(0.0),
                                  ),
                                  minimumSize: Size(
                                      MediaQuery.of(context).size.width / 4,
                                      50)),
                              onPressed: () =>
                                  _launchURL("https://help.flickr.com"),
                              child: Text('Help',
                                  style: TextStyle(
                                      fontSize: 10, color: Colors.black))),
                        ),
                        ButtonTheme(
                          height: 50,
                          child: ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                  primary: Colors.transparent,
                                  onPrimary: Colors.transparent,
                                  shadowColor: Colors.transparent,
                                  shape: new RoundedRectangleBorder(
                                    borderRadius:
                                        new BorderRadius.circular(0.0),
                                  ),
                                  minimumSize: Size(
                                      MediaQuery.of(context).size.width / 4,
                                      50)),
                              onPressed: () => _launchURL(
                                  "https://www.flickr.com/help/privacy"),
                              child: Text('Privacy',
                                  style: TextStyle(
                                      fontSize: 10, color: Colors.black))),
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
                                    borderRadius:
                                        new BorderRadius.circular(0.0),
                                  ),
                                  minimumSize: Size(
                                      MediaQuery.of(context).size.width / 4,
                                      50)),
                              onPressed: () => _launchURL(
                                  "https://www.flickr.com/help/terms"),
                              child: Text('Terms',
                                  style: TextStyle(
                                      fontSize: 10, color: Colors.black))),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
