/**
 * 
 * @api {POST} photos/geo/setPerms setPerms
 * @apiName photos
 * @apiGroup photos.geo
 * @apiVersion  1.0.0
 * @apiDescription Set the permission for who may view the geo data associated with a photo.
 * 
 * 
 * 
 * @apiParam  {String} api_key Your API application key
 * @apiParam  {Boolean} is_public 1 to set viewing permissions for the photo's location data to public, 0 to set it to private.
 * @apiParam  {Boolean} is_contact 1 to set viewing permissions for the photo's location data to contacts, 0 to set it to private.
 * @apiParam  {Boolean} is_friend 1 to set viewing permissions for the photo's location data to friends, 0 to set it to private.
 * @apiParam  {Boolean} is_family 1 to set viewing permissions for the photo's location data to family, 0 to set it to private.
 * @apiParam  {String} photo_id The id of the photo to get permissions for.
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