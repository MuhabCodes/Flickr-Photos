// // import 'package:camera_app_fr/Pages/upload_page.dart';
// // import 'package:mapbox_search/mapbox_search.dart';

// import 'package:flutter/material.dart';
// // import 'package:flutter_google_places/flutter_google_places.dart';
// // import 'package:google_maps_webservice/places.dart';
// //import 'package:http/http.dart' as http;


// class LocationPage extends StatelessWidget {
//   String location;
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//         appBar: AppBar(
//           backgroundColor: Colors.grey[800],
//           title: Row(
//             mainAxisAlignment: MainAxisAlignment.spaceAround,
//             children: [
//               Text("Add a Location"),
//               ConstrainedBox(
//                 constraints: BoxConstraints.tightFor(width: 70, height: 35),
//               ),
//             ],
//           ),
//         ),
//         body: Container(
//           padding: EdgeInsets.all(10),
//           child: Row(
//             mainAxisAlignment: MainAxisAlignment.spaceBetween,
//             children: <Widget>[
//               Flexible(
//                 child: TextField(
//                   decoration: InputDecoration(labelText: 'Add a tag'),
//                 ),
//               ),
//               TextButton(
//               child: Text("Find a location") ,
//                 onPressed: () {
//                   Navigator.push(
//                     context,
//                     MaterialPageRoute(
//                       builder: (context) => MapBoxAutoCompleteWidget(
//                         apiKey:
//                             "pk.eyJ1IjoiemlhZGQiLCJhIjoiY2tvNnAzc2RwMGg2djJwcGR4eXo0NDdlaSJ9.35-zikVsEn6ys24IglpU3Q",
//                         hint: "Find a location",
//                         onSelect: (place) {
//                           location = place.placeName;
//                         },
//                         limit: 10,
//                         country: "EG",
//                       ),
//                     ),
//                   );
//                 },
//               ),
//             ],
//           ),
//         ));
//   }
// }

// // void findPlace(String placeName) async {
// //   if (placeName.length > 1) {
// //     String mapKey = "AIzaSyDYG9oraPZGYnap-2F-vaCyP9-Urxvu6Zs";
// //     String autoCompleteUrl =
// //         "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=$placeName&key=$mapKey-2F-vaCyP9-Urxvu6Zs&sessiontoken=1234567890";
// //     Uri myUri = Uri.parse(autoCompleteUrl);
// //     var request = await http.get(myUri);
// //   }
// // //AIzaSyDYG9oraPZGYnap-2F-vaCyP9-Urxvu6Zs
// // }

// // return Scaffold(
// //   appBar: AppBar(
// //     backgroundColor: Colors.grey[800],
// //     title: Row(
// //       mainAxisAlignment: MainAxisAlignment.start,
// //       children: [
// //         Text("Add a Location"),
// //       ],
// //     ),
// //   ),
// //   body: Flexible(
// //     child: TextField(
// //       onChanged: (val) {
// //         findPlace(val);
// //       },
// //       decoration: InputDecoration(labelText: 'Find a Location'),
// //     ),
// //   ),
// // );
