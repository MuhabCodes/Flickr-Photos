import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../models/notification.dart';

enum Status { Success, Fail, Loading }

class NotificationProvider with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;

  NotificationsList notificationsList;
  NotificationProvider({this.baseUrl, this.context, this.notificationsList});

  var _url =
      Uri.parse("https://run.mocky.io/v3/01ac289b-150f-43d2-9ae3-ad99f836a1dc");

  Future<void> getNotification() async {
    var response = await http.get(_url);
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
