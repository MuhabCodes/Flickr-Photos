import 'package:flickr/home/comments_page.dart';
import 'package:flickr/home/view_all_photos.dart';
import 'package:flickr/models/comment.dart';
import 'package:flickr/models/global.dart';
import 'package:flickr/models/photos.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/models/user.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:responsive_widgets/responsive_widgets.dart';

import '../models/global.dart';
import 'comments_fav_page.dart';
import 'image_fullscreen.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  void selectScreen(
    BuildContext ctx,
    int n, {
    String textTitle,
    List<Photo> imageRoll,
    int favComIndex,
    Post thePost,
    int index,
    bool isFaves,
    int commentFavPage,
    Photo photoFullscreen,
  }) {
    Navigator.of(ctx).push(MaterialPageRoute(builder: (_) {
      if (n == 1)
        return ViewAllPhotos(textTitle, imageRoll, thePost);
      else if (n == 2) //if user tapped on likes row
        return CommentsFavs(thePost, 1, isFaves, commentFavPage);
      else if (n == 3) {
        return ImageFullscreen(photoFullscreen, thePost);
      }
    }));
  }

  /* void arangePostsWithUploadDate() {
    
    for (int i = 0; i < userHomePosts.length; i++) {
      List<Post> tempList = [];
      tempList.add(userHomePosts[0]);;
      

      for (int j = i + 1; j < userHomePosts.length; j++) {
        if (userHomePosts[i].date == userHomePosts[j].date) {
          tempList.add(userHomePosts[j]);
          i++;
        }
      }
      
    }
    userHomePosts=tempList;
  }*/

  //List<Widget> likers = [];

  static int page = 1;
  static Post thePost = post1;
  double widthScreen = 0;
  //final controller = TextEditingController();
  final _commentController = TextEditingController();
  //CommentsPage _myCommentsPage;

  @override
  Widget build(BuildContext context) {
    widthScreen = MediaQuery.of(context).size.width;
    Map<int, Widget> _pageview = {
      1: getMain(),
      //2: getLikes(thePost.likes),
      //3: getComments(thePost.comments)
    };
    return _pageview[page];
  }

  Widget getMain() {
    return Scaffold(
      body: Container(
          color: Colors.grey[900],
          child: ListView(
            children: <Widget>[
              Column(
                children: <Widget>[
                  //Divider(),
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
    //arangePostsWithUploadDate();
    List<Widget> posts = [];
    int index = 0;
    for (Post post in userHomePosts) {
      // we will loop on all posts created in global.dart and add them to our home page
      if (post.photo.length == 1) {
        posts.add(getPost(context, post, index));
      } else if (post.photo.length > 1) {
        if (post.photo.length == 2) {
          posts.add(getPostTwoPhotos(context, post, index));
        } else if (post.photo.length >= 3) {
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
      color: Colors.white,
      margin: EdgeInsets.only(bottom: 10),
      child: Column(
        children: <Widget>[
          //all containers of the home page will be inside this widget

          InkWell(
            child: ContainerResponsive(
              //image Container

              constraints: BoxConstraints(
                maxHeight: 282,
                maxWidth: widthScreen,
              ),

              decoration: BoxDecoration(
                  // 'decoration:' doesn't allow writing 'color:' after or before it
                  border: Border.all(
                    color: Colors.white, // white as border color
                    width: 5,
                  ),
                  color: Colors.white,
                  image: DecorationImage(
                    image: NetworkImage(post.photo[0].imagePath),
                    fit: BoxFit.cover,
                  )),

              //child: Image.asset(post.image[]),
            ),
            onTap: () {
              selectScreen(context, 3,
                  photoFullscreen: thePost.photo[0], thePost: thePost);
            },
          ),

          Container(
            //this container creates a box around username row
            constraints: BoxConstraints(
              maxWidth: widthScreen,
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
                      style: textStyleBold,
                    )
                  ],
                ),
                Text(
                  getPostTime(post.date),
                  style: textStyleDarkGrey,
                ),
              ],
            ),
          ),
          ContainerResponsive(
            //Post description
            //Post  title (limit = 100 characters) not description
            //height: 10,
            constraints: BoxConstraints(
              maxWidth: widthScreen,
            ),
            decoration: BoxDecoration(
              // 'decoration:' doesn't allow writing 'color:' after or before it
              border: Border.all(
                color: Colors.white, // white as border color
                width: 0,
              ),
              color: Colors.white,
            ),
            heightResponsive: true,
            widthResponsive: true,
            //constraints: BoxConstraints.expand(height: 60),
            padding: EdgeInsets.only(left: 20, right: 5),
            //color: Colors.red,

            child: Column(
              children: <Widget>[
                Text(
                  post.description,
                  style: textStyle,
                  maxLines: 5,
                ) //+
                // " hi life is a journey and i need patience is the description box flexible with text?"),
              ],
            ),
          ),
          Container(
            //Draw horizontal line
            constraints: BoxConstraints.expand(height: 20, width: widthScreen),
            decoration: BoxDecoration(
              // 'decoration:' doesn't allow writing 'color:' after or before it
              border: Border.all(
                color: Colors.white, // white as border color
                width: 0,
              ),
              color: Colors.white,
            ),
            //color: Colors.white,
            child: Row(
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 10.0),
                  child: Container(
                    height: 2.2,
                    width: widthScreen - 21, //340.0,
                    color: Colors.grey,
                  ),
                ),
              ],
            ),
          ),

          Container(
            //Like, Share, Comment
            constraints: BoxConstraints.expand(height: 50, width: widthScreen),
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
                        style:
                            textStyleLigthGrey /*TextStyle(
                          color: Colors.grey,
                          fontSize: 10,
                        )*/
                        ),
                  ],
                ),
                Row(
                  children: <Widget>[
                    IconButton(
                      icon: Icon(Icons.chat_bubble_outline_outlined),
                      iconSize: 25,
                      color: Colors.grey,
                      onPressed: () {
                        selectScreen(context, 2,
                            thePost: post,
                            favComIndex: 1,
                            isFaves: true,
                            commentFavPage: 2);
                        setState(() {
                          /*
                          thePost = post;
                          page = 3;
                          build(context);*/
                        });
                      },
                    ),
                    Text("" + post.comments.length.toString(),
                        style:
                            textStyleLigthGrey /*TextStyle(
                          color: Colors.grey,
                          fontSize: 10,
                        )*/
                        ),
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
            constraints: BoxConstraints.expand(height: 140, width: widthScreen),
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
                                  size: 22,
                                  color: Colors.grey,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                      Flexible(
                        fit: FlexFit.loose,
                        child: TextButton(
                          child: post.likes.length >= 3
                              ? Text(
                                  post.likes[0].username +
                                      ", " +
                                      post.likes[1].username +
                                      " and " +
                                      (post.likes.length - 2).toString() +
                                      " others faved",
                                  style: textStyleBold,
                                )
                              : Text(
                                  post.likes[0].username,
                                  style: textStyleBold,
                                ),
                          onPressed: () {
                            selectScreen(context, 2,
                                thePost: post,
                                favComIndex: 1,
                                isFaves: true,
                                commentFavPage: 1);

                            setState(() {
                              /*
                              thePost = post;
                              page = 2;
                              build(context);*/
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
                          child: Container(
                            //alignment: AlignmentDirectional.topStart,
                            child: Column(
                              children: <Widget>[
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: <Widget>[
                                    Text(post.comments[0].user.username,
                                        style: textStyleBold),
                                    Text(
                                      post.comments.length.toString() +
                                          " of " +
                                          post.comments.length.toString(),
                                      style: textStyleDarkGrey,
                                    ),
                                  ],
                                ),
                                Row(children: <Widget>[
                                  Text(
                                    post.comments[post.comments.length - 1]
                                        .comment,
                                    style: textStyle,
                                  ),
                                ])
                              ],
                            ),
                          ),
                          onPressed: () {
                            selectScreen(context, 2,
                                thePost: post,
                                favComIndex: 1,
                                isFaves: true,
                                commentFavPage: 2);
                            setState(() {
                              /*thePost = post;
                              page = 3;
                              build(context);*/
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
    String textTitle1 = post.user.username +
        " uploaded " +
        post.photo.length.toString() +
        " photos";
    return Container(
      constraints: BoxConstraints(
        maxWidth: widthScreen,
      ),
      margin: EdgeInsets.only(bottom: 10, top: 0),
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
                    InkWell(
                      child: Container(
                        //1st container
                        constraints: BoxConstraints(
                          maxHeight: 282, //_isNumImgTwo? 282: 141,
                          maxWidth: widthScreen * 0.5, //170,
                        ),
                        decoration: BoxDecoration(
                          border: Border.all(
                            color: Colors.white, // white as border color
                            width: 5,
                          ),
                          image: DecorationImage(
                            image: NetworkImage(post.photo[0].imagePath),
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                      onTap: () {
                        selectScreen(context, 3,
                            photoFullscreen: post.photo[0], thePost: post);
                      },
                    ),
                  ],
                ),
                Column(
                  //2nd container
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        InkWell(
                          child: Container(
                            //padding: EdgeInsets.only(right: 20),
                            margin: EdgeInsets.all(10),
                            constraints: BoxConstraints(
                              maxHeight: 131, //_isNumImgTwo? 282: 141,
                              maxWidth: widthScreen * 0.4,
                              minWidth: widthScreen * 0.4,
                              //170,
                            ),
                            decoration: BoxDecoration(
                                color: Colors.transparent,
                                image: DecorationImage(
                                    image:
                                        NetworkImage(post.photo[1].imagePath),
                                    fit: BoxFit.cover)),
                          ),
                          onTap: () {
                            selectScreen(context, 3,
                                photoFullscreen: post.photo[1], thePost: post);
                          },
                        ),
                      ],
                    ),
                    Row(
                      children: [
                        InkWell(
                          child: Container(
                            //3rd container
                            margin: EdgeInsets.all(10),
                            constraints: BoxConstraints(
                              maxHeight: 131, //_isNumImgTwo? 282: 141,
                              maxWidth: widthScreen * 0.4, //170,
                            ),
                            decoration: BoxDecoration(
                                color: Colors.transparent,
                                image: DecorationImage(
                                    image:
                                        NetworkImage(post.photo[2].imagePath),
                                    fit: BoxFit.cover)),
                          ),
                          onTap: () {
                            selectScreen(context, 3,
                                photoFullscreen: post.photo[2], thePost: post);
                          },
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
                          right: 0, bottom: 8), //user name padding away from pp
                      child: CircleAvatar(
                        backgroundImage: post.user.profilePicture,
                      ),
                    ),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        Text(
                          "  " + post.user.username,
                          style: textStyleBold,
                        ),
                        Text(
                          "Post " + post.photo.length.toString() + " photos",
                          style: textStyle,
                          //textDirection: TextDirection.ltr,
                        ),
                      ],
                    ),
                  ],
                ),
                Text(
                  getPostTime(post.date),
                  style: textStyleDarkGrey,
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
                      "View all " + post.photo.length.toString() + " photos",
                      style: textStyleBold,
                    ),
                    onPressed: () {
                      selectScreen(context, 1,
                          textTitle: textTitle1,
                          imageRoll: post.photo,
                          thePost: post,
                          index: index);
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
    String textTitle1 = post.user.username +
        " uploaded " +
        post.photo.length.toString() +
        " photos";
    return Container(
      constraints: BoxConstraints(
        maxWidth: widthScreen,
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
                InkWell(
                  child: Column(
                    children: [
                      Container(
                        //1st container

                        constraints: BoxConstraints(
                          maxHeight: 282, //_isNumImgTwo? 282: 141,
                          maxWidth: 170,
                        ),
                        decoration: BoxDecoration(
                            image: DecorationImage(
                                image: NetworkImage(post.photo[0].imagePath),
                                fit: BoxFit.cover)),
                      ),
                    ],
                  ),
                  onTap: () {
                    selectScreen(context, 3,
                        photoFullscreen: post.photo[0], thePost: post);
                  },
                ),
                InkWell(
                  child: Column(
                    //2nd container
                    children: [
                      Container(
                        margin: EdgeInsets.all(10),
                        constraints: BoxConstraints(
                          maxHeight: 282, //_isNumImgTwo? 282: 141,
                          maxWidth: 170,
                        ),
                        decoration: BoxDecoration(
                            color: Colors.transparent,
                            image: DecorationImage(
                                image: NetworkImage(post.photo[1].imagePath),
                                fit: BoxFit.cover)),
                      ),
                    ],
                  ),
                  onTap: () {
                    selectScreen(context, 3,
                        photoFullscreen: post.photo[1], thePost: post);
                  },
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
                          right: 0, bottom: 8), //user name padding away from pp
                      child: CircleAvatar(
                        backgroundImage: post.user.profilePicture,
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.only(left: 10),
                      child: Column(
                        //mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            post.user.username,
                            style: textStyleBold,
                          ),
                          Text(
                            "Post " + post.photo.length.toString() + " photos",
                            style: textStyle,
                            //textDirection: TextDirection.ltr,
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                Text(
                  getPostTime(post.date),
                  style: textStyleDarkGrey,
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
                      style: textStyleBold,
                    ),
                    onPressed: () {
                      selectScreen(context, 1,
                          textTitle: textTitle1,
                          imageRoll: post.photo,
                          thePost: post,
                          index: index);
                      setState(() {
                        /*thePost = post;
                        page = 2;
                        build(context)*/
                        ;
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
} //_HomeState
