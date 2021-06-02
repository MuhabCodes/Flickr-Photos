import 'package:flickr/models/global.dart';

import 'package:flutter_test/flutter_test.dart';

main() {
  group("Get Post time tests", () {
    test("Get post time should return 59m", () {
      //Arrange
      DateTime testingTime = DateTime(
          DateTime.now().year,
          DateTime.now().month,
          DateTime.now().day,
          DateTime.now().hour - 1,
          58); //testing time should be here
      //Act
      String outputTestingTime = getPostTime(testingTime); // actual output
      //Assert

      String expectedOutput = (DateTime.now().minute + 2).toString() + "m";
      expect(outputTestingTime,
          expectedOutput); // 59m should be the expected output
    });
    test("Get post time should return 2h", () {
      //Arrange
      DateTime testingTime = DateTime(
          DateTime.now().year,
          DateTime.now().month,
          DateTime.now().day,
          DateTime.now().hour - 2); //testing time should be here
      //Act
      String outputTestingTime = getPostTime(testingTime); // actual output
      //Assert
      expect(outputTestingTime, "2h"); // 2h should be the expected output
    });
    test("Get post time should return 1d", () {
      //Arrange
      DateTime testingTime = DateTime(DateTime.now().year, DateTime.now().month,
          (DateTime.now().day - 1)); //testing time should be here
      //Act
      String outputTestingTime = getPostTime(testingTime); // actual output
      //Assert
      expect(outputTestingTime, "1d"); // 1d should be the expected output
    });

    group("Week Tests", () {
      test("Get post time should return 1w", () {
        //Arrange
        DateTime testingTime = DateTime(
            DateTime.now().year,
            DateTime.now().month,
            (DateTime.now().day - 7)); //testing time should be here
        //Act
        String outputTestingTime = getPostTime(testingTime); // actual output
        //Assert
        expect(outputTestingTime, "1w"); // 1w should be the expected output
      });

      test("Get post time should return 2w", () {
        //Arrange
        DateTime testingTime = DateTime(
            DateTime.now().year,
            DateTime.now().month,
            (DateTime.now().day - 14)); //testing time should be here
        //Act
        String outputTestingTime = getPostTime(testingTime); // actual output
        //Assert
        expect(outputTestingTime, "2w"); // 2w should be the expected output
      });

      test("Get post time should return 3w", () {
        //Arrange
        DateTime testingTime = DateTime(
            DateTime.now().year,
            DateTime.now().month,
            (DateTime.now().day - 21)); //testing time should be here
        //Act
        String outputTestingTime = getPostTime(testingTime); // actual output
        //Assert
        expect(outputTestingTime, "3w"); // 3w should be the expected output
      });
    }); //end of week tests
    test("Get post time should return 1mo", () {
      //Arrange
      DateTime testingTime = DateTime(
          DateTime.now().year,
          (DateTime.now().month - 1),
          DateTime.now().day); //testing time should be here
      //Act
      String outputTestingTime = getPostTime(testingTime); // actual output
      //Assert
      expect(outputTestingTime, "1mo"); // 1m should be the expected output
    });

    test("Get post time should return 1y", () {
      //Arrange
      DateTime testingTime = DateTime(
          (DateTime.now().year - 1), 4, 20); //testing time should be here
      //Act
      String outputTestingTime = getPostTime(testingTime); // actual output
      //Assert
      expect(outputTestingTime, "1y"); // 1y should be the expected output
    });
  }); //Get time post tests
}
