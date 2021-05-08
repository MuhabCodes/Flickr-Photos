import 'dart:io';

import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:image_picker/image_picker.dart';
import 'package:provider/provider.dart';

import '../../providers/camera_provider.dart';
import '../widgets/camera.dart';
import '../widgets/camera_buttons_container.dart';
import '../widgets/flash.dart';
import 'editor.dart';

class CameraView extends StatefulWidget {
  final List<CameraDescription> cameras;
  CameraView({this.cameras});

  @override
  _CameraViewState createState() => _CameraViewState();
}

class _CameraViewState extends State<CameraView> {
  PickedFile _imageFile;
  File realImageFile;
  //List<File> convertedImages = <File>[];
  //List<Asset> assetImages = <Asset>[];
  final ImagePicker picker = ImagePicker();
  Color initialCircleColor = Colors.white;
  int mode = 0;
  void setCameraColor() {      //Set Camera button's color
    initialCircleColor = Colors.white;
    setState(() {});
  }

  void setVideoColor() {      //Set Video button's color
    initialCircleColor = Colors.red;
    setState(() {});
  }

  void setVideoMode() {       //Set mode to video
    mode = 1;
    setState(() {});
  }

  void setPhotoMode() {    //Set mode to photo
    mode = 0;
    setState(() {});
  }

  Future<void> openGallery() async {    //Access the mobile gallery
    PickedFile _picture = await picker.getImage(source: ImageSource.gallery);
    _imageFile = _picture;
    realImageFile = File(_imageFile.path);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
        future: Provider.of<CameraProvider>(context, listen: false).init(),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          return snapshot.connectionState == ConnectionState.waiting
              ? Center(child: CircularProgressIndicator())
              : Column(
                  mainAxisSize: MainAxisSize.max,
                  children: <Widget>[
                    Container(
                      height: 0.626 * MediaQuery.of(context).size.height,
                      child: CameraScreen(),
                    ),
                    Container(
                      height: 0.10 * MediaQuery.of(context).size.height,
                      color: Colors.black87,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: <Widget>[
                          IconButton(
                            icon: Icon(Icons.flip_camera_ios_outlined),
                            color: Colors.white,
                            onPressed: () {
                              Provider.of<CameraProvider>(context,
                                      listen: false)
                                  .changeCameraIndex();
                            },
                          ),
                          SizedBox(
                              width: 0.52 * MediaQuery.of(context).size.width),
                          FlashButton(),
                        ],
                      ),
                    ),
                    Container(
                      color: Colors.black,
                      height: 0.17 * MediaQuery.of(context).size.height,
                      child: Row(
                        children: [
                          SizedBox(
                              width: 0.01 * MediaQuery.of(context).size.height),
                          IconButton(
                            icon: FaIcon(FontAwesomeIcons.images),
                            color: Colors.white,
                            onPressed: () async {
                              await openGallery().then((photo) {
                                if (realImageFile != null) {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) =>
                                              (EditorPage(realImageFile))));
                                }
                              });
                            },
                          ),
                          SizedBox(
                            width: 0.16 * MediaQuery.of(context).size.width,
                          ),
                          CameraButtons(),
                        ],
                      ),
                    )
                  ],
                );
        },
      ),
    );
  }
}
