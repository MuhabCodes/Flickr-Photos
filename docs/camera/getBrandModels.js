/**
 * 
 * @api {GET} /cameras/:brand/models getBrandModels
 * @apiDescription Retrieve all the models for a given camera brand.
 * @apiGroup cameras
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} brand brand of the camera
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} cameraModels all models of the passed camera brand
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccessExample {json} Success-Response:
 *   {
   "cameras": {
      "brand": "apple",
      "camera": {
         "cameraId": "iphone_9000",
         "name": "iPhone 9000",
         "details": {
            "megaPixels": "22.0",
            "zoom": "3.0",
            "lcdSize": "40.5",
            "storageType": "Flash"
         }
         
         
      }
   }
}
 * 
 * 
 *  
 * 
 * 
 * 
 * @apiError (Error 404) {String} error brand not found at our application
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "brandNotFound",
 *        "statusCode":404
 *     }
  

 * 
 */