import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/user_provider.dart';

class Description extends StatefulWidget {
  @override
  _DescriptionState createState() => _DescriptionState();
}

class _DescriptionState extends State<Description> {
  String changedText;
  bool isWriting = false;
  FocusNode myFocusNode;
  bool isFinished = false;
  var userProvider;
  int close = 0;
  @override
  void initState() {
    super.initState();
    userProvider = Provider.of<UserProvider>(context, listen: false);
    userProvider.setUser();
    myFocusNode = FocusNode();
  }

  @override
  Widget build(BuildContext context) {
    final routeArgs =
        ModalRoute.of(context).settings.arguments as Map<String, String>;
    final String title = routeArgs['title'];
    final String initialtext = routeArgs['initialtext'];
    userProvider = Provider.of<UserProvider>(context);
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.grey[800],
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              title,
              style: TextStyle(
                fontSize: 20,
              ),
            ),
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
                  userProvider.setMember(title, changedText);
                  userProvider.createUser();
                }
                if (close == 2) {
                  Navigator.pop(context);
                }
              },
              child: Text(isWriting ? "Done" : "Edit",
                  style: TextStyle(
                    fontSize: 16,
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
          style: TextStyle(
            fontSize: 16,
          ),
          onTap: () => setState(() {
            isWriting = true;
          }),
          onChanged: (value) => {changedText = value},
          onFieldSubmitted: (value) => {
            userProvider.setMember(title, value),
            userProvider.createUser(),
            Navigator.pop(context)
          },
          cursorHeight: 30,
          decoration: InputDecoration(
              floatingLabelBehavior: FloatingLabelBehavior.never,
              labelText: "Add $title",
              labelStyle: TextStyle(fontSize: 16, color: Colors.grey[500])),
        ),
      ),
    );
  }
}
