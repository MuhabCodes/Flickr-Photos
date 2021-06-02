import 'package:flutter/material.dart';

class NewTag extends StatelessWidget {
  final Function addTag;
  int tagID;
  String inputText;
  NewTag(this.addTag, this.tagID);
  @override
  Widget build(BuildContext context) {
    return Builder(builder: (BuildContext ncontext) {
      return Container(
        padding: EdgeInsets.all(10),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Flexible(
              child: TextField(
                decoration: InputDecoration(labelText: 'Add a tag'),
                onChanged: (value) {
                  inputText = value;
                },
              ),
            ),
            IconButton(
              icon: Icon(Icons.add_box_outlined),
              onPressed: () {
                if (inputText != null) {
                  addTag(inputText, tagID);
                } else
                  return;
              },
            ),
          ],
        ),
      );
    });
  }
}
