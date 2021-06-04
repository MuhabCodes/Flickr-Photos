/**
 * 
 * @api {PUT} /change-password changePassword
 * 
 * @apiGroup auth
 * @apiVersion  0.1.1
 * 
 * 
 * @apiParam (Body) {String} oldPassword The old password of the account.
 * @apiParam (Body) {String} newPassword The new password that will be set.
 * 
 * @apiSuccess (Success 201) {Number} statusCode Indicates that the password has been changed.
 * 
 * 
 * 
 * @apiError (Error 404) {String} error Indicates that the user is not found.
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * @apiError (Error 422) {String} error The old password is incorrect.
 * @apiError (Error 422) {Number} statusCode The status code
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * 
 * @apiSuccessExample {json} Success-Response:
 *{
 *  "statusCode": 201
 * }
 */