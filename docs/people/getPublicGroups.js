/**
 * 
 * @api {GET} /people/:userId/groups/public getPublicGroups
 * @apiDescription Returns the list of public groups a user is a member of.
 * 
 * @apiName apiName
 * @apiGroup people
 * @apiVersion 1.0.0
 * 
 * 
 * @apiParam  {String} userId ID of user you want to get groups for
 * @apiParam  {String} [invitation_only] Include public groups that require an invitation or administrator approval to join.
 * 
 * @apiSuccess (Success 200) {Object[]}  userGroups all groups mentioned user is a member of
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
 *       "error": "groupNotFound",
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