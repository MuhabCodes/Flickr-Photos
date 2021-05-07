import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../providers/camera_provider.dart';

class CameraScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Provider.of<CameraProvider>(context, listen: false).cameraIndex;

    return Selector<CameraProvider, int>(
      shouldRebuild: (old, news) => true,
      selector: (_, provider) => provider.cameraIndex,
      builder: (_, index, __) {
        return !Provider.of<CameraProvider>(context, listen: false)
                .cameraController
                .value
                .isInitialized
            ? Center(child: CircularProgressIndicator())
            : AspectRatio(
                aspectRatio: Provider.of<CameraProvider>(context, listen: false)
                    .cameraController
                    .value
                    .aspectRatio,
                child: CameraPreview(
                    Provider.of<CameraProvider>(context, listen: false)
                        .cameraController),
              );
      },
    );
  }
}
