/**
 * 
<<<<<<< HEAD
 * @api {PUT} /auth/forgot-password/:resetToken sendResetPasswordMail
=======
 * @api {PUT} /forgot-password/:resetToken resetPassword
>>>>>>> BE_master_noTests
 * 
 * @apiGroup auth
 * @apiVersion  0.1.1
 * 
 * 
 * @apiParam {String} resetToken Token sent to the email by the backend, return to identify user
 * @apiParam (body) {String} newPassword The new password that will be set
 * 
 * @apiSuccess (Success 201) {Number} statusCode Indicates that the password has been changed.
 * 
 * @apiError (Error 400) {String} error The reset token is invalid.
 * @apiError (Error 400) {Number} statusCode The status code
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
 */