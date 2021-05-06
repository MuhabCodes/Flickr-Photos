class About {
  String profileId;
  String nsId;
  String showcaseSet;
  String firstName;
  String lastName;
  String description = "add descrip";
  String website;
  String occupation;
  String homeTown;
  String city;
  String country;
  About({
    this.profileId,
    this.nsId,
    this.showcaseSet,
    this.firstName,
    this.lastName,
    this.description,
    this.website,
    this.occupation,
    this.homeTown,
    this.city,
    this.country,
  });

  factory About.fromJson(Map<String, dynamic> json) => About(
        profileId: json["profileId"],
        nsId: json["nsId"],
        showcaseSet: json["showcaseSet"],
        firstName: json["firstName"],
        lastName: json["lastName"],
        description: json["description"],
        website: json["website"],
        occupation: json["occupation"],
        homeTown: json["homeTown"],
        city: json["city"],
        country: json["country"],
      );
}
