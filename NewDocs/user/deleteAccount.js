/**
 * 
 * @api {PUT} /user/delete-account deleteAccount
 * @apiGroup user   
 * @apiVersion  0.1.1
 * 
 * 
 * 
 * @apiSuccess (Success 201) {Number} statusCode Indicates that the account is now activated.
 * 
 * @apiError (Error 401) {String} error The token passed is incorrect
 * @apiError (Error 401) {Number} statusCode The status code.
 * 
 * @apiError (Error 404) {String} error The user is not found.
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * 
 * @apiSuccessExample {json} Success-Response:
 *{
 *  "statusCode": 201
 * }
 * 
 */