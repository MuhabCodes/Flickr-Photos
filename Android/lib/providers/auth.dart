import 'dart:async';

///Importing library to send http requests.
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;

import '../models/user.dart';

enum Status { Success, Fail, Loading }

class Authentication with ChangeNotifier {
  final String baseUrl;
  Status status = Status.Loading;
  final BuildContext context;
  User currentUser;
  String token;
  GoogleSignIn googleSignIn = GoogleSignIn();

  Authentication({this.baseUrl, this.context, this.token, this.currentUser});

  String getToken() {
    return currentUser.token;
  }

  var _getStartedUrl =
      Uri.parse("https://run.mocky.io/v3/d05b01df-d142-49aa-917a-a4fb129cfdd3");
  Future<void> getStarted() async {
    // post request from backend
    status = Status.Loading;
    final response = await http.post(
      _getStartedUrl,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
    );
    if (response.statusCode == 200) {
      status = Status.Success;
      print(response.body);
      notifyListeners();
      print("application started");
      // If the server did return a 201 CREATED response,
      // then parse the JSON.

      return;
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('no internet connection');
    }
  }

  var _getUrl =
      Uri.parse("https://run.mocky.io/v3/a907c913-8f07-4c9f-855d-80bea973a8d2");
  Future<void> signIn() async {
    // post request from backend
    status = Status.Loading;
    final response = await http.post(
      _getUrl,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': currentUser.email,
        'password': currentUser.password
      }),
    );
    if (response.statusCode == 201) {
      token = User.fromJson2(jsonDecode(response.body)).token;
      status = Status.Success;
      print(token);
      print(response.body);
      print("User Signed in");
      notifyListeners();
      // If the server did return a 201 CREATED response,
      // then parse the JSON.

      return;
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to sign in');
    }
  }

  var _registerUrl =
      Uri.parse("https://run.mocky.io/v3/c101824f-42cb-437f-999e-84e497a2201b");
  Future<void> register() async {
    // post request from backend
    status = Status.Loading;
    final response = await http.post(
      _registerUrl,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'firstName': currentUser.firstName,
        'lastName': currentUser.lastName,
        'age': currentUser.age,
        'email': currentUser.email,
        'password': currentUser.password
      }),
    );
    if (response.statusCode == 201) {
      status = Status.Success;
      print("User signed up and register email sent");
      print(response.body);
      notifyListeners();
      // If the server did return a 201 CREATED response,
      // then parse the JSON.

      return;
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to Register');
    }
  }

  var _resendConfirmationUrl =
      Uri.parse("https://run.mocky.io/v3/99d75e5c-320f-4832-be6b-e6bb7473f034");
  Future<void> resendConfirmation() async {
    // post request from backend
    status = Status.Loading;
    final response = await http.post(
      _resendConfirmationUrl,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': currentUser.email,
      }),
    );
    if (response.statusCode == 201) {
      status = Status.Success;
      print(response.body);
      print("Register email resent");
      notifyListeners();
      // If the server did return a 201 CREATED response,
      // then parse the JSON.

      return;
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to send Verification email');
    }
  }

  var _signInWithGoogleUrl =
      Uri.parse("https://run.mocky.io/v3/939bae3c-0775-4ac1-88bd-2219d6255f3a");
  Future<void> signInWithGoogle() async {
    // post request from backend
    status = Status.Loading;
    final response = await http.post(
      _signInWithGoogleUrl,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': currentUser.googleEmail,
        'displayName': currentUser.displayName,
      }),
    );
    if (response.statusCode == 201) {
      token = User.fromJson2(jsonDecode(response.body)).token;
      status = Status.Success;
      print(token);
      print(response.body);
      print("Google user signed in");
      notifyListeners();
      // If the server did return a 201 CREATED response,
      // then parse the JSON.

      return;
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      print("failed baby");
      throw Exception('Failed to sign in with Google');
    }
  }

  var _sendForgotPasswordUrl =
      Uri.parse("https://run.mocky.io/v3/690da7d6-d2a2-4c7a-87c1-a02effa19ba7");
  Future<void> sendForgotPassword() async {
    // post request from backend
    status = Status.Loading;
    final response = await http.post(
      _sendForgotPasswordUrl,
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'email': currentUser.email,
      }),
    );
    if (response.statusCode == 201) {
      status = Status.Success;
      print(response.body);
      print("Forgot password email sent");
      notifyListeners();
      // If the server did return a 201 CREATED response,
      // then parse the JSON.

      return;
    } else {
      // If the server did not return a 201 CREATED response,
      // then throw an exception.
      status = Status.Fail;
      throw Exception('Failed to reset password');
    }
  }

  void signOut() {
    currentUser = null;
    token = null;

    googleSignIn.signOut();
    print("User signed out");
  }
}
