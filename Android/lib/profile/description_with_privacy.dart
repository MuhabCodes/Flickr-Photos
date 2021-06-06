import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/user_provider.dart';

class DescriptionWithPrivacy extends StatefulWidget {
  @override
  _DescriptionStateWithPrivacy createState() => _DescriptionStateWithPrivacy();
}

class _DescriptionStateWithPrivacy extends State<DescriptionWithPrivacy> {
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
    final String initialtext = routeArgs['initialText'];
    userProvider = Provider.of<UserProvider>(context);
    var size = MediaQuery.of(context).size;
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
                userProvider.notify();
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
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
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
          Container(
            height: 40,
            child: TextButton(
                onPressed: () {
                  showModalBottomSheet(
                      isScrollControlled: true,
                      context: context,
                      builder: (BuildContext context) {
                        return Container(
                            height: size.height * 0.4,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Container(
                                  height: size.height * 0.08,
                                  child: Align(
                                      alignment: Alignment.center,
                                      child: Text(
                                        "Visible To:",
                                        style: TextStyle(
                                            color: Colors.grey, fontSize: 14),
                                      )),
                                ),
                                Container(
                                  height: size.height * 0.08,
                                  child: TextButton(
                                    onPressed: () {
                                      setState(() {
                                        title == "Email"
                                            ? userProvider
                                                .user.emailVisibility = "Anyone"
                                            : userProvider.user.cityVisibility =
                                                "Anyone";
                                      });

                                      Navigator.pop(context);
                                      userProvider.notify();
                                    },
                                    child: Text(
                                      "Anyone",
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16),
                                    ),
                                  ),
                                ),
                                Container(
                                  height: size.height * 0.08,
                                  child: TextButton(
                                    onPressed: () {
                                      setState(() {
                                        title == "Email"
                                            ? userProvider
                                                    .user.emailVisibility =
                                                "Any Flickr Member"
                                            : userProvider.user.cityVisibility =
                                                "Any Flickr Member";
                                      });

                                      Navigator.pop(context);
                                      userProvider.notify();
                                    },
                                    child: Text(
                                      "Any Flickr Member",
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16),
                                    ),
                                  ),
                                ),
                                Container(
                                  height: size.height * 0.08,
                                  child: TextButton(
                                    onPressed: () {
                                      setState(() {
                                        title == "Email"
                                            ? userProvider
                                                    .user.emailVisibility =
                                                "People You Follow"
                                            : userProvider.user.cityVisibility =
                                                "People You Follow";
                                      });
                                      Navigator.pop(context);
                                      userProvider.notify();
                                    },
                                    child: Text(
                                      "People You Follow",
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16),
                                    ),
                                  ),
                                ),
                                Container(
                                  height: size.height * 0.08,
                                  child: TextButton(
                                    onPressed: () {
                                      setState(() {
                                        title == "Email"
                                            ? userProvider
                                                    .user.emailVisibility =
                                                "Friends and Family"
                                            : userProvider.user.cityVisibility =
                                                "Friends and Family";
                                      });
                                      Navigator.pop(context);
                                      userProvider.notify();
                                    },
                                    child: Text(
                                      "Friends and Family",
                                      style: TextStyle(
                                          color: Colors.black,
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16),
                                    ),
                                  ),
                                ),
                              ],
                            ));
                      });
                },
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text("Visable to:",
                        style: TextStyle(fontSize: 16, color: Colors.black)),
                    Text(
                        title == "Email"
                            ? userProvider.user.emailVisibility
                            : userProvider.user.cityVisibility,
                        style: TextStyle(fontSize: 16, color: Colors.black))
                  ],
                )),
          ),
          Divider(
            height: 20,
            color: Colors.black,
          )
        ],
      ),
    );
  }
}
