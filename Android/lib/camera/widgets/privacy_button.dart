import 'package:flutter/material.dart';

class PrivacyButton extends StatefulWidget {
  var choice = "Public";
  PrivacyButton();
  @override
  _PrivacyButtonState createState() => _PrivacyButtonState();
}

class _PrivacyButtonState extends State<PrivacyButton> {
  void setPrivacy(BuildContext context, String choice) async {
    //Set privacy option
    widget.choice = choice;
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
                    child: Text(
                      widget.choice,
                      style: TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                    onPressed: () {
                      showChoiceDialog(context);
                    },
                  ),
                ],
              ),
            ),
          ),
        ));
  }
}
