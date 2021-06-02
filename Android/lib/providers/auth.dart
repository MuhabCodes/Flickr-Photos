import 'dart:async';

///Importing library to send http requests.
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import '../models/user.dart';

enum Status { Success, Fail, Loading }

class Authentication with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;
  User currentUser;
  String token;

  Authentication({this.baseUrl, this.context, this.token, this.currentUser});

  var _geturl =
      Uri.parse("https://run.mocky.io/v3/36e4926a-22b8-43f1-ab11-dddfb8b0879a");
  Future<void> createAbout() async {
    // post request from backend
    status = Status.Loading;
    final response = await http.post(
      _geturl,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': currentUser.email,
        'password': currentUser.password
      }),
    );
    if (response.statusCode == 200) {
      print(response.body);
      token = response.body;
      status = Status.Success;
      notifyListeners();
      // If the server did return a 201 CREATED response,
      // then parse the JSON.

      return;
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to load album');
    }
  }
}
