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
 {
    "cameraModels": [
        {
            "_id": "1292ea18321fa5121115dfad",
            "name": "Nikon 500s",
            "brandName": "Nikon",
            "__v": 0
        },
        {
            "_id": "60b88dd3763d145d0877b9ce",
            "name": "D850",
            "brandName": "Nikon",
            "__v": 0
        },
        {
            "_id": "60b88dd3763d145d0877b9cf",
            "name": "D500",
            "brandName": "Nikon",
            "__v": 0
        }
       
    ],
    "noOfModels": 3
}
 * 
 * 
 *  
 * 
 * 
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
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
