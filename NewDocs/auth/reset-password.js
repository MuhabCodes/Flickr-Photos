/**
 * 
 * @api {PUT} /auth/forgot-password/:resetToken resetPassword
 * 
 * @apiGroup auth
 * @apiVersion  0.1.1
 * 
 * @apiDescription When the user clicks on the link in his email, A request is sent to this url (newPassword in body of that request), The password is then changed to the new password
 * 
 * @apiParam {String} resetToken Token sent to the email by the backend, return to identify user.
 * 
 * @apiParam (Body) {String} newPassword The new password that'll replace the old one.
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