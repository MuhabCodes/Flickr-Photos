/**
 * 
 * @api {GET} /photos/:photoId/favorites getLikers
 * 
 * @apiGroup favorites
 * @apiVersion  0.1.0
 * @apiDescription Returns a list of the photo Likers .
 * @apiParam   {String} photoId The NSID of the user to fetch the favorites list for.
 * 
 *
 * 
 * @apiSuccess (Success 200) {Object[]} favoritesList List of all user favorites
 * @apiSuccess (Success 200) {Number} statusCode The status code


* @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
* @apiError (Error 500) {Number} statusCode The status code

 * * @apiSuccessExample {json} Success-Response:
 *    {
    "photoLikers": [
        {
            "userAvatar": "https://i.imgur.com/PyVmvKL.jpg",
            "isPro": false,
            "_id": "507f191e810c19729de860ea",
            "displayName": "anna"
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