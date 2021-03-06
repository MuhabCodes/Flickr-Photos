/**
 * 
 * @api {POST} /auth/confirmation/:confirmationToken confirmEmailAddress
 * @apiGroup auth   
 * @apiVersion  0.1.1
 * 
 * 
 * @apiParam  {String} confirmationToken A token that identifies the user that wants to confirm his account
 * 
 * @apiSuccess (Success 201) {Number} statusCode Indicates that the account is now activated.
 * 
 * @apiError (Error 400) {String} error The token passed in the url is invalid.
 * @apiError (Error 400) {Number} statusCode The status code
 * 
 * @apiError (Error 409) {String} error The request could not be completed due to a conflict with the current state of the resource.
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