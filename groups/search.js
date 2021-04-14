/**
 * 
 * @api {get} /groups/search search
 * @apiName groups
 * @apiGroup groups
 * @apiVersion  1.1.0
 * @apiDescription Search for groups. 18+ groups will only be returned for authenticated calls where the authenticated user is over 18.
 * 
 * 
 * 
 * @apiParam  {String} api_key Your API application key.
 * @apiParam  {String} text The text to search for.
 * @apiParam  {String} [per_page] Number of groups to return per page. If this argument is ommited, it defaults to 100. The maximum allowed value is 500.
 * @apiParam  {String} [page] The page of results to return. If this argument is ommited, it defaults to 1.
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