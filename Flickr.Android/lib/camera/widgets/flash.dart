import 'package:flutter/material.dart';

class FlashButton extends StatefulWidget {
  @override
  FlashButtonState createState() => FlashButtonState();
}

class FlashButtonState extends State<FlashButton> {
  int _flashID = 0;
  void changeFlashIndex(int tagID) {
    if (_flashID == 0) {
      _flashID = 1;
    } else if (_flashID == 1) {
      _flashID = 2;
    } else if (_flashID == 2) {
      _flashID = 0;
    }
    setState(() {});
  }



  @override
  Widget build(BuildContext context) {
    return Container(
        child: IconButton(
            onPressed: () {
              changeFlashIndex(_flashID);
            },
        icon:
        _flashID==0
         ?Icon(Icons.flash_off)
         :Icon(Icons.flash_on)
         ,color: Colors.white,
        )
        );
  }
}
