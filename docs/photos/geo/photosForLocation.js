/**
 * 
 * @api {GET} /photos/geo/photosForLocation/lat/:lat/lon/:lon photosForLocation
 * 
 * @apiGroup photos-geo
 * @apiVersion  0.1.0
 * @apiDescription Return a list of photos for the calling user at a specific latitude, longitude and accuracy
 * 
 * 
 * 
 * @apiParam  {Number} lat The latitude whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.
 * @apiParam  {Number} lon The longitude whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.
 * @apiParam  {String} [accuracy] Recorded accuracy level of the location information. World level is 1, Country is ~3, Region ~6, City ~11, Street ~16. Current range is 1-16. Defaults to 16 if not specified.
 * @apiParam  {String} [extras] A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o
 * @apiParam  {String} [perPage] Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
 * @apiParam  {String} [page] The page of results to return. If this argument is omitted, it defaults to 1. 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} photos a list of photos for the calling user at a specific latitude, longitude and accuracy
 * 
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
 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "wrongLatitudeOrLatitde",
*        "statusCode":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }
*

*@apiSuccessExample {json} Success-Response:
*{
*   "page": "2",
*   "pages": "89",
*   "perPage": "10",
*   "total": "881",
*   "photo": [
*      {
*         "id": "2636",
*         "owner": "47058503995@N01",
*         "secret": "a123456",
*         "server": "2",
*         "title": "test_04",
*         "isPublic": "1",
*         "isFriend": "0",
*         "isFamily": "0"
*      },
*      {
*         "id": "2635",
*         "owner": "47058503995@N01",
*         "secret": "b123456",
*         "server": "2",
*         "title": "test_03",
*         "isPublic": "0",
*         "isFriend": "1",
*         "isFamily": "1"
*      }
*    ]
*}

 * 
 * 
 */
//TODO : query params in url