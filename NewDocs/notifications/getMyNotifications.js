/**
 * 
 * @api {GET} /notifications/myNotifications getMyNotifications
 * @apiDescription Return notifications of calling user
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * @apiHeader  {String} authorization Authorization value.
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object} myNotificationsarray array containing notifications
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
    "statusCode": 200,
    "myNotificationsarray": [
        {
            "act": "like",
            "id": "60b5ac427ddd5c6a8c79baf9",
            "notificationDate": "Tue Dec 01 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
            "photoId": "7092ea68326fa5101115dfee",
            "reciever": "6092ea68326fa5101115dfb0"
        }
    ]
}
 *  
 * 
 * 
 * 
 * 
 * 
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code.
 
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "userNotFound",
 *        "statusCode":404
 *     }
  
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * 
 * 
 */