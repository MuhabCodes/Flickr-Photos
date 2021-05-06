import 'package:flutter/material.dart';
import './cameraroll.dart';
import 'description.dart';
import '../providers/about_provider.dart';
import 'package:provider/provider.dart';

class AboutTap extends StatefulWidget {
  @override
  _AboutTapState createState() => _AboutTapState();
}

class _AboutTapState extends State<AboutTap> {
  @override
  Widget build(BuildContext context) {
    final aboutProvider = Provider.of<AboutProvider>(context);
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
              "${images.length} Photos",
              style: TextStyle(
                  fontSize: 16,
                  color: Colors.black,
                  fontWeight: FontWeight.w500),
            ),
          ),
        ),
        newcard(
            'Description',
            aboutProvider.about.description,
            context,
            Description(
                title: 'Description',
                initialtext: aboutProvider.about.description)),
        newcard(
            'Occupation',
            aboutProvider.about.occupation,
            context,
            Description(
                title: 'Occupation',
                initialtext: aboutProvider.about.occupation)),
        newcard(
            'Current City',
            aboutProvider.about.city,
            context,
            Description(
                title: 'Current City', initialtext: aboutProvider.about.city)),
        newcard(
            'HomeTown',
            aboutProvider.about.homeTown,
            context,
            Description(
                title: 'HomeTown', initialtext: aboutProvider.about.homeTown)),
        newcard(
            'Website',
            aboutProvider.about.website,
            context,
            Description(
                title: 'Website', initialtext: aboutProvider.about.website)),
        newcard(
            'Tumblr', 'Add Tumblr...', context, Description(title: 'Tumblr')),
        newcard('Facebook', 'Add Facebook...', context,
            Description(title: 'Facebook')),
        newcard('Twitter', 'Add Twitter...', context,
            Description(title: 'Twitter')),
        newcard('Instagram', 'Add Instagram...', context,
            Description(title: 'Instagram')),
        newcard('Pinterest', 'Add Pinterest...', context,
            Description(title: 'Pinterest')),
        newcard('Email', 'mustafausamaa@gmail.com', context,
            Description(title: 'Email')),
        newcard('Date Joined', 'March 2021', context, Description()),
      ],
    );
  }
}

GestureDetector newcard(String primarytext, String secondrytext,
    BuildContext context, StatefulWidget route) {
  return GestureDetector(
    onTap: () {
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => route),
      );
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
                  primarytext,
                  style: TextStyle(
                      fontSize: 16,
                      color: Colors.black,
                      fontWeight: FontWeight.w500),
                ),
                Text(
                  secondrytext,
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
