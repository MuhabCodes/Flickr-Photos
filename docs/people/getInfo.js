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
 *    {
 *         "userId":"1234",
 *         "isPro":"1",
 *         "iconFarm":"1",
 *         "iconServer":"122",
 *         "userName":"yousef123",
 *          "realName":"Yousef Qadry",
 *          "location":"Cairo,Egypt",
 *          "profileUrl":"http://www.flickr.com/people/1234",
 *          "photosUrl":"http://www.flickr.com/photos/1234",
 *         "photos":{
 *                     "firstDate":"1071510391",
 *                     "firstDateUploaded":"12-10-2020",
 *                      "count":"150"
 *                  }
 *          
 *          
 *    }
 * 
 * 
 * 
 * @apiError (Error 400) {String} error The format for the userName isn't correct.
 * @apiError (Error 400) {Number} statusCode The status code.
 
 * 
 * @apiError (Error 404) {String} error The userName isn't registered at our application.
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