import 'package:flickr/models/user.dart';
import 'package:flickr/profile/fullscreen_image.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';

import '../providers/user_provider.dart';

class AboutTap extends StatefulWidget {
  @override
  _AboutTapState createState() => _AboutTapState();
}

class _AboutTapState extends State<AboutTap> {
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    final _userProvider = Provider.of<UserProvider>(context);
    return ListView(
      children: [
        Card(
          margin: EdgeInsets.only(
            top: 2,
            left: 20,
            right: 20,
          ),
          child: Container(
            padding: EdgeInsets.only(top: 27, bottom: 27),
            margin: EdgeInsets.only(left: 15),
            child: Text(
              "${_userProvider.user.photos.length} Photos",
              style: TextStyle(
                  fontSize: 16,
                  color: Colors.black,
                  fontWeight: FontWeight.w500),
            ),
          ),
        ),
        newCard(
          'Description',
          _userProvider.user.person != null
              ? _userProvider.user.person.description
              : "Add Description",
          context,
        ),
        newCard(
          'Occupation',
          _userProvider.user.person != null
              ? _userProvider.user.person.occupation
              : "Add Occupation",
          context,
        ),
        newCard2(
            'Current City',
            _userProvider.user.person != null
                ? _userProvider.user.person.city
                : "Add Current City",
            context,
            _userProvider.user),
        newCard(
          'HomeTown',
          _userProvider.user.person != null
              ? _userProvider.user.person.homeTown
              : "Add HomeTown",
          context,
        ),
        newCard(
          'Website',
          "Add new website",
          context,
        ),
        newCard(
          'Tumblr',
          'Add Tumblr...',
          context,
        ),
        newCard(
          'Facebook',
          'Add Facebook...',
          context,
        ),
        newCard(
          'Twitter',
          'Add Twitter...',
          context,
        ),
        newCard(
          'Instagram',
          'Add Instagram...',
          context,
        ),
        newCard(
          'Pinterest',
          'Add Pinterest...',
          context,
        ),
        newCard2(
            'Email', _userProvider.user.email, context, _userProvider.user),
        Card(
          margin: EdgeInsets.only(
            top: 2,
            left: 20,
            right: 20,
          ),
          child: Container(
            padding: EdgeInsets.only(top: 27, bottom: 27),
            margin: EdgeInsets.only(left: 15),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Date Joined",
                      style: TextStyle(
                          fontSize: 16,
                          color: Colors.black,
                          fontWeight: FontWeight.w500),
                    ),
                    Text(
                      DateFormat("MMMM,yyyy").format(
                          _userProvider.user.person != null
                              ? _userProvider.user.person.dateCreated
                              : DateTime.now()),
                      style: TextStyle(fontSize: 16, color: Colors.grey),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
        Card(
          margin: EdgeInsets.only(
            top: 2,
            left: 20,
            right: 20,
          ),
          child: Container(
            padding: EdgeInsets.only(top: 30, bottom: 30),
            margin: EdgeInsets.only(left: 15),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text(
                      "Featured Photos",
                      style: TextStyle(
                          fontSize: 20,
                          color: Colors.grey,
                          fontWeight: FontWeight.w500),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
        Card(
          margin: EdgeInsets.only(
            top: 2,
            left: 20,
            right: 20,
          ),
          child: Container(
            padding: EdgeInsets.only(top: 30, bottom: 30),
            margin: EdgeInsets.only(left: 15),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                GestureDetector(
                  onTap: () {
                    _userProvider.user.photosCount != 0
                        ? Navigator.of(context).pushNamed(
                            '/mostpopular',
                          )
                        : "";
                  },
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Most Popular",
                        style: TextStyle(
                            fontSize: 16,
                            color: Colors.black,
                            fontWeight: FontWeight.bold),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(right: 12.0),
                        child: Icon(
                          Icons.arrow_forward_ios_rounded,
                          color: Colors.grey,
                          size: 17,
                        ),
                      )
                    ],
                  ),
                ),
                SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  padding: EdgeInsets.all(0),
                  child: Row(
                    children:
                        List.generate(_userProvider.triple.length, (index) {
                      return Container(
                        margin: EdgeInsets.only(top: 20, right: 5, bottom: 5),
                        child: InkWell(
                          onTap: () {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => FullscreenImage(
                                        _userProvider.user.photos[index])));
                          },
                          child: Image.network(
                            _userProvider.triple[index].imageUrl,
                            fit: BoxFit.cover,
                            height: size.width * 0.23,
                            width: size.width * 0.23,
                          ),
                        ),
                      );
                    }),
                  ),
                )
              ],
            ),
          ),
        ),
      ],
    );
  }
}

GestureDetector newCard(
    String primaryText, String secondryText, BuildContext context) {
  return GestureDetector(
    onTap: () {
      Navigator.of(context).pushNamed('/description',
          arguments: {'title': primaryText, 'initialText': secondryText});
    },
    child: Card(
      margin: EdgeInsets.only(
        top: 2,
        left: 20,
        right: 20,
      ),
      child: Container(
        padding: EdgeInsets.only(top: 27, bottom: 27),
        margin: EdgeInsets.only(left: 15),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  primaryText,
                  style: TextStyle(
                      fontSize: 16,
                      color: Colors.black,
                      fontWeight: FontWeight.w500),
                ),
                Text(
                  secondryText != null
                      ? secondryText
                      : "Add new " + primaryText,
                  style: TextStyle(fontSize: 16, color: Colors.grey),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.only(right: 12.0),
              child: Icon(
                Icons.arrow_forward_ios_rounded,
                color: Colors.grey,
                size: 17,
              ),
            )
          ],
        ),
      ),
    ),
  );
}

GestureDetector newCard2(
    String primaryText, String secondryText, BuildContext context, User user) {
  return GestureDetector(
    onTap: () {
      Navigator.of(context).pushNamed('/descriptionwithprivacy', arguments: {
        'title': primaryText,
        'initialText': secondryText,
      });
    },
    child: Card(
      margin: EdgeInsets.only(
        top: 2,
        left: 20,
        right: 20,
      ),
      child: Container(
        padding: EdgeInsets.only(top: 27, bottom: 27),
        margin: EdgeInsets.only(left: 15),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Text(
                  primaryText,
                  style: TextStyle(
                      fontSize: 16,
                      color: Colors.black,
                      fontWeight: FontWeight.w500),
                ),
                Text(
                  secondryText != null
                      ? secondryText
                      : "Add new " + primaryText,
                  style: TextStyle(fontSize: 16, color: Colors.grey),
                ),
                Text(
                  "Visible to:  ${primaryText == "Email" ? user.emailVisibility : user.cityVisibility}",
                  style: TextStyle(
                      fontSize: 16,
                      color: Colors.grey,
                      fontWeight: FontWeight.bold),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.only(right: 12.0),
              child: Icon(
                Icons.arrow_forward_ios_rounded,
                color: Colors.grey,
                size: 17,
              ),
            )
          ],
        ),
      ),
    ),
  );
}
