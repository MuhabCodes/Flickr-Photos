/**
 * 
 * @api {get} /places/findByLatLon/lat/:lat/lon/:lon findByLatitudeLongitude
 * 
 * @apiGroup places
 * @apiVersion  1.0.0
 * 
 * @apiDescription Return a place ID for a latitude, longitude and accuracy triple.

The flickr.places.findByLatLon method is not meant to be a (reverse) geocoder in the traditional sense. It is designed to allow users to find photos for "places" and will round up to the nearest place type to which corresponding place IDs apply.

For example, if you pass it a street level coordinate it will return the city that contains the point rather than the street, or building, itself.

It will also truncate latitudes and longitudes to three decimal points.
 * 
 

 * @apiParam  {String} lat The latitude whose valid range is -90 to 90. Anything more than 4 decimal places will be truncated.
 * @apiParam  {String} lon The longitude whose valid range is -180 to 180. Anything more than 4 decimal places will be truncated.
 * @apiParam  {String} [accuracy] Recorded accuracy level of the location information. World level is 1, Country is ~3, Region ~6, City ~11, Street ~16. Current range is 1-16. The default is 16.
 * 
 * @apiSuccess (Success 200) {Object} placeId a place ID for a latitude, longitude and accuracy triple.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * 
 * 
 * 
 *  
 
* @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
* @apiError (Error 400) {Number} statusCode The status code
 
 
* @apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
* @apiError (Error 404) {String} error Informs the caller of the missing object.
* @apiError (Error 404) {Number} statusCode The status code
 
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "wrongLatitudeOrLatitde",
*        "statusCode":404
*     }
 
*@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }

 * 
 * 
 */