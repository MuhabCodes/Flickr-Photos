import 'package:flutter/foundation.dart';

class Tag {
  final String inputText;
  final int tagID;
  Tag({
    @required this.inputText,
    @required this.tagID,
  });
}

class GlobalTagsList {
  final List<Tag> tagsList;
  GlobalTagsList({
    @required this.tagsList,
  });
}
