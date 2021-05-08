import 'package:flutter/material.dart';
class AlbumsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
     appBar: AppBar(
        backgroundColor: Colors.grey[800],
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text("Add to Album"),
            ElevatedButton(
              onPressed: () {
                 Navigator.pop(context,true);
              },
              child: Text("Done",
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w700,
                  )),
              style: ElevatedButton.styleFrom(
                primary: Colors.grey[800],
                side: BorderSide(color: Colors.white, width: 2),
              ),
            ),
          ],
        ),
      ),
    );
  }
}