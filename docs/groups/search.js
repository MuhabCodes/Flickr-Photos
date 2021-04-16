/**
 * 
 * @api {get} /groups/search/:text search
 * @apiName groups
 * @apiGroup groups
 * @apiVersion  1.0.0
 * @apiDescription Search for groups. 18+ groups will only be returned for authenticated calls where the authenticated user is over 18.
 * 
 * 
 * 
 * 
 * @apiParam  {String} text The text to search for.
 * @apiParam  {String} [per_page] Number of groups to return per page. If this argument is ommited, it defaults to 100. The maximum allowed value is 500.
 * @apiParam  {String} [page] The page of results to return. If this argument is ommited, it defaults to 1.
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} groups. (18+ groups will only be returned for authenticated calls where the authenticated user is over 18.) 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
* @apiError (Error 401) {String} error The user doesn't have permission to do this action
* @apiError (Error 401) {Number} statusCode The status code

 
* @apiError (Error 404) {String} error Informs the caller of the missing object.
* @apiError (Error 404) {Number} statusCode The status code
 
* @apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "statusCode":404
*     }
 
* @apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }

 * 
 * 

 * 
 * 
 */