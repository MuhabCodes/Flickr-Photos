/**
 * 
 * @api {get} /groups/joinRequest joinRequest
 * @apiName groups
 * @apiGroup groups
 * @apiVersion  1.0.0
 * @apiDescription Request to join a group that is invitation-only.
 * 
 * 
 * @apiParam  {String} api_key Your API application key.
 * @apiParam  {String} group_id The NSID of the group to request joining.
 * @apiParam  {String} message Message to the administrators.
 * @apiParam  {String} accept_rules If the group has rules, they must be displayed to the user prior to joining. Passing a true value for this argument specifies that the application has displayed the group rules to the user, and that the user has agreed to them. (See flickr.groups.getInfo).
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