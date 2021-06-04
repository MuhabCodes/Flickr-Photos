class Photos {
  Photos({
    this.photos,
  });

  List<Photo> photos;

  factory Photos.fromJson(Map<String, dynamic> json) => Photos(
        photos: List<Photo>.from(json["photos"].map((x) => Photo.fromJson(x))),
      );
}

class Photo {
  Photo({this.uploadDate, this.imageUrl, this.captureDate});

  String uploadDate;
  String imageUrl;
  String captureDate;
  bool selected = false;

  factory Photo.fromJson(Map<String, dynamic> json) => Photo(
        uploadDate: json["uploadDate"],
        imageUrl: json["imageUrl"],
        captureDate: json["captureDate"],
      );

  Map<String, dynamic> toJson() => {
        "uploadDate": uploadDate,
        "imageUrl": imageUrl,
        "captureDate": captureDate,
      };
}

class DateWithImages {
  DateTime date;
  List<Photo> images;
  DateWithImages({this.date, this.images});
}
