
/**
 * 
 * @api {POST} /photos/people/add addPerson
 * @apiGroup photos.people
 * @apiVersion  1.0.0
 * 
 * 
 * @apiParam  {String} api_key Your API application key
 * @apiParam  {String} photo_id The id of the photo to add a person to.
 * @apiParam  {String} user_id The id of the user to add to the photo
 * @apiParam  {Number} [person_x] the left-most pixel co-ordinate of the box around the person
 * @apiParam  {Number} [person_y] the top-most pixel co-ordinate of the box around the person
 * @apiParam  {Number} [person_w] the width (in pixel) of the box around the person
 * @apiParam  {Number} [person_h] the height (in pixel)of the box around the person
 * 
 * 
 * @apiError (Error 1xx) 101 Nope
 * @apiError 404 Not Found
 * @apiError 400 Something
 * 
 */
