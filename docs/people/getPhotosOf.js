/**
 * 
 * @api {GET} /people/:userId/photosof getPhotosOf
 * @apiDescription Returns a list of photos containing a particular Flickr member.
 * @apiGroup people
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} userId ID of user you want find photos of
 * @apiParam  {String} [ownerId] ID of a Flickr member. This will restrict the list of photos to those taken by that member.
 * @apiParam  {String} [extras] A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: description, license, date_upload, date_taken, date_person_added, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o
 * @apiParam  {String} [perPage] Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
 * @apiParam  {String} [page] The page of results to return. If this argument is omitted, it defaults to 1.
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]}  userPhotos all photos containing the mentioned user
 * @apiSuccess (Success 200) {Number} statusCode The status code
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
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }

 * 
 * 
 */