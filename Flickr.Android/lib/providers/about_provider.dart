import '../models/About.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

///Importing library to send http requests.
import 'dart:convert';
import 'dart:async';

enum Status { Success, Fail, Loading }

class AboutProvider with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;
  About about;

  AboutProvider({this.baseUrl, this.context, this.about});

  void getMember(String member, String val) {
    switch (member) {
      case "Description":
        {
          val = about.description;
        }
        break;

      case "Current City":
        {
          val = about.city;
        }
        break;

      case "country":
        {
          val = about.country;
        }
        break;

      case "Occupation":
        {
          val = about.occupation;
        }
        break;
      case "Website":
        {
          val = about.website;
        }
        break;

      case "HomeTown":
        {
          val = about.homeTown;
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

  void setmember(String member, String val) {
    switch (member) {
      case "Description":
        {
          about.description = val;
        }
        break;

      case "Current City":
        {
          about.city = val;
        }
        break;

      case "country":
        {
          about.country = val;
        }
        break;

      case "Occupation":
        {
          about.occupation = val;
        }
        break;
      case "Website":
        {
          about.website = val;
        }
        break;

      case "HomeTown":
        {
          about.homeTown = val;
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

  var url =
      Uri.parse("https://run.mocky.io/v3/fc9fb004-03d0-4e9f-a93f-493f6dacb9bf");

  Future<void> setabout() async {
    var response = await http.get(url);
    if (response.statusCode == 200) {
      about = About.fromJson(jsonDecode(response.body));
      status = Status.Success;
      notifyListeners();
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to load album');
    }
    notifyListeners();
  }

  Future<About> createAbout() async {
    print(about.description);
    status = Status.Loading;
    final response = await http.post(
      url,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        "profileId": about.profileId,
        "nsId": about.nsId,
        "showcaseSet": about.showcaseSet,
        "firstName": about.firstName,
        "lastName": about.lastName,
        "description": about.description,
        "website": about.website,
        "occupation": about.occupation,
        "homeTown": about.homeTown,
        "city": about.city,
        "country": about.country,
      }),
    );
    if (response.statusCode == 200) {
      print(response.body);
      status = Status.Success;
      notifyListeners();
      // If the server did return a 201 CREATED response,
      // then parse the JSON.

      return About.fromJson(jsonDecode(response.body));
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to load album');
    }
  }
}
