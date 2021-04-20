/**
 * 
 * @api {POST} /auth/signUp signUp
 * @apiGroup auth
 * @apiVersion  0.1.0
 * 
 * @apiDescription This request sends an email to the email supplied to validate it and if validated a user is created.
 * 
 * @apiParam  {String} firstName First name of person
 * @apiParam  {String} lastName Last name of person
 * @apiParam  {Number} age Age of person
 * @apiParam  {String} firstName First name of person
 * @apiParam  {String} email Email address of the person
 * @apiParam  {String} password Password of the new account
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode Indicates the success of the operation.
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 409) {String} error The email you are trying to use is already registered
 * @apiError (Error 409) {Number} statusCode The status code
 * 
 * @apiError (Error 422) {String} error The request was well-formed but was unable to be followed due to semantic errors like invalid password or age ..etc.
 * @apiError (Error 422) {Number} statusCode The status code
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * 
 * 
 * 
 */