import 'dart:async';

///Importing library to send http requests.
import 'dart:convert';
import 'dart:io';

import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';

import '../models/user.dart';

enum Status { Success, Fail, Loading }

class UserProvider with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;
  User user;
  List<Photo> triple = [];
  List<DateWithImages> photosWithUploadDate = [];
  List<DateWithImages> photosWithCaptureDate = [];
  List<Photo> selectedPhotos = [];
  bool isSelected = false; //check if one is selected
  bool dateTaken = true;
  UserProvider({this.baseUrl, this.context, this.user});

  void getMember(String member, String val) {
    // getter for certain member
    switch (member) {
      case "Description":
        {
          val = user.person.description;
        }
        break;

      case "Current City":
        {
          val = user.person.city;
        }
        break;

      case "Occupation":
        {
          val = user.person.occupation;
        }
        break;
      case "HomeTown":
        {
          val = user.person.homeTown;
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
          user.person.description = val;
        }
        break;

      case "Current City":
        {
          user.person.city = val;
        }
        break;

      case "country":
        {
          user.person.country = val;
        }
        break;

      case "Occupation":
        {
          user.person.occupation = val;
        }
        break;

      case "HomeTown":
        {
          user.person.homeTown = val;
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

  // var _url =
  //     Uri.parse("https://run.mocky.io/v3/ce0a9a20-6269-4f8c-ba2b-02c36824afd8");

  Future<void> setUser() async {
    var _url = Uri.parse("https://api.flick.photos/people/${user.userId}/info");
    // get request
    var response = await http.get(
      _url,
    );
    if (response.statusCode == 200) {
      if (user.photos != null) {
        user.photos.clear();
        photosWithUploadDate.clear();
        photosWithCaptureDate.clear();
      }

      user = User.fromJson(jsonDecode(response.body));
      status = Status.Success;
      arangeWithUploadDate();
      arangewithCaptureDate();
      triplephotos();

      notifyListeners();
    } else {
      // If the server did not return a 200 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to load album');
    }
    notifyListeners();
  }

  void notify() {
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

  void setSelected(bool val) {
    isSelected = val;
    notifyListeners();
  }

  void setDateTaken(String date) {
    if ("Date Taken" == date)
      dateTaken = true;
    else {
      dateTaken = false;
    }
    notifyListeners();
  }

  DateTime dateParsing(String stringdate) {
    final dateStr = stringdate;
    final formatter = DateFormat("yyyy-MM-dd");
    final dateTimeFromStr = formatter.parse(dateStr);
    return dateTimeFromStr;
  }

  void triplephotos() {
    for (int i = 0; i < user.photos.length; i++) {
      triple.add(user.photos[i]);
      triple.add(user.photos[i]);
      triple.add(user.photos[i]);
    }
  }

  void arangeWithUploadDate() {
    int dateCounter = 0;

    for (int i = 0; i < user.photos.length; i++) {
      List<Photo> tempList = [];
      tempList.add(user.photos[i]);
      DateWithImages temp =
          new DateWithImages(date: user.photos[i].uploadDate, images: tempList);
      photosWithUploadDate.add(temp);

      for (int j = i + 1; j < user.photos.length; j++) {
        if (user.photos[i].uploadDate == user.photos[j].uploadDate) {
          photosWithUploadDate[dateCounter].images.add(user.photos[j]);
          i++;
        }
      }
      dateCounter++;
    }
  }

  void arangewithCaptureDate() {
    int dateCounter = 0;

    for (int i = 0; i < user.photos.length; i++) {
      List<Photo> tempList = [];
      tempList.add(user.photos[i]);
      DateWithImages temp = new DateWithImages(
          date: user.photos[i].captureDate, images: tempList);
      photosWithCaptureDate.add(temp);

      for (int j = i + 1; j < user.photos.length; j++) {
        if (user.photos[i].captureDate == user.photos[j].captureDate) {
          photosWithCaptureDate[dateCounter].images.add(user.photos[j]);
          i++;
        }
      }
      dateCounter++;
    }
  }

  void removeSelected() {
    for (var i = 0; i < selectedPhotos.length; i++) {
      user.photos.remove(selectedPhotos[i]);
    }
    photosWithUploadDate.clear();
    photosWithCaptureDate.clear();
    arangewithCaptureDate();
    arangeWithUploadDate();
    selectedPhotos.clear();
    notifyListeners();
  }
}
