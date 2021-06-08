import 'package:flickr/profile/fullscreen_image.dart';
import 'package:flickr/providers/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';

class ViewPhotos extends StatelessWidget {
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
            return Container(
                padding: EdgeInsets.only(left: 10),
                width: size.width,
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: size.width,
                        child: Text(
                          DateFormat("EEEE — MMM d,yyyy").format(userProvider
                                  .dateTaken
                              ? userProvider.photosWithUploadDate[index].date
                              : userProvider.photosWithCaptureDate[index].date),
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
                                    margin:
                                        EdgeInsets.only(right: 5, bottom: 5),
                                    child: InkWell(
                                      onTap: () {
                                        Navigator.push(
                                            context,
                                            MaterialPageRoute(
                                                builder: (context) =>
                                                    FullscreenImage(
                                                      userProvider.dateTaken
                                                          ? userProvider
                                                              .photosWithUploadDate[
                                                                  index]
                                                              .images[index2]
                                                          : userProvider
                                                              .photosWithCaptureDate[
                                                                  index]
                                                              .images[index2],
                                                    )));
                                      },
                                      child: Image.network(
                                        userProvider.dateTaken
                                            ? userProvider
                                                .photosWithUploadDate[index]
                                                .images[index2]
                                                .imageUrl
                                            : userProvider
                                                .photosWithCaptureDate[index]
                                                .images[index2]
                                                .imageUrl,
                                        fit: BoxFit.cover,
                                        height: size.width * 0.23,
                                        width: size.width * 0.23,
                                      ),
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
