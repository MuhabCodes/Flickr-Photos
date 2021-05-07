import 'package:flutter/material.dart';

class Following extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.grey[800],
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text("Following"),
          ],
        ),
      ),
      body: Card(
        elevation: 5,
      ),
    );
  }
}
