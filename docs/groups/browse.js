/**
 * 
 * @api {get} /groups/browse browse
 * @apiGroup groups
 * @apiVersion  1.0.0
 * @apiDescription Browse the group category tree, finding groups and sub-categories.
 * 
 * 
 * @apiParam  {String} [catId] The category id to fetch a list of groups and sub-categories for. If not specified, it defaults to zero, the root of the category tree.
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} memberList all the member of the group mentioned
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code

 
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "photoNotFound",
 *        "status_code":404
 *     } 
 
* @apiErrorExample {json} Error-401:
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "status_code":401
*     }
*
*
*
* @apiParamExample  {type} Request-Example:
* {
*     property : value
* }
* 
* 
* @apiSuccessExample {type} Success-Response:
* {
*     property : value
* }
*
* 
* 
*/