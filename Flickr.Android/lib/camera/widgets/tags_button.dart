import 'package:flutter/material.dart';

import '../../models/tag.dart';
import '../Pages/add_remove_tags.dart';

class TagsButton extends StatefulWidget {
  TagsButton();
  @override
  _TagsButtonState createState() => _TagsButtonState();
}

class _TagsButtonState extends State<TagsButton> {
  bool isTag = false;
  List<Tag> tagsList;
  void setTagsList() async {
    tagsList = await Navigator.push(
        context, MaterialPageRoute(builder: (context) => (TagsPage())));
    tagsList.length != 0 ? isTag = false : isTag = true;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: const BoxConstraints(
        minWidth: double.infinity,
        maxWidth: double.infinity,
        minHeight: 0.0,
        maxHeight: double.infinity,
      ),
      child: Container(
        child: Card(
          child: ListTile(
        
            leading: Icon(Icons.lock_open),
            title: Row(
               mainAxisAlignment: MainAxisAlignment.start,
              children: [
                TextButton(
                  child: isTag
                      ? Text(
                          "Tags",
                          style: TextStyle(
                            color: Colors.black,
                            fontWeight: FontWeight.w700,
                          ),
                        )
                      : Text("Tagslist"),
                  onPressed: () {
                    setTagsList();
                  },
                ),
              ],
            ),
      
          ),
        ),
      ),
    );
  }
}
