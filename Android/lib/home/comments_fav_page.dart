///[CommentsFaves] class creates a page which navigates between two tabs Faves and Comment

import 'package:flickr/home/comments_page.dart';
import 'package:flickr/models/comment.dart';
import 'package:flickr/models/global.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import '../models/global.dart';

class CommentsFavs extends StatefulWidget {
  Post thePost;
  bool isFaves = false;
  int index = 0;
  int page;
  CommentsFavs(this.thePost, index, this.isFaves, this.page);
  @override
  _CommentsFavsState createState() =>
      _CommentsFavsState(this.thePost, index, this.isFaves, this.page);
}

class _CommentsFavsState extends State<CommentsFavs> {
  Post thePost;
  int index = 0;

  ///[index] 1 means start with favs tab, 2 means start with comments tab
  ///[isFaves] checks if the like button is clicked or not and based on that it changes color
  bool isFaves = false;
  double _widthScreen = 0;
  int page = 0;
  final _commentController = TextEditingController();
  _CommentsFavsState(this.thePost, index, this.isFaves, this.page);

  @override
  Widget build(BuildContext context) {
    _widthScreen = MediaQuery.of(context).size.width;
    Map<int, Widget> _pageview = {
      1: getLikes(thePost.likes),
      2: getComments(thePost.comments),
      //3: Navigator.pop(context);
    };
    return _pageview[page];
  }

  Widget getLikes(List<User> likes) {
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
                                style: textStyleBold),
                          ],
                        )),
                    Container(
                      height: 30,
                      decoration: BoxDecoration(
                          border: Border.all(width: 2, color: Colors.black),
                          borderRadius: BorderRadius.all(Radius.circular(0))),
                      child: TextButton(
                        //height: 30,
                        child: Text(
                            user.following.contains(follower)
                                ? "✓"
                                : "+ Follow",
                            style: TextStyle(
                                fontSize: 10,
                                fontWeight: FontWeight.bold,
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
                      style: TextStyle(
                        color: Colors.grey,
                        fontSize: 10,
                      ),
                      overflow: TextOverflow.ellipsis,
                      //textWidthBasis: TextWidthBasis.longestLine,
                    )),
              ],
            ),
            onPressed: () {},
          )));
    }

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
            leading: IconButton(
              icon: Icon(
                Icons.arrow_back,
                color: Colors.white,
              ),
              onPressed: () {
                Navigator.pop(context);
                setState(() {});
              },
            ),
          ),
          body: TabBarView(children: <Widget>[
            //getLikes(thePost.likes),
            ListView(
              children: likers,
            ),
            getCommentsFaves(thePost.comments),

            //Container(),
          ])),
    );
  }

  Widget getFavesComments(List<User> likes) {
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
                                style: textStyleBold),
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
                      "38 Photos -1.2k Followers",
                      style: textStyleDarkGrey,
                      overflow: TextOverflow.ellipsis,
                      //textWidthBasis: TextWidthBasis.longestLine,
                    )),
              ],
            ),
            onPressed: () {},
          )));
    }

    return DefaultTabController(
        length: 2,
        child: Scaffold(
          body:
              //getLikes(thePost.likes),
              ListView(
            children: likers,
          ),
          //getCommentsFaves(thePost.comments),
        ));
  }

  Widget getComments(List<Comment> commentsList) {
    List<Widget> comments = [];
    //DateTime now = DateTime.now();
    for (Comment comment in commentsList) {
      //int hoursAgo = (now.hour) - (comment.dateOfComment.hour - 1);
      comments.add(new Container(
          constraints: BoxConstraints(
            maxWidth: _widthScreen,
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
                            style: textStyleBold,
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
          backgroundColor: Colors.grey[900],
          leading: IconButton(
            icon: Icon(
              Icons.arrow_back,
              color: Colors.white,
            ),
            onPressed: () {
              Navigator.pop(context);
              setState(() {});
            },
          ),
        ),
        body: TabBarView(children: <Widget>[
          getFavesComments(thePost.likes),

          getCommentsFaves(thePost.comments),
          //getLikes(thePost.likes),
        ]),
      ),
    );
  }

  Widget getCommentsFaves(List<Comment> likes) {
    bool isAdded = false;
    List<Widget> comments = [];
    //DateTime now = DateTime.now();
    for (Comment comment in likes) {
      comments.add(new Container(
          constraints: BoxConstraints(
            maxWidth: _widthScreen,
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
                        Container(
                          constraints:
                              BoxConstraints(maxWidth: _widthScreen - 80),
                          child: RichText(
                            maxLines: null,
                            text: new TextSpan(
                              style: textStyle,
                              children: <TextSpan>[
                                new TextSpan(
                                    text: comment.user.username + "\n",
                                    style: textStyleBold),
                                new TextSpan(text: '', style: textStyle),
                                new TextSpan(
                                    text: comment.comment, style: textStyle),
                              ],
                            ),
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

    return Scaffold(
        body: Container(
          child: ListView(
            children: comments,
            padding: EdgeInsets.only(bottom: 80),
          ),
        ),
        bottomSheet: Container(
          constraints: BoxConstraints(
            maxWidth: _widthScreen,
          ),
          color: Colors.grey[300],
          child: SingleChildScrollView(
              child: Stack(
            children: <Widget>[
              Container(
                padding: EdgeInsets.only(right: 90),
                child: TextField(
                  controller: _commentController,
                  maxLines: null,
                  decoration: InputDecoration(
                    hintText: " Write a comment...",
                    contentPadding: EdgeInsets.only(left: 7),
                  ),
                ),
              ),
              Container(
                //Post Button
                constraints: BoxConstraints(
                  maxWidth: _widthScreen,
                ),
                padding: EdgeInsets.only(right: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  //crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      //padding: EdgeInsets.only(top: 10),
                      height: 40,
                      width: 75,

                      decoration: BoxDecoration(
                          border: Border.all(width: 2, color: Colors.black),
                          borderRadius: BorderRadius.all(Radius.circular(0))),
                      child: TextButton(
                        //height: 30,
                        child: Text(
                          "Post",
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Colors.black,
                            fontSize: 10,
                          ),
                        ),
                        onPressed: () {
                          setState(() {
                            isAdded =
                                postComment(_commentController.text, thePost);
                            if (isAdded == true) {
                              _commentController.clear();
                            }
                          });
                        },
                      ),
                    ),
                  ],
                ),
              )
            ],
          )),
        ));
  }
}
