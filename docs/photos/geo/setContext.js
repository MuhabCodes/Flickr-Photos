/**
 * 
 * @api {POST}  /photos/geo/setContext setContext
 * @apiName photos
 * @apiGroup photos.geo
 * @apiVersion  1.0.0
 * @apiDescription Indicate the state of a photo's geotagginess beyond latitude and longitude.
 * @apiDescription Note : photos passed to this method must already be geotagged (using the flickr.photos.geo.setLocation method).
 * 
 * 
 * @apiParam  {String} api_key Your API application key
 * @apiParam  {String} photo_id The id of the photo to set context data for.
 * @apiParam  {String} context Context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to indicate that a photo was taken "indoors" or "outdoors".

The current list of context IDs is :

0, not defined.
1, indoors.
2, outdoors.
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