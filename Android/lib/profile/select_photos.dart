import 'package:flickr/profile/view_photos_selected.dart';
import 'package:flickr/providers/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:share_plus/share_plus.dart';

class SelectPhoto extends StatefulWidget {
  @override
  _SelectPhotoState createState() => _SelectPhotoState();
}

class _SelectPhotoState extends State<SelectPhoto> {
  @override
  Widget build(BuildContext context) {
    var userProvider = Provider.of<UserProvider>(context, listen: true);
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        backgroundColor: Colors.white,
        title:
            Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
          Row(
            children: [
              Text(userProvider.selectedPhotos.length.toString(),
                  style: TextStyle(
                      fontSize: 16,
                      color: Colors.black,
                      fontWeight: FontWeight.bold)),
              Text(
                " Selected",
                style: TextStyle(
                    fontSize: 16,
                    color: Colors.black,
                    fontWeight: FontWeight.bold),
              ),
            ],
          ),
          OutlinedButton(
            onPressed: () {
              userProvider.isSelected = false;
              //userProvider.removeSelected();
              userProvider.selectedPhotos = [];
              for (int i = 0;
                  i < userProvider.photosWithUploadDate.length;
                  i++) {
                for (int j = 0;
                    j < userProvider.photosWithUploadDate[i].images.length;
                    j++)
                  userProvider.photosWithUploadDate[i].images[j].selected =
                      false;
              }
              for (int i = 0;
                  i < userProvider.photosWithCaptureDate.length;
                  i++) {
                for (int j = 0;
                    j < userProvider.photosWithCaptureDate[i].images.length;
                    j++)
                  userProvider.photosWithCaptureDate[i].images[j].selected =
                      false;
              }
              Navigator.pop(context);
            },
            child: Text("Done",
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
        ]),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            SizedBox(
              height: 20,
            ),
            Row(
              children: [
                ViewPhotosSelected(),
              ],
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        child: userProvider.selectedPhotos.length != 0
            ? Container(
                decoration: BoxDecoration(color: Colors.grey[900]),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    IconButton(
                        icon: Icon(
                          Icons.lock,
                          color: Colors.grey,
                        ),
                        onPressed: () {
                          showModalBottomSheet(
                              isScrollControlled: true,
                              context: context,
                              builder: (BuildContext context) {
                                return Container(
                                    height: MediaQuery.of(context).size.height *
                                        0.5,
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Container(
                                          height: 50,
                                          alignment: Alignment.center,
                                          child: Text(
                                            "Edit Privacy",
                                            style: TextStyle(
                                                color: Colors.grey,
                                                fontSize: 16,
                                                fontWeight: FontWeight.bold),
                                          ),
                                        ),
                                        Divider(
                                          height: 10,
                                        ),
                                        TextButton(
                                          onPressed: () {
                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Public",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                        TextButton(
                                          onPressed: () {
                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Friends",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                        TextButton(
                                          onPressed: () {
                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Family",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                        TextButton(
                                          onPressed: () {
                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Friends & Family",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                        TextButton(
                                          onPressed: () {
                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Private",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                      ],
                                    ));
                              });
                        }),
                    IconButton(
                        icon: Icon(
                          Icons.all_inbox,
                          color: Colors.grey,
                        ),
                        onPressed: () {}),
                    IconButton(
                        icon: Icon(
                          Icons.share,
                          color: Colors.grey,
                        ),
                        onPressed: () {
                          List<String> toshare = [];
                          for (var i = 0;
                              i < userProvider.selectedPhotos.length;
                              i++) {
                            toshare
                                .add(userProvider.selectedPhotos[i].imageUrl);
                          }
                          Share.share(toshare.join("\n\n"));
                          //Share.shareFiles(toshare);
                        }),
                    IconButton(
                        icon: Icon(
                          Icons.delete,
                          color: Colors.grey,
                        ),
                        onPressed: () {
                          userProvider.removeSelected();
                        }),
                  ],
                ),
              )
            : Container(
                height: 10,
                width: 10,
              ),
      ),
    );
  }
}
