/**
 * 
 * @api {GET} /tags/:tag/:clusterId/photos getClusterPhotos
 * @apiDescription Returns the first 24 photos for a given tag cluster
 * @apiGroup tags
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} tag The tag that this cluster belongs to
 * @apiParam  {String} clusterId The top three tags for the cluste
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} photoTag list of first 24 photos of the given tag cluster
 * 
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "tagOrClusterNotFound",
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * 
 */