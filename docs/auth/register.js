/**
 * 
 * @api {POST} /auth/register register
 * @apiGroup auth
 * @apiVersion  0.1.0
 * 
 * @apiDescription This request sends an email to the email supplied to validate it and if validated a user is created.
 * 
 * @apiParam  (Body) {String} firstName First name of person
 * @apiParam  (Body) {String} lastName Last name of person
 * @apiParam  (Body) {Number} age Age of person
 * @apiParam  (Body) {String} firstName First name of person
 * @apiParam  (Body) {String} email Email address of the person
 * @apiParam  (Body) {String} password Password of the new account
 * 
 * 
 * @apiSuccess (Success 201) {Number} statusCode Indicates that an email is sent to the user and awaiting confirmation.
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 401) {String} error The email or password entered were not correct.
 * @apiError (Error 401) {Number} statusCode The status code
 * 
 * @apiError (Error 403) {String} error This client hasn\'t activated their account.
 * @apiError (Error 403) {Number} statusCode The status code
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * 
 * 
 * 
 */