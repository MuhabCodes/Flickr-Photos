import 'package:flickr/models/notification.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/material/refresh_indicator.dart';
import 'package:provider/provider.dart';

import '../camera/widgets/follow_button.dart';
import '../providers/notification_provider.dart';

import '../profile/fullscreen_image.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:flickr/providers/user_provider.dart' as io;

class NotificationsPage extends StatefulWidget {
  @override
  _NotificationsPageState createState() => _NotificationsPageState();
}

class _NotificationsPageState extends State<NotificationsPage> {
  final GlobalKey<RefreshIndicatorState> _refreshIndicatorKey =
      new GlobalKey<RefreshIndicatorState>();

  var notificationProvider;
  var userProvider;
  List<SingleNotification> notifications;
  @override
  void initState() {
    notificationProvider =
        Provider.of<NotificationProvider>(context, listen: false);
    notificationProvider.getNotification();
    super.initState();
  }

  Future<Null> onPullRefresh() async {
    await Future.delayed(Duration(seconds: 2));
    notificationProvider =
        Provider.of<NotificationProvider>(context, listen: false);
    notificationProvider.getNotification();
    setState() {}
    ;
  }

  String checkAct(String act) {
    String returnValue;
    if (act == "like") {
      returnValue = "faved ";
      return returnValue;
    } else if (act == "comment") {
      returnValue = "commented on ";
      return returnValue;
    } else if (act == "follow") {
      returnValue = "is now following ";
      return returnValue;
    }
    return returnValue;
  }

  int photoId = 0;
  @override
  Widget build(BuildContext context) {
    notificationProvider =
        Provider.of<NotificationProvider>(context, listen: true);
    userProvider = Provider.of<io.UserProvider>(context, listen: true);
    return Scaffold(
      body: RefreshIndicator(
        key: _refreshIndicatorKey,
        onRefresh: onPullRefresh,
        child: notificationProvider.status == Status.Loading
            ? Center(
                child: CircularProgressIndicator(
                  semanticsLabel: 'Linear progress indicator',
                ),
              )
            : SingleChildScrollView(
                child: notificationProvider
                            .notificationsList.notificationsList==[]||notificationProvider
                            .notificationsList.notificationsList.length==0   
                    ? Center(
                        child: Column(
                          children: [
                            SizedBox(
                              height: 0.26 * MediaQuery.of(context).size.height,
                            ),
                            Icon(
                              FontAwesomeIcons.bell,
                              color: Colors.grey.shade400,
                              size: 0.14 * MediaQuery.of(context).size.height,
                            ),
                            SizedBox(
                                height:
                                    0.03 * MediaQuery.of(context).size.height),
                            Text("Welcome to Flickr!",
                                style: TextStyle(
                                  color: Colors.grey,
                                  fontWeight: FontWeight.bold,
                                  fontSize: 16,
                                )),
                                 SizedBox(
                                height:
                                    0.015 * MediaQuery.of(context).size.height),
                            Text("Whenever friends follow you or fave your",
                                style: TextStyle(
                                  color: Colors.grey.shade400,
                                )),
                            Text("photos, you'll get a notification here.",
                                style: TextStyle(
                                  color: Colors.grey.shade400,
                                )),
                          ],
                        ),
                      )
                    : Column(
                        children: List.generate(
                            notificationProvider.notificationsList
                                .notificationsList.length, (index) {
                          return Container(
                            padding: EdgeInsets.only(
                                top: 0.02 * MediaQuery.of(context).size.height),
                            decoration: BoxDecoration(
                              //                    <-- BoxDecoration
                              border: Border(
                                  bottom:
                                      BorderSide(color: Colors.grey.shade200)),
                            ),
                            height: 0.12 * MediaQuery.of(context).size.height,
                            child: ListTile(
                                leading: Container(
                                  child: CircleAvatar(
                                    radius:
                                        0.1 * MediaQuery.of(context).size.width,
                                    backgroundImage: NetworkImage(
                                        notificationProvider
                                            .notificationsList
                                            .notificationsList[index]
                                            .senderImageUrl),
                                  ),
                                ),
                                title: Wrap(
                                  children: [
                                    Text.rich(
                                      TextSpan(
                                        text: '',
                                        children: <TextSpan>[
                                          TextSpan(
                                              text: notificationProvider
                                                  .notificationsList
                                                  .notificationsList[index]
                                                  .senderName,
                                              style: TextStyle(
                                                  fontWeight: FontWeight.bold)),
                                          TextSpan(
                                            text: ' ',
                                          ),
                                          TextSpan(
                                            text: checkAct(notificationProvider
                                                .notificationsList
                                                .notificationsList[index]
                                                .act),
                                          ),
                                          TextSpan(
                                              text: notificationProvider
                                                              .notificationsList
                                                              .notificationsList[
                                                                  index]
                                                              .act ==
                                                          "like" ||
                                                      notificationProvider
                                                              .notificationsList
                                                              .notificationsList[
                                                                  index]
                                                              .act ==
                                                          "comment"
                                                  ? notificationProvider
                                                      .notificationsList
                                                      .notificationsList[index]
                                                      .recieverName
                                                  : "You.",
                                              style: TextStyle(
                                                  fontWeight: FontWeight.bold)),
                                          TextSpan(
                                            text: notificationProvider
                                                            .notificationsList
                                                            .notificationsList[
                                                                index]
                                                            .act ==
                                                        "like" ||
                                                    notificationProvider
                                                            .notificationsList
                                                            .notificationsList[
                                                                index]
                                                            .act ==
                                                        "comment"
                                                ? "'s "
                                                : "",
                                          ),
                                          TextSpan(
                                            text: notificationProvider
                                                            .notificationsList
                                                            .notificationsList[
                                                                index]
                                                            .act ==
                                                        "like" ||
                                                    notificationProvider
                                                            .notificationsList
                                                            .notificationsList[
                                                                index]
                                                            .act ==
                                                        "comment"
                                                ? 'photo. '
                                                : "",
                                          ),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                                trailing: notificationProvider.notificationsList
                                                .notificationsList[index].act ==
                                            "like" ||
                                        notificationProvider.notificationsList
                                                .notificationsList[index].act ==
                                            "comment"
                                    ? Container(
                                        width: 0.14 *
                                            MediaQuery.of(context).size.width,
                                        height: 0.14 *
                                            MediaQuery.of(context).size.height,
                                        child: InkWell(
                                          onTap: () {
                                            userProvider.returnPhoto(notificationProvider.notificationsList
                                                .notificationsList[index].photoId)==null
                                                ?{}
                                            :Navigator.push(
                                                  context,
                                                  MaterialPageRoute(
                                                      builder: (context) =>
                                                          FullscreenImage(
                                                           userProvider.returnPhoto(notificationProvider.notificationsList
                                                .notificationsList[index].photoId)
                                                          )));
                                          },
                                          child: Image.network(
                                            notificationProvider
                                                .notificationsList
                                                .notificationsList[index]
                                                .imageUrl,
                                          ),
                                        ),
                                      )
                                    : FollowButton()),
                          );
                        }).toList(),
                      ),
              ),
      ),
    );
  }
}
