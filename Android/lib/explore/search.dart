import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class Search extends StatefulWidget {
  static bool change = false;
  @override
  _SearchState createState() => _SearchState();
}

class _SearchState extends State<Search> {
  bool _switch = false;
  int counter = 0;
  void _switchOn() {
    setState(() {
      _switch = true;
      Search.change = _switch;
    });
  }

  void _switchOff() {
    setState(() {
      _switch = false;
      Search.change = _switch;
    });
  }

  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;
    return Scaffold(
      body: Container(
          constraints: BoxConstraints(maxHeight: 0.075 * _height),
          //padding: EdgeInsets.only(top: 200),
          color: Colors.grey[800],
          child: Row(
            children: [
              ElevatedButton(
                  style: ElevatedButton.styleFrom(
                      primary: Colors.grey[800],
                      onPrimary: Colors.grey[800],
                      onSurface: Colors.grey[800],
                      shadowColor: null,
                      shape: new RoundedRectangleBorder(
                        borderRadius: new BorderRadius.circular(0.0),
                      ),
                      minimumSize: Size(_width * 0.1, _height * 0.1)),
                  onPressed: () {
                    // if (!_switch && counter == 0) {
                    //   // Navigator.push(
                    //   //     context,
                    //   //     MaterialPageRoute(
                    //   //         builder: (context) => Search(_switch)));
                    //   // counter++;
                    // }
                    _switchOn();
                  },
                  child: Icon(
                    FontAwesomeIcons.search,
                    color: Colors.white,
                    size: 15,
                  )),
              TextFormField(
                style: TextStyle(color: Colors.white, fontSize: 20),
                decoration: InputDecoration(
                  contentPadding:
                      EdgeInsets.only(left: _width * 0.05, top: _height * 0.1),
                  fillColor: Colors.white,
                  focusColor: Colors.white,
                  focusedBorder: InputBorder.none,
                  constraints: BoxConstraints(
                      maxHeight: 0.05 * _height, maxWidth: _width * 0.6),
                  border: InputBorder.none,
                  hintText: "Flickr Search",
                  hintStyle: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                  ),
                  filled: false,
                ),
                onTap: () {
                  // if (!_switch && counter == 0) {
                  //   Navigator.push(
                  //       context,
                  //       MaterialPageRoute(
                  //           builder: (context) => Search(_switch)));
                  //   counter++;
                  // }
                  _switchOn();
                },
              ),
              Container(
                  child: Search.change
                      ? ElevatedButton(
                          onPressed: () {
                            _switchOff();
                            // Navigator.of(context).pop();
                          },
                          child: const Text(
                            'Cancel',
                            style: TextStyle(fontSize: 10),
                          ),
                          style: ElevatedButton.styleFrom(
                              minimumSize: Size(
                                  MediaQuery.of(context).size.width * 0.1,
                                  MediaQuery.of(context).size.height * 0.05),
                              primary: Colors.transparent,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(0.0),
                                side: BorderSide(
                                  color: Colors.white,
                                ),
                              )))
                      : null),
            ],
          )),
    );
  }
}
