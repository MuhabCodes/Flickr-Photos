/**
 * 
 * @api {POST} /login login
 * @apiGroup auth
 * @apiVersion  0.1.1
 * 
 * @apiDescription logs a user in returning a token to be used for authorization purposes. The token is sent in an http cookie.
 * 
 * @apiParam  {String} email The email the user uses to login.
 * @apiParam  {String} password The password that corresponds to the email.
 * 
 * @apiSuccess (Success 200) {Number} statusCode Indicates the success of the operation.
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code.
 * 
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code.
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code.
 *
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * 
 * 
 */