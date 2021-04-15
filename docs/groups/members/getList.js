/**
 * 
 * @api {GET} /groups/members/getList getList
 * @apiGroup groups.members
 * @apiVersion  1.0.0
 * 
 * @apiDescription Get a list of the members of a group.
 * 
 * @apiParam  {String} api_key Your API application key.
 * @apiParam  {String} group_id The group that we want to get the members of.
 * @apiParam  {Number} [memberTypes] Comma separated list of member types. 1: member, 2: moderator, 3:admin.
 * @apiParam  {Number} [per_page=100] Number of members per page.
 * @apiParam  {Number} [page=1] The page of results to return.
 * 
 * //TODO : Add request example with the list thing
 * // i.e. the first optional argument.
 * 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "status_code":404
 *     }
 *
 *     @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "status_code":404
 *     }
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "status_code":404
 *     }
 * 
 *  @apiError (Error 404) {Number} status_code The status code
 *  @apiError (Error 404) {String} PhotoNotFound The photo isn't found
 * 
 * @apiError (Error 401) {Number} status_code The status code
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * 
 * 
 * @apiSuccess (Success 200) {Number} StatusCode all the member of the group mentioned
 * @apiSuccess (Success 200) {String[]} memberList all the member of the group mentioned
 *  
 */