import 'package:flutter/material.dart';

class Stats extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Padding(
          padding: const EdgeInsets.only(top: 50),
          child: Icon(
            Icons.timeline_sharp,
            size: 60,
            color: Colors.grey,
          ),
        ),
        Text("Track your views",
            style: TextStyle(
                color: Colors.grey, fontSize: 18, fontWeight: FontWeight.w600)),
        Text("Get a better understanding of how",
            style: TextStyle(
                color: Colors.grey, fontSize: 15, fontWeight: FontWeight.w400)),
        Text("people are discovering your photos",
            style: TextStyle(
                color: Colors.grey, fontSize: 15, fontWeight: FontWeight.w400)),
        Text("with Flickr Pro.",
            style: TextStyle(
                color: Colors.grey, fontSize: 15, fontWeight: FontWeight.w400)),
        Container(
          margin: EdgeInsets.all(15),
          // ignore: deprecated_member_use
          child: RaisedButton(
            onPressed: () {},
            color: Colors.grey[50],
            shape: RoundedRectangleBorder(
              side: BorderSide(color: Colors.black, width: 2),
            ),
            child: Text(
              "Learn More",
              style: TextStyle(
                fontSize: 16,
              ),
            ),
          ),
        )
      ],
    );
  }
}
