import 'package:flutter/material.dart';

import '../../models/tag.dart';


class TagsList extends StatelessWidget {
  final List<Tag> tagsList;
  final Function removeTag;
  TagsList(this.tagsList, this.removeTag);
  @override
  Widget build(BuildContext context) {
    return Column(
      children: tagsList.map((tx) {
        return Card(
          elevation: 5,
          margin: EdgeInsets.symmetric(
            vertical: 8,
            horizontal: 5,
          ),
          child: ListTile(
            leading: Text(
              tx.inputText,
            ),
            trailing: IconButton(
              onPressed: () {
                removeTag(tx.tagID);
              },
              icon: Icon(Icons.cancel_outlined),
            ),
          ),
        );
      }).toList(),
    );
  }
}
