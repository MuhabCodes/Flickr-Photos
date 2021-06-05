// To parse this JSON data, do
//
//     final photos = photosFromJson(jsonString);

import 'dart:convert';

class Photos {
  Photos({
    this.photos,
  });

  List<Photo> photos;

  factory Photos.fromRawJson(String str) => Photos.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory Photos.fromJson(Map<String, dynamic> json) => Photos(
        photos: List<Photo>.from(json["photos"].map((x) => Photo.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "photos": List<dynamic>.from(photos.map((x) => x.toJson())),
      };
}

class Photo {
  Photo({
    this.views,
    this.isPublic,
    this.tags,
    this.peopleInPhoto,
    this.id,
    this.description,
    this.title,
    this.captureDate,
    this.uploadDate,
    this.secret,
    this.imageUrl,
    this.width,
    this.height,
    this.user,
    this.photoV,
    this.favs,
    this.comments,
    this.v,
  });
  bool selected = false;
  int views;
  bool isPublic;
  List<String> tags;
  List<dynamic> peopleInPhoto;
  String id;
  String description;
  String title;
  DateTime captureDate;
  DateTime uploadDate;
  String secret;
  String imageUrl;
  int width;
  int height;
  String user;
  int photoV;
  int favs;
  int comments;
  int v;

  factory Photo.fromRawJson(String str) => Photo.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory Photo.fromJson(Map<String, dynamic> json) => Photo(
        views: json["views"],
        isPublic: json["isPublic"],
        tags: List<String>.from(json["tags"].map((x) => x)),
        peopleInPhoto: List<dynamic>.from(json["peopleInPhoto"].map((x) => x)),
        id: json["_id"],
        description: json["description"] == null ? null : json["description"],
        title: json["title"] == null ? null : json["title"],
        captureDate: DateTime.parse(json["captureDate"]),
        uploadDate: DateTime.parse(json["uploadDate"]),
        secret: json["secret"],
        imageUrl: json["imageUrl"],
        width: json["width"],
        height: json["height"],
        favs: json["favs"],
        comments: json["comments"],
        user: json["user"],
        photoV: json["v"] == null ? null : json["v"],
        v: json["__v"] == null ? null : json["__v"],
      );

  Map<String, dynamic> toJson() => {
        "views": views,
        "isPublic": isPublic,
        "tags": List<dynamic>.from(tags.map((x) => x)),
        "peopleInPhoto": List<dynamic>.from(peopleInPhoto.map((x) => x)),
        "_id": id,
        "description": description == null ? null : description,
        "title": title == null ? null : title,
        "captureDate": captureDate.toIso8601String(),
        "uploadDate": uploadDate.toIso8601String(),
        "favs": favs,
        "comments": comments,
        "secret": secret,
        "imageUrl": imageUrl,
        "width": width,
        "height": height,
        "user": user,
        "v": photoV == null ? null : photoV,
        "__v": v == null ? null : v,
      };
}

class DateWithImages {
  DateTime date;
  List<Photo> images;
  DateWithImages({this.date, this.images});
}
