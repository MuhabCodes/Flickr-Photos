/**
 * 
 * @api {Get} /people/:email findByEmail
 * @apiDescription find ID and userName of a user given their Email
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} email Email of the User you want to Find
 * 
 * 
 * @apiSuccess (Success 200) {String} userId The Id of user you want to find
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccessExample {json} Success-Response:
 *    {
 *         "userId":"1234",
 *         "userName":"yousef123"
 *    }
 * 
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
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

 */