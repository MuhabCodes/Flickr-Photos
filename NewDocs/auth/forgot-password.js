/**
 * 
 * @api {PUT} /forgot-password sendResetPasswordMail
 * 
 * @apiGroup auth
 * @apiVersion  0.1.1
 * 
 * 
 * @apiParam  (Body) {String} email Email to send the mail to.
 * 
 * @apiSuccess (200) {Number} statusCode Indicates that the email is sent.
 * 
 * @apiError (Error 409) {String} error Indicates that the user is not activated.
 * @apiError (Error 409) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 */