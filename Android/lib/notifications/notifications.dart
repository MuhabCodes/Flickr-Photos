import 'package:flickr/models/notification.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/material/refresh_indicator.dart';
import 'package:provider/provider.dart';

import '../camera/widgets/follow_button.dart';
import '../providers/notification_provider.dart';

class NotificationsPage extends StatefulWidget {
  @override
  _NotificationsPageState createState() => _NotificationsPageState();
}

class _NotificationsPageState extends State<NotificationsPage> {
  final GlobalKey<RefreshIndicatorState> _refreshIndicatorKey =
      new GlobalKey<RefreshIndicatorState>();

  var notificationProvider;
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
                child: Column(
                  children: List.generate(
                      notificationProvider
                          .notificationsList.notificationsList.length, (index) {
                    return Container(
                      padding: EdgeInsets.only(
                          top: 0.02 * MediaQuery.of(context).size.height),
                      decoration: BoxDecoration(
                        //                    <-- BoxDecoration
                        border: Border(
                            bottom: BorderSide(color: Colors.grey.shade200)),
                      ),
                      height: 0.12 * MediaQuery.of(context).size.height,
                      child: ListTile(
                          leading: Container(
                            child: CircleAvatar(
                              radius: 0.1 * MediaQuery.of(context).size.width,
                              backgroundImage: NetworkImage(notificationProvider
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
                                                      .notificationsList[index]
                                                      .act ==
                                                  "like" ||
                                              notificationProvider
                                                      .notificationsList
                                                      .notificationsList[index]
                                                      .act ==
                                                  "comment"
                                          ? "'s "
                                          : "",
                                    ),
                                    TextSpan(
                                      text: notificationProvider
                                                      .notificationsList
                                                      .notificationsList[index]
                                                      .act ==
                                                  "like" ||
                                              notificationProvider
                                                      .notificationsList
                                                      .notificationsList[index]
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
                                  width:
                                      0.14 * MediaQuery.of(context).size.width,
                                  height:
                                      0.14 * MediaQuery.of(context).size.height,
                                  child: Image.network(
                                    notificationProvider.notificationsList
                                        .notificationsList[index].imageUrl,
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
