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
 * 
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * 
 * 
 * 
 */