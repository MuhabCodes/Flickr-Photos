import 'dart:io';

import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

import 'upload_page.dart';

class VideoEditorPage extends StatefulWidget {
  File video;
  VideoEditorPage(this.video);
  @override
  _VideoEditorPageState createState() => _VideoEditorPageState();
}

class _VideoEditorPageState extends State<VideoEditorPage> {
  VideoPlayerController controller;

  @override
  void initState() {
    super.initState();
    controller = VideoPlayerController.file(widget.video)
      ..initialize().then((_) {
        setState(() {});
      });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Container(
            height: 0.03 * MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
            color: Colors.black,
          ),
          Container(
            color: Colors.black,
            width: MediaQuery.of(context).size.width,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
               IconButton(
                    icon: Icon(Icons.arrow_forward_sharp,size:0.05*MediaQuery.of(context).size.height),
                    color: Colors.white,
                    onPressed: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) =>
                                  (UploadPage(widget.video, 2, controller))));
                    },
                  ),
                
              ],
            ),
          ),
          Container(
            height: 0.8* MediaQuery.of(context).size.height,
            decoration: BoxDecoration(color: Colors.black),
                      child: Flexible(
              child: controller.value.isInitialized
                  ? AspectRatio(
                      aspectRatio: controller.value.aspectRatio,
                      child: VideoPlayer(controller),
                    )
                  : Container(),
            ),
          ),
          Container(
            width: MediaQuery.of(context).size.width,height: 0.1*MediaQuery.of(context).size.height,
            color: Colors.black,
            child: FloatingActionButton(
              backgroundColor: Colors.black,
              onPressed: () {
                setState(() {
                  controller.value.isPlaying
                      ? controller.pause()
                      : controller.play();
                });
              },
              child: Icon(
                controller.value.isPlaying ? Icons.pause : Icons.play_arrow,
                color: Colors.white,
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  void dispose() {
    super.dispose();
    controller.dispose();
  }
}
