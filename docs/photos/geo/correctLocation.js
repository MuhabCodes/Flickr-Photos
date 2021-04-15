/**
 * 
 * @api {POST} /photos/geo/correctLocation correctLocation
 * @apiName photos
 * @apiGroup photos.geo
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} api_key Your API application key
 * @apiParam  {String} photo_id The ID of the photo whose WOE location is being corrected.
 * @apiParam  {String} [place_id] A Flickr Places ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
 * @apiParam  {String} [woe_id] A Where On Earth (WOE) ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
 * @apiParam  {String} foursquare_id The venue ID for a Foursquare location. (If not passed in with correction, any existing foursquare venue will be removed).
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