import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import 'package:video_player/video_player.dart';

import './album.dart';
import '../../providers/new_post_provider.dart';
import '../widgets/privacy_button.dart';
import '../widgets/tags_button.dart';

class UploadPage extends StatelessWidget {
  final passedFile;
  String uploadDate;
  String captureDate;
  final int fileType;
  final VideoPlayerController controller;
  UploadPage(this.passedFile, this.fileType, this.controller);
  bool isTag = false;
  String title;
  String description;
  var tags;
  String privacy;
  int count;
  List<String> stringTags = [];

  @override
  Widget build(BuildContext context) {
    var newPostProvider = Provider.of<NewPostProvider>(context, listen: true);
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.grey[800],
          title: Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              ElevatedButton(
                onPressed: () {
                  for (int i = 0; i < newPostProvider.tagsList.length; i++) {
                    stringTags.add(newPostProvider.tagsList[i].inputText);
                  }
                  DateTime now = DateTime.now();
                  uploadDate = DateFormat('yyyy-MM-dd – kk:mm').format(now);
                  print(uploadDate);
                  newPostProvider.newPost = new NewPost(
                    title: title,
                    description: description,
                    passedFile: passedFile,
                    stringTags: stringTags,
                    uploadDate: uploadDate,
                  );
                  newPostProvider.createNewPost();
                  count = 0;
                  Navigator.popUntil(context, (route) {
                    return count++ == 2;
                  });
                },
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
                height: 0.04 * MediaQuery.of(context).size.height,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  SizedBox(
                    width: 0.08 * MediaQuery.of(context).size.width,
                  ),
                  Container(
                    child: fileType == 1
                        ? Container(
                            width: 0.25 * MediaQuery.of(context).size.width,
                            height: 0.13 * MediaQuery.of(context).size.height,
                            child: Image.file(passedFile, fit: BoxFit.fill),
                          )
                        : Container(
                            child: VideoPlayer(controller),
                            width: 0.25 * MediaQuery.of(context).size.width,
                            height: 0.13 * MediaQuery.of(context).size.height),
                  ),
                ],
              ),
              TextField(
                maxLength: 100,
                maxLengthEnforcement: MaxLengthEnforcement.enforced,
                decoration: InputDecoration(
                    labelText: 'Title...',
                    labelStyle: TextStyle(
                      color: Colors.grey,
                    )),
                onChanged: (value) {
                  title = value;

                  print(title);
                },
              ),
              TextField(
                decoration: InputDecoration(
                    labelText: 'Description...',
                    labelStyle: TextStyle(
                      color: Colors.grey,
                    )),
                onChanged: (value) {
                  description = value;

                  print(newPostProvider.privacy);
                },
              ),
              ConstrainedBox(
                  constraints: const BoxConstraints(
                    minWidth: double.infinity,
                    maxWidth: double.infinity,
                    minHeight: 0.0,
                    maxHeight: double.infinity,
                  ),
                  child: Container(
                    decoration: BoxDecoration(
                      border: Border(
                          bottom: BorderSide(color: Colors.grey.shade200)),
                    ),
                    child: ListTile(
                      leading: Icon(Icons.location_on),
                      title: Text(
                        "Location",
                        style: TextStyle(
                          color: Colors.grey,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      onTap: () {},
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
                    decoration: BoxDecoration(
                      border: Border(
                          bottom: BorderSide(color: Colors.grey.shade200)),
                    ),
                    child: ListTile(
                      leading: Icon(Icons.photo_album_rounded),
                      title: Text(
                        "Album",
                        style: TextStyle(
                          color: Colors.grey,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      onTap: () {
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => (AlbumsPage())));
                      },
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
                  child: PrivacyButton(newPostProvider.privacy)),
            ],
          ),
        ));
  }
}
