import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import './Followers.dart';
import './about_tap.dart';
import './camera_roll.dart';
import './following.dart';
import './stats.dart';
import '../providers/about_provider.dart';
import '../providers/photo_provider.dart';

/// This is the stateful widget that the main application instantiates.
class Profile extends StatefulWidget {
  @override
  _ProfileState createState() => _ProfileState();
}

/// This is the private State class that goes with MyStatefulWidget.
class _ProfileState extends State<Profile> {
  bool _notification = false;
  var aboutProvider;
  var photoProvider;
  int _initialIndex = 2;

  @override
  void initState() {
    aboutProvider = Provider.of<AboutProvider>(context, listen: false);
    aboutProvider.setabout();
    photoProvider = Provider.of<PhotoProvider>(context, listen: false);
    photoProvider.setPhotos();
    //photoProvider.arangePhoto();
    super.initState();
  }

  Future<void> _showMoreVertMenue(double width) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: true, // user must tap button!
      builder: (ctx) {
        return Dialog(
          insetPadding: EdgeInsets.all(0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              Container(
                width: double.infinity,
                padding: EdgeInsets.only(left: 20, bottom: 10, top: 5),
                child: TextButton(
                  style: ButtonStyle(
                    alignment: Alignment.centerLeft,
                  ),
                  child: const Text(
                    'Auto-Uploadr',
                    style: TextStyle(color: Colors.black, fontSize: 18),
                  ),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ),
              Container(
                padding: EdgeInsets.only(left: 20, bottom: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    TextButton(
                      child: const Text(
                        'notifications',
                        style: TextStyle(color: Colors.black, fontSize: 18),
                      ),
                      onPressed: () {},
                    ),
                    Switch(
                      value: _notification,
                      onChanged: (val) => {},
                    )
                  ],
                ),
              ),
              Container(
                width: double.infinity,
                padding: EdgeInsets.only(left: 20, bottom: 10),
                child: TextButton(
                  style: ButtonStyle(
                    alignment: Alignment.centerLeft,
                  ),
                  child: const Text(
                    'Privacy and Safety',
                    style: TextStyle(color: Colors.black, fontSize: 18),
                  ),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    padding: EdgeInsets.only(left: 20, bottom: 10),
                    child: TextButton(
                      child: const Text(
                        'Use Native Video Camera',
                        style: TextStyle(color: Colors.black, fontSize: 18),
                      ),
                      onPressed: () {
                        Navigator.of(context).pop();
                      },
                    ),
                  ),
                  Switch(value: true, onChanged: (val) {})
                ],
              ),
              Padding(
                padding: EdgeInsets.all(20),
                child: Divider(
                  height: 10,
                  thickness: 2,
                  color: Colors.grey[300],
                ),
              ),
              Container(
                width: double.infinity,
                padding: EdgeInsets.only(left: 20, bottom: 10),
                child: TextButton(
                  style: ButtonStyle(
                    alignment: Alignment.centerLeft,
                  ),
                  child: const Text(
                    'Feedback',
                    style: TextStyle(color: Colors.black, fontSize: 18),
                  ),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ),
              Container(
                width: double.infinity,
                padding: EdgeInsets.only(left: 20, bottom: 10),
                child: TextButton(
                  style: ButtonStyle(
                    alignment: Alignment.centerLeft,
                  ),
                  child: const Text(
                    'About',
                    style: TextStyle(color: Colors.black, fontSize: 18),
                  ),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ),
              Container(
                width: double.infinity,
                padding: EdgeInsets.only(left: 20, bottom: 10),
                child: TextButton(
                  style: ButtonStyle(
                    alignment: Alignment.centerLeft,
                  ),
                  child: const Text(
                    'Help',
                    style: TextStyle(color: Colors.black, fontSize: 18),
                  ),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ),
              Padding(
                padding:
                    EdgeInsets.only(top: 20, left: 20, right: 20, bottom: 5),
                child: Divider(
                  height: 10,
                  thickness: 2,
                  color: Colors.grey[300],
                ),
              ),
              Container(
                width: double.infinity,
                color: Colors.grey[900],
                padding: EdgeInsets.only(left: 20, bottom: 10),
                child: TextButton(
                  style: ButtonStyle(
                    alignment: Alignment.centerLeft,
                  ),
                  child: const Text(
                    'Sign Out',
                    style: TextStyle(color: Colors.white, fontSize: 18),
                  ),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    aboutProvider = Provider.of<AboutProvider>(context, listen: true);
    var size = MediaQuery.of(context).size;
    if (aboutProvider.status == Status.Loading) {
      return Scaffold(
        body: Center(
          child: CircularProgressIndicator(
            semanticsLabel: 'Linear progress indicator',
          ),
        ),
      );
    } else
      return DefaultTabController(
        initialIndex: _initialIndex,
        length: 6,
        child: Scaffold(
          body: NestedScrollView(
            headerSliverBuilder: (context, value) {
              return [
                SliverAppBar(
                  backgroundColor: Colors.white,
                  primary: true,
                  pinned: true,
                  floating: true,
                  expandedHeight: size.height * 0.3,
                  title: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        child: Padding(
                          padding: const EdgeInsets.all(0),
                          child: IconButton(
                            icon: Icon(Icons.refresh),
                            onPressed: () {},
                          ),
                        ),
                      ),
                      Container(
                        child: Padding(
                          padding: const EdgeInsets.all(0),
                          child: IconButton(
                            icon: Icon(Icons.more_vert),
                            onPressed: () => _showMoreVertMenue(size.width),
                          ),
                        ),
                      )
                    ],
                  ),
                  flexibleSpace: FlexibleSpaceBar(
                    background: Container(
                      decoration: BoxDecoration(
                        image: DecorationImage(
                          //background image for profile
                          image: NetworkImage(
                              "https://static3.depositphotos.com/1000820/238/i/950/depositphotos_2389493-stock-photo-creative-wood-background.jpg"),
                          fit: BoxFit.cover,
                        ),
                      ),
                      child: Center(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            CircleAvatar(
                                radius: 30,
                                backgroundImage: NetworkImage(
                                    "https://farm4.staticflickr.com/3914/15118079089_489aa62638_b.jpg"),
                                // ignore: deprecated_member_use
                                child: FlatButton(
                                  onPressed: () {},
                                  child: null,
                                )),
                            Text(
                              aboutProvider.about.firstName +
                                  " " +
                                  aboutProvider.about.lastName,
                              style: TextStyle(
                                  fontSize: 23,
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Text("0",
                                    style: TextStyle(
                                      fontSize: 16,
                                      color: Colors.white,
                                    )),
                                TextButton(
                                  onPressed: () {
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => Followers()),
                                    );
                                  },
                                  child: Text(
                                    'Followers',
                                    style: TextStyle(
                                        fontSize: 16,
                                        color: Colors.white,
                                        fontWeight: FontWeight.w500),
                                  ),
                                ),
                                Text("— ",
                                    style: TextStyle(
                                      color: Colors.white,
                                    )),
                                Text("1",
                                    style: TextStyle(
                                      fontSize: 16,
                                      color: Colors.white,
                                    )),
                                TextButton(
                                  onPressed: () {
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => Following()),
                                    );
                                  },
                                  child: Text(
                                    'Following',
                                    style: TextStyle(
                                        fontSize: 16,
                                        color: Colors.white,
                                        fontWeight: FontWeight.w500),
                                  ),
                                ),
                              ],
                            )
                          ],
                        ),
                      ),
                    ),
                  ),
                  bottom: PreferredSize(
                    preferredSize: Size.fromHeight(56),
                    child: Center(
                      child: Container(
                        width: double.infinity,
                        decoration: BoxDecoration(color: Colors.white),
                        child: TabBar(
                          isScrollable: true,
                          onTap: (value) => _initialIndex = value,
                          tabs: [
                            const Tab(
                              child: Text(
                                "About",
                                style: TextStyle(
                                    fontSize: 18, color: Colors.black),
                              ),
                            ),
                            const Tab(
                              child: Text(
                                "Stats",
                                style: TextStyle(
                                    fontSize: 18, color: Colors.black),
                              ),
                            ),
                            const Tab(
                              child: Text(
                                "Camera Roll",
                                style: TextStyle(
                                    fontSize: 18, color: Colors.black),
                              ),
                            ),
                            const Tab(
                              child: Text(
                                "Public",
                                style: TextStyle(
                                    fontSize: 18, color: Colors.black),
                              ),
                            ),
                            const Tab(
                              child: Text(
                                "Albums",
                                style: TextStyle(
                                    fontSize: 18, color: Colors.black),
                              ),
                            ),
                            const Tab(
                              child: Text(
                                "Groups",
                                style: TextStyle(
                                    fontSize: 18, color: Colors.black),
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ];
            },
            body: TabBarView(
              children: [
                AboutTap(),
                Stats(),
                CameraRoll(),
                Icon(Icons.directions_transit),
                Icon(Icons.directions_bike),
                Icon(Icons.directions_bike),
              ],
            ),
          ),
        ),
      );
  }
}
