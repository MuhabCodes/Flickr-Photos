/**
 * 
 * @api {GET} /people/:userId/groups getGroups
 * @apiDescription Returns the list of groups a user is a member of.
 * @apiGroup people
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} userId user id you want to fetch groups he is member of
 * @apiParam  {String} [extras] description
 * 
 * @apiSuccess (Success 200) {Object[]} groupList user is a member of
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *  
 * 
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

 * 
 */