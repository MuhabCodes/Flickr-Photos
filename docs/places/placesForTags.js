/**
 * 
 * @api {get} /places/placesForTags placesForTags
 * 
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * @apiDescription Return a list of the top 100 unique places clustered by a given placetype for set of tags or machine tags.
 * 
 * @apiParam  {String} [placeTypeId] The numeric ID for a specific place type to cluster photos by.

Valid place type IDs are :
22: neighbourhood
7: locality
8: region
12: country
29: continent


 * @apiParam  {String} [placeType]  A specific place type to cluster photos by.
(The "placeType" argument has been deprecated in favor of the "placeTypeId" argument. It won't go away but it will not be added to new methods. A complete list of place type IDs is available using the flickr.places.getPlaceTypes method. (While optional, you must pass either a valid place type or place type ID.)
)

Valid place types are :
neighbourhood (and neighborhood)
locality
region
country
continent

(While optional, you must pass either a valid place type or place type ID.)


 * @apiParam  {String} [woeId] TA Where on Earth identifier to use to filter photo clusters. For example all the photos clustered by locality in the United States (WOE ID 23424977).

(While optional, you must pass either a valid Places ID or a WOE ID.)

 * @apiParam  {String} [placeId] A Flickr Places identifier to use to filter photo clusters. For example all the photos clustered by locality in the United States (Place ID 4KO02SibApitvSBieQ).

(While optional, you must pass either a valid Places ID or a WOE ID.)

 * 
 * 
 * @apiParam  {String} [threshold] The minimum number of photos that a place type must have to be included. If the number of photos is lowered then the parent place type for that place will be used.

For example if you only have 3 photos taken in the locality of Montreal (WOE ID 3534) but your threshold is set to 5 then those photos will be "rolled up" and included instead with a place record for the region of Quebec (WOE ID 2344924).

 *@apiParam  {String} [tags] A comma-delimited list of tags. Photos with one or more of the tags listed will be returned.

(While optional, you must pass either a valid tag or machine_tag
 
 
 *@apiParam  {String} [tagMode] Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.
 
 *@apiParam  {String} [machineTags] Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties :
Find photos using the 'dc' namespace : "machineTags" => "dc:"
Find photos with a title in the 'dc' namespace : "machineTags" => "dc:title="
Find photos titled "mr. camera" in the 'dc' namespace : "machineTags" => "dc:title=\"mr. camera\"
Find photos whose value is "mr. camera" : "machineTags" => "*:*=\"mr. camera\""
Find photos that have a title, in any namespace : "machineTags" => "*:title="
Find photos that have a title, in any namespace, whose value is "mr. camera" : "machineTags" => "*:title=\"mr. camera\""
Find photos, in the 'dc' namespace whose value is "mr. camera" : "machineTags" => "dc:*=\"mr. camera\""
Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. "AND" queries are limited to (16) machine tags. "OR" queries are limited to (8).

(While optional, you must pass either a valid tag or machine_tag)

 *@apiParam  {String} [machineTagMode] Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.

 * @apiParam  {String} [minUploadDate] Minimum upload date. Photos with an upload date less than or equal to this value will be returned. The date should be in the form of a unix timestamp.
 * @apiParam  {String} [maxUploadDate] Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date should be in the form of a unix timestamp.
 * 
 * @apiParam  {String} [minTakenDate] Minimum taken date. Photos with an taken date less than or equal to this value will be returned. The date should be in the form of a mysql datetime.
 * * @apiParam  {String} [maxTakenDate] Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date should be in the form of a mysql datetime.
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} topUniquePlaces a list of the top 100 unique places clustered by a given placetype for set of tags or machine tags.
 *@apiSuccess (Success 200) {Number} statusCode The status code
 * 
 *
 *  
 * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} error Forbidden The server understood the request but refuses to authorize it.
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
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
 * @apiError (Error 500) {String} error Internal Server Error the server encountered an unexpected condition that prevented it from fulfilling the request.
 * @apiError (Error 500) {Number} statusCode The status code
 
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "tagNotFound",
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
 * 
   *@apiSuccessExample {json} Success-Response: 
*   {
*   "total": "1",
*   "place": {
*      "placeId": "kH8dLOubBZRvX_YZ",
*      "woeId": "2487956",
*      "latitude": "37.779",
*      "longitude": "-122.420",
*      "placeUrl": "/United+States/California/San+Francisco",
*      "placeType": "locality",
*      "photoCount": "156",
*      "#text": "San Francisco, California"
*   }
*}
 * 
 * 
 *  
 */