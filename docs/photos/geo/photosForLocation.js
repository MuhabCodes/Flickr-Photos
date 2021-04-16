/**
 * 
 * @api {GET} /photos/geo/photosForLocation/lat/:lat/lon/:lon photosForLocation
 * @apiName photos
 * @apiGroup photos.geo
 * @apiVersion  1.0.0
 * @apiDescription Return a list of photos for the calling user at a specific latitude, longitude and accuracy
 * 
 * 
 * 
 * @apiParam  {String} lat The latitude whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.
 * @apiParam  {String} lon The longitude whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.
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
 
 
@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
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




 * 
 * 
 */
//TODO : query params in url