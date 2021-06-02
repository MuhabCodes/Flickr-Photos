/**
 * 
 * @api {POST} /auth/resend-confirmation resendConfirmation
 * @apiGroup auth
 * @apiVersion  0.1.1
 * 
 * 
 * @apiParam  (Body) {String} email Email to send confirmation link on.
 * 
 * @apiSuccess (201) {Number} statusCode Indicates the success of the operation.
 * 
 * 
 * 
 * @apiError (Error 409) {String} error Indicates that the user is already activated.
 * @apiError (Error 409) {Number} statusCode The status code
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