/**
 * 
 * @api {get} /places/findByLatLon/lat/:lat/lon/:lon findByLatitudeLongitude
 * 
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * @apiDescription Return a place ID for a latitude, longitude and accuracy triple.

The flickr.places.findByLatLon method is not meant to be a (reverse) geocoder in the traditional sense. It is designed to allow users to find photos for "places" and will round up to the nearest place type to which corresponding place IDs apply.

For example, if you pass it a street level coordinate it will return the city that contains the point rather than the street, or building, itself.

It will also truncate latitudes and longitudes to three decimal points.
 * 
 

 * @apiParam  {Number} lat The latitude whose valid range is -90 to 90. Anything more than 4 decimal places will be truncated.
 * @apiParam  {Number} lon The longitude whose valid range is -180 to 180. Anything more than 4 decimal places will be truncated.
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
  * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} error Forbidden The server understood the request but refuses to authorize it.
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 408) {String} error RequestTimeout the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client.
 * @apiError (Error 408) {Number} statusCode The status code
 * 
 * @apiError (Error 411) {String} error Length required the server refuses to accept the request without a defined Content-Length header.
 * @apiError (Error 411) {Number} statusCode The status code 
 * 
 * @apiError (Error 417) {String} error Expectation Failed the expectation given in the request's Expect header could not be met.
 * @apiError (Error 417) {Number} statusCode The status code
 * 
 * @apiError (Error 429) {String} error Too Many Requests he user has sent too many requests in a given amount of time ("rate limiting").
 * @apiError (Error 429) {Number} statusCode The status code
 * 
 *
 * @apiError (Error 500) {String} error Internal Server Error the server encountered an unexpected condition that prevented it from fulfilling the request.
 * @apiError (Error 500) {Number} statusCode The status code


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
 *@apiSuccessExample {json} Success-Response:
* {
*   "latitude": "37.76513627957266",
*   "longitude": "-122.42020770907402",
*   "accuracy": "16",
*   "total": "1",
*   "place": {
*      "placeId": "Y12JWsKbApmnSQpbQg",
*      "woeId": "23512048",
*      "latitude": "37.765",
*      "longitude": "-122.424",
*      "placeUrl": "/United+States/California/San+Francisco/Mission+Dolores",
*      "placeType": "neighbourhood",
*      "placeTypeId": "22",
*      "timezone": "America/Los_Angeles",
*      "name": "Mission Dolores, San Francisco, CA, US, United States"
*   }
* }
*
*
 * 
 */