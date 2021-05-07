
import 'package:flutter/material.dart';

import '../../models/tag.dart';
import '../widgets/user_tags.dart';


class TagsPage extends StatelessWidget {
  final List<Tag> userTagsList = [

  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.grey[800],
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text("Add/Remove Tags"),
            ElevatedButton(
              onPressed: () {
                 Navigator.pop(context,userTagsList);
              },
              child: Text("Done",
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w700,
                  )),
              style: ElevatedButton.styleFrom(
                primary: Colors.grey[800],
                side: BorderSide(color: Colors.white, width: 2),
              ),
            ),
          ],
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
         
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[UserTags(userTagsList)],
        ),
      ),
    );
  }
}
