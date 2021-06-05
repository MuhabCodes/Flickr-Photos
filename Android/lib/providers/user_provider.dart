import 'dart:async';

///Importing library to send http requests.
import 'dart:convert';
import 'package:flickr/models/user.dart';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../models/user.dart';

enum Status { Success, Fail, Loading }

class UserProvider with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;
  User user;

  UserProvider({this.baseUrl, this.context, this.user});

  void getMember(String member, String val) {
    // getter for certain member
    switch (member) {
      case "Description":
        {
          val = user.description;
        }
        break;

      case "Current City":
        {
          val = user.city;
        }
        break;

      case "country":
        {
          val = user.country;
        }
        break;

      case "Occupation":
        {
          val = user.occupation;
        }
        break;
      case "Website":
        {
          val = user.website;
        }
        break;

      case "HomeTown":
        {
          val = user.homeTown;
        }
        break;

      default:
        {
          //statements;
        }
        break;
    }
    //notifyListeners();
  }

  void setMember(String member, String val) {
    // setter for certain member
    switch (member) {
      case "Description":
        {
          user.description = val;
        }
        break;

      case "Current City":
        {
          user.city = val;
        }
        break;

      case "country":
        {
          user.country = val;
        }
        break;

      case "Occupation":
        {
          user.occupation = val;
        }
        break;
      case "Website":
        {
          user.website = val;
        }
        break;

      case "HomeTown":
        {
          user.homeTown = val;
        }
        break;

      default:
        {
          //statements;
        }
        break;
    }
    //notifyListeners();
  }

  var _url =
      Uri.parse("https://run.mocky.io/v3/8b6dd354-cdd4-4b73-b8ec-c568ebfa66bf");

  Future<void> setUser() async {
    // get request
    var response = await http.get(_url);
    if (response.statusCode == 200) {
      user = User.fromJson(jsonDecode(response.body));
      status = Status.Success;
      notifyListeners();
    } else {
      // If the server did not return a 200 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to load album');
    }
    notifyListeners();
  }

  var _geturl =
      Uri.parse("https://run.mocky.io/v3/2e226f67-30da-4160-bd74-f88464cac234");
  Future<void> createUser() async {
    // post request from backend
    status = Status.Loading;
    final response = await http.post(
      _geturl,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        "profileId": user.userId,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "description": user.description,
        "website": user.website,
        "occupation": user.occupation,
        "homeTown": user.homeTown,
        "city": user.city,
        "country": user.country,
      }),
    );
    if (response.statusCode == 200) {
      print(response.body);
      user = User.fromJson(jsonDecode(response.body));
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
