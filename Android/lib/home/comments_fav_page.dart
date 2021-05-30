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
  int index = 0;
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
                style: TextStyle(color: Colors.white),
              ),
            ),
            bottom: TabBar(
                //labelColor: Colors.white,
                //unselectedLabelColor: Colors.white,
                indicatorColor: Colors.white,
                tabs: <Widget>[
                  Tab(
                    text: thePost.likes.length.toString() + " Faves",
                  ),
                  Tab(text: thePost.comments.length.toString() + " Comments"),
                ]),
            backgroundColor: Colors.grey[900],
            /*leading: IconButton(
              icon: Icon(
                Icons.arrow_back,
                color: Colors.white,
              ),
              onPressed: () {
                setState(() {
                  page = 1;
                  build(context);
                });
              },
            ),*/
          ),
          body: TabBarView(children: <Widget>[
            //getLikes(thePost.likes),
            ListView(
                //children: likers,
                ),
            //getCommentsFaves(thePost.comments),

            //Container(),
          ])),
    );
  }
}
