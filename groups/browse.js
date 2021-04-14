/**
 * 
 * @api {get} /groups/browse Browse
 * @apiName groups
 * @apiGroup groups
 * @apiVersion  1.1.0
 * @apiDescription Browse the group category tree, finding groups and sub-categories.
 * 
 * @apiParam  {String} api_key Your API application key.
 * @apiParam  {String} [cat_id] The category id to fetch a list of groups and sub-categories for. If not specified, it defaults to zero, the root of the category tree.
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