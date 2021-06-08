/**
 * 
 * @api {POST} /auth/login login
 * @apiGroup auth
 * @apiVersion  0.1.0
 * 
 * @apiDescription logs a user in returning a token to be used for authorization purposes.
 * 
 * @apiParam  (Body) {String} email The email the user uses to login.
 * @apiParam  (Body) {String} password The password that corresponds to the email.
 * 
 * @apiSuccess (Success 201) {String} accessToken Token that is used for authentication and authorization of opertaions throughout Flickr
 * @apiSuccess (Success 201) {Number} statusCode Indicates the success of the operation.
 * 
 * 
 * @apiError (Error 401) {String} error The email or password entered were not correct.
 * @apiError (Error 401) {Number} statusCode The status code
 * 
 * @apiError (Error 403) {String} error This client hasn't activated their account.
 * @apiError (Error 403) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * 
 *@apiSuccessExample {json} Success-Response:
 *{
 *  "statusCode": 201,
 *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGI2YTYxZTE3MTMwNDQ4MTQwNTg4ZDkiLCJpYXQiOjE2MjI2NjYxNjR9.nYV8D9TK4U-nf5FBAi_XCdUT6hNK9z2ce3AC-yBDT3A"
 * }
 */