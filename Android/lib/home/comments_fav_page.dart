import 'package:flutter/material.dart';
import 'package:flickr/home/comments_page.dart';
import 'package:flickr/models/comment.dart';
import 'package:flickr/models/global.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:responsive_widgets/responsive_widgets.dart';

import '../models/global.dart';

class CommentsFavs extends StatelessWidget {
  Post thePost;
  int index = 0; //1 means start with favs tab, 2 means start with comments tab
  bool isFaves=false;
  double _widthScreen=0;
  CommentsFavs(this.thePost, index, this.isFaves);

  @override
  Widget build(BuildContext context) {
    _widthScreen= MediaQuery.of(context).size.width;
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.grey[800],
          title: Flexible(
            child: Text(
              thePost.user.username + "'s Photo",
              style: appBarTitleStyle,
              maxLines: 7,
            ),
          ),
          bottom: TabBar(
              //overlayColor: MaterialStateColor.red,
              labelColor: Colors.white,
              //key: 2,
              unselectedLabelColor: Colors.white,
              indicatorColor: Colors.blue,
              tabs: <Widget>[
                Tab(
                  text: thePost.likes.length.toString() + " Faves",
                ),
                Tab(text: thePost.comments.length.toString() + " Comments"),
              ]),
        ),
        body: ,
      ),
    );
  }
List<Widget> getLikers(List<User> likes){
List<Widget> likers = [];
    for (User follower in likes) {
      likers.add(new Container(
          constraints: BoxConstraints(
            maxWidth: _widthScreen,
          ),
          //height: 70,
          padding: EdgeInsets.only(left: 0, right: 4, top: 8, bottom: 5),
          child: TextButton(
            child: Column(
              children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Container(
                        //this container is related to the circle avatar only (tiny box contains an avatar)
                        //color: Colors.white,
                        margin: EdgeInsets.only(
                            right: 10), //user name padding away from pp
                        child: Row(
                          children: <Widget>[
                            CircleAvatar(
                              backgroundImage: follower.profilePicture,
                            ),
                            Text("  " + follower.username,
                                style: TextStyle(
                                  fontSize: 10,
                                  color: Colors.black,
                                )),
                          ],
                        )),
                    Container(
                      height: 30,
                      decoration: BoxDecoration(
                          border: Border.all(width: 2, color: Colors.black),
                          borderRadius: BorderRadius.all(Radius.circular(0))),
                      child: TextButton(
                        child: Text(
                            user.following.contains(follower)
                                ? "✓"
                                : "+ Follow",
                            style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 10,
                                color: user.following.contains(follower)
                                    ? Colors.black
                                    : Colors.black)),
                        onPressed: () {
                          setState(() {
                            if (user.following.contains(follower)) {
                              user.following.remove(follower);
                            } else {
                              user.following.add(follower);
                            }
                          });
                        },
                      ),
                    )
                  ],
                ),
                Container(
                    alignment: Alignment.topLeft,
                    padding: EdgeInsets.only(left: 30),
                    margin: const EdgeInsets.only(right: 90.0),
                    //constraints: BoxConstraints.expand(width: 200, height: 20),
                    child: Text(
                      "38 Photos -1.2k F ollowers",
                      style: TextStyle(color: Colors.grey, fontSize: 10),
                      overflow: TextOverflow.ellipsis,
                      //textWidthBasis: TextWidthBasis.longestLine,
                    )),
              ],
            ),
            onPressed: () {},
          )));
    }
}
}
