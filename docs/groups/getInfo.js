/**
 * 
 * @api {get} /groups/:groupId/getInfo getInfo
 * @apiName groups
 * @apiGroup groups
 * @apiVersion  1.0.0
 * 
 * @apiDescription Get information about a group.
 * 
 * 
 * //TODO: Camel case correction
 * @apiParam  {String} groupId The NSID of the group to fetch information for.
 * @apiParam  {String} [group_path_alias] The path alias of the group. One of this or the groupId param is required
 * @apiParam  {String} [lang] The language of the group name and description to fetch. If the language is not found, the primary language of the group will be returned. Valid values are the same as in feeds.
 * 
 *  // TODO: Wrong variable name
 * @apiSuccess (Success 200) {Object[]} memberList all the member of the group mentioned
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
* @apiError (Error 401) {String} error The user doesn't have permission to do this action
* @apiError (Error 401) {Number} statusCode The status code

 
* @apiError (Error 404) {String} error Informs the caller of the missing object.
* @apiError (Error 404) {Number} statusCode The status code
*
* // TODO : photoNotFound is not appropriate for the error
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
 */