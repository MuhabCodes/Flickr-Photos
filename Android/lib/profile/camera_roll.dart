import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';

import '../providers/photo_provider.dart';

class CameraRoll extends StatefulWidget {
  @override
  _CameraRollState createState() => _CameraRollState();
}

class _CameraRollState extends State<CameraRoll> {
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    var photoProvider = Provider.of<PhotoProvider>(context, listen: true);
    return SingleChildScrollView(
      child: Column(
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
                            height: MediaQuery.of(context).size.height * 0.16,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                TextButton(
                                  onPressed: () {
                                    photoProvider.setDateTaken("Date Taken");
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
                                    photoProvider.setDateTaken("Date Uploaded");
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
                child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                  Text(
                    photoProvider.dateTaken ? "Date Taken" : "Date Uploaded",
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
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.max,
            children: [
              SizedBox(
                width: size.width * 0.05,
              ),
              ViewPhotos(),
              Container(
                height: 30,
                width: size.width * 0.23,
                child: Container(
                  decoration: BoxDecoration(shape: BoxShape.rectangle),
                  child: ElevatedButton(
                    onPressed: () {},
                    child: Text("Select",
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.black,
                          fontWeight: FontWeight.w600,
                        )),
                    style: ElevatedButton.styleFrom(
                      primary: Colors.grey[50],
                      side: BorderSide(color: Colors.black, width: 2),
                    ),
                  ),
                ),
              )
            ],
          ),
        ],
      ),
    );
  }
}

class ViewPhotos extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var photoProvider = Provider.of<PhotoProvider>(context, listen: true);
    var size = MediaQuery.of(context).size;
    return IndexedStack(children: [
      Wrap(
          direction: Axis.vertical,
          spacing: 10,
          //runSpacing: 20,
          children: List.generate(
              photoProvider.dateTaken
                  ? photoProvider.photosWithUploadDate.length
                  : photoProvider.photosWithCaptureDate.length, (index) {
            return Container(
                //height: size.height * 0.2,
                width: size.width * 0.7,
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: size.width * 0.7,
                        child: Text(
                          DateFormat("EEEE — MMM d,yyyy").format(photoProvider
                                  .dateTaken
                              ? photoProvider.photosWithUploadDate[index].date
                              : photoProvider
                                  .photosWithCaptureDate[index].date),
                          overflow: TextOverflow.fade,
                          style: TextStyle(
                              fontSize: 16, fontWeight: FontWeight.w600),
                        ),
                      ),
                      SizedBox(
                        height: 20,
                      ),
                      Wrap(
                        direction: Axis.horizontal,
                        children: List.generate(
                          photoProvider.dateTaken
                              ? photoProvider
                                  .photosWithUploadDate[index].images.length
                              : photoProvider
                                  .photosWithCaptureDate[index].images.length,
                          (index2) {
                            return Container(
                              child: Wrap(
                                children: [
                                  Container(
                                    margin:
                                        EdgeInsets.only(right: 5, bottom: 5),
                                    child: Image.network(
                                      photoProvider.dateTaken
                                          ? photoProvider
                                              .photosWithUploadDate[index]
                                              .images[index2]
                                              .imagePath
                                          : photoProvider
                                              .photosWithCaptureDate[index]
                                              .images[index2]
                                              .imagePath,
                                      fit: BoxFit.cover,
                                      height: 100,
                                      width: 100,
                                    ),
                                  ),
                                ],
                              ),
                            );
                          },
                        ),
                      )
                    ]));
          }))
    ]);
  }
}
