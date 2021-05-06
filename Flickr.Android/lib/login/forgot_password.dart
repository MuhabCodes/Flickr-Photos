import 'package:flickr/login/send_email.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
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
  final GlobalKey<FormState> formKey =
      GlobalKey<FormState>(); //used for validation of email

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
          widthResponsive: true,
          heightResponsive: true,
          padding: EdgeInsets.symmetric(horizontal: 10),
          child: Form(
            key: formKey,
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
                      Icon(FontAwesomeIcons.lock, color: Colors.black54),
                      SizedBox(
                        height: 10,
                      ),
                      Text(
                        'Forgot your Flickr',
                        style: TextStyle(fontSize: 20),
                        textAlign: TextAlign.center,
                      ),
                      SizedBox(
                        height: 5,
                      ),
                      Text(
                        'Password?',
                        style: TextStyle(fontSize: 20),
                        textAlign: TextAlign.center,
                      ),
                      SizedBox(
                        height: 5,
                      ),
                      ContainerResponsive(
                        alignment: Alignment.center,
                        widthResponsive: true,
                        heightResponsive: true,
                        child: Text(
                          "Please enter your email address below and we'll send you instructions on how to reset your password",
                          style: TextStyle(fontSize: 15),
                          textAlign: TextAlign.center,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 20,
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
                    height: 10,
                  ),
                  Column(
                    children: <Widget>[
                      ButtonTheme(
                        height: 50,
                        minWidth: 300,
                        child: ElevatedButton(
                            style: ElevatedButton.styleFrom(
                                shape: new RoundedRectangleBorder(
                                  borderRadius: new BorderRadius.circular(5.0),
                                ),
                                minimumSize: Size(300, 50)),
                            onPressed: () {
                              if (formKey.currentState.validate()) {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => SendEmail(
                                          text: _emailController.text)),
                                );
                              } else {
                                print('unsuccessful');
                              }
                            },
                            child: Text('Send email')),
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
                  ),
                  SizedBox(height: 50),
                  ContainerResponsive(
                    alignment: Alignment.bottomCenter,
                    margin: EdgeInsets.symmetric(horizontal: 10),
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
                                  minimumSize: Size(75, 50)),
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
                                  minimumSize: Size(75, 50)),
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
                                  minimumSize: Size(75, 50)),
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
