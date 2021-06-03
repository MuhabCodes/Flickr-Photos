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
 * @apiParam  (Body) {Date} [minFaveDate] Minimum date that a photo was favorited on. The date should be in the form of a unix timestamp.
 * @apiParam  (Body) {Date} [maxFaveDate] Maximum date that a photo was favorited on. The date should be in the form of a unix timestamp.
 * @apiParam  (Body) {Number} [perPage] Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
 * @apiParam  (Body) {Number} [page] The page of results to return. If this argument is omitted, it defaults to 1
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
         "_id": "2636",
         "title": "test_04",
         "isPublic": "1",
         
      },
      {
         "_id": "2635",
         "title": "test_03",
         "isPublic": "0",
      },
      {
         "_id": "2633",
         "title": "test_01",
         "isPublic": "1",
      },
      {
         "_id": "2610",
         "title": "00_tall",
         "isPublic": "1",

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