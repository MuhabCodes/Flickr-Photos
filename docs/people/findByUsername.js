/**
 * 
 * @api {GET} /people/:userName findByUserame
 * 
 * @apiGroup people
 * @apiDescription find ID and userName of a user given their userName
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} userName The username of the user you want to find
 * 
 * @apiSuccess (Success 200) {String} userId  The id of user you want to find
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiSuccessExample {json} Success-Response:
 *    {
 *         "userId":"1234",
 *         "userName":"yousef123"
 *    }
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