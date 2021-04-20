/**
 * 
 * @api {get} /groups/browse browse
 * @apiGroup groups
 * @apiVersion  0.1.0
 * @apiDescription Browse the group category tree, finding groups and sub-categories.
 * 
 * 
 * @apiParam  {String} [catId] The category id to fetch a list of groups and sub-categories for. If not specified, it defaults to zero, the root of the category tree.
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} groups finding groups and sub-categories off the group category tree
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "categoryNotFound",
 *        "statusCode":404
 *     } 
 *
* @apiErrorExample {json} Error-401:
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }
*
*
*
*
* 
* 
*/