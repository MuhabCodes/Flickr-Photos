import 'package:flickr/login/confirm_email.dart';
import 'package:flickr/login/get_started.dart';
import 'package:flickr/profile/description.dart';
import 'package:flickr/profile/description_with_privacy.dart';
import 'package:flickr/profile/most_popular.dart';
import 'package:flickr/profile/privacy_and_safety.dart';
import 'package:flickr/profile/select_photos.dart';
import 'package:flickr/providers/auth.dart';
import 'package:flickr/providers/camera_provider.dart';
import 'package:flickr/providers/post_provider.dart';
import 'package:flickr/providers/tag_provider.dart';
import 'package:flickr/providers/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';

import 'providers/camera_provider.dart';
import 'providers/new_post_provider.dart';
import 'providers/notification_provider.dart';
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
          value: Authentication(),
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
        ChangeNotifierProvider(
          create: (BuildContext context) => UserProvider(),
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
        ChangeNotifierProvider.value(
          value: NewPostProvider(),
        ),
        ChangeNotifierProvider.value(
          value: NotificationProvider(),
        ),
      ],
      child: MaterialApp(
        home: GetStarted(),
        routes: {
          '/description': (ctx) => Description(),
          '/selectphotos': (ctx) => SelectPhoto(),
          '/mostpopular': (ctx) => MostPopular(),
          '/descriptionwithprivacy': (ctx) => DescriptionWithPrivacy(),
        },
        theme: ThemeData(fontFamily: "ProximaNova"),
        debugShowCheckedModeBanner: false, //remove debug sign
      ),
    );
  }
}
