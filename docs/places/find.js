/**
 * 
 * @api {get} /places/query/:query find
 * 
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * 
 * @apiDescription Return a list of place IDs for a query string.

The flickr.places.find method is not a geocoder. It will round up to the nearest place type to which place IDs apply. For example, if you pass it a street level address it will return the city that contains the address rather than the street, or building, itself.
 * 
 * 
 * @apiParam  {String} query The query string to use for place ID lookups
 * 
 * @apiSuccess (Success 200) {Object[]} placeIds Return a list of place IDs
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
*       "error": "invalidQuery",
*        "statusCode":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }
*
*
**
* *@apiSuccessExample {json} Success-Response:
 *{
 *  "query": "Alabama",
 *  "total": "3",
 *  "place": [
 *     {
 *        "placeId": "VrrjuESbApjeFS4.",
 *        "woeId": "2347559",
 *        "latitude": "32.614",
 *        "longitude": "-86.680",
 *        "placeUrl": "/United+States/Alabama",
 *        "placeType": "region",
 *        "#text": "Alabama, Alabama, United States"
 *     },
 *     {
 *        "placeID": "cGHuc0mbApmzEHoP",
 *        "woeId": "2352520",
 *        "latitude": "43.096",
 *        "longitude": "-78.389",
 *        "placeUrl": "/United+States/New+York/Alabama",
 *        "placeType": "locality",
 *        "#text": "Alabama, New York, United States"
 *     },
 *     {
 *        "placeID": "o4yVPEqYBJvFMP8Q",
 *        "woeId": "1579389",
 *        "latitude": "-26.866",
 *         "longitude": "26.583",
 *         "placeUrl": "/South+Africa/North+West/Alabama",
 *         "placeType": "locality",
 *         "#text": "Alabama, North West, South Africa" 
 *      }
 *   ]
 *}
*
*
*
*/