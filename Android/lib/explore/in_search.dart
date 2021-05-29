import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class InSearch extends StatefulWidget {
  @override
  _InSearchState createState() => _InSearchState();
}

class _InSearchState extends State<InSearch> {
  @override
  Widget build(BuildContext context) {
    double _width = MediaQuery.of(context).size.width;
    double _height = MediaQuery.of(context).size.height;
    return Scaffold(
      body: Container(
          constraints: BoxConstraints(maxHeight: 0.15 * _height),
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
                  onPressed: () {},
                  child: Icon(
                    FontAwesomeIcons.search,
                    color: Colors.white,
                    size: 15,
                  )),
              TextFormField(
                  style: TextStyle(color: Colors.white, fontSize: 20),
                  decoration: InputDecoration(
                    contentPadding: EdgeInsets.only(
                        left: _width * 0.05, top: _height * 0.1),
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
                  onTap: () {}),
              Container(
                  child: ElevatedButton(
                      onPressed: () {
                        Navigator.of(context).pop();
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
                          )))),
            ],
          )),
    );
  }
}
