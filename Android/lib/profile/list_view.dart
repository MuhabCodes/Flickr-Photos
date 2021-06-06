import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

import '../providers/user_provider.dart';

import 'public_tab.dart';

Widget listView(UserProvider userProvider, Size size) {
  return CustomScrollView(slivers: <Widget>[
    SliverStaggeredGrid.extentBuilder(
      mainAxisSpacing: 5,
      itemCount: userProvider.triple.length,
      maxCrossAxisExtent: size.width,
      staggeredTileBuilder: (index) =>
          StaggeredTile.extent(1, size.height * 0.6),
      itemBuilder: (context, index) => Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Image.network(
            userProvider.triple[index].imageUrl,
            fit: BoxFit.cover,
          ),
          Container(
            //height: 40,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              //this row holds pp, username, date posted
              children: <Widget>[
                Row(
                  children: [
                    Container(
                      //this container is related to the circle avatar only (tiny box contains an avatar)
                      //color: Colors.white,
                      margin: EdgeInsets.only(
                          right: 10), //user name padding away from pp
                      child: CircleAvatar(
                        backgroundImage:
                            NetworkImage(userProvider.user.userAvatar),
                      ),
                    ),
                    Text(
                      userProvider.user.firstName +
                          " " +
                          userProvider.user.lastName,
                      style:
                          TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                    ),
                  ],
                ),
                Text(
                  timeAgo(userProvider, userProvider.triple[index]).toString(),
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                ),
              ],
            ),
          ),
          Container(
            child: Text(
              userProvider.triple[index].description,
              style: TextStyle(fontSize: 12, color: Colors.black),
              maxLines: 5,
            ),
          ),
          Divider(
            color: Colors.grey[400],
            thickness: 2,
            height: 10,
          ),
          Container(
            padding: EdgeInsets.only(left: 10, right: 10),
            color: Colors.white,
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      IconButton(
                        icon: Icon(Icons.star),
                        color: Colors.grey,
                        onPressed: () {},
                      ),
                      Text(
                        userProvider.triple[index].favs.toString(),
                        style: TextStyle(fontSize: 14, color: Colors.grey),
                      )
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      IconButton(
                          icon: Icon(Icons.chat_bubble_outline_outlined),
                          iconSize: 25,
                          color: Colors.grey,
                          onPressed: () {}),
                      Text(
                        userProvider.triple[index].comments.toString(),
                        style: TextStyle(fontSize: 14, color: Colors.grey),
                      )
                    ],
                  ),
                  Icon(
                    Icons.share,
                    size: 30,
                    color: Colors.grey,
                  )
                ]),
          ),
          Card(
            child: Card(
              margin: EdgeInsets.only(
                top: 2,
                left: 20,
                right: 20,
              ),
              child: Container(
                padding: EdgeInsets.only(top: 27, bottom: 27),
                margin: EdgeInsets.only(left: 15),
                child: Text(
                  "${userProvider.triple[index].views} views  ",
                  style: TextStyle(
                      fontSize: 16,
                      color: Colors.black,
                      fontWeight: FontWeight.w500),
                ),
              ),
            ),
          )
        ],
      ),
    ),
  ]);
}
