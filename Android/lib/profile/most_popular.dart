import 'package:flickr/profile/fullscreen_image.dart';
import 'package:flickr/providers/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:provider/provider.dart';

class MostPopular extends StatefulWidget {
  @override
  _MostPopularState createState() => _MostPopularState();
}

class _MostPopularState extends State<MostPopular> {
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    final _userProvider = Provider.of<UserProvider>(context);
    return Scaffold(
        appBar: AppBar(
          automaticallyImplyLeading: false,
          toolbarHeight: size.height * 0.15,
          flexibleSpace: Image(
            image: NetworkImage(
              _userProvider.user.photos[0].imageUrl,
            ),
            fit: BoxFit.cover,
          ),
          title: Container(
            width: double.infinity,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Icon(Icons.arrow_back)),
                SizedBox(
                  height: 20,
                  width: size.width,
                  child: Align(
                    alignment: Alignment.topCenter,
                    child: Text(
                      "Most Popular",
                      style: TextStyle(
                          fontSize: 18,
                          color: Colors.white,
                          fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                SizedBox(
                  width: size.width,
                  child: Align(
                    alignment: Alignment.center,
                    child: Text(
                      "${_userProvider.user.displayName + " - " + _userProvider.user.photos.length.toString() + " photos"}",
                      style: TextStyle(
                          fontSize: 16,
                          color: Colors.white,
                          fontWeight: FontWeight.bold),
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
        body: Padding(
          padding: const EdgeInsets.all(15),
          child: CustomScrollView(slivers: <Widget>[
            SliverStaggeredGrid.countBuilder(
              mainAxisSpacing: 4,
              crossAxisSpacing: 4,
              crossAxisCount: 2,
              staggeredTileBuilder: (index) => index % 7 == 1 || index % 7 == 2
                  ? StaggeredTile.count(1, 1)
                  : StaggeredTile.count(2, 1),
              itemBuilder: (context, index) => InkWell(
                onTap: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => FullscreenImage(
                              _userProvider.user.photos[index])));
                },
                child: Image.network(
                  _userProvider.user.photos[index].imageUrl,
                  fit: BoxFit.fill,
                ),
              ),
              itemCount: _userProvider.user.photos.length,
            )
          ]),
        ));
  }
}
