
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
            Container(height:0.035*MediaQuery.of(context).size.height ,
            width: 0.5*MediaQuery.of(context).size.width,
              child: Text("Add/Remove Tags")),
            Container(
              height:0.06*MediaQuery.of(context).size.height ,
           width: 0.2*MediaQuery.of(context).size.width,
              child: ElevatedButton(
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
