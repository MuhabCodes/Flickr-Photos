import 'dart:async';

///Importing library to send http requests.
import 'dart:convert';

import 'package:flickr/models/photos.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:intl/intl.dart';

enum PhotoStatus { Success, Fail, Loading }

class PhotoProvider with ChangeNotifier {
  final String baseUrl;
  PhotoStatus status = PhotoStatus.Loading;
  final BuildContext context;
  bool dateTaken = true;
  List<Photo> images = [];
  List<DateWithImages> photosWithUploadDate = [];
  List<DateWithImages> photosWithCaptureDate = [];
  PhotoProvider({this.baseUrl, this.context});
  void setDateTaken() {
    dateTaken = !dateTaken;
    notifyListeners();
  }

  var url =
      Uri.parse("https://run.mocky.io/v3/9407f7b1-30ab-4ee8-a2a2-b3c3df6a9630");
  var response;
  Future<void> setPhotos() async {
    await http.get(url).then((value) {
      if (value.statusCode == 200) {
        images = Photos.fromJson(jsonDecode(value.body)).photos;
        status = PhotoStatus.Success;

        arangeWithUploadDate();
        arangewithCaptureDate();
        print(images.length);
        notifyListeners();
      } else {
        // If the server did not return a 200 CREATED response,
        // then throw an exception.
        status = PhotoStatus.Fail;
        throw Exception('Failed to load album');
      }
    });

    notifyListeners();
  }

  DateTime dateParsing(String stringdate) {
    final dateStr = stringdate;
    final formatter = DateFormat("yyyy-MM-dd");
    final dateTimeFromStr = formatter.parse(dateStr);
    return dateTimeFromStr;
  }

  void arangeWithUploadDate() {
    int dateCounter = 0;

    for (int i = 0; i < images.length; i++) {
      List<Photo> tempList = [];
      tempList.add(images[i]);
      DateWithImages temp = new DateWithImages(
          date: dateParsing(images[i].uploadDate), images: tempList);
      photosWithUploadDate.add(temp);

      for (int j = i + 1; j < images.length; j++) {
        if (images[i].uploadDate == images[j].uploadDate) {
          photosWithUploadDate[dateCounter].images.add(images[j]);
          i++;
        }
      }
      dateCounter++;
    }
  }

  void arangewithCaptureDate() {
    int dateCounter = 0;

    for (int i = 0; i < images.length; i++) {
      List<Photo> tempList = [];
      tempList.add(images[i]);
      DateWithImages temp = new DateWithImages(
          date: dateParsing(images[i].captureDate), images: tempList);
      photosWithCaptureDate.add(temp);

      for (int j = i + 1; j < images.length; j++) {
        if (images[i].captureDate == images[j].captureDate) {
          photosWithCaptureDate[dateCounter].images.add(images[j]);
          i++;
        }
      }
      dateCounter++;
    }
  }
}
