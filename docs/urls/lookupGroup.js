/**
 * 
 * @api {get} /urls/lookupGroup/isPublic/:isPublic/isContact/:isContact/isFriend/:isFriend/isFamily/:isFamily/photoId/:photoId lookupGroup
 * @apiName urls
 * @apiGroup urls
 * @apiVersion  1.0.0
 * 
 * @apiDescription Returns a group NSID, given the url to a group's page or photo pool.
 * 
 * @apiParam  {Boolean} isPublic 1 to set viewing permissions for the photo's location data to public, 0 to set it to private.
 * @apiParam  {Boolean} isContact 1 to set viewing permissions for the photo's location data to contacts, 0 to set it to private.
 * @apiParam  {Boolean} isFriend 1 to set viewing permissions for the photo's location data to friends, 0 to set it to private.
 * @apiParam  {Boolean} isFamily 1 to set viewing permissions for the photo's location data to family, 0 to set it to private.
 * @apiParam  {String} photoId The id of the photo to get permissions for.
 *  
 * 
 * @apiSuccess (Success 200) {Object} a group NSID
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "status_code":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "status_code":401
*     }
 

 * 
 * 

 * 
 * 
 */