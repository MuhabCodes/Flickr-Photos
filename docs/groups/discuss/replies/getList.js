/**
 * ass_dds
 * @api {GET} /groups/:groupId/discuss/:topicId/replies  getList
 *
 * @apiGroup groups-discuss-replies
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} groupId Pass in the group id to where the topic belongs. Can be NSID or group alias. Making this parameter optional for legacy reasons, but it is highly recommended to pass this in to get faster performance.
 * @apiParam  {String} topicId The ID of the topic to post a comment to.
 * @apiParam  {String} [perPage]  Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
 * @apiParam  {String} [page] The page of results to return. If this argument is omitted, it defaults to 1.
 * @apiDescription Get a list of replies from a group discussion topic.
 *
 * @apiSuccess (Success 200) {Object[]} repliesList list of replies from a group discussion topic.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * 
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * 
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code.
 *  
 * @apiErrorExample {json} Error-404
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "discussionNotFound",
 *        "statusCode":404
 *     }
 * @apiErrorExample {json} Error-401
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 *@apiSuccessExample {json} Success-Response:
 *    {
   "stat": "ok",
   "replies": {
      "topic": {
         "topicId": "72157625038324579",
         "subject": "A long time ago in a galaxy far, far away...",
         "groupId": "46744914@N00",
         "iconsServer": "1",
         "iconFarm": "1",
         "name": "Tell a story in 5 frames (Visual story telling)",
         "authorId": "53930889@N04",
         "authorName": "Smallportfolio_jm08",
         "role": "member",
         "authorIconServer": "5169",
         "authorIconFarm": "6",
         "canEdit": "0",
         "canDelete": "0",
         "canReply": "0",
         "isSticky": "0",
         "isLocked": "",
         "dateCreate": "1287070965",
         "dateLastPost": "1336905518",
         "total": "8",
         "page": "1",
         "perPage": "3",
         "pages": "2",
         "message": "*LOL* The universe is full of Happiness"
      },
      "reply": [
         {
            "replyId": "72157625163054214",
            "author": "41380738@N05",
            "authorName": "BlueRidgeKitties",
            "role": "member",
            "iconServer": "2459",
            "iconFarm": "3",
            "canEdit": "0",
            "canDelete": "0",
            "dateCreate": "1287071539",
            "lastEdit": "0",
            "message": " it seems I Love it."
         },
         {
            "replyId": "72157625163539300",
            "author": "52101018@N00",
            "authorName": "pterandon",
            "role": "admin",
            "iconServer": "1",
            "iconFarm": "1",
            "canEdit": "0",
            "canDelete": "0",
            "dateCreate": "1287076748",
            "lastEdit": "0",
            "message": "Great work. Good focus on different aspects of scene in each frame.  Funny ending-- even better that I didn't notice the cat right away!  Being a hopeless Trekkie, I was wondering why Han was doing the Vulcan death grip on one of his allies...."
         },
         {
            "replyId": "72157625040116805",
            "author": "54830408@N02",
            "authorName": "tay.grisham",
            "role": "member",
            "iconServer": "0",
            "iconFarm": "0",
            "canEdit": "0",
            "canDelete": "0",
            "dateCreate": "1287089858",
            "lastEdit": "0",
            "message": "On a scale of 1 to 10 of awesome. This is a 15"
         }
      ]
   }
}
 * 
 *
 * 
 * 
 *
 * 
 * 
 */