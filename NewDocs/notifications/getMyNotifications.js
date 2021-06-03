/**
 *
 * @api {GET} /myNotifications getMyNotifications
 * @apiDescription Get the Notifications of certain user
 * @apiGroup notifications
 * @apiVersion  0.1.0
 *
 *
 * @apiHeader  {String} authorization authorization Value
 *
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} myNotificationsarray array of notifications.
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 *
*
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 Created
 * {
 *      "statusCode":200,
 * "myNotificationsarray": [{
 *  "act":"like",
 *  "id" : "2312",
 *  "imageUrl": ""https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"",
 *  "notificationDate": "Wed Jun 02 2021 23:16:58 GMT+0200 (Eastern Euro...",
 *  "photoId":"5d6ede6a0ba62570afcedd3d",
 *  "reciever": "111111111111111111111111",
 *  "recieverName": "Ehab",
 *  "sender": "6092ea68326fa5101115dfb0",
 *   },
 * {
 *  "act":"comment",
 *  "id" : "sdas",
 *  "imageUrl": ""https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"",
 *  "notificationDate": "Wed Jun 02 2021 23:16:58 GMT+0200 (Eastern Euro...",
 *  "photoId":"5d6ede6a0ba62570afcedd3d",
 *  "reciever": "111111111111111111111111",
 *  "recieverName": "Ahmed",
 *  "sender": "6092ea68326fa5101115dfb0",
 *   }
 *  ]
 * }
 *  *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Invalid userId",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * @apiErrorExample {json} Error-403:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "Forbidden User",
 *        "statusCode":403
 *     }
 *
 *   @apiErrorExample {json} Error-500:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "InternalServerError",
 *        "statusCode":500
 *     }
 *
 *
 *
 */