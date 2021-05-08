import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/about_provider.dart';

class Description extends StatefulWidget {
  @override
  _DescriptionState createState() => _DescriptionState();
}

class _DescriptionState extends State<Description> {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<AboutProvider>(
        create: (BuildContext context) => AboutProvider(),
        child: EnterAboutField());
  }
}

class EnterAboutField extends StatefulWidget {
  @override
  _EnterAboutFieldState createState() => _EnterAboutFieldState();
}

class _EnterAboutFieldState extends State<EnterAboutField> {
  String changedText;
  bool isWriting = false;
  FocusNode myFocusNode;
  bool isFinished = false;
  var aboutProvider;
  int close = 0;
  @override
  void initState() {
    super.initState();
    aboutProvider = Provider.of<AboutProvider>(context, listen: false);
    aboutProvider.setabout();
    myFocusNode = FocusNode();
  }

  @override
  Widget build(BuildContext context) {
    final routeArgs =
        ModalRoute.of(context).settings.arguments as Map<String, String>;
    final String title = routeArgs['title'];
    final String initialtext = routeArgs['initialtext'];
    aboutProvider = Provider.of<AboutProvider>(context);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.grey[800],
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(title),
            ElevatedButton(
              onPressed: () {
                close++;
                if (!isWriting) {
                  myFocusNode.requestFocus();
                  setState(() {
                    isWriting = true;
                  });
                }
                if (changedText != null) {
                  aboutProvider.setmember(title, changedText);
                  aboutProvider.createAbout();
                }
                if (close == 2) {
                  Navigator.pop(context);
                }
              },
              child: Text(isWriting ? "Done" : "Edit",
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w700,
                  )),
              style: ElevatedButton.styleFrom(
                primary: Colors.grey[800],
                side: BorderSide(color: Colors.white, width: 2),
              ),
            ),
          ],
        ),
      ),
      body: Card(
        elevation: 5,
        child: TextFormField(
          focusNode: myFocusNode,
          initialValue: initialtext,
          onTap: () => setState(() {
            isWriting = true;
          }),
          onChanged: (value) => {changedText = value},
          onFieldSubmitted: (value) => {
            aboutProvider.setmember(title, value),
            aboutProvider.createAbout(),
            Navigator.pop(context)
          },
          cursorHeight: 30,
          decoration: InputDecoration(
              floatingLabelBehavior: FloatingLabelBehavior.never,
              labelText: "Add $title",
              labelStyle: TextStyle(color: Colors.grey[500])),
        ),
      ),
    );
  }

  void dispose() {
    // Clean up the focus node when the Form is disposed.
    myFocusNode.dispose();

    super.dispose();
  }
}
