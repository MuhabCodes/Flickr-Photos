/**
 * 
 * @api {POST} /cameras/ addCamera
 * @apiName apiName
 * @apiDescription add Camera to a brand
 * @apiGroup cameras
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam (Body) {String} name name of the model you want to add
 * @apiParam (Body) {String} brandName name of brand you want to add model to
 * 
 *@apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiParamExample  {JSON} Request-Example:
 * {
 *   "name": "D500",
 *   "brandName": "Nikon"
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 *
 *    {
    "_id": "60b8a14e48e17070a48a8d37",
    "name": "D500",
    "brandName": "Nikon",
   
}

 * @apiError (Error 403) {String} error The client does not have access rights to the content;
 * @apiError (Error 404)  {Number} statusCode The status code.
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * 
 * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Not Authorized
 *     {
 *       "message": 'There is already a model with this name',
 *        "statusCode":403
 *     }
 * 
 * 
 */
