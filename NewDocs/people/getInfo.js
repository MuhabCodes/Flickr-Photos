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
    "userId": "6092ea68326fa5101115dfad",
    "followersCount": 0,
    "followingCount": 4,
    "followers": [],
    "following": [
        "6092ea68326fa5101115dfae",
        "6092ea68326fa5101115dfaf",
        "6092ea68326fa5101115dfb0",
        "111111111111111111111111"
    ],
    "isActivated": false,
    "isPro": false,
    "albums": [],
    "email": "hamoksha@live.com",
    "displayName": "keka",
    "photos": [],
    "photosCount": 0,
    "description": "hi",
    "person": {
        "dateCreated": "2021-06-05T08:06:47.561Z",
        "_id": "60bb2d70c77326753f3975dc",
        "realName": "Yousef Qadry",
        "city": "giza",
        "homeTown": "cairo",
        "occupation": "nothing",
        "country": "Egypt"
    },
    "tags": 0,
    "favs": 0,
    "userAvatar": "https://i.imgur.com/PyVmvKL.jpg",
    "firstName": "Yousef",
    "lastName": "Qadry"
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
