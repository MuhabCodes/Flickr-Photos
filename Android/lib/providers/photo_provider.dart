import 'dart:async';
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
  List<Photo> triple = [];
  List<DateWithImages> photosWithUploadDate = [];
  List<DateWithImages> photosWithCaptureDate = [];
  List<Photo> selectedPhotos = [];
  bool isSelected = false; //check if one is selected
  PhotoProvider({this.baseUrl, this.context});

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

  var url =
      Uri.parse("https://run.mocky.io/v3/5b50aefb-82a8-4e2e-a888-834ef0f61200");
  var response;
  Future<void> setPhotos() async {
    await http.get(url).then((value) {
      if (value.statusCode == 200) {
        if (images.isNotEmpty) {
          images.clear();
          photosWithUploadDate.clear();
          photosWithCaptureDate.clear();
        }
        images = Photos.fromJson(jsonDecode(value.body)).photos;
        status = PhotoStatus.Success;

        arangeWithUploadDate();
        arangewithCaptureDate();
        triplephotos();
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

  void triplephotos() {
    for (int i = 0; i < images.length; i++) {
      triple.add(images[i]);
      triple.add(images[i]);
      triple.add(images[i]);
    }
  }

  void arangeWithUploadDate() {
    int dateCounter = 0;

    for (int i = 0; i < images.length; i++) {
      List<Photo> tempList = [];
      tempList.add(images[i]);
      DateWithImages temp =
          new DateWithImages(date: images[i].uploadDate, images: tempList);
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
      DateWithImages temp =
          new DateWithImages(date: images[i].captureDate, images: tempList);
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

  void removeSelected() {
    for (var i = 0; i < selectedPhotos.length; i++) {
      images.remove(selectedPhotos[i]);
    }
    photosWithUploadDate.clear();
    photosWithCaptureDate.clear();
    arangewithCaptureDate();
    arangeWithUploadDate();
    selectedPhotos.clear();
    notifyListeners();
  }
}
