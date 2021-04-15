/**
 * 
 * @api {GET} /places/shape/history getShapeHistory
 * @apiDescription Return an historical list of all the shape data generated for a Places or Where on Earth (WOE) ID..
 * @apiGroup places
 * @apiVersion  1.0.0
 * 
 * 
 * 
 * @apiParam  {String} [placeId] A Flickr Places ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
 * @apiParam  {String} [woeId] A Where On Earth (WOE) ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} historicalList list of all shape data for places  
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "placeNotFound",
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
 * 
 */