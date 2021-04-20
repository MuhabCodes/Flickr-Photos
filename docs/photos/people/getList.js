/**
 * 
 * @api {GET} /photos/:photoId/people getPeopleList
 * @apiGroup photos-people
 * @apiVersion  0.1.0
 * 
 * @apiDescription Get a list of people in a given photo.
 * 
 *  
 * @apiParam  {String} photoId The id of the photo.
 * 
 * @apiSuccess (Success 200) {Object[]} people Total number of people in the photo and information about them.
 * @apiSuccess (Success 200) {Number} statusCode The status code.
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} error The user doesn't have permission to do this action
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiError (Error 500) {String} error The server The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
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
 * @apiSuccessExample {json} Success-200:
 *    {
 *      "total": 1,
 *      "people": [
 *                  {"id": "1253153dw","addedBy": "1efgg1@f324$","username": "eddard_winterfell", "realName": "Ned Stark", "x": 50, "y": 250, "w": 100, "h": 300}
 *                  ]
 *      
 *      
 *    }
 */