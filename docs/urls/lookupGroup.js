/**
 * 
 * @api {get} /urls/lookupGroup lookupGroup
 * @apiName urls
 * @apiGroup urls
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} api_key Your API application key.
 * @apiParam  {String} is_public 1 to set viewing permissions for the photo's location data to public, 0 to set it to private.
 * @apiParam  {String} is_contact 1 to set viewing permissions for the photo's location data to contacts, 0 to set it to private.
 * @apiParam  {String} is_friend 1 to set viewing permissions for the photo's location data to friends, 0 to set it to private.
 * @apiParam  {String} is_family 1 to set viewing permissions for the photo's location data to family, 0 to set it to private.
 * @apiParam  {String} photo_id The id of the photo to get permissions for.
 *  
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