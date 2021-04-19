/**
 * 
 * @api {GET} /places/photos/children/public getChildrenWithPhotosPublic
 * @apiDescription Return a list of locations with public photos that are parented by a Where on Earth (WOE) or Places ID.
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} [placeId] A Flickr Places ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
 * @apiParam  {String} [woeId] A Where On Earth (WOE) ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} locationsList list of all locations with public photos 
 * 
  * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} Forbidden The server understood the request but refuses to authorize it.
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * 
 *
 * 
 * @apiError (Error 408) {String} Request Timeout; the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client.
 * @apiError (Error 408) {Number} statusCode The status code
 * 
 * @apiError (Error 417) {String} Expectation Failed ; the expectation given in the request's Expect header could not be met.
 * @apiError (Error 417) {Number} statusCode The status code
 * 
 * @apiError (Error 429) {String} Too Many Requests ; he user has sent too many requests in a given amount of time ("rate limiting").
 * @apiError (Error 429) {Number} statusCode The status code
 * 
 * @apiError (Error 411) {String} Length required ; the server refuses to accept the request without a defined Content-Length header.
 * @apiError (Error 411) {Number} statusCode The status code 
 *
 * @apiError (Error 500) {String} Internal Server Error ;the server encountered an unexpected condition that prevented it from fulfilling the request.
 * @apiError (Error 500) {Number} statusCode The status code
 
 * 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "photoNotFound",
 *        "status_code":404
 *     }
 * 
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 * 
 * 
 * 
 * 
  *@apiSuccessExample {json} Success-Response:
 *{
 *  "total": "79",
 *  "place": [
 *     {
 *        "placeId": "HznQfdKbB58biy8sdA",
 *        "woeId": "26332794",
 *        "latitude": "45.498",
 *        "longitude": "-73.575",
 *        "placeUrl": "/Canada/Quebec/Montreal  /Montreal+Golden+Square+Mile",
 *        "placeType": "neighbourhood",
 *        "photoCount": "2717",
 *        "#text": "Montreal Golden Square Mile, Montreal, QC, CA, Canada"
 *     },
 *     {
 *        "placeId": "K1rYWmGbB59rwn7lOA",
 *        "woeId": "26332799",
 *        "latitude": "45.502",
 *        "longitude": "-73.578",
 *        "placeUrl": "/Canada/Quebec/Montreal/Downtown+Montr%C3%A9al",
 *        "placeType": "neighbourhood",
 *        "photoCount": "2317",
 *        "#text": "Downtown Montréal, Montreal, QC, CA, Canada"
 *     }
 *  ]
 *}
 * 
 * 
 * 
 */