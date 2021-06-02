import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/user_provider.dart';
import '../providers/photo_provider.dart';

class AboutTap extends StatefulWidget {
  @override
  _AboutTapState createState() => _AboutTapState();
}

class _AboutTapState extends State<AboutTap> {
  @override
  Widget build(BuildContext context) {
    final _userProvider = Provider.of<UserProvider>(context);
    final _photoProvider = Provider.of<PhotoProvider>(context, listen: true);
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
              "${_photoProvider.images.length} Photos",
              style: TextStyle(
                  fontSize: 16,
                  color: Colors.black,
                  fontWeight: FontWeight.w500),
            ),
          ),
        ),
        newCard(
          'Description',
          _userProvider.user.description,
          context,
        ),
        newCard(
          'Occupation',
          _userProvider.user.occupation,
          context,
        ),
        newCard(
          'Current City',
          _userProvider.user.city,
          context,
        ),
        newCard(
          'HomeTown',
          _userProvider.user.homeTown,
          context,
        ),
        newCard(
          'Website',
          _userProvider.user.website,
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
        newCard(
          'Email',
          'mustafausamaa@gmail.com',
          context,
        ),
        newCard(
          'Date Joined',
          'March 2021',
          context,
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
          arguments: {'title': primaryText, 'initialtext': secondryText});
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
                  secondryText,
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
