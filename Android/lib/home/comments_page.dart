import 'package:flickr/home/home.dart';
import 'package:flickr/models/comment.dart';
import 'package:flickr/models/global.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:responsive_widgets/responsive_widgets.dart';

bool post_comment(String commentController, Post thePost) {
  bool isAdded = false;
  if (commentController.isEmpty == false) {
    thePost.comments.add(
      new Comment(loggedInUser, commentController, DateTime.now(), false),
    );
    isAdded = true;
  }
  return isAdded;
}

/*
class CommentsPage extends StatefulWidget {
  @override
  _CommentsPage createState() => _CommentsPage();
}

class _CommentsPage extends State<CommentsPage> {
  static int page = 3;
  static Post thePost = post1;
  double widthScreen = 0;
  List<Comment> commentsList;
  //CommentsPage (this.commentsList);

  @override
  Widget build(BuildContext context) {
    widthScreen = MediaQuery.of(context).size.width;
    /*Map<int, Widget> _pageview = {
      1: getMain(),
      2: getLikes(thePost.likes),
      3: getComments(thePost.comments)
    };*/
    return getComments(commentsList);
  }

  Widget getComments(List<Comment> commentsList) {
    List<Widget> comments = [];
    //DateTime now = DateTime.now();
    for (Comment comment in commentsList) {
      //int hoursAgo = (now.hour) - (comment.dateOfComment.hour - 1);
      comments.add(new Container(
          constraints: BoxConstraints(
            maxWidth: widthScreen,
          ),
          // height: 45,
          padding: EdgeInsets.only(top: 10),
          child: TextButton(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  //mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Container(
                      margin: EdgeInsets.only(right: 10),
                      width: 40,
                      height: 40,
                      child: CircleAvatar(
                        backgroundImage: comment.user.profilePicture,
                      ),
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        RichText(
                          text: new TextSpan(
                            style: new TextStyle(
                              fontSize: 10.0,
                              color: Colors.black,
                            ),
                            children: <TextSpan>[
                              new TextSpan(
                                text: comment.user.username + "\n",
                                style: textStyleBold,
                              ),
                              new TextSpan(text: '', style: textStyle),
                              new TextSpan(
                                  text: comment.comment, style: textStyle),
                            ],
                          ),
                        ),
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Container(
                              margin: EdgeInsets.only(right: 0, top: 0),
                              child: Text(
                                getPostTime(comment.dateOfComment),
                                style: textStyleLigthGrey,
                              ),
                            ),
                            Container(
                              child: Text(
                                " • Reply",
                                style: textStyleLigthGrey,
                              ),
                              margin: EdgeInsets.only(right: 10, top: 0),
                            )
                          ],
                        )
                      ],
                    )
                  ],
                ),
              ],
            ),
            onPressed: () {},
          )));
    }

    return DefaultTabController(
      initialIndex: 1,
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          title: Flexible(
            child: Text(
              thePost.user.username + "'s Photo",
              style: TextStyle(color: Colors.white, fontSize: 15),
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
          backgroundColor: Colors.grey[900],
          leading: IconButton(
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
          ),
        ),
        body: TabBarView(children: <Widget>[
          //getFavesComments(thePost.likes),
          /*ListView(
              padding: EdgeInsets.only(bottom: 90),
              children: comments,
            ),*/
          //getCommentsFaves(thePost.comments),
        ]),
      ),
    );
  }
}*/
