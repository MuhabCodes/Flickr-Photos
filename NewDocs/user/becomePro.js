/**
 * 
 * @api {PUT} /user/pro/:proToken becomePro
 * @apiGroup user   
 * @apiVersion  0.1.1
 * 
 * 
 * @apiParam  {String} proToken A token that identifies the user that wants to become pro
 * 
 * @apiSuccess (201) {Number} statusCode Indicates that the account is now activated.
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