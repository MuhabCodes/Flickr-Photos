import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';

import '../../models/tag.dart';
import '../../providers/new_post_provider.dart';
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
    var newPostProvider = Provider.of<NewPostProvider>(context, listen: true);

    return ConstrainedBox(
      constraints: const BoxConstraints(
        minWidth: double.infinity,
        maxWidth: double.infinity,
        minHeight: 0.0,
        maxHeight: double.infinity,
      ),
      child: Container(
        decoration: BoxDecoration(
          border: Border(bottom: BorderSide(color: Colors.grey.shade200)),
        ),
        child: ListTile(
          leading: Icon(FontAwesomeIcons.tag),
          title: isTag
              ? SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: newPostProvider.tagsList.map((tx) {
                      return Container(
                          child:
                              Text.rich(TextSpan(text: '', children: <TextSpan>[
                        TextSpan(
                            text: tx.inputText,
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Colors.black,
                            )),
                        TextSpan(
                            text: ", ",
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              color: Colors.black,
                            ))
                      ])));
                    }).toList(),
                  ),
                )
              : Text(
                  "Tagslist",
                  style: TextStyle(
                    color: Colors.grey,
                    fontWeight: FontWeight.w700,
                  ),
                ),
          onTap: () {
            setTagsList();
          },
        ),
      ),
    );
  }
}
