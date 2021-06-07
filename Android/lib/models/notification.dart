class SingleNotification {
  SingleNotification({
    this.sender,
    this.senderName,
    this.reciever,
    this.recieverName,
    this.id,
    this.act,
    this.photoId,
    this.notificationDate,
    this.imageUrl,
    this.senderImageUrl,
  });

  String sender;
  String senderName;
  String reciever;
  String recieverName;
  String id;
  String act;
  String photoId;
  String notificationDate;
  String imageUrl;
  String senderImageUrl;

  factory SingleNotification.fromJson(Map<String, dynamic> json) =>
      SingleNotification(
        sender: json["sender"],
        senderName: json["senderName"],
        reciever: json["reciever"],
        recieverName: json["recieverName"],
        id: json["id"],
        act: json["act"],
        photoId: json["photoId"],
        notificationDate: json["notificationDate"],
        imageUrl: json["imageUrl"],
        senderImageUrl: json["senderImageUrl"],
      );

  Map<String, dynamic> toJson() => {
        "sender": sender,
        "senderName": senderName,
        "reciever": reciever,
        "recieverName": recieverName,
        "id": id,
        "act": act,
        "photoId": photoId,
        "notificationDate": notificationDate,
        "imageUrl": imageUrl,
        "senderImageUrl": senderImageUrl,
      };
}

class NotificationsList {
  NotificationsList({
    this.notificationsList,
  });

  List<SingleNotification> notificationsList;

  factory NotificationsList.fromJson(Map<String, dynamic> json) =>
      NotificationsList(
        notificationsList: List<SingleNotification>.from(
            json["myNotificationsarray"]
                .map((x) => SingleNotification.fromJson(x))),
      );
}
