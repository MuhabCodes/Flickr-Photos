/**
 * 
 * @api {POST}  /photos/:photoId/geo/location/lat/:lat/lon/:lon setLocation
 * 
 * @apiGroup photos-geo
 * @apiVersion  0.1.0
 * @apiDescription Sets the geo data (latitude and longitude and, optionally, the accuracy level) for a photo. Before users may assign location data to a photo they must define who, by default, may view that information.
 * @apiDescription Users can edit this preference at http://www.flickr.com/account/geo/privacy/. If a user has not set this preference, the API method will return an error.
 * 
 * 
 * 
 * 
 * @apiParam  {String} photoId The id of the photo to set location data for.
 * @apiParam  {Number} lat The latitude whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.
 * @apiParam  {Number} lon The longitude whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.
 * @apiParam  {String} [accuracy] Recorded accuracy level of the location information. World level is 1, Country is ~3, Region ~6, City ~11, Street ~16. Current range is 1-16. Defaults to 16 if not specified.
 * @apiParam  {String} [context] Context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to indicate that a photo was taken "indoors" or "outdoors".

The current list of context IDs is :

0, not defined.
1, indoors.
2, outdoors.

The default context for geotagged photos is 0, or "not defined"
 *  
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
 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "statusCode":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }


*@apiSuccessExample {json} Success-Response:
*This method has no specific response - It returns an empty success response if it completes without error.
 * 
 */
