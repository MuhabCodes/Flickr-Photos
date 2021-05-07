/**
 * 
 * @api {GET} /places/:placeId/location/info getInfo
 * @apiDescription Get informations about a place.
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} placeId A Flickr Places ID.
 * 
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} informationList list of all information about a place 
 * @apiSuccessExample {json} Success-Response:
 *    {
   "placeId": "4hLQygSaBJ92",
   "latitude": "45.512",
   "longitude": "-73.554",
   "placeUrl": "/Canada/Quebec/Montreal",
   "placeType": "city",
   "timezone": "America/Toronto",
   "city": {
      "placeId": "cFBi9x6bCJ8D5rba1g",
      
      "latitude": "45.551",
      "longitude": "-73.600",
      "placeUrl": "/cFBi9x6bCJ8D5rba1g",
      "text": "Montréal"
   },
   
   "country": {
      "placeId": "EESRy8qbApgaeIkbsA",
      
      "latitude": "62.358",
      "longitude": "-96.582",
      "placeUrl": "/Canada",
      "text": "Canada"
   }
}

 * 
 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code.
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "placeNotFound",
 *        "statusCode":404
 *     }
  
 
 * 
 * 
 * 
 */