/// Class Home contains 3 impartant widgets
/// [getPost] which takes every post with single photo in list userHomePosts and creates it's design
///[getPostMultiPhotos] does the same thing that [getPost] does but, it takes posts which have 3 photo or more
///[getPostTwoPhotos] does the same thing but, takes posts with two photos only

import 'package:flickr/home/view_all_photos.dart';
import 'package:flickr/models/global.dart';
import 'package:flickr/models/photos.dart';
import 'package:flickr/models/post.dart';
import 'package:flickr/providers/post_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:provider/provider.dart';
import 'package:responsive_widgets/responsive_widgets.dart';
import '../models/global.dart';
import 'comments_fav_page.dart';
import 'image_fullscreen.dart';

class Home extends StatefulWidget {
  @override
  HomeState createState() => HomeState();
}

class HomeState extends State<Home> {
  ///function wich Navigates between 3 screens which are [ViewAllPhotos] [CommentFaves] [ImageFullscreen]
  void selectScreen(
    BuildContext ctx,

    /// [n] integer indicates the which screen the app is navigated too
    int n, {

    ///Parameters needed for each screen constructor
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

  double getCommentsLikesHeight(
    Post post,
  ) {
    double ans = 140;
    if (post.comments == null && post.likes == null) {
      ans = 0;
    } else if (post.comments == null && post.likes != null ||
        post.comments != null && post.likes == null) {
      ans = 75;
    }
    return ans;
  }

  //List<Widget> likers = [];

  var globalProvider;
  @override
  /*void initState() {
    globalProvider = Provider.of<PostProvider>(context, listen: false);

    super.initState();
  }*/

  static int page = 1;

  double widthScreen = 0;
  //final controller = TextEditingController();

  //CommentsPage _myCommentsPage;
  int isDone = 0;
  @override
  Widget build(BuildContext context) {
    DateTime test = postDateParsing("2021-12-01T19:11:08");

    if (isDone == 0) {
      globalProvider =
          Provider.of<PostProvider>(context, listen: true).getUserHomePosts();

      Provider.of<PostProvider>(context, listen: true).getUserFollowing();
      isDone++;
    }
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

  ///[getPosts] loops on each post in userHomePosts then determines which post is sent to which function
  List<Widget> getPosts(BuildContext context) {
    //arangePostsWithUploadDate();
    List<Widget> posts = [];
    int index = 0;
    if (userHomePostsMock == null) {
      return [Container()];
    }
    for (Post post in userHomePostsMock) {
      ///Loops on all posts created in global.dart and add them to our home page
      if (post.photo.length == 1) {
        {
          posts.add(getPost(context, post, index));
        }
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
              ///image Container in single photo post

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
                  photoFullscreen: post.photo[0], thePost: post);
            },
          ),

          Container(
            ///this container creates wraps username and avatar
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
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          post.user.username,
                          style: textStyleBold,
                        ),
                        post.title == null
                            ? Container()
                            : Text(
                                (post.title),
                                style: textStyle,
                                overflow: TextOverflow.ellipsis,
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
          post.description == null
              ? Container()
              : ContainerResponsive(
                  ///Post description container
                  //Post  title (limit = 100 characters) not description
                  //height: 10,
                  constraints: BoxConstraints(
                    maxWidth: widthScreen,
                    minWidth: widthScreen - 20,
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
                  padding: EdgeInsets.only(left: 20, right: 10),
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
            ///Draw horizontal line container
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
                    color: Colors.grey[200],
                  ),
                ),
              ],
            ),
          ),

          Container(
            ///Like, Share, Comment container
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
                              userHomePostsMock[index].isLiked =
                                  post.isLiked ? false : true;
                              if (!post.isLiked) {
                                post.likes.remove(loggedInUser);
                              } else {
                                post.likes.add(loggedInUser);
                              }
                            });
                            //print(post.likes.length);
                          },
                        ),
                      ],
                    ),
                    Text(
                        post.likes == null ? "0" : post.likes.length.toString(),
                        style: textStyleLigthGrey),
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
                            thePost: post, favComIndex: 1, commentFavPage: 2);
                        setState(() {});
                      },
                    ),
                    Text(
                      post.comments == null
                          ? "0"
                          : "" + post.comments.length.toString(),
                      style: textStyleLigthGrey,
                    ),
                  ],
                ),
                Row(
                  children: <Widget>[
                    Icon(
                      Icons.share_outlined,
                      size: 30,
                      color: Colors.grey,
                    ),
                  ],
                ),
              ],
            ),
          ),
          Container(
            ///Likers and comments row
            constraints: BoxConstraints.expand(
                height: getCommentsLikesHeight(post), width: widthScreen),
            color: Colors.grey[200],
            //alignment: AlignmentDirectional.topCenter,
            //padding: EdgeInsets.only(left: 10, right: 10),
            child: Column(
              //mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                post.likes == null
                    ? Container()
                    : Container(
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
                                        bottom: 10,
                                        top: 0,
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
                              child: post.likes == null
                                  ? Container()
                                  : TextButton(
                                      child: post.likes.length >= 2
                                          ? Text(
                                              post.likes[0].username +
                                                  ", " +
                                                  post.likes[1].username +
                                                  " and " +
                                                  (post.likes.length - 2)
                                                      .toString() +
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

                                        setState(() {});
                                      },
                                    ),
                            ),
                          ],
                        ),
                      ),
                post.comments == null
                    ? Container()
                    : Container(
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
                              child: post.comments == null
                                  ? Container()
                                  : TextButton(
                                      child: Container(
                                        //alignment: AlignmentDirectional.topStart,
                                        child: Column(
                                          children: <Widget>[
                                            Row(
                                              mainAxisAlignment:
                                                  MainAxisAlignment
                                                      .spaceBetween,
                                              children: <Widget>[
                                                Text(
                                                    post.comments[0].user
                                                        .username,
                                                    style: textStyleBold),
                                                Text(
                                                  post.comments == null
                                                      ? "0 of 0"
                                                      : post.comments.length
                                                              .toString() +
                                                          " of " +
                                                          post.comments.length
                                                              .toString(),
                                                  style: textStyleDarkGrey,
                                                ),
                                              ],
                                            ),
                                            Row(children: <Widget>[
                                              Text(
                                                post.comments.length == 1
                                                    ? (post.comments[0].comment)
                                                    : (post
                                                        .comments[post.comments
                                                                .length -
                                                            1]
                                                        .comment),
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
                                        setState(() {});
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
    ///[textTitle1] this string is used in AppBar title when navigating between screens
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
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,

              //crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                InkWell(
                  child: ContainerResponsive(
                    //image Container

                    constraints: BoxConstraints(
                      maxHeight: 135,
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
                        photoFullscreen: post.photo[0], thePost: post);
                  },
                ),
                InkWell(
                  child: ContainerResponsive(
                    //image Container

                    constraints: BoxConstraints(
                      maxHeight: 135,
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
                          image: NetworkImage(post.photo[1].imagePath),
                          fit: BoxFit.cover,
                        )),

                    //child: Image.asset(post.image[]),
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
} //_HomeState
