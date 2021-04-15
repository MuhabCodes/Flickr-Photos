/**
 * 
 *@api {GET} /photos/comments/getRecentForContacts getRecentForContacts

* @apiGroup photos.comments
* @apiVersion  1.0.0
* 
* 
*
* @apiParam  {Date} [date_lastcomment] Limits the resultset to photos that have been commented on since this date. The date should be in the form of a Unix timestamp.
* @apiParam  {Number} [perPage] Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
* @apiParam  {Number} [page] The page of results to return. If this argument is omitted, it defaults to 1.
*@apiDescription Return the list of photos belonging to your contacts that have been commented on recently.
*@apiSuccess (Success 200) {Object[]}  recentsList List of photos favorited by your contacts 
*@apiSuccess (Success 200) {Number} statusCode The status code
*@apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
*@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code
*@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "commentNotFound",
*        "status_code":404
*     }
*@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "status_code":401
*     }
 * 
 * 
 */