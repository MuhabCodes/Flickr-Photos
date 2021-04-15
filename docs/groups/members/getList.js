/**
 * 
 * @api {GET} /groups/:group_id/members getList
 * @apiGroup groups.members
 * @apiVersion  1.0.0
 * 
 * @apiDescription Get a list of the members of a group.
 * 
 *  
 * @apiParam  {String} group_id The group that we want to get the members of.
 * @apiParam  {Number} [memberTypes] Comma separated list of member types. 1: member, 2: moderator, 3:admin.
 * @apiParam  {Number} [per_page=100] Number of members per page.
 * @apiParam  {Number} [page=1] The page of results to return.
 * 
 * //TODO : Add request example with the list thing
 * // i.e. the first optional argument.
 * 
 * @apiSuccess (Success 200) {Number} statusCode all the member of the group mentioned
 * @apiSuccess (Success 200) {Object[]} memberList all the member of the group mentioned
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *@apiError (Error 400) {Number} statusCode The status code
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "groupNotFound",
 *        "status_code":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 */