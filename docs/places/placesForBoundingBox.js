/**
 * 
 * @api {get} /places/placesForBoundingBox placesForBoundingBox
 * @apiName places
 * @apiGroup places
 * @apiVersion  1.0.0
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
22: neighbourhood
7: locality
8: region
12: country
29: continent



 * @apiParam  {String} [bbox] A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched. The 4 values represent the bottom-left corner of the box and the top-right corner, minimum_longitude, minimum_latitude, maximum_longitude, maximum_latitude.

 * @apiParam  {String} [placeType] A specific place type to cluster photos by.
(The "placeType" argument has been deprecated in favor of the "placeTypeId" argument. It won't go away but it will not be added to new methods. A complete list of place type IDs is available using the flickr.places.getPlaceTypes method. (While optional, you must pass either a valid place type or place type ID.)
)

Valid place types are :
neighbourhood (and neighborhood)
locality
region
country
continent

(While optional, you must pass either a valid place type or place type ID.)



 * @apiParam  {String} [placeId] A Flickr Places identifier to use to filter photo clusters. For example all the photos clustered by locality in the United States (Place ID 4KO02SibApitvSBieQ).

(While optional, you must pass either a valid Places ID or a WOE ID.)

 * 

 * 
 * @apiSuccess (Success 200) {Object[]} locations all the locations of a matching place type for a bounding box.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *
 *  
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
*@apiError (Error 400) {Number} statusCode The status code
 
 
*@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
*@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "statusCode":404
*     }
 
*@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }

 * 
 * 
 *  
 */