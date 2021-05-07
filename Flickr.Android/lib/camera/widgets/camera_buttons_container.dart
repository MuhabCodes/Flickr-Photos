import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:holding_gesture/holding_gesture.dart';
import 'package:provider/provider.dart';

import '../../providers/camera_provider.dart';
import '../Pages/editor.dart';
import '../Pages/video_editor.dart';

class CameraButtons extends StatefulWidget {
  CameraButtons();
  @override
  _CameraButtonsState createState() => _CameraButtonsState();
}

class _CameraButtonsState extends State<CameraButtons> {
  Color _initialCircleColor = Colors.white;
  int _mode = 0;
  Color _cameraButtonColor = Colors.white;
  Color _videoButtonColor = Colors.grey.shade600;
  void setCameraColor() {
    _initialCircleColor = Colors.white;
    _cameraButtonColor = Colors.white;
    _videoButtonColor = Colors.grey.shade600;
    setState(() {});
  }

  void setVideoColor() {
    _initialCircleColor = Colors.red;
    _cameraButtonColor = Colors.grey.shade600;
    _videoButtonColor = Colors.white;
    setState(() {});
  }

  void setVideoMode() {
    _mode = 1;
    setState(() {});
  }

  void setPhotoMode() {
    _mode = 0;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    Provider.of<CameraProvider>(context, listen: false).cameraIndex;
    return Selector<CameraProvider, int>(
      shouldRebuild: (old, news) => true,
      selector: (_, provider) => provider.cameraIndex,
      builder: (_, index, __) {
        return Wrap(children: [
          IconButton(
            icon: FaIcon(FontAwesomeIcons.video,size:24,),
            color: _videoButtonColor,
            onPressed: () {
              setVideoColor();
              setVideoMode();
            },
          ),
          HoldDetector(
            onHold: () {
              _mode==1
              ?Provider.of<CameraProvider>(context, listen: false).startVideo()
              : print("Video Mode!");
            },
            onCancel: () async {
              await Provider.of<CameraProvider>(context, listen: false)
                  .endVideo()
                  .then((video) {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => (VideoEditorPage(video))));
              });
            },
            child: IconButton(
              icon: Icon(Icons.circle,size: 24,),
              color: _initialCircleColor,
              onPressed: () async {
                if (_mode == 0) {
                  await Provider.of<CameraProvider>(context, listen: false)
                      .takePhoto()
                      .then((photo) {
                    if (photo != null)
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => (EditorPage(photo))));
                    else
                      return;
                  });
                }
              },
            ),
          ),
          IconButton(
            icon: FaIcon(FontAwesomeIcons.camera,size: 24,),
            color: _cameraButtonColor,
            onPressed: () {
              setCameraColor();
              setPhotoMode();
            },
          )
        ]);
      },
    );
  }
}
