import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class FollowButton extends StatefulWidget {
  @override
  _FollowButtonState createState() => _FollowButtonState();
}

class _FollowButtonState extends State<FollowButton> {
  int mode = 0;
  void setToFollow() {
    mode = 1;
    setState(() {});
  }

  void setToTick() {
    mode = 0;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return mode == 0
        ? IconButton(
            icon: FaIcon(FontAwesomeIcons.checkSquare, size: 24),
            onPressed: () {
              setToFollow();
            },
          )
        : Container(
            height: 0.05 * MediaQuery.of(context).size.height,
            decoration: BoxDecoration(
              border: Border(
                bottom: BorderSide(color: Colors.black),
                left: BorderSide(color: Colors.black),
                right: BorderSide(color: Colors.black),
                top: BorderSide(color: Colors.black),
              ),
            ),
            child: TextButton(
              child: Text("+ Follow",
                  style: TextStyle(
                      fontWeight: FontWeight.bold, color: Colors.black)),
              onPressed: () {
                setToTick();
              },
            ),
          );
  }
}
