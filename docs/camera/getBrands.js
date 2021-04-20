/**
 * 
 * @api {GET} /cameras/brands getBrands
 * @apiDescription Returns all the brands of cameras that Flickr knows about.
 * @apiGroup cameras
 * @apiVersion  0.1.0
 * 
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} cameraBrands all brands of cameras that flicker knows
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccessExample {json} Success-Response:
 *    {
   "brands": [
      {
         "id": "canon",
         "text": "Canon"
      },
      {
         "id": "nikon",
         "text": "Nikon"
      },
      {
         "id": "apple",
         "text": "Apple"
      }
   ]
}
 * 
 *  
 * 
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 500 server couldn't handle
 *     {
 *       "error": "serverCouldn'tHandle",
 *        "statusCode":500
 *     }
 * 
 * 
 */