import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/new_post_provider.dart';

// ignore: must_be_immutable
class PrivacyButton extends StatefulWidget {
  var choice = "Public";
  String privacy = "Public";
  PrivacyButton(this.privacy);
  @override
  _PrivacyButtonState createState() => _PrivacyButtonState();
}

class _PrivacyButtonState extends State<PrivacyButton> {
  void setPrivacy(BuildContext context, String choice) async {
    widget.choice = choice;
    widget.privacy = choice;
    this.setState(() {});
    Navigator.of(context).pop();
  }

  Future<void> showChoiceDialog(BuildContext context) {
    return showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
              title: Text("Edit Privacy"),
              content: SingleChildScrollView(
                child: ListBody(
                  children: <Widget>[
                    GestureDetector(
                      child: Text(
                        "Public",
                      ),
                      onTap: () {
                        setPrivacy(context, "Public");
                      },
                    ),
                    Padding(padding: EdgeInsets.all(8.0)),
                    GestureDetector(
                      child: Text(
                        "Friends",
                      ),
                      onTap: () {
                        setPrivacy(context, "Friends");
                      },
                    ),
                    Padding(padding: EdgeInsets.all(8.0)),
                    GestureDetector(
                      child: Text(
                        "Family",
                      ),
                      onTap: () {
                        setPrivacy(context, "Family");
                      },
                    ),
                    Padding(padding: EdgeInsets.all(8.0)),
                    GestureDetector(
                      child: Text(
                        "Friends and Family",
                      ),
                      onTap: () {
                        setPrivacy(context, "Friends and Family");
                      },
                    ),
                    Padding(padding: EdgeInsets.all(13.0)),
                    GestureDetector(
                      child: Text(
                        "Private",
                      ),
                      onTap: () {
                        setPrivacy(context, "Private");
                      },
                    ),
                  ],
                ),
              ));
        });
  }

  @override
  Widget build(BuildContext context) {
    var newPostProvider = Provider.of<NewPostProvider>(context, listen: true);
    newPostProvider.setPrivacy(widget.choice);
    return ConstrainedBox(
        constraints: const BoxConstraints(
          minWidth: double.infinity,
          maxWidth: double.infinity,
          minHeight: 0.0,
          maxHeight: double.infinity,
        ),
        child: Container(
          decoration: BoxDecoration(),
          child: ListTile(
            leading: Icon(Icons.lock_open),
            title: Text(
              newPostProvider.privacy,
              style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.w700,
              ),
            ),
            onTap: () {
              newPostProvider.setPrivacy(widget.choice);
              showChoiceDialog(context);
            },
          ),
        ));
  }
}
