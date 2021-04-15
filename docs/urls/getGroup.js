/**
 * 
 * @api {get} /urls/getGroup getGroup
 * @apiName urls
 * @apiGroup urls
 * @apiVersion  1.0.0
 * 
 * 
 * 
 * @apiParam  {String} api_key Your API application key
 * @apiParam  {String} group_id The NSID of the group to fetch the url for.
 * 
 * 
 * @apiSuccess (200) {type} name description
 * 
 * @apiError (404) Not Found
 * 
 * 
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     group_id : "12"
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     property : value
 * }
 * 
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */