/**
 * 
 * @api {GET} /tags/:tag/:clusterId/photos getClusterPhotos
 * @apiDescription Returns the first 24 photos for a given tag cluster
 * @apiGroup tags
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} tag The tag that this cluster belongs to
 * @apiParam  {String} clusterId The top three tags for the cluste
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} photoTag list of first 24 photos of the given tag cluster
 * @apiSuccessExample {json} Success-Response:
 *    no response
 * 
 * 
 
 * @apiError (Error 404) {String} error tag not found at our application
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "tagrPhotoNotFound",
 *        "statusCode":404
 *     }
  
 *
 * 
 */