import 'package:flickr/models/comment.dart';
import 'package:flickr/models/global.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:responsive_widgets/responsive_widgets.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  //List<Widget> likers = [];
  bool _isNumImgTwo = true;
  static int _page = 1;
  static Post _thePost = post1;
  //double heightScreen = 0;
  double _widthScreen = 0;
  bool test01 = false;
  //final controller = TextEditingController();
  final _commentController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    //heightScreen = MediaQuery.of(context).size.height;
    _widthScreen = MediaQuery.of(context).size.width;

    Map<int, Widget> _pageview = {
      1: getMain(),
      2: getLikes(_thePost.likes),
      3: getComments(_thePost.comments)
    };
    return _pageview[_page];
  }

  Widget getMain() {
    return Scaffold(
      body: Container(
          color: Colors.grey[900],
          child: ListView(
            children: <Widget>[
              Column(
                children: <Widget>[
                  Divider(),
                  Column(
                    children: getPosts(context),
                  )
                ],
              )
            ],
          )),
    );
  }

  List<Widget> getPosts(BuildContext context) {
    List<Widget> posts = [];
    int index = 0;
    for (Post post in userHomePosts) {
      // we will loop on all posts created in global.dart and add them to our home page
      if (post.image.length == 1) {
        posts.add(getPost(context, post, index));
      } else if (post.image.length > 1) {
        if (post.image.length == 2) {
          posts.add(getPostTwoPhotos(context, post, index));
        } else if (post.image.length >= 3) {
          posts.add(getPostMultiPhotos(context, post, index));
        }
      }

      // This line takes each post in the list and sends it to func getPost=>which displays it on the home page with some added widget and returns it back
      index++;
    }
    return posts;
  }

  Widget getPost(BuildContext context, Post post, int index) {
    return Container(
      margin: EdgeInsets.only(bottom: 10),
      child: Column(
        children: <Widget>[
          //all containers of the home page will be inside this widget

          ContainerResponsive(
            //image Container
            //color: Colors.white,
            //margin: EdgeInsets.all(10),
            constraints: BoxConstraints(
              maxHeight: 282,
              maxWidth: _widthScreen,
            ),

            decoration: BoxDecoration(
                // 'decoration:' doesn't allow writing 'color:' after or before it
                border: Border.all(
                  color: Colors.white, // white as border color
                  width: 3,
                ),
                color: Colors.white,
                image: DecorationImage(image: post.image[0])),

            //child: Image.asset(post.image[]),
          ),
          Container(
            //this container creates a box around username row
            constraints: BoxConstraints(
              maxWidth: _widthScreen,
            ),
            color: Colors.white,
            padding: EdgeInsets.all(10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Row(
                  //this row holds pp, username, date posted
                  children: <Widget>[
                    Container(
                      //this container is related to the circle avatar only (tiny box contains an avatar)
                      //color: Colors.white,
                      margin: EdgeInsets.only(
                          right: 10), //user name padding away from pp
                      child: CircleAvatar(
                        backgroundImage: post.user.profilePicture,
                      ),
                    ),
                    Text(
                      post.user.username,
                      style: textStyle,
                    )
                  ],
                ),
                Text(getPostTime(post.date) //post.date.hour.toString() //'2d  '
                    //icon: Icon(Icons.more_horiz),
                    //onPressed: () {},
                    ),
              ],
            ),
          ),
          ContainerResponsive(
            //Post  title (limit = 100 characters) not description
            //height: 10,
            constraints: BoxConstraints(
              maxWidth: _widthScreen,
            ),
            heightResponsive: true,
            widthResponsive: true,
            //constraints: BoxConstraints.expand(height: 60),
            padding: EdgeInsets.only(left: 20),
            color: Colors.white,
            child: Row(
              children: <Widget>[
                Flexible(
                    child: Text(
                  post.description,
                  style: textStyle,
                ) //+
                    // " hi life is a journey and i need patience is the description box flexible with text?"),
                    ),
              ],
            ),
          ),
          Container(
            //Draw horizontal line

            constraints: BoxConstraints.expand(height: 20, width: _widthScreen),
            color: Colors.white,
            child: Row(
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 00.0),
                  child: Container(
                    height: 2.2,
                    width: _widthScreen, //340.0,
                    color: Colors.grey,
                  ),
                ),
              ],
            ),
          ),
          /*Divider(
            height: 5,
            color: Colors.grey[300],
          ),*/
          Container(
            //Like, Share, Comment
            constraints: BoxConstraints.expand(height: 50, width: _widthScreen),
            padding: EdgeInsets.only(left: 10, right: 10),
            color: Colors.white,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Row(
                  children: <Widget>[
                    Stack(
                      alignment: Alignment(0, 0),
                      children: <Widget>[
                        Icon(
                          Icons.star_border,
                          size: 35,
                          color:
                              post.isLiked ? Colors.transparent : Colors.grey,
                        ),
                        IconButton(
                          icon: Icon(Icons.star),
                          color:
                              post.isLiked ? Colors.blue : Colors.transparent,
                          iconSize: 35,
                          onPressed: () {
                            setState(() {
                              userHomePosts[index].isLiked =
                                  post.isLiked ? false : true;
                              if (!post.isLiked) {
                                post.likes.remove(user);
                              } else {
                                post.likes.add(user);
                              }
                            });
                            //print(post.likes.length);
                          },
                        ),
                      ],
                    ),
                    Text(post.likes.length.toString(),
                        style: TextStyle(
                          color: Colors.grey,
                          fontSize: 10,
                        )),
                  ],
                ),
                Row(
                  children: <Widget>[
                    IconButton(
                      icon: Icon(Icons.chat_bubble_outline_outlined),
                      iconSize: 25,
                      color: Colors.grey,
                      onPressed: () {
                        setState(() {
                          _thePost = post;
                          _page = 3;
                          build(context);
                        });
                      },
                    ),
                    Text("" + post.comments.length.toString(),
                        style: TextStyle(
                          color: Colors.grey,
                          fontSize: 10,
                        )),
                  ],
                ),
                Row(
                  children: <Widget>[
                    Icon(
                      Icons.share_outlined,
                      size: 30,
                      color: /*post.isLiked ? Colors.red : */ Colors.grey,
                    ),
                  ],
                ),
              ],
            ),
          ),
          Container(
            //Likers Row
            constraints:
                BoxConstraints.expand(height: 140, width: _widthScreen),
            color: Colors.grey[200],
            //alignment: AlignmentDirectional.topCenter,
            //padding: EdgeInsets.only(left: 10, right: 10),
            child: Column(
              //mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Container(
                  //sub-Container #1
                  padding: EdgeInsets.only(
                    top: 10,
                  ),
                  child: Row(
                    children: <Widget>[
                      Row(
                        children: <Widget>[
                          Column(
                            children: <Widget>[
                              Container(
                                padding: EdgeInsets.only(
                                  left: 15,
                                  bottom: 25,
                                ),
                                child: Icon(
                                  Icons.star,
                                  size: 20,
                                  color: Colors.grey,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                      Flexible(
                        child: TextButton(
                          child: Text(
                              post.likes[0].username +
                                  ", " +
                                  post.likes[1].username +
                                  " and " +
                                  (post.likes.length - 2).toString() +
                                  " others faved",
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.black,
                                fontSize: 10,
                              )),
                          onPressed: () {
                            setState(() {
                              _thePost = post;
                              _page = 2;
                              build(context);
                            });
                          },
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  //sub-Container #2
                  padding: EdgeInsets.only(
                    top: 10,
                  ),
                  child: Row(
                    children: <Widget>[
                      Row(
                        children: <Widget>[
                          Column(
                            children: <Widget>[
                              Container(
                                padding: EdgeInsets.only(
                                  left: 15,
                                  bottom: 25,
                                ),
                                child: Icon(
                                  Icons.mode_comment_rounded,
                                  size: 18,
                                  color: Colors.grey,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                      Flexible(
                        child: TextButton(
                          child: Container(
                            //alignment: AlignmentDirectional.topStart,
                            child: Column(
                              children: <Widget>[
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: <Widget>[
                                    Text(post.comments[0].user.username,
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          color: Colors.black,
                                          fontSize: 10,
                                        )),
                                    Text(
                                        post.comments.length.toString() +
                                            " of " +
                                            post.comments.length.toString(),
                                        style: TextStyle(
                                          color: Colors.grey,
                                          fontSize: 10,
                                        )),
                                  ],
                                ),
                                Row(children: <Widget>[
                                  Text(
                                    post.comments[post.comments.length - 1]
                                        .comment,
                                    style: TextStyle(
                                      color: Colors.black,
                                      fontSize: 10,
                                    ),
                                  ),
                                ])
                              ],
                            ),
                          ),
                          onPressed: () {
                            setState(() {
                              _thePost = post;
                              _page = 3;
                              build(context);
                            });
                          },
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  } // getPost

  Widget getPostMultiPhotos(BuildContext context, Post post, int index) {
    return Container(
      constraints: BoxConstraints(
        maxWidth: _widthScreen,
      ),
      margin: EdgeInsets.only(bottom: 10),
      color: Colors.white,
      child: Column(
        children: <Widget>[
          Container(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,

              //crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Column(
                  children: [
                    Container(
                      //1st container
                      //image Container
                      //color: Colors.white,
                      //margin: EdgeInsets.all(10),
                      //alignment: Alignment.topLeft,
                      /*padding: EdgeInsets.only(
                        left: 2,
                      ),*/
                      constraints: BoxConstraints(
                        maxHeight: 282, //_isNumImgTwo? 282: 141,
                        maxWidth: _widthScreen * 0.5, //170,
                      ),
                      decoration: BoxDecoration(
                          image: DecorationImage(image: post.image[0])),
                    ),
                  ],
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        Container(
                          //padding: EdgeInsets.only(right: 20),
                          margin: EdgeInsets.all(10),
                          constraints: BoxConstraints(
                            maxHeight: 131, //_isNumImgTwo? 282: 141,
                            maxWidth: _widthScreen * 0.4, //170,
                          ),
                          decoration: BoxDecoration(
                              color: Colors.transparent,
                              image: DecorationImage(
                                  image: post.image[1], fit: BoxFit.fitWidth)),
                        ),
                      ],
                    ),
                    Row(
                      children: [
                        Container(
                          margin: EdgeInsets.all(10),
                          constraints: BoxConstraints(
                            maxHeight: 131, //_isNumImgTwo? 282: 141,
                            maxWidth: _widthScreen * 0.4, //170,
                          ),
                          decoration: BoxDecoration(
                              color: Colors.transparent,
                              image: DecorationImage(
                                  image: post.image[2], fit: BoxFit.fitWidth)),
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),
          Container(
            //this container creates a box around username row
            color: Colors.white,
            padding: EdgeInsets.all(10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Row(
                  //this row holds pp, username, date posted
                  children: <Widget>[
                    Container(
                      //this container is related to the circle avatar only (tiny box contains an avatar)
                      //color: Colors.white,
                      margin: EdgeInsets.only(
                          right: 10), //user name padding away from pp
                      child: CircleAvatar(
                        backgroundImage: post.user.profilePicture,
                      ),
                    ),
                    Text(
                      post.user.username +
                          "\n Post " +
                          post.image.length.toString() +
                          " photos",
                      style: textStyle,
                    )
                  ],
                ),
                Text(getPostTime(post.date) //post.date.hour.toString() //'2d  '
                    //icon: Icon(Icons.more_horiz),
                    //onPressed: () {},
                    ),
              ],
            ),
          ),
          Container(
            //constraints: BoxConstraints.expand(height: 50),
            color: Colors.grey[300],
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Container(
                  child: TextButton(
                    child: Text(
                        "View all " + post.image.length.toString() + " photos",
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                          fontSize: 10,
                        )),
                    onPressed: () {
                      setState(() {});
                    },
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget getPostTwoPhotos(BuildContext context, Post post, int index) {
    _isNumImgTwo = getNumPostImg(post);
    return Container(
      constraints: BoxConstraints(
        maxWidth: _widthScreen,
      ),
      margin: EdgeInsets.only(bottom: 10),
      color: Colors.white,
      child: Column(
        children: <Widget>[
          Container(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,

              //crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Column(
                  children: [
                    Container(
                      //1st container
                      //image Container
                      //color: Colors.white,
                      //margin: EdgeInsets.all(10),
                      //alignment: Alignment.topLeft,
                      /*padding: EdgeInsets.only(
                        left: 2,
                      ),*/
                      constraints: BoxConstraints(
                        maxHeight: 282, //_isNumImgTwo? 282: 141,
                        maxWidth: 170,
                      ),
                      decoration: BoxDecoration(
                          image: DecorationImage(image: post.image[0])),
                    ),
                  ],
                ),
                Column(
                  children: [
                    Container(
                      margin: EdgeInsets.all(10),
                      constraints: BoxConstraints(
                        maxHeight: 282, //_isNumImgTwo? 282: 141,
                        maxWidth: 170,
                      ),
                      decoration: BoxDecoration(
                          color: Colors.transparent,
                          image: DecorationImage(image: post.image[1])),
                    ),
                  ],
                ),
              ],
            ),
          ),
          Container(
            //this container creates a box around username row
            color: Colors.white,
            padding: EdgeInsets.all(10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Row(
                  //this row holds pp, username, date posted
                  children: <Widget>[
                    Container(
                      //this container is related to the circle avatar only (tiny box contains an avatar)
                      //color: Colors.white,
                      margin: EdgeInsets.only(
                          right: 10), //user name padding away from pp
                      child: CircleAvatar(
                        backgroundImage: post.user.profilePicture,
                      ),
                    ),
                    Text(
                      post.user.username +
                          "\n Post " +
                          post.image.length.toString() +
                          " photos",
                    )
                  ],
                ),
                Text(getPostTime(post.date) //post.date.hour.toString() //'2d  '
                    //icon: Icon(Icons.more_horiz),
                    //onPressed: () {},
                    ),
              ],
            ),
          ),
          Container(
            //constraints: BoxConstraints.expand(height: 50),
            color: Colors.grey[300],
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Container(
                  child: TextButton(
                    child: Text(
                      "View both photos",
                      /*style: TextStyle(
                          fontWeight: FontWeight.bold,
                        )*/
                    ),
                    onPressed: () {
                      setState(() {
                        _thePost = post;
                        _page = 2;
                        build(context);
                      });
                    },
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget getViewAllPhotos(Post post, int numPhotos) {
    return Scaffold(
      appBar: AppBar(
        title: Container(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Row(
                children: <Widget>[
                  IconButton(
                    icon: Icon(
                      Icons.arrow_back,
                      color: Colors.black,
                    ),
                    onPressed: () {
                      setState(() {
                        _page = 1;
                        build(context);
                      });
                    },
                  ),
                  Text(
                    'Comments',
                    style: textStyleBold,
                  )
                ],
              ),
              IconButton(
                icon: Icon(
                  Icons.send,
                  color: Colors.black,
                ),
                onPressed: () {},
              )
            ],
          ),
        ),
        backgroundColor: Colors.white,
      ),
      body: Container(
          color: Colors.white,
          child: ListView(
            children: <Widget>[
              Column(
                children: <Widget>[
                  Divider(),
                  Column(
                    children: getPosts(context),
                  )
                ],
              )
            ],
          )),
    );
  }

  bool getNumPostImg(Post post) {
    if (post.image.length == 2) {
      _isNumImgTwo = true;
    } else if (post.image.length >= 3) {
      _isNumImgTwo = false;
    }
    return _isNumImgTwo;
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
                _thePost.user.username + "'s Photo",
                style: TextStyle(color: Colors.white),
              ),
            ),
            bottom: TabBar(
                labelColor: Colors.white,
                unselectedLabelColor: Colors.white,
                indicatorColor: Colors.black,
                tabs: <Widget>[
                  Tab(
                    text: _thePost.likes.length.toString() + " Faves",
                  ),
                  Tab(text: _thePost.comments.length.toString() + " Comments"),
                ]),
            backgroundColor: Colors.grey[900],
            leading: IconButton(
              icon: Icon(
                Icons.arrow_back,
                color: Colors.white,
              ),
              onPressed: () {
                setState(() {
                  _page = 1;
                  build(context);
                });
              },
            ),
          ),
          body: TabBarView(children: <Widget>[
            //getLikes(_thePost.likes),
            ListView(
              children: likers,
            ),
            getCommentsFaves(_thePost.comments),

            //Container(),
          ])

          /*Row(
          children: <Widget>[
            Container(
                child: ListView(
              children: likers,
            )),
          ],
        ),*/
          ),
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

    return DefaultTabController(
        length: 2,
        child: Scaffold(
          body:
              //getLikes(_thePost.likes),
              ListView(
            children: likers,
          ),
          //getCommentsFaves(_thePost.comments),
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
              _thePost.user.username + "'s Photo",
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
                  text: _thePost.likes.length.toString() + " Faves",
                ),
                Tab(text: _thePost.comments.length.toString() + " Comments"),
              ]),
          backgroundColor: Colors.grey[900],
          leading: IconButton(
            icon: Icon(
              Icons.arrow_back,
              color: Colors.white,
            ),
            onPressed: () {
              setState(() {
                _page = 1;
                build(context);
              });
            },
          ),
        ),
        body: TabBarView(children: <Widget>[
          getFavesComments(_thePost.likes),
          /*ListView(
              padding: EdgeInsets.only(bottom: 90),
              children: comments,
            ),*/
          getCommentsFaves(_thePost.comments),
          //getLikes(_thePost.likes),
        ]),
      ),
    );
  }

  Widget getCommentsFaves(List<Comment> likes) {
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
                        RichText(
                          text: new TextSpan(
                            style: new TextStyle(
                              fontSize: 10.0,
                              color: Colors.black,
                            ),
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
                child: TextField(
                  controller: _commentController,
                  decoration: InputDecoration(
                    hintText: " Write a comment...",
                    contentPadding: EdgeInsets.only(left: 7),
                    /*suffixIcon: IconButton(
                      icon: Icon(Icons.send),
                      onPressed: () {},
                    ),*/
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
                            if (_commentController.text.isEmpty == false) {
                              _thePost.comments.add(
                                new Comment(
                                    _thePost.user,
                                    _commentController.text,
                                    DateTime.now(),
                                    false),
                              );
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
} //_HomeState
