/**
 * 
 * @api {GET} /people/displayname/:displayName findByUserame
 * 
 * @apiGroup people
 * @apiDescription find Info of a user given their displayName
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} displayName The username of the user you want to find
 * 
 * @apiSuccess (Success 200) {String} userId  The id of user you want to find
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiSuccessExample {json} Success-Response:
 *    {
 *         "userId":"1234",
 *         "displayName":"yousef123"
 *    }
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

 *  
 * 
 * 
 *  
  @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound",
 *        "statusCode":404
 *     }
  
 *
 * 
*/