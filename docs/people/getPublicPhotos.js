/**
 * 
 * @api {GET} /people/:userId/photos/public getPublicPhotos
 * @apiName apiName
 * @apiGroup people
 * @apiDescription Get a list of public photos for the given user.
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} userId ID of user you want to get public photos for
 * @apiParam  {String} [safeSearch] Safe search setting:
1 for safe.
2 for moderate.
3 for restricted.


 * @apiParam  {String} [extras] A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: description, license, dateUpload, dateTaken, ownerName, iconServer, originalFormat, lastUpdate, geo, tags, machineTags, oDims, views, media, pathAlias, urlSq, urlT, urlS, urlQ, urlM, urlN, urlZ, urlC, urlL, urlO
 * @apiParam  {String} [perPage] Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
 * @apiParam  {String} [page] The page of results to return. If this argument is omitted, it defaults to 1.
 * 
 * 
 * @apiSuccess (Success 200) {Object[]}  userPhotos all public photos of the mentioned user 
 * @apiSuccess (Success 200) {Number} statusCode The status code
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
 *       "error": "photoOrUserNotFound",
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