import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

import '../providers/user_provider.dart';

import 'public_tab.dart';

Widget listView(UserProvider userProvider, Size size) {
  return CustomScrollView(slivers: <Widget>[
    SliverStaggeredGrid.extentBuilder(
      mainAxisSpacing: 5,
      itemCount: userProvider.user.photos.length,
      maxCrossAxisExtent: size.width,
      staggeredTileBuilder: (index) => StaggeredTile.extent(
          1,
          userProvider.user.photos[index].comments == 0 &&
                  userProvider.user.photos[index].favs == 0
              ? size.height * 0.58
              : size.height * 0.75),
      itemBuilder: (context, index) => Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Image.network(
            userProvider.user.photos[index].imageUrl,
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
                  timeAgo(userProvider, userProvider.user.photos[index])
                      .toString(),
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                ),
              ],
            ),
          ),
          Container(
            child: Text(
              userProvider.user.photos[index].description != null
                  ? userProvider.user.photos[index].description
                  : "",
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
            width: double.infinity,
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
                        userProvider.user.photos[index].favs.toString(),
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
                        userProvider.user.photos[index].comments.toString(),
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
            child: Container(
              width: double.infinity,
              padding: EdgeInsets.only(left: 15, top: 27, bottom: 27),
              child: Row(
                children: [
                  Icon(Icons.remove_red_eye_outlined),
                  Text(
                    "${userProvider.user.photos[index].views} views  ",
                    style: TextStyle(
                        fontSize: 16,
                        color: Colors.black,
                        fontWeight: FontWeight.w500),
                  ),
                ],
              ),
            ),
          ),
          userProvider.user.photos[index].favs != 0
              ? Card(
                  child: Container(
                    width: double.infinity,
                    padding: EdgeInsets.only(left: 15, top: 27, bottom: 27),
                    child: Row(
                      children: [
                        Icon(Icons.star),
                        Text(
                          "${userProvider.user.photos[index].favs} favs  ",
                          style: TextStyle(
                              fontSize: 16,
                              color: Colors.black,
                              fontWeight: FontWeight.w500),
                        ),
                      ],
                    ),
                  ),
                )
              : Container(),
          userProvider.user.photos[index].comments != 0
              ? Card(
                  color: Colors.grey,
                  child: Container(
                    width: double.infinity,
                    padding: EdgeInsets.only(left: 15, top: 27, bottom: 27),
                    child: Row(
                      children: [
                        Icon(Icons.mode_comment_sharp),
                        Text(
                          "${userProvider.user.photos[index].comments} comments  ",
                          style: TextStyle(
                              fontSize: 16,
                              color: Colors.black,
                              fontWeight: FontWeight.w500),
                        ),
                      ],
                    ),
                  ),
                )
              : Container(),
        ],
      ),
    ),
  ]);
}
