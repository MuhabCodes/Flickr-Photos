/**
 * 
 * @api {GET} /people/get/info getInfo
 * @apiDescription Get information about a user
 * @apiGroup people
 * @apiVersion  1.0.0
 * 
 * @apiParam  {String} api_key Your API application key
 * @apiParam  {String} user_id userID you want to get information about
 * 
 * @apiSuccess (Success 200) {Object[]} userInfo of the user you want info about
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     property : value
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     property : value
 * }
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "photoNotFound",
 *        "status_code":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 * 
 */