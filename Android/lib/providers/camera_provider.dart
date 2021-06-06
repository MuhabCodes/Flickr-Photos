
import 'dart:io';

import 'package:camera/camera.dart';
import 'package:flutter/material.dart';

class CameraProvider extends ChangeNotifier {
  int _cameraIndex = 0;
  List<CameraDescription> _cameras;
  File image;
  CameraController _cameraController;

  Map<int, FlashMode> flashMode = {
    0: FlashMode.off,
    1: FlashMode.always,
    2: FlashMode.torch,
  };

  int flashState = 0; //0=off,1=always,2=torch

  get cameras => _cameras;

  get cameraIndex => _cameraIndex;
  get cameraController => _cameraController;

  void changeCameraIndex() {
    if (_cameraIndex == 0) {
      _cameraIndex = 1;
    } else if (_cameraIndex == 1) {
      _cameraIndex = 0;
    }
    init();

  }

  void flash() {
    if (flashState == 0) {
      _cameraController.setFlashMode(FlashMode.always).then((value) {
        flashState = 1;
        init();
      });
    } else if (flashState == 1) {
      _cameraController.setFlashMode(FlashMode.torch).then((value) {
        flashState = 2;
        init();
      });
    } else if (flashState == 2) {
      _cameraController.setFlashMode(FlashMode.off).then((value) {
        flashState = 0;
        init();
      });
    }
  }

  void startVideo() {
    if (_cameraController.value.isInitialized) {
      _cameraController.startVideoRecording();
    }
    return null;
  }

  Future<File> endVideo() async {
    final XFile video = await _cameraController.stopVideoRecording();
    if (video != null) {return File(video.path);}
    else
    return null;
    
  }

  Future<File> takePhoto() async {
    if (_cameraController.value.isInitialized) {
      final XFile photo = await _cameraController.takePicture();
      if (photo != null) return File(photo.path);
      return null;
    }
    return null;
  }

  Future<void> init() async {
    await availableCameras().then((value) {
      _cameras = value;
      _cameraController =
          new CameraController(_cameras[cameraIndex], ResolutionPreset.medium);

      _cameraController.initialize().then((_) {
        if (!_cameraController.value.isInitialized) init();
        if (_cameraController.value.isInitialized)
          _cameraController.setFlashMode(flashMode[flashState]);
        notifyListeners();
      });
    });
  }

  // void dispose() {
  //   _cameraController?.dispose();
  // }
}
