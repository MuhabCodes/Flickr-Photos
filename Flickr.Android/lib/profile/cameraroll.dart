import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class Photo {
  String image;
  DateTime date;
  Photo({this.image, this.date});
}

List<Photo> images = [
  Photo(
      image: "https://farm4.staticflickr.com/3914/15118079089_489aa62638_b.jpg",
      date: DateTime.now()),
  Photo(
      image: "https://live.staticflickr.com/2867/32647649804_0ed6882d46_b.jpg",
      date: DateTime.now()),
];

class CameraRoll extends StatefulWidget {
  @override
  _CameraRollState createState() => _CameraRollState();
}

class _CameraRollState extends State<CameraRoll> {
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            decoration: BoxDecoration(color: Colors.grey[350]),
            padding: EdgeInsets.only(top: 8, bottom: 8),
            child: TextButton(
                onPressed: () {},
                child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                  Text(
                    "Date Taken",
                    style: TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.w600,
                        fontSize: 16),
                  ),
                  Icon(
                    Icons.arrow_drop_down,
                    color: Colors.black,
                  )
                ])),
          ),
          SizedBox(
            height: 15,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                width: size.width * 0.05,
              ),
              IndexedStack(
                children: [
                  Wrap(
                      direction: Axis.vertical,
                      spacing: 10,
                      runSpacing: 20,
                      children: List.generate(images.length, (index) {
                        return Container(
                          height: 150,
                          width: size.width * 0.73,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                DateFormat("EEEE — MMM d,yyyy")
                                    .format(images[index].date),
                                style: TextStyle(
                                    fontSize: 16, fontWeight: FontWeight.w600),
                              ),
                              SizedBox(
                                height: 20,
                              ),
                              Image.network(
                                images[index].image,
                                fit: BoxFit.cover,
                                height: 100,
                                width: 100,
                              ),
                            ],
                          ),
                        );
                      })),
                ],
              ),
              Container(
                height: 30,
                child: Container(
                  decoration: BoxDecoration(shape: BoxShape.rectangle),
                  child: ElevatedButton(
                    onPressed: () {},
                    child: Text("Select",
                        style: TextStyle(
                          color: Colors.black,
                          fontWeight: FontWeight.w600,
                        )),
                    style: ElevatedButton.styleFrom(
                      primary: Colors.grey[50],
                      side: BorderSide(color: Colors.black, width: 2),
                    ),
                  ),
                ),
              )
            ],
          ),
          Container(
            margin: EdgeInsets.only(top: 10),
            child: Center(
              child: Text(
                "flickr",
                style: TextStyle(
                    fontSize: 40,
                    fontWeight: FontWeight.bold,
                    color: Colors.grey[400]),
              ),
            ),
          )
        ],
      ),
    );
  }
}
