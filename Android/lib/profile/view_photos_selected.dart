import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';

import '../providers/photo_provider.dart';

class ViewPhotosSelected extends StatefulWidget {
  @override
  _ViewPhotosSelectedState createState() => _ViewPhotosSelectedState();
}

class _ViewPhotosSelectedState extends State<ViewPhotosSelected> {
  List<bool> selected = [];
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
            selected.add(false);
            return Container(
                width: size.width,
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Checkbox(
                              value: selected[index],
                              onChanged: (val) {
                                photoProvider.setSelected(val);

                                setState(() {
                                  selected[index] = val;

                                  if (photoProvider.dateTaken) {
                                    for (int i = 0;
                                        i <
                                            photoProvider
                                                .photosWithUploadDate[index]
                                                .images
                                                .length;
                                        i++) {
                                      photoProvider.photosWithUploadDate[index]
                                          .images[i].selected = val;
                                      val
                                          ? photoProvider.selectedPhotos.add(
                                              photoProvider
                                                  .photosWithUploadDate[index]
                                                  .images[i])
                                          : photoProvider.selectedPhotos.remove(
                                              photoProvider
                                                  .photosWithUploadDate[index]
                                                  .images[i]);
                                    }
                                  } else {
                                    for (int i = 0;
                                        i <
                                            photoProvider
                                                .photosWithCaptureDate[index]
                                                .images
                                                .length;
                                        i++) {
                                      photoProvider.photosWithCaptureDate[index]
                                          .images[i].selected = val;
                                      val
                                          ? photoProvider.selectedPhotos.add(
                                              photoProvider
                                                  .photosWithCaptureDate[index]
                                                  .images[i])
                                          : photoProvider.selectedPhotos.remove(
                                              photoProvider
                                                  .photosWithCaptureDate[index]
                                                  .images[i]);
                                    }
                                  }
                                });
                              }),
                          Container(
                            //width: size.width,
                            child: Text(
                              DateFormat("EEEE — MMM d,yyyy").format(
                                  photoProvider.dateTaken
                                      ? photoProvider
                                          .photosWithUploadDate[index].date
                                      : photoProvider
                                          .photosWithCaptureDate[index].date),
                              overflow: TextOverflow.fade,
                              style: TextStyle(
                                  fontSize: 16, fontWeight: FontWeight.w600),
                            ),
                          ),
                        ],
                      ),
                      SizedBox(
                        height: 5,
                      ),
                      Container(
                        padding: EdgeInsets.only(left: 10),
                        child: Wrap(
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
                                      margin: EdgeInsets.only(
                                        right: 5,
                                      ),
                                      child: InkWell(
                                        onTap: () {
                                          setState(() {
                                            if (photoProvider.dateTaken) {
                                              photoProvider
                                                      .photosWithUploadDate[index]
                                                      .images[index2]
                                                      .selected =
                                                  !photoProvider
                                                      .photosWithUploadDate[
                                                          index]
                                                      .images[index2]
                                                      .selected;

                                              photoProvider
                                                      .photosWithUploadDate[
                                                          index]
                                                      .images[index2]
                                                      .selected
                                                  ? photoProvider.selectedPhotos
                                                      .add(photoProvider
                                                          .photosWithUploadDate[
                                                              index]
                                                          .images[index2])
                                                  : photoProvider.selectedPhotos
                                                      .remove(photoProvider
                                                          .photosWithUploadDate[
                                                              index]
                                                          .images[index2]);
                                              photoProvider.setSelected(
                                                  photoProvider
                                                      .photosWithUploadDate[
                                                          index]
                                                      .images[index2]
                                                      .selected);
                                            } else {
                                              photoProvider
                                                      .photosWithCaptureDate[index]
                                                      .images[index2]
                                                      .selected =
                                                  !photoProvider
                                                      .photosWithCaptureDate[
                                                          index]
                                                      .images[index2]
                                                      .selected;
                                              photoProvider
                                                      .photosWithCaptureDate[
                                                          index]
                                                      .images[index2]
                                                      .selected
                                                  ? photoProvider.selectedPhotos
                                                      .add(photoProvider
                                                          .photosWithCaptureDate[
                                                              index]
                                                          .images[index2])
                                                  : photoProvider.selectedPhotos
                                                      .remove(photoProvider
                                                          .photosWithCaptureDate[
                                                              index]
                                                          .images[index2]);
                                              photoProvider.setSelected(
                                                  photoProvider
                                                      .photosWithCaptureDate[
                                                          index]
                                                      .images[index2]
                                                      .selected);
                                            }

                                            int temp = 0;
                                            if (selected[index]) {
                                              selected[index] = false;
                                            } else {
                                              if (photoProvider.dateTaken) {
                                                for (int i = 0;
                                                    i <
                                                        photoProvider
                                                            .photosWithUploadDate[
                                                                index]
                                                            .images
                                                            .length;
                                                    i++) {
                                                  if (photoProvider
                                                      .photosWithUploadDate[
                                                          index]
                                                      .images[i]
                                                      .selected) temp++;
                                                }
                                                temp ==
                                                        photoProvider
                                                            .photosWithUploadDate[
                                                                index]
                                                            .images
                                                            .length
                                                    ? selected[index] = true
                                                    : selected[index] = false;
                                              } else {
                                                for (int i = 0;
                                                    i <
                                                        photoProvider
                                                            .photosWithCaptureDate[
                                                                index]
                                                            .images
                                                            .length;
                                                    i++) {
                                                  if (photoProvider
                                                      .photosWithCaptureDate[
                                                          index]
                                                      .images[i]
                                                      .selected) temp++;
                                                }
                                                temp ==
                                                        photoProvider
                                                            .photosWithCaptureDate[
                                                                index]
                                                            .images
                                                            .length
                                                    ? selected[index] = true
                                                    : selected[index] = false;
                                              }
                                            }
                                          });
                                        },
                                        child: Container(
                                          decoration: BoxDecoration(
                                              color: selected[index]
                                                  ? Colors.blue
                                                  : photoProvider.dateTaken
                                                      ? photoProvider
                                                                  .photosWithUploadDate[
                                                                      index]
                                                                  .images[
                                                                      index2]
                                                                  .selected ==
                                                              true
                                                          ? Colors.blue
                                                          : Colors.transparent
                                                      : photoProvider
                                                                  .photosWithCaptureDate[
                                                                      index]
                                                                  .images[
                                                                      index2]
                                                                  .selected ==
                                                              true
                                                          ? Colors.blue
                                                          : Colors.transparent),
                                          padding: EdgeInsets.all(2.5),
                                          child: Image.network(
                                            photoProvider.dateTaken
                                                ? photoProvider
                                                    .photosWithUploadDate[index]
                                                    .images[index2]
                                                    .imageUrl
                                                : photoProvider
                                                    .photosWithCaptureDate[
                                                        index]
                                                    .images[index2]
                                                    .imageUrl,
                                            fit: BoxFit.cover,
                                            height: size.width * 0.23,
                                            width: size.width * 0.23,
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              );
                            },
                          ),
                        ),
                      )
                    ]));
          })),
    ]);
  }
}
