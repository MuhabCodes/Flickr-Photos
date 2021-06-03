/**
 * 
 * @api {GET} /people/:userId/info getInfo
 * @apiDescription Get information about a user
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} userId userId you want to get information about
 * 
 * @apiSuccess (Success 200) {Object[]} userInfo The user information of the user you want info about
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *  
 * @apiSuccessExample {json} Success-Response:
 *{
    "userId": "507f191e810c19729de860ea",
    "followersCount": 0,
    "followingCount": 0,
    "followers": [],
    "following": [],
    "isActivated": false,
    "isPro": false,
    "albums": [],
    "email": "mhmd@amr.com",
    "photos": [],
    "photosCount": 0,
    "person": "507f191e810c19729de860ef",
    "tags": 0,
    "favs": 0
}
 * 
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code.
 
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
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
  
 
 * 
 */
