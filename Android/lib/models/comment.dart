import 'user.dart';

class Comment {
  String comment;
  User user;
  DateTime dateOfComment;

  Comment(
    this.user,
    this.comment,
    this.dateOfComment,
  );
}
