/**
 * 
 * @api {GET} /activity/user/photos userPhotos
 * @apiDescription Returns a list of recent activity on photos belonging to the calling user. Do not poll this method more than once an hour.
 * @apiGroup activity
 * @apiVersion  0.1.0
 * 
 * @apiParam  {String} [timeFrame] The timeframe in which to return updates for. This can be specified in days ('2d') or hours ('4h'). The  behavoir is to return changes since the beginning of the previous user session.
 * @apiParam  {String} [perPage=10] Number of items to return per page.The maximum allowed value is 50.
 * @apiParam  {String} [page=1] The page of results to return.
 * 
 * @apiSuccess (Success 200) {Object[]} activityPhotosList list of all recent photos activites of mentioned user
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccessExample {json} Success-Response:
 *    [
   {
      "type": "photoset",
      "id": "395",
      "owner": "12037949754@N01",
      "primary": "6521",
      "secret": "5a3cc65d72",
      
      "commentsOld": "1",
      "commentsNew": "1",
      "views": "33",
      "photos": "7",
      "more": "0",
      "title": "A set of photos",
      "activity": {
         "event": {
            "type": "comment",
            "user": "1234",
            "userName": "yousef123",
            "dateAdded": "1144086424",
            "text": "yay"
         }
      }
   },
   {
      "type": "photo",
      "id": "10289",
      "owner": "12037949754@N01",
      "secret": "34da0d3891",
      
      "commentsOld": "1",
      "commentsNew": "1",
      "notesOld": "0",
      "notesNew": "1",
      "views": "47",
      "faves": "0",
      "more": "0",
      "title": "A photo",
      "activity": [
         {
            "type": "comment",
            "user": "1234",
            "userName": "yousef123",
            "dateAdded": "1133806604",
            "text": "test"
         },
         {
            "type": "note",
            "user": "1234",
            "userName": "yousef123",
            "dateAdded": "1118785229",
            "text": "nice"
         }
      ]
   }
]
 * 
 * @apiError (Error 401) {String} error login failed.  
 * @apiError (Error 401) {Number} statusCode The status code.
 
 * @apiError (Error 403) {String} error The server understood the request but refuses to authorize it(you aren't logged in).
 * @apiError (Error 403) {Number} statusCode The status code
 
 * @apiError (Error 404) {String} error user not found at our application
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound",
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * 
 * 
 */