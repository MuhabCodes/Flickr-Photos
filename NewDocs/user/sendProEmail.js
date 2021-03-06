/**
 * 
 * @api {PUT} /user/pro sendProEMail
 * 
 * @apiGroup user
 * @apiVersion  0.1.1
 * 
 * 
 * 
 * @apiSuccess (Success 201) {Number} statusCode Indicates that the email is sent.
 * 
 * @apiError (Error 401) {String} error The user passing the token is unauthorized to do this action (Not logged in).
 * @apiError (Error 401) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 409) {String} error Indicates that the user is not activated.
 * @apiError (Error 409) {Number} statusCode The status code
 * 
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