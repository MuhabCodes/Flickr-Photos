/**
 * 
 * @api {POST} /photos/geo/batchCorrectLocation batchCorrectLocation
 * @apiName photos
 * @apiGroup photos.geo
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} api_key Your API application key
 * @apiParam  {String} lat The latitude of the photos to be update whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.
 * @apiParam  {String} lon The longitude of the photos to be updated whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.
 * @apiParam  {String} accuracy Recorded accuracy level of the photos to be updated. World level is 1, Country is ~3, Region ~6, City ~11, Street ~16. Current range is 1-16. Defaults to 16 if not specified.
 * @apiParam  {String} [place_id] A Flickr Places ID.  (While optional, you must pass either a valid Places ID or a WOE ID.)
 * @apiParam  {String} [woe_id] A Where On Earth (WOE) ID. (While optional, you must pass either a valid Places ID or a WOE ID.)    
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