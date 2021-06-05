/**
 * 
 * @api {GET} /favorites/:userId getList
 * 
 * @apiGroup favorites
 * @apiVersion  0.1.0
 * @apiDescription Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.
 * 
 * 
 *
 * @apiParam  (Body) {String} userId The NSID of the user to fetch the favorites list for. If this argument is omitted, the favorites list for the calling user is returned.
 * 
 * @apiSuccess (Success 200) {Object[]} favoritesList List of all user favorites
 * @apiSuccess (Success 200) {Number} statusCode The status code


* @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
* @apiError (Error 500) {Number} statusCode The status code

 * * @apiSuccessExample {json} Success-Response:
 *    {
   "total": "881",
   "owner":"507f191e810c19729de860ea"
   "photo": [
      {
         "views": 0,
            "isPublic": true,
            "tags": [],
            "inPhoto": [],
            "_id": "60b635527b5f3402acecb5cb",
            "description": "New Pic 2",
            "captureDate": "2020-05-01T06:11:08.000Z",
            "uploadDate": "2020-06-01T06:11:08.000Z",
            "secret": "secret key",
            "title": "photo 200",
            "imageUrl": "https://cdn.pixabay.com/photo/2020/01/19/21/51/mesquite-flats-4779079_1280.jpg",
            "width": 4928,
            "height": 3264,
            "user": {
                "userAvatar": "https://i.imgur.com/PyVmvKL.jpg",
                "isActivated": false,
                "isPro": false,
                "albums": [],
                "groups": [],
                "followers": [],
                "isGoogleUser": false,
                "following": [],
                "_id": "507f191e810c19729de860ea",
                "displayName": "anna",
                "cameraRoll": [],
                "galleries": [],
                "personId": "507f191e810c19729de860ef",
                "email": "mhmd@amr.com",
                "password": "e3e3e3",
            },
            "favs": 3,
            "comments": 0,
            "peopleInPhoto": []
      }
   ]
}

 * 
 *
 * 
 * 
 * 
 */
// *@apiError (Error 400) {Number} statusCode The status code
// *@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
// *@apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
// *@apiError (Error 401) {Number} statusCode The status code


// *@apiError (Error 404) {String} error The server can not find the requested resource. 
// *@apiError (Error 404) {Number} statusCode The status code



// * @apiError (Error 429) {String} error Too Many Requests ; the user has sent too many requests in a given amount of time ("rate limiting").
// * @apiError (Error 429) {Number} statusCode The status code

// * @apiErrorExample {json} Error-404
// *     HTTP/1.1 404 Not Found
// *     {
// *       "error": "photoNotFound",
// *        "statusCode":404
// *     }
// * @apiErrorExample {json} Error-401
// *     HTTP/1.1 401 Unauthorized
// *     {
// *       "error": "Unauthorized User",
// *        "statusCode":401
// *     }