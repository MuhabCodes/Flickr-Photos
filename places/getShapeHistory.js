/**
 * 
 * @api {GET} /places/:placeId/shape/history getShapeHistory
 * @apiDescription Return an historical list of all the shape data generated for a Places or Where on Earth (WOE) ID..
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * 
 * 
 * @apiParam  {String} placeId A Flickr Places ID.
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} historicalList list of all shape data for places  
 * 
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "placeNotFound",
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
 * 
 */