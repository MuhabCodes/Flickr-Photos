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
  CommentsFavs(this.thePost, index);

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          title: Flexible(
            child: Text(
              thePost.user.username + "'s Photo",
              style: appBarTitleStyle,
            ),
          ),
          bottom: TabBar(
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
        /*body: TabBarView(children: <Widget>[
            //getLikes(thePost.likes),
            ListView(
                //children: likers,
                ),
            //getCommentsFaves(thePost.comments),

            //Container(),
          ]
          )*/
      ),
    );
  }
}
