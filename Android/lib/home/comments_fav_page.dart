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
  CommentsFavsState createState() =>
      CommentsFavsState(this.thePost, index, this.isFaves, this.page);
}

class CommentsFavsState extends State<CommentsFavs> {
  Post thePost;
  int index = 0;

  ///[index] 1 means start with favs tab, 2 means start with comments tab
  ///[isFaves] checks if the like button is clicked or not and based on that it changes color
  bool isFaves = false;
  double _widthScreen = 0;
  int page = 0;
  final _commentController = TextEditingController();
  CommentsFavsState(this.thePost, index, this.isFaves, this.page);

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

  ///[getLikes] returns a widget screen to display comments and likes
  Widget getLikes(List<User> likes) {
    List<Widget> likers = [];
    if (likes != null) {
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
                                backgroundImage:
                                    NetworkImage(follower.userAvatar),
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
                              loggedInUser.following.contains(follower)
                                  ? "✓"
                                  : "+ Follow",
                              style: TextStyle(
                                  fontSize: 10,
                                  fontWeight: FontWeight.bold,
                                  color:
                                      loggedInUser.following.contains(follower)
                                          ? Colors.black
                                          : Colors.black)),
                          onPressed: () {
                            setState(() {
                              if (loggedInUser.following.contains(follower)) {
                                loggedInUser.following.remove(follower);
                              } else {
                                loggedInUser.following.add(follower);
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
    }

    return DefaultTabController(
      length: 2,
      child: Scaffold(
          appBar: AppBar(
            title: Column(children: [
              Text(
                thePost.postUsername + "'s Photo",
                style: appBarTitleStyle,
              ),
            ]),
            bottom: TabBar(
                //labelColor: Colors.white,
                //unselectedLabelColor: Colors.white,
                labelStyle: appBarTitleStyle,
                indicatorColor: Colors.white,
                tabs: <Widget>[
                  Tab(
                    text: thePost.likes == null
                        ? "0 Faves"
                        : thePost.likes.length.toString() + " Faves",
                  ),
                  Tab(
                      text: thePost.comments == null
                          ? "0 Comments"
                          : thePost.comments.length.toString() + " Comments"),
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
            likers == null
                ? Container()
                : ListView(
                    children: likers,
                  ),

            getCommentsFaves(thePost.comments),

            //Container(),
          ])),
    );
  }

  ///[getFavesComments] similar to [getLikes] but without the AppBar
  ///used when calling [getComments] which has an AppBar
  ///purpose is to avoid drawing the AppBar twice
  Widget getFavesComments(List<User> likes) {
    List<Widget> likers = [];
    if (likes != null) {
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
                                backgroundImage:
                                    NetworkImage(follower.userAvatar),
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
                              loggedInUser.following.contains(follower)
                                  ? "✓"
                                  : "+ Follow",
                              style: TextStyle(
                                  fontWeight: FontWeight.bold,
                                  fontSize: 10,
                                  color:
                                      loggedInUser.following.contains(follower)
                                          ? Colors.black
                                          : Colors.black)),
                          onPressed: () {
                            setState(() {
                              if (loggedInUser.following.contains(follower)) {
                                loggedInUser.following.remove(follower);
                              } else {
                                loggedInUser.following.add(follower);
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
    }

    return DefaultTabController(
        length: 2,
        child: Scaffold(
          body:
              //getLikes(thePost.likes),
              likers == null
                  ? Container()
                  : ListView(
                      children: likers,
                    ),
          //getCommentsFaves(thePost.comments),
        ));
  }

  Widget getComments(List<Comment> commentsList) {
    List<Widget> comments = [];
    //DateTime now = DateTime.now();
    if (commentsList != null) {
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
                          backgroundImage:
                              NetworkImage(comment.user.userAvatar),
                        ),
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          RichText(
                            text: new TextSpan(
                              style: textStyleBoldComments,
                              children: <TextSpan>[
                                new TextSpan(
                                  text: comment.user.username + "\n",
                                  style: textStyleBold,
                                ),
                                new TextSpan(
                                    text: '', style: textStyleComments),
                                new TextSpan(
                                    text: comment.comment,
                                    style: textStyleComments),
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
    }

    return DefaultTabController(
      initialIndex: 1,
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          title: Column(children: [
            Text(
              thePost.postUsername + "'s Photo",
              style: appBarTitleStyle,
            ),
          ]),
          bottom: TabBar(
              labelColor: Colors.white,
              labelStyle: appBarTitleStyle,
              //key: 2,
              unselectedLabelColor: Colors.white,
              indicatorColor: Colors.blue,
              tabs: <Widget>[
                Tab(
                  text: thePost.likes == null
                      ? "0 Faves"
                      : thePost.likes.length.toString() + " Faves",
                ),
                Tab(
                    text: thePost.comments == null
                        ? "0 Comments"
                        : thePost.comments.length.toString() + " Comments"),
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

  Widget getCommentsFaves(List<Comment> commenters) {
    bool isAdded = false;
    List<Widget> comments = [];
    //DateTime now = DateTime.now();
    if (commenters != null) {
      for (Comment comment in commenters) {
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
                          backgroundImage:
                              NetworkImage(comment.user.userAvatar),
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
                                      style: textStyleBoldComments),
                                  new TextSpan(
                                      text: '', style: textStyleComments),
                                  new TextSpan(
                                      text: comment.comment,
                                      style: textStyleComments),
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
    }

    return Scaffold(
        body: Container(
          child: comments == null
              ? Container()
              : ListView(
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
