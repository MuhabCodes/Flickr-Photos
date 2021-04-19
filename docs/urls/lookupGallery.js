/**
 * 
 * @api {get} /urls/gallery/:url lookupGallery
 * 
 * @apiGroup urls
 * @apiVersion  0.1.0
 * 
 * @apiDescription Returns gallery info, by url.
 * 
 * @apiParam  {String} url The gallery's URL.
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object} galleryInfo gallery info by url.
 * @apiSuccess (Success 200) {Number} statusCode The status code
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
 * @apiError (Error 403) {String} Forbidden The server understood the request but refuses to authorize it.
 * @apiError (Error 403) {Number} statusCode The status code
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
 
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "urlNotFound",
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
 * 
 * 
 * 
 * 
 *@apiSuccessExample {json} Success-Response:
 *{
  * "id": "6065-72157617483228192",
  * "url": "/photos/straup/galleries/72157617483228192",
  * "owner": "35034348999@N01",
  * "primaryPhotoId": "292882708",
  * "dateCreate": "1241028772",
  * "dateUpdate": "1270111667",
  * "countPhotos": "17",
  * "countVideos": "0",
  * "server": "112",
  * "farm": "1",
  * "secret": "7f29861bc4",
  * "title": "Cat Pictures I've Sent To Kevin Collins",
  * "description": []
 *}
 * 
 * 
 */