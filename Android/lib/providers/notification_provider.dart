import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flickr/providers/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';

import '../models/notification.dart';

enum Status { Success, Fail, Loading }

class NotificationProvider with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;
  String token;

  NotificationsList notificationsList;
  NotificationProvider({this.baseUrl, this.context, this.notificationsList});

  // var _url =
  //     Uri.parse("https://run.mocky.io/v3/01ac289b-150f-43d2-9ae3-ad99f836a1dc");
  var _url =
      Uri.parse("https://api.flick.photos/notifications/myNotifications");

  Future<void> getNotification() async {
    final response = await http.get(
      _url,
      headers: {
        HttpHeaders.authorizationHeader: token,
      },
    );
    if (response.statusCode == 200) {
      notificationsList = NotificationsList.fromJson(jsonDecode(response.body));

      status = Status.Success;
      notifyListeners();
    } else {
      status = Status.Fail;
      throw Exception('Failed to load album');
    }
    notifyListeners();
  }
}
