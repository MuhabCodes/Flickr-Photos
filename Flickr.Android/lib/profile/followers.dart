import 'package:flutter/material.dart';

class Followers extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.grey[800],
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              "Followers",
              style: TextStyle(
                fontSize: 20,
              ),
            ),
          ],
        ),
      ),
      body: Card(
        elevation: 5,
      ),
    );
  }
}
