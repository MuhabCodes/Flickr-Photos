/**
 * 
 * @api {POST} /photos/geo/batchCorrectLocation/lat/:lat/lon/:lon/accuracy/:accuracy batchCorrectLocation
 * 
 * @apiGroup photos-geo
 * @apiVersion  0.1.0
 * 
 * @apiDescription Correct the places hierarchy for all the photos for a user at a given latitude, longitude and accuracy.

Batch corrections are processed in a delayed queue so it may take a few minutes before the changes are reflected in a user's photos.
 * 
 * @apiParam  {Number} lat The latitude of the photos to be update whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.
 * @apiParam  {Number} lon The longitude of the photos to be updated whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.
 * @apiParam  {String} accuracy Recorded accuracy level of the photos to be updated. World level is 1, Country is ~3, Region ~6, City ~11, Street ~16. Current range is 1-16. Defaults to 16 if not specified.
 * @apiParam  {String} placeId A Flickr Places ID.  (While optional, you must pass either a valid Places ID or a WOE ID.)
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
  * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
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
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
* 
 *@apiErrorExample {json} Error-404
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "wrongLatitudeOrLatitde",
 *        "statusCode":404
 *     }
 * 
 *@apiErrorExample {json} Error-401
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * 
 *@apiSuccessExample {json} Success-Response:
 *This method has no specific response - It returns an empty success response if it completes without error. 
 * 
 */