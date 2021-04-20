/**
 * 
 * @api {get} /places/placesForBoundingBox placesForBoundingBox
 * 
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * @apiDescription Return all the locations of a matching place type for a bounding box.

The maximum allowable size of a bounding box (the distance between the SW and NE corners) is governed by the place type you are requesting. Allowable sizes are as follows:
neighbourhood: 3km (1.8mi)
locality: 7km (4.3mi)
county: 50km (31mi)
region: 200km (124mi)
country: 500km (310mi)
continent: 1500km (932mi)


 * 
 * @apiParam  {String} [placeTypeId] The numeric ID for a specific place type to cluster photos by.

Valid place type IDs are :

8: city
12: country
29: continent



 * @apiParam  {Number[]} [bbox] A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched. The 4 values represent the bottom-left corner of the box and the top-right corner, minimum_longitude, minimum_latitude, maximum_longitude, maximum_latitude.

 * @apiParam  {String} [placeType] A specific place type to cluster photos by.
(The "placeType" argument has been deprecated in favor of the "placeTypeId" argument. It won't go away but it will not be added to new methods. A complete list of place type IDs is available using the flickr.places.getPlaceTypes method. (While optional, you must pass either a valid place type or place type ID.)
)

Valid place types are :

city
country
continent

(While optional, you must pass either a valid place type or place type ID.)



 * @apiParam  {String} placeId A Flickr Places identifier to use to filter photo clusters. For example all the photos clustered by locality in the United States (Place ID 4KO02SibApitvSBieQ).


 * 

 * 
 * @apiSuccess (Success 200) {Object[]} locations all the locations of a matching place type for a bounding box.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *
 *  
* @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 408) {String} error RequestTimeout the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client.
 * @apiError (Error 408) {Number} statusCode The status code
 * 
 * @apiError (Error 411) {String} error Length required the server refuses to accept the request without a defined Content-Length header.
 * @apiError (Error 411) {Number} statusCode The status code 
 * 
 * @apiError (Error 417) {String} error Expectation Failed the expectation given in the request's Expect header could not be met.
 * @apiError (Error 417) {Number} statusCode The status code
 * 
 * @apiError (Error 429) {String} error Too Many Requests he user has sent too many requests in a given amount of time ("rate limiting").
 * @apiError (Error 429) {Number} statusCode The status code
 * 
 *
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code

 
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "placeTypeNotFound",
*        "statusCode":404
*     }
 
*@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }


*@apiSuccessExample {json} Success-Response:
*{
*   "total": "21",
*   "pages": "1",
*   "page": "1",
*   "bbox": "-122.42307100000001,37.773779,-122.381071,37.815779",
*   "place": [
*      {
*         "place_id": ".aaSwYSbApnq6seyGw",
*         "latitude": "37.788",
*         "longitude": "-122.412",
*         "place_url": "/United+States/California/San+Francisco/Downtown",
*         "place_type":"locality",
*         "text": "Downtown, San Francisco, CA, US, United States"
*      },
*      {
*         "place_id": "3KymK1GbCZ41eBVBxg",
*         "latitude": "37.776",
*         "longitude": "-122.417",
*         "place_url": "/United+States/California/San+Francisco/Civic+Center",
*         "place_type":"locality",
*         "text": "Civic Center, San Francisco, CA, US, United States"
*      },
*      {
*         "place_id": "9xdhxY.bAptvBjHo",
*         "latitude": "37.796",
*         "longitude": "-122.407",
*         "place_url": "/United+States/California/San+Francisco/Chinatown",
*         "place_type":"locality",
*         "text": "Chinatown, San Francisco, CA, US, United States"
*      }
*   ]
*}
* * 
* * 
* **  
 */