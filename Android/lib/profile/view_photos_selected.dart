import 'package:flickr/providers/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';

class ViewPhotosSelected extends StatefulWidget {
  @override
  _ViewPhotosSelectedState createState() => _ViewPhotosSelectedState();
}

class _ViewPhotosSelectedState extends State<ViewPhotosSelected> {
  List<bool> selected = [];
  @override
  Widget build(BuildContext context) {
    var userProvider = Provider.of<UserProvider>(context, listen: true);
    var size = MediaQuery.of(context).size;
    return IndexedStack(children: [
      Wrap(
          direction: Axis.vertical,
          spacing: 10,
          //runSpacing: 20,
          children: List.generate(
              userProvider.dateTaken
                  ? userProvider.photosWithUploadDate.length
                  : userProvider.photosWithCaptureDate.length, (index) {
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
                                userProvider.setSelected(val);

                                setState(() {
                                  selected[index] = val;

                                  if (userProvider.dateTaken) {
                                    for (int i = 0;
                                        i <
                                            userProvider
                                                .photosWithUploadDate[index]
                                                .images
                                                .length;
                                        i++) {
                                      userProvider.photosWithUploadDate[index]
                                          .images[i].selected = val;
                                      val
                                          ? userProvider.selectedPhotos.add(
                                              userProvider
                                                  .photosWithUploadDate[index]
                                                  .images[i])
                                          : userProvider.selectedPhotos.remove(
                                              userProvider
                                                  .photosWithUploadDate[index]
                                                  .images[i]);
                                    }
                                  } else {
                                    for (int i = 0;
                                        i <
                                            userProvider
                                                .photosWithCaptureDate[index]
                                                .images
                                                .length;
                                        i++) {
                                      userProvider.photosWithCaptureDate[index]
                                          .images[i].selected = val;
                                      val
                                          ? userProvider.selectedPhotos.add(
                                              userProvider
                                                  .photosWithCaptureDate[index]
                                                  .images[i])
                                          : userProvider.selectedPhotos.remove(
                                              userProvider
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
                                  userProvider.dateTaken
                                      ? userProvider
                                          .photosWithUploadDate[index].date
                                      : userProvider
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
                            userProvider.dateTaken
                                ? userProvider
                                    .photosWithUploadDate[index].images.length
                                : userProvider
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
                                            if (userProvider.dateTaken) {
                                              userProvider
                                                      .photosWithUploadDate[index]
                                                      .images[index2]
                                                      .selected =
                                                  !userProvider
                                                      .photosWithUploadDate[
                                                          index]
                                                      .images[index2]
                                                      .selected;

                                              userProvider
                                                      .photosWithUploadDate[
                                                          index]
                                                      .images[index2]
                                                      .selected
                                                  ? userProvider.selectedPhotos
                                                      .add(userProvider
                                                          .photosWithUploadDate[
                                                              index]
                                                          .images[index2])
                                                  : userProvider.selectedPhotos
                                                      .remove(userProvider
                                                          .photosWithUploadDate[
                                                              index]
                                                          .images[index2]);
                                              userProvider.setSelected(
                                                  userProvider
                                                      .photosWithUploadDate[
                                                          index]
                                                      .images[index2]
                                                      .selected);
                                            } else {
                                              userProvider
                                                      .photosWithCaptureDate[index]
                                                      .images[index2]
                                                      .selected =
                                                  !userProvider
                                                      .photosWithCaptureDate[
                                                          index]
                                                      .images[index2]
                                                      .selected;
                                              userProvider
                                                      .photosWithCaptureDate[
                                                          index]
                                                      .images[index2]
                                                      .selected
                                                  ? userProvider.selectedPhotos
                                                      .add(userProvider
                                                          .photosWithCaptureDate[
                                                              index]
                                                          .images[index2])
                                                  : userProvider.selectedPhotos
                                                      .remove(userProvider
                                                          .photosWithCaptureDate[
                                                              index]
                                                          .images[index2]);
                                              userProvider.setSelected(
                                                  userProvider
                                                      .photosWithCaptureDate[
                                                          index]
                                                      .images[index2]
                                                      .selected);
                                            }

                                            int temp = 0;
                                            if (selected[index]) {
                                              selected[index] = false;
                                            } else {
                                              if (userProvider.dateTaken) {
                                                for (int i = 0;
                                                    i <
                                                        userProvider
                                                            .photosWithUploadDate[
                                                                index]
                                                            .images
                                                            .length;
                                                    i++) {
                                                  if (userProvider
                                                      .photosWithUploadDate[
                                                          index]
                                                      .images[i]
                                                      .selected) temp++;
                                                }
                                                temp ==
                                                        userProvider
                                                            .photosWithUploadDate[
                                                                index]
                                                            .images
                                                            .length
                                                    ? selected[index] = true
                                                    : selected[index] = false;
                                              } else {
                                                for (int i = 0;
                                                    i <
                                                        userProvider
                                                            .photosWithCaptureDate[
                                                                index]
                                                            .images
                                                            .length;
                                                    i++) {
                                                  if (userProvider
                                                      .photosWithCaptureDate[
                                                          index]
                                                      .images[i]
                                                      .selected) temp++;
                                                }
                                                temp ==
                                                        userProvider
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
                                                  : userProvider.dateTaken
                                                      ? userProvider
                                                                  .photosWithUploadDate[
                                                                      index]
                                                                  .images[
                                                                      index2]
                                                                  .selected ==
                                                              true
                                                          ? Colors.blue
                                                          : Colors.transparent
                                                      : userProvider
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
                                            userProvider.dateTaken
                                                ? userProvider
                                                    .photosWithUploadDate[index]
                                                    .images[index2]
                                                    .imageUrl
                                                : userProvider
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
