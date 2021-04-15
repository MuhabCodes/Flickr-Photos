/**
 * 
 * @api {GET} /people/:user_id/photos getPhotos
 * @apiDescription Return photos from the given user's photostream. Only photos visible to the calling user will be returned
 * @apiGroup people
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} user_id ID of user whose photos will be returned
 * @apiParam  {String} [safe_search] safe search setting 1 for safe, 2 for moderate, 3 for restricted
 * @apiParam  {String} [min_upload_date] Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date should be in the form of a unix timestamp.
 * @apiParam  {String} [max_upload_date] Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date should be in the form of a unix timestamp.
 * @apiParam  {String} [min_taken_date] Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date should be in the form of a mysql datetime
 * @apiParam  {String} [max_taken_date] Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date should be in the form of a mysql datetime.
 * @apiParam  {String} [content_type] Content Type setting:
1 for photos only.
2 for screenshots only.
3 for 'other' only.
4 for photos and screenshots.
5 for screenshots and 'other'.
6 for photos and 'other'.
7 for photos, screenshots, and 'other' (all).

 *@apiParam  {String} [privacy_filter] Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:
1 public photos
2 private photos visible to friends
3 private photos visible to family
4 private photos visible to friends & family
5 completely private photos


 * @apiParam  {String} [extras] A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o
 * 
 * @apiParam  {String} [per_page] Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
 * @apiParam  {String} [page] The page of results to return. If this argument is omitted, it defaults to 1.
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]}  userPhotos all photos of user mentioned
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "photoNotFound",
 *        "status_code":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 * 
 * 
 */