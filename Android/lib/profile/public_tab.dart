import 'package:flickr/models/user.dart';
import 'package:flickr/profile/fullscreen_image.dart';
import 'package:flickr/profile/list_view.dart';
import 'package:flickr/providers/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';
import 'package:timeago/timeago.dart' as timeago;

String timeAgo(UserProvider userProvider, Photo image) {
  DateTime now = DateTime.now();
  int year =
      now.year - userProvider.dateParsing(image.uploadDate.toString()).year;
  int month = year * 12 +
      now.month -
      userProvider.dateParsing(image.uploadDate.toString()).month;
  int days = month * 30 +
      now.day -
      userProvider.dateParsing(image.uploadDate.toString()).day;
  final fifteenAgo = DateTime.now().subtract(Duration(days: days));

  // Add a new locale messages
  //timeago.setLocaleMessages('en_short', timeago.EnShortMessages());
  return timeago.format(fifteenAgo, locale: 'en_short');
}

class Public extends StatefulWidget {
  @override
  _PublicState createState() => _PublicState();
}

class _PublicState extends State<Public> {
  String view = "Public view";
  bool isGrid = true;
  @override
  Widget build(BuildContext context) {
    var userProvider = Provider.of<UserProvider>(context, listen: true);
    var size = MediaQuery.of(context).size;
    return Column(
      mainAxisSize: MainAxisSize.max,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
            height: size.height * 0.06,
            decoration: BoxDecoration(color: Colors.grey[350]),
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      IconButton(
                        icon: Icon(Icons.auto_awesome_mosaic),
                        onPressed: () {
                          setState(() {
                            isGrid = true;
                          });
                        },
                        color: isGrid ? Colors.black : Colors.grey,
                        iconSize: 20,
                      ),
                      SizedBox(
                        width: 10,
                      ),
                      IconButton(
                        icon: Icon(FontAwesomeIcons.image),
                        onPressed: () {
                          setState(() {
                            isGrid = false;
                          });
                        },
                        color: isGrid ? Colors.grey[600] : Colors.black,
                        iconSize: 20,
                      ),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      TextButton(
                        onPressed: () {
                          showModalBottomSheet(
                              isScrollControlled: true,
                              context: context,
                              builder: (BuildContext context) {
                                return Container(
                                    height: MediaQuery.of(context).size.height *
                                        0.24,
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        TextButton(
                                          onPressed: () {
                                            setState(() {
                                              view = "Public view";
                                            });

                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Public view",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                        TextButton(
                                          onPressed: () {
                                            setState(() {
                                              view = "Friend view";
                                            });

                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Friend view",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                        TextButton(
                                          onPressed: () {
                                            setState(() {
                                              view = "Family view";
                                            });
                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Family view",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                      ],
                                    ));
                              });
                        },
                        child: Text(
                          view,
                          style: TextStyle(
                              color: Colors.black,
                              fontWeight: FontWeight.w600,
                              fontSize: 16),
                        ),
                      ),
                      IconButton(
                        icon: Icon(Icons.arrow_drop_down),
                        onPressed: () {
                          showModalBottomSheet(
                              isScrollControlled: true,
                              context: context,
                              builder: (BuildContext context) {
                                return Container(
                                    height: MediaQuery.of(context).size.height *
                                        0.24,
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        TextButton(
                                          onPressed: () {
                                            setState(() {
                                              view = "Public view";
                                            });

                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Public view",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                        TextButton(
                                          onPressed: () {
                                            setState(() {
                                              view = "Friend view";
                                            });

                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Friend view",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                        TextButton(
                                          onPressed: () {
                                            setState(() {
                                              view = "Family view";
                                            });
                                            Navigator.pop(context);
                                          },
                                          child: Text(
                                            "Family view",
                                            style: TextStyle(
                                                color: Colors.black,
                                                fontWeight: FontWeight.bold,
                                                fontSize: 16),
                                          ),
                                        ),
                                      ],
                                    ));
                              });
                        },
                        color: Colors.black,
                      ),
                    ],
                  )
                ])),
        SizedBox(
          height: 5,
        ),
        Expanded(
          child: SizedBox(
            height: size.height * 0.6,
            child:
                isGrid ? gridView(userProvider) : listView(userProvider, size),
          ),
        ),
      ],
    );
  }
}

Widget gridView(UserProvider userProvider) {
  return CustomScrollView(slivers: <Widget>[
    SliverStaggeredGrid.countBuilder(
      mainAxisSpacing: 5,
      crossAxisSpacing: 5,
      crossAxisCount: 2,
      staggeredTileBuilder: (index) => index % 7 == 1 || index % 7 == 2
          ? StaggeredTile.count(1, 1)
          : StaggeredTile.count(2, 1),
      itemBuilder: (context, index) => InkWell(
        onTap: () {
          Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) =>
                      FullscreenImage(userProvider.user.photos[index])));
        },
        child: Image.network(
          userProvider.user.photos[index].imageUrl,
          fit: BoxFit.fill,
        ),
      ),
      itemCount: userProvider.user.photos.length,
    )
  ]);
}
