import 'package:flickr/camera/Pages/camera_view.dart';
import 'package:flickr/profile/view_photos.dart';
import 'package:flickr/providers/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class CameraRoll extends StatefulWidget {
  @override
  _CameraRollState createState() => _CameraRollState();
}

class _CameraRollState extends State<CameraRoll> {
  bool isSelected = false;

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    var userProvider = Provider.of<UserProvider>(context, listen: true);
    return SingleChildScrollView(
      child: userProvider.user.photosCount != 0
          ? Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  height: size.height * 0.05,
                  decoration: BoxDecoration(color: Colors.grey[350]),
                  //padding: EdgeInsets.only(top: 8, bottom: 8),
                  child: TextButton(
                      onPressed: () {
                        showModalBottomSheet(
                            isScrollControlled: true,
                            context: context,
                            builder: (BuildContext context) {
                              return Container(
                                  height:
                                      MediaQuery.of(context).size.height * 0.16,
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      TextButton(
                                        onPressed: () {
                                          userProvider
                                              .setDateTaken("Date Taken");
                                          Navigator.pop(context);
                                        },
                                        child: Text(
                                          "Date Taken",
                                          style: TextStyle(
                                              color: Colors.black,
                                              fontWeight: FontWeight.bold,
                                              fontSize: 16),
                                        ),
                                      ),
                                      TextButton(
                                        onPressed: () {
                                          userProvider
                                              .setDateTaken("Date Uploaded");
                                          Navigator.pop(context);
                                        },
                                        child: Text(
                                          "Date Uploaded",
                                          style: TextStyle(
                                              color: Colors.black,
                                              fontWeight: FontWeight.bold,
                                              fontSize: 16),
                                        ),
                                      ),
                                    ],
                                  ));
                            });
                      },
                      child: Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            Text(
                              userProvider.dateTaken
                                  ? "Date Taken"
                                  : "Date Uploaded",
                              style: TextStyle(
                                  color: Colors.black,
                                  fontWeight: FontWeight.w600,
                                  fontSize: 14),
                            ),
                            Icon(
                              Icons.arrow_drop_down,
                              color: Colors.black,
                            )
                          ])),
                ),
                SizedBox(
                  height: 15,
                ),
                Stack(
                  alignment: AlignmentDirectional.topStart,
                  children: [
                    ViewPhotos(),
                    Positioned(
                      left: size.width * 0.7,
                      child: Container(
                        height: 30,
                        width: size.width * 0.27,
                        child: Container(
                          width: size.width * 0.27,
                          decoration: BoxDecoration(shape: BoxShape.rectangle),
                          child: OutlinedButton(
                            onPressed: () {
                              setState(() {
                                Navigator.of(context).pushNamed(
                                  '/selectphotos',
                                );
                              });
                            },
                            child: Text("Select",
                                style: TextStyle(
                                  fontSize: 16,
                                  color: Colors.black,
                                  fontWeight: FontWeight.w600,
                                )),
                            style: ElevatedButton.styleFrom(
                              primary: Colors.grey[50],
                              side: BorderSide(color: Colors.black, width: 2.0),
                            ),
                          ),
                        ),
                      ),
                    )
                  ],
                ),
              ],
            )
          : Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Padding(
                  padding: const EdgeInsets.all(30),
                  child: Icon(
                    Icons.image_outlined,
                    size: 90,
                    color: Colors.grey,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(bottom: 10),
                  child: Text(
                    "Upload Your photos!",
                    style: TextStyle(
                      fontSize: 18,
                      color: Colors.grey,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(bottom: 5),
                  child: Text(
                    "Got a lot of photos? We've got a lot",
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.grey,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(bottom: 8.0),
                  child: Text(
                    "of space",
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.grey,
                    ),
                  ),
                ),
                Container(
                  height: 30,
                  width: size.width * 0.34,
                  child: Container(
                    width: size.width * 0.34,
                    decoration: BoxDecoration(shape: BoxShape.rectangle),
                    // ignore: deprecated_member_use
                    child: RaisedButton(
                      onPressed: () {
                        userProvider.cameraNavigationIndex = 1;
                        userProvider.notify();
                        setState(() {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => CameraView()),
                          );
                        });
                      },
                      color: Colors.grey[50],
                      shape: RoundedRectangleBorder(
                        side: BorderSide(color: Colors.black, width: 2),
                      ),
                      child: Text("Upload now",
                          style: TextStyle(
                            fontSize: 14,
                            color: Colors.black,
                            fontWeight: FontWeight.w600,
                          )),
                    ),
                  ),
                ),
              ],
            ),
    );
  }
}
