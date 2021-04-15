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
 * @apiSuccess (Successful Requests) {String[]} 200:OK Contains all the member of the group mentioned
 * 
 * @apiError  400:BadRequest The server could not understand the request due to invalid syntax.
 */