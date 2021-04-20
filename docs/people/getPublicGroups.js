/**
 * 
 * @api {GET} /people/:userId/groups/public getPublicGroups
 * @apiDescription Returns the list of public groups a user is a member of.
 * 
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} userId ID of user you want to get groups for
 * @apiParam  {Boolean} [isInvitationOnly] Include public groups that require an invitation or administrator approval to join.
 * 
 * @apiSuccess (Success 200) {Object[]}  userGroups all groups mentioned user is a member of
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccessExample {json} Success-Response:
 *   "groups:" [
   {
      "groupId": "34427469792@N01",
      "name": "FlickrCentral",
      "admin": "0",
      "eighteenPlus": "0",
      "invitationOnly": "0"
   },
   {
      "groupId": "37114057624@N01",
      "name": "Cal's Test Group",
      "admin": "1",
      "eighteenPlus": "0",
      "invitationOnly": "1"
   },
   {
      "groupId": "34955637532@N01",
      "name": "18+ Group",
      "admin": "1",
      "eighteenPlus": "1",
      "invitationOnly": "0"
   }
]
 * 
 * 
 * 
 * 
 * @apiError (Error 404) {String} error user not found at our application
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code

 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "groupNotFound",
 *        "statusCode":404
 *     }
  
 

 * 
 */