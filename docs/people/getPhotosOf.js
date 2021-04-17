/**
 * 
 * @api {GET} /people/:userId/photosof getPhotosOf
 * @apiDescription Returns a list of photos containing a particular Flickr member.
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} userId ID of user you want find photos of
 * @apiParam  {String} [ownerId] ID of a Flickr member. This will restrict the list of photos to those taken by that member.
 * @apiParam  {String} [extras] A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: description, license, dateUpload, dateTaken, datePersonAdded, ownerName, iconServer, originalFormat, lastUpdate, geo, tags, machineTags, oDims, views, media, pathAlias, urlSq, urlT, urlS, urlQ, urlM, urlN, urlZ, urlC, urlL, urlO
 * @apiParam  {String} [perPage=100] Number of photos to return per page. The maximum allowed value is 500.
 * @apiParam  {String} [page=1] The page of results to return.
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