/**
 * 
 * @api {get} /groups/getInfo getInfo
 * @apiName groups
 * @apiGroup groups
 * @apiVersion  1.1.0
 * 
 * @apiDescription Get information about a group.
 * 
 * 
 * @apiParam  {String} api_key Your API application key.
 * @apiParam  {String} group_id The NSID of the group to fetch information for.
 * @apiParam  {String} [group_path_alias] The path alias of the group. One of this or the group_id param is required
 * @apiParam  {String} [lang] The language of the group name and description to fetch. If the language is not found, the primary language of the group will be returned. Valid values are the same as in feeds.
 * 
 * 
 * @apiSuccess (200) {type} name description
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