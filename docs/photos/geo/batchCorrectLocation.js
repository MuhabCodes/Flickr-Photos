/**
 * 
 * @api {POST} /photos/geo/batchCorrectLocation/lat/:lat/lon/:lon/accuracy/:accuracy batchCorrectLocation
 * @apiName photos
 * @apiGroup photos.geo
 * @apiVersion  1.0.0
 * 
 * 
 * 
 * @apiParam  {String} lat The latitude of the photos to be update whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.
 * @apiParam  {String} lon The longitude of the photos to be updated whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.
 * @apiParam  {String} accuracy Recorded accuracy level of the photos to be updated. World level is 1, Country is ~3, Region ~6, City ~11, Street ~16. Current range is 1-16. Defaults to 16 if not specified.
 * @apiParam  {String} [placeId] A Flickr Places ID.  (While optional, you must pass either a valid Places ID or a WOE ID.)
 * @apiParam  {String} [woe_id] A Where On Earth (WOE) ID. (While optional, you must pass either a valid Places ID or a WOE ID.)    
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *  
@apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "status_code":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "status_code":401
*     }


 * 

 * 
 * 
 */