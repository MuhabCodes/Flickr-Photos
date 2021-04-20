/**
 * 
 * @api {GET} /places/:url/info getInfoByUrl
 * @apiDescription Lookup information about a place, by its flickr.com/places URL.
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} url A flickr.com/places URL in the form of /country/region/city. For example: /Canada/Quebec/Montreal
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccess (Success 200) {Object[]} informationList list of all information about a place by url
 * @apiSuccessExample {json} Success-Response:
 *    {
   "placeId": "4hLQygSaBJ92",
   
   "latitude": "45.512",
   "longitude": "-73.554",
   "placeUrl": "/Canada/Quebec/Montreal",
   "placeType": "city",
   
   
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
 * @apiError (Error 400) {String} error The format for the url isn't correct.
 * @apiError (Error 400) {Number} statusCode The status code.
 * 
 * @apiError (Error 404) {String} error place not found at our application
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