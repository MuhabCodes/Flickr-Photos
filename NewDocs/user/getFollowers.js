/**
 * 
 * @api {GET} /user/:userId/followers getFollowers
 * @apiDescription Get the followers for the user
 * @apiGroup user
 * @apiVersion  0.1.1
 * 
 * 
 * @apiParam  {String} userId ID of the user to fetch the tag list for
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} followers list of all followers of the mentioned user
 * @apiSuccessExample {json} Success-Response:
 *   {
    "followers": [
        {
            "userAvatar": "https://i.imgur.com/PyVmvKL.jpg",
            "userName": "7osny120",
            "userId": "60bc732ae85cbf0f76069954"
        },
        {
            "userAvatar": "https://i.imgur.com/PyVmvKL.jpg",
            "userName": "wewoo231",
            "userId": "60bc732we85cbf0f76069954"
        }
    ],
    "statusCode": 200
}
 * 
 *  
 * @apiError (Error 404) {String} error The server can not find the user. 
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
  

 */
