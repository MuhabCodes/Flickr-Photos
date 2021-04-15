/**
 * 
 * @api {get} /groups/leave leave
 * @apiName groups
 * @apiGroup groups
 * @apiVersion  1.0.0
 * @apiDescription Leave a group.

If the user is the only administrator left, and there are other members, the oldest member will be promoted to administrator.

If the user is the last person in the group, the group will be deleted.

 * 
 * @apiParam  {String} api_key Your API application key.
 * @apiParam  {String} group_id The NSID of the Group to leave
 * @apiParam  {String} [delete_photos] Delete all photos by this user from the group
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