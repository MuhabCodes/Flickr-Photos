/**
 * 
 * @api {GET} /people/uploadstatus getUploadStatus
 * 
 * @apiDescription Returns information for the calling user related to photo uploads.
 * @apiGroup people
 * @apiVersion  0.1.0
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} informationList information related to photo upload of the calling user
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccessExample {json} Success-Response:
 *  {
   "userId": "12037949754@N01",
   "isPro": "1",
   "username": "yousef123",
   "bandwidth": {
      "maxBytes": "2147483648",
      "maxKb": "2097152",
      "usedBytes": "383724",
      "usedKb": "374",
      "remainingBytes": "2147099924",
      "remainingKb": "2096777"
   },
   "filesize": {
      "maxBytes": "10485760",
      "maxKb": "10240"
   },
   "sets": {
      "created": "27",
      "remaining": "lots"
   },
   "videos": {
      "uploaded": "5",
      "remaining": "lots"
   }
}

 * @apiSuccessExample {json} Success-Response:
 *  {
   "userId": "12037949754@N01",
   "isPro": "0",
   "username": "yousef123",
   "bandwidth": {
      "maxBytes": "2147483648",
      "maxKb": "2097152",
      "usedBytes": "383724",
      "usedKb": "374",
      "remainingBytes": "2147099924",
      "remainingKb": "2096777"
   },
   "filesize": {
      "maxBytes": "10485760",
      "maxKb": "10240"
   },
   "sets": {
      "created": "27",
      "remaining": "lots"
   },
   "videos": {
      "uploaded": "5",
      "remaining": "0"
   }
}  
 * 
 * 
 * 
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code 
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