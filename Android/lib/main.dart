import 'package:flickr/login/get_started.dart';
import 'package:flickr/navigations/privacy_and_safety.dart';
import 'package:flickr/profile/description.dart';
import 'package:flickr/providers/photo_provider.dart';
import 'package:flickr/providers/post_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

import 'providers/about_provider.dart';
import 'providers/camera_provider.dart';
import 'providers/tag_provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
    ]);
    return MultiProvider(
      providers: [
        ChangeNotifierProvider.value(
          value: AboutProvider(),
        ),
        ChangeNotifierProvider.value(
          value: PhotoProvider(),
        ),
        ChangeNotifierProvider.value(
          value: CameraProvider(),
        ),
        ChangeNotifierProvider.value(
          value: TagProvider(),
        ),
        ChangeNotifierProvider.value(
          value: PostProvider(),
        ),
        ChangeNotifierProvider<SingleNotifier1>(
          create: (_) => SingleNotifier1(),
        ),
        ChangeNotifierProvider<SingleNotifier2>(
          create: (_) => SingleNotifier2(),
        ),
        ChangeNotifierProvider<SingleNotifier3>(
          create: (_) => SingleNotifier3(),
        ),
        ChangeNotifierProvider<SingleNotifier4>(
          create: (_) => SingleNotifier4(),
        ),
      ],
      child: MaterialApp(
        home: GetStarted(),
        routes: {'/description': (ctx) => Description()},
        theme: ThemeData(fontFamily: "ProximaNova"),
        debugShowCheckedModeBanner: false, //remove debug sign
      ),
    );
  }
}
