import 'package:flutter/material.dart';

import 'upload_page.dart';

class EditorPage extends StatefulWidget {
  final realimageFile;
  EditorPage(this.realimageFile);
  @override
  _EditorPageState createState() => _EditorPageState();
}

class _EditorPageState extends State<EditorPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.black,
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[
            SizedBox(
              height: 0.03 * MediaQuery.of(context).size.height,
              width: MediaQuery.of(context).size.width,
            ),
            Container(
              height: 0.1 * MediaQuery.of(context).size.height,
              width: MediaQuery.of(context).size.width,
              child: Card(
                color: Colors.black,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    TextButton(
                      child: Text(
                        'Next',
                        style: TextStyle(
                            fontSize:
                                0.03 * MediaQuery.of(context).size.height),
                      ),
                      onPressed: () {
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => (UploadPage(
                                    widget.realimageFile, 1, null))));
                      },
                      style: TextButton.styleFrom(
                        primary: Colors.white,
                      ),
                    ),
                  ],
                ),
                elevation: 5,
              ),
            ),
            SizedBox(
              height: 0.05 * MediaQuery.of(context).size.height,
              width: MediaQuery.of(context).size.width,
            ),
            Container(
              height: 0.6 * MediaQuery.of(context).size.height,
              width: MediaQuery.of(context).size.width,
              child: widget.realimageFile != null
                  ? Image.file(
                      widget.realimageFile,
                      height: 0.6 * MediaQuery.of(context).size.height,
                      width: MediaQuery.of(context).size.width,
                    )
                  : Text('No image selected!'),
            )
          ],
        ));
  }
}
