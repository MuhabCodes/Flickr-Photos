/**
 * 
 * @api {POST}  /photos/geo/setLocation setLocation
 * @apiName photos
 * @apiGroup photos.geo
 * @apiVersion  1.0.0
 * @apiDescription Sets the geo data (latitude and longitude and, optionally, the accuracy level) for a photo. Before users may assign location data to a photo they must define who, by default, may view that information.
 * @apiDescription Users can edit this preference at http://www.flickr.com/account/geo/privacy/. If a user has not set this preference, the API method will return an error.
 * 
 * 
 * 
 * @apiParam  {String} api_key Your API application key
 * @apiParam  {String} photo_id The id of the photo to set location data for.
 * @apiParam  {String} lat The latitude whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.
 * @apiParam  {String} lon The longitude whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.
 * @apiParam  {String} [accuracy] Recorded accuracy level of the location information. World level is 1, Country is ~3, Region ~6, City ~11, Street ~16. Current range is 1-16. Defaults to 16 if not specified.
 * @apiParam  {String} [context] Context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to indicate that a photo was taken "indoors" or "outdoors".

The current list of context IDs is :

0, not defined.
1, indoors.
2, outdoors.

The default context for geotagged photos is 0, or "not defined"
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