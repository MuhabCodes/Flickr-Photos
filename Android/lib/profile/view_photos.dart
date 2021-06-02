import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';

import '../providers/photo_provider.dart';

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
                padding: EdgeInsets.only(left: 10),
                width: size.width,
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: size.width,
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
                                      height: size.width * 0.23,
                                      width: size.width * 0.23,
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
