import 'user.dart';

///[Comment] class consists of User, date of the comment amd the comment itself
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
