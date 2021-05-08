import 'package:flickr/login/get_started.dart';
import 'package:flickr/navigations/top_nav_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
    ]);
    return MaterialApp(
      home: GetStarted(), //TopNavigationBar(),
      debugShowCheckedModeBanner: false, //remove debug sign
    );
  }
}
