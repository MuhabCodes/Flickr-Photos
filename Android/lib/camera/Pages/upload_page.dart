

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:video_player/video_player.dart';

import './album.dart';
import '../widgets/privacy_button.dart';
import '../widgets/tags_button.dart';



class UploadPage extends StatelessWidget {
  final passedFile;
  final int fileType;
  final VideoPlayerController controller;
  UploadPage(this.passedFile, this.fileType, this.controller);



 // bool isTag = false;
  @override
  Widget build(BuildContext context) {
 
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.grey[800],
          title: Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
             
              ElevatedButton(
                onPressed: () {},
                child: Text("Post",
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w700,
                    )),
                style: ElevatedButton.styleFrom(
                  primary: Colors.grey[800],
                  side: BorderSide(color: Colors.white, width: 2),
                ),
              ),
            ],
          ),
        ),
        body: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              SizedBox(
                height: 0.01*MediaQuery.of(context).size.height,
              ),
              Row(
              
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[  SizedBox(width: 0.1*MediaQuery.of(context).size.width,),
                  Container(
                    child: fileType == 1
                        ? Image.file(passedFile, width: 0.3*MediaQuery.of(context).size.width, height: 0.4*MediaQuery.of(context).size.height)
                        : Row(
                          children: [SizedBox(width: 0.01*MediaQuery.of(context).size.width,),
                            Container(
                                child: VideoPlayer(controller),
                                width: 0.3*MediaQuery.of(context).size.width,
                                height: 0.21*MediaQuery.of(context).size.height),
                          ],
                        ),
                  ),
                ],
              ),
              SizedBox(
                height: 0.01*MediaQuery.of(context).size.height,
              ),
              Card(
                child: TextField(
                  maxLength: 100,
                  maxLengthEnforcement: MaxLengthEnforcement.enforced,
                  decoration: InputDecoration(labelText: 'Title...'),
                ),
              ),
              Card(
                child: TextField(
                  decoration: InputDecoration(labelText: 'Description...'),
                ),
              ),
              ConstrainedBox(
                  constraints: const BoxConstraints(
                    minWidth: double.infinity,
                    maxWidth: double.infinity,
                    minHeight: 0.0,
                    maxHeight: double.infinity,
                  ),
                  child: Container(
                    child: Card(
                      child: ListTile(
                        leading: Icon(Icons.location_on),
                        title: Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            TextButton(
                              child: Text(
                                "Location",
                                style: TextStyle(
                                  color: Colors.black,
                                  fontWeight: FontWeight.w700,
                                ),
                              ),
                              onPressed: () {},
                            ),
                          ],
                        ),
                      ),
                    ),
                  )),
              ConstrainedBox(
                  constraints: const BoxConstraints(
                    minWidth: double.infinity,
                    maxWidth: double.infinity,
                    minHeight: 0.0,
                    maxHeight: double.infinity,
                  ),
                  child: Container(
                    child: Card(
                      child: ListTile(
                        leading: Icon(Icons.photo_album_rounded),
                        title: Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            TextButton(
                              child: Text(
                                "Album",
                                style: TextStyle(
                                  color: Colors.black,
                                  fontWeight: FontWeight.w700,
                                ),
                              ),
                              onPressed: () {
                                Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) => (AlbumsPage())));
                              },
                            ),
                          ],
                        ),
                      ),
                    ),
                  )),
              TagsButton(),
              ConstrainedBox(
                  constraints: const BoxConstraints(
                    minWidth: double.infinity,
                    maxWidth: double.infinity,
                    minHeight: 0.0,
                    maxHeight: double.infinity,
                  ),
                  child: PrivacyButton()),
            ],
          ),
        ));
  }
}
