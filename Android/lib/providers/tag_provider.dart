import 'package:flutter/material.dart';

import '../models/tag.dart';

class TagProvider extends ChangeNotifier {
  List<Tag> userTagsList = [];
  int tagID;
  var notEmpty;
  get userTags => userTagsList;

  void setTagsList(List inputTags) {
    userTagsList = inputTags;
    notEmpty=init();
  }

  void _incrementTagID() {
    if (tagID == null)
      tagID = 0;
    else
      tagID++;
  }

  void addNewTag(String inputText, int tagID) {
    final newTag = Tag(inputText: inputText, tagID: tagID);

    userTagsList.add(newTag);
    _incrementTagID();
  }

  void removeTag(int requiredID) {
    userTagsList.removeWhere((tag) => tag.tagID == requiredID);
  }

  List<Tag> returnTags() {
    return userTagsList;
  }

  Future<int> init() async {
    if (userTagsList == null) {
      return 0;
    } else {
      return 1;
    }
   // notifyListeners();
  }
}
