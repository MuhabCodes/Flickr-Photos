import 'package:flutter/material.dart';

import './new_tag.dart';
import './tags_list.dart';
import '../../models/tag.dart';


class UserTags extends StatefulWidget {
  final List<Tag> tagsList;
  UserTags(this.tagsList);
  @override
  _UserTagsState createState() => _UserTagsState();
}

class _UserTagsState extends State<UserTags> {
  int tagID;

  void _incrementTagID() {
    if (tagID == null)
      tagID = 0;
    else
      tagID++;
  }

  void addNewTag(String inputText, int tagID) {
    final newTag = Tag(inputText: inputText, tagID: tagID);
    setState(() {
      widget.tagsList.add(newTag);
      _incrementTagID();
    });
  }

  void removeTag(int requiredID) {
    setState(() {
      widget.tagsList.removeWhere((tag) => tag.tagID == requiredID);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      NewTag(addNewTag, tagID),
      TagsList(widget.tagsList, removeTag),
    ]);
  }
}
