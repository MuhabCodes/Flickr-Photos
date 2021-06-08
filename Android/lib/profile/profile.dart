import 'package:flickr/profile/public_tab.dart';
import 'package:flickr/profile/showMoreVertMenu.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import './about_tap.dart';
import './camera_roll.dart';
import './followers.dart';
import './following.dart';
import './stats.dart';
import '../providers/user_provider.dart';

/// This is the stateful widget that the main application instantiates.
class Profile extends StatefulWidget {
  @override
  _ProfileState createState() => _ProfileState();
}

/// This is the private State class that goes with MyStatefulWidget.
class _ProfileState extends State<Profile> {
  var userProvider;
  int _initialIndex = 2;

  @override
  Widget build(BuildContext context) {
    userProvider = Provider.of<UserProvider>(context, listen: true);
    var size = MediaQuery.of(context).size;
    if (userProvider.status == Status.Loading) {
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
                  automaticallyImplyLeading: false,
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
                            onPressed: () {
                              showModalBottomSheet(
                                  isScrollControlled: true,
                                  context: context,
                                  builder: (BuildContext context) {
                                    return Container(
                                      height:
                                          MediaQuery.of(context).size.height *
                                              0.9,
                                      child: ShowMoreVertMenu(),
                                    );
                                  });
                            },
                          ),
                        ),
                      )
                    ],
                  ),
                  flexibleSpace: FlexibleSpaceBar(
                    background: Container(
                      decoration: BoxDecoration(
                        color: Colors.black,
                        image: DecorationImage(
                          colorFilter: new ColorFilter.mode(
                              Colors.black.withOpacity(0.3), BlendMode.dstATop),
                          //background image for profile
                          image: AssetImage("lib/assets/background.jpg"),
                          fit: BoxFit.cover,
                        ),
                      ),
                      child: Center(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            CircleAvatar(
                                radius: 30,
                                backgroundImage: userProvider.user.userAvatar !=
                                        null
                                    ? NetworkImage(userProvider.user.userAvatar)
                                    : AssetImage('lib/assets/follower2.jpg'),
                                // ignore: deprecated_member_use
                                child: FlatButton(
                                  onPressed: () {},
                                  child: null,
                                )),
                            Text(
                              userProvider.user.firstName == null
                                  ? "Logged User"
                                  : userProvider.user.firstName +
                                      " " +
                                      userProvider.user.lastName,
                              style: TextStyle(
                                  fontSize: 23,
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Text(
                                    userProvider.user.followersCount.toString(),
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
                                Text(
                                    userProvider.user.followingCount.toString(),
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
                Public(),
                Icon(Icons.directions_bike),
                Icon(Icons.directions_bike),
              ],
            ),
          ),
        ),
      );
  }
}
