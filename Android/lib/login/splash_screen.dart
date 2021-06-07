import 'package:custom_splash/custom_splash.dart';
import 'package:flutter/material.dart';

// ignore: must_be_immutable
class LoadingScreen extends StatefulWidget {
  Widget nextScreen;
  LoadingScreen({Key key, @required this.nextScreen}) : super(key: key);
  @override
  State<LoadingScreen> createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {
  @override
  Widget build(BuildContext context) {
    return CustomSplash(
      imagePath: "lib/assets/flickersmall.png",
      home: widget.nextScreen,
      duration: 1000,
      animationEffect: 'zoom-in',
      type: CustomSplashType.StaticDuration,
    );
  }
}
