
import 'package:flickr/explore/search.dart';
import 'package:flickr/home/home.dart';
import 'package:flickr/notifications/notifications.dart';
import 'package:flickr/profile/profile.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import '../camera/Pages/camera_view.dart';


class TopNavigationBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 5, //number of tabs
      child: new Scaffold(
        body: new NestedScrollView(
            headerSliverBuilder:
                (BuildContext context, bool innerBoxIsScrolled) {
              return <Widget>[
                new SliverAppBar(
                  toolbarHeight:0.06* MediaQuery.of(context).size.height ,
                  automaticallyImplyLeading: false,
                  backgroundColor: Colors.grey[900],
                  forceElevated: false,
                  title: TabBar(
                    unselectedLabelColor: Colors.grey,
                    labelColor: Colors.white,
                    isScrollable: false, // switch tabs to scroll off
                    indicatorColor: Colors.white,
                    indicatorWeight: 0.1,
                    //indicatorWeight: 0.1, //indicator size
                    tabs: <Widget>[
                      Tab(child: Icon(FontAwesomeIcons.image)),
                      //home tab
                      Tab(child: Icon(FontAwesomeIcons.search)), //search tab
                      Tab(
                        child: Icon(FontAwesomeIcons.userCircle),
                      ), //profile tab
                      Tab(
                        child: Icon(FontAwesomeIcons.bell),
                      ), //notifications tab
                      Tab(
                        child: Icon(FontAwesomeIcons.camera),
                      ), //camera tab
                    ],
                  ),
                ),
              ];
            },
            body: TabBarView(
              children: <Widget>[
                Home(),
                Search(),
                Profile(),
                Notifications(),
               CameraView(),
              ],
            )),
      ),
    ); //to view each page when pressed on its tab
  }
}
