import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:provider/provider.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
// ignore: unused_import
import 'package:url_launcher/url_launcher.dart';

final List<String> choices1 = [
  'Public',
  'Private',
  'Friends',
  'Family',
  'Friends & family',
];
final List<String> choices2 = [
  'Private',
  'Family',
  'Friends',
  'Friends & family',
  'Following',
  'Public',
];
final List<String> choices3 = [
  'Safe',
  'Moderate',
  'Restricted',
];
final List<String> choices4 = [
  'On',
  'Moderate',
  'Off',
];

class PrivacySafetyButton extends StatefulWidget {
  @override
  State<PrivacySafetyButton> createState() => _PrivacySafetyButtonState();
}

class _PrivacySafetyButtonState extends State<PrivacySafetyButton> {
  bool _checkBoxVal = true;
  bool _switchVal = true;

  void switchValFunc() {
    setState(() {
      _switchVal = !_switchVal;
    });
  }

  void checkBoxValFunc() {
    setState(() {
      _checkBoxVal = !_checkBoxVal;
    });
  }

  _showChoiceOneDialog(BuildContext context) => showDialog(
        context: context,
        builder: (context) {
          final _singleNotifier1 = Provider.of<SingleNotifier1>(context);
          return AlertDialog(
            title: Text(
              'Default privacy',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            content: SingleChildScrollView(
              child: Container(
                width: double.infinity,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Column(
                      children: choices1
                          .map((count) => RadioListTile(
                                activeColor: Colors.teal[800],
                                title: Text(count),
                                value: count,
                                groupValue: _singleNotifier1.currentChoices,
                                selected:
                                    _singleNotifier1.currentChoices == count,
                                onChanged: (value) {
                                  _singleNotifier1.updateChoice(value);
                                  //Navigator.of(context).pop();
                                },
                              ))
                          .toList(),
                    ),
                    RichText(
                      text: TextSpan(
                        text: "Cancel",
                        style: TextStyle(fontSize: 12, color: Colors.black),
                        recognizer: TapGestureRecognizer()
                          ..onTap = () {
                            Navigator.of(context).pop();
                          },
                      ),
                    )
                  ],
                ),
              ),
            ),
          );
        },
      );
  _showChoiceTwoDialog(BuildContext context) => showDialog(
        context: context,
        builder: (context) {
          final _singleNotifier2 = Provider.of<SingleNotifier2>(context);
          return AlertDialog(
            title: Text(
              'Location privacy',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            content: SingleChildScrollView(
              child: Container(
                width: double.infinity,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Column(
                      children: choices2
                          .map((count) => RadioListTile(
                                activeColor: Colors.teal[800],
                                title: Text(count),
                                value: count,
                                groupValue: _singleNotifier2.currentChoices,
                                selected:
                                    _singleNotifier2.currentChoices == count,
                                onChanged: (value) {
                                  _singleNotifier2.updateChoice(value);
                                  //Navigator.of(context).pop();
                                },
                              ))
                          .toList(),
                    ),
                    RichText(
                      text: TextSpan(
                        text: "Cancel",
                        style: TextStyle(fontSize: 12, color: Colors.black),
                        recognizer: TapGestureRecognizer()
                          ..onTap = () {
                            Navigator.of(context).pop();
                          },
                      ),
                    )
                  ],
                ),
              ),
            ),
          );
        },
      );
  _showChoiceThreeDialog(BuildContext context) => showDialog(
        context: context,
        builder: (context) {
          final _singleNotifier3 = Provider.of<SingleNotifier3>(context);
          return AlertDialog(
            title: Text(
              'Safety level',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            content: SingleChildScrollView(
              child: Container(
                width: double.infinity,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Column(
                      children: choices3
                          .map((count) => RadioListTile(
                                activeColor: Colors.teal[800],
                                title: Text(count),
                                value: count,
                                groupValue: _singleNotifier3.currentChoices,
                                selected:
                                    _singleNotifier3.currentChoices == count,
                                onChanged: (value) {
                                  _singleNotifier3.updateChoice(value);
                                  //Navigator.of(context).pop();
                                },
                              ))
                          .toList(),
                    ),
                    RichText(
                      text: TextSpan(
                        text: "Cancel",
                        style: TextStyle(fontSize: 12, color: Colors.black),
                        recognizer: TapGestureRecognizer()
                          ..onTap = () {
                            Navigator.of(context).pop();
                          },
                      ),
                    )
                  ],
                ),
              ),
            ),
          );
        },
      );
  _showChoiceFourDialog(BuildContext context) => showDialog(
        context: context,
        builder: (context) {
          final _singleNotifier4 = Provider.of<SingleNotifier4>(context);
          return AlertDialog(
            title: Text(
              'SafeSearch filter',
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            content: SingleChildScrollView(
              child: Container(
                width: double.infinity,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Column(
                      children: choices4
                          .map((count) => RadioListTile(
                                activeColor: Colors.teal[800],
                                title: Text(count),
                                value: count,
                                groupValue: _singleNotifier4.currentChoices,
                                selected:
                                    _singleNotifier4.currentChoices == count,
                                onChanged: (value) {
                                  _singleNotifier4.updateChoice(value);
                                  //Navigator.of(context).pop();
                                },
                              ))
                          .toList(),
                    ),
                    RichText(
                      text: TextSpan(
                        text: "Cancel",
                        style: TextStyle(fontSize: 12, color: Colors.black),
                        recognizer: TapGestureRecognizer()
                          ..onTap = () {
                            Navigator.of(context).pop();
                          },
                      ),
                    )
                  ],
                ),
              ),
            ),
          );
        },
      );
  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;
    return Scaffold(
        appBar: AppBar(
          automaticallyImplyLeading: false,
          backgroundColor: Color(0xff212124),
          title: Text("Privacy and Safety"),
          centerTitle: true,
          actions: [
            IconButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                icon: Icon(Icons.close))
          ],
          toolbarHeight: 0.09 * _height,
        ),
        body: ListView(
          children: [
            TextButton(
              onPressed: () => _showChoiceOneDialog(context),
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.19),
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
                    "Default privacy",
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 17,
                    ),
                  ),
                  SizedBox(
                    height: _height * 0.03,
                  ),
                  ContainerResponsive(
                    child: Text(
                        "Choose the default privacy for your manual posts.",
                        style: TextStyle(color: Colors.black, fontSize: 16)),
                  )
                ],
              ),
            ),
            TextButton(
              onPressed: () => _showChoiceTwoDialog(context),
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.17),
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
                    "Location privacy",
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 17,
                    ),
                  ),
                  SizedBox(
                    height: _height * 0.03,
                  ),
                  ContainerResponsive(
                    child: Text(
                        "Choose who can see the location of photos you post.",
                        style: TextStyle(color: Colors.black, fontSize: 16)),
                  ),
                ],
              ),
            ),
            TextButton(
              onPressed: () => _showChoiceThreeDialog(context),
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.23),
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
                    "Safety level",
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 17,
                    ),
                  ),
                  SizedBox(
                    height: _height * 0.03,
                  ),
                  Container(
                    width: 0.8 * _width,
                    child: Text(
                        "Choose a safety level for your posts. This will affect who can see your content based on their SafeSearch filter.",
                        style: TextStyle(color: Colors.black, fontSize: 16)),
                  )
                ],
              ),
            ),
            TextButton(
              onPressed: switchValFunc,
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.22),
                primary: Colors.transparent,
                side: BorderSide(
                  width: 0.5,
                  color: Colors.grey[300],
                ),
              ),
              child: Row(
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Import EXIF location data",
                        style: TextStyle(
                          color: Colors.black,
                          fontWeight: FontWeight.bold,
                          fontSize: 17,
                        ),
                      ),
                      SizedBox(
                        height: _height * 0.03,
                      ),
                      Container(
                        width: _width * 0.6,
                        child: Text(
                            "Choose whether or not location information from your photos is uploaded to Flickr.",
                            style:
                                TextStyle(color: Colors.black, fontSize: 16)),
                      )
                    ],
                  ),
                  SizedBox(
                    width: _width * 0.08,
                  ),
                  Switch(
                    activeColor: Colors.blueAccent[700],
                    value: _switchVal,
                    onChanged: (_switchVal) {
                      switchValFunc();
                    },
                  )
                ],
              ),
            ),
            TextButton(
              onPressed: () => _showChoiceFourDialog(context),
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.only(left: 20, right: 20),
                alignment: Alignment.centerLeft,
                minimumSize: Size(_width, _height * 0.15),
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
                    "SafeSearch filter",
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 17,
                    ),
                  ),
                  SizedBox(
                    height: _height * 0.03,
                  ),
                  ContainerResponsive(
                    child: Text(
                        "Choose the level of explicit content shown in search results and feeds.",
                        style: TextStyle(color: Colors.black, fontSize: 16)),
                  )
                ],
              ),
            ),
          ],
        ));
  }
}

class SingleNotifier1 extends ChangeNotifier {
  String _currentChoice = choices1[0];
  SingleNotifier1();

  String get currentChoices => _currentChoice;

  updateChoice(String value) {
    if (value != _currentChoice) {
      _currentChoice = value;
      notifyListeners();
    }
  }
}

class SingleNotifier2 extends ChangeNotifier {
  String _currentChoice = choices2[0];
  SingleNotifier2();

  String get currentChoices => _currentChoice;

  updateChoice(String value) {
    if (value != _currentChoice) {
      _currentChoice = value;
      notifyListeners();
    }
  }
}

class SingleNotifier3 extends ChangeNotifier {
  String _currentChoice = choices3[0];
  SingleNotifier3();

  String get currentChoices => _currentChoice;

  updateChoice(String value) {
    if (value != _currentChoice) {
      _currentChoice = value;
      notifyListeners();
    }
  }
}

class SingleNotifier4 extends ChangeNotifier {
  String _currentChoice = choices4[0];
  SingleNotifier4();

  String get currentChoices => _currentChoice;

  updateChoice(String value) {
    if (value != _currentChoice) {
      _currentChoice = value;
      notifyListeners();
    }
  }
}
