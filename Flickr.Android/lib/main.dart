import 'package:flickr/login/get_started.dart';
import 'package:flickr/navigations/top_nav_bar.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter/services.dart';
import 'providers/about_provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
    ]);
    return ChangeNotifierProvider.value(
      value: AboutProvider(),
      child: MaterialApp(
        home: GetStarted(),
        debugShowCheckedModeBanner: false, //remove debug sign
      ),
    );
  }
}
