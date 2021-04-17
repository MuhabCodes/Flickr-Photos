/**
 * 
 * @api {GET} /activity/user/comments userComments
 * @apiDescription Returns a list of recent activity on photos commented on by the calling user
 * @apiGroup activity
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} [perPage=10] Number of items to return per page.
 * @apiParam  {String} [page=1] The page of results to return. 
 * 
 * @apiSuccess (Success 200) {Object[]} activityList list of all recent activites of mentioned user
 * @apiSuccess (Success 200) {Number} statusCode The status code
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
 * 
 */