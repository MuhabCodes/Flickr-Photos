/**
 * 
 * @api {GET} /cameras/brands getBrands
 * @apiDescription Returns all the brands of cameras that Flickr knows about.
 * @apiGroup cameras
 * @apiVersion  0.1.0
 * 
 * 
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Object[]} cameraBrands all brands of cameras that flicker knows
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiSuccessExample {json} Success-Response:
 *   {
    "cameras": [
        {
            "topModels": [
                "Nikon 500s",
                "D850",
                "D500"
            ],
            "modelTypes": [
                "Digital SLR",
                "Mirrorless Camera",
                "Point and Shoot"
            ],
            "_id": "1092ea18321fa5101115dfad",
            "name": "Nikon",
            "image": "https://live.staticflickr.com/cameras/72157647510174616_model_large_d5b7ef6582.jpg",
            "__v": 0
        },
        {
            "topModels": [
                "EOS 5D Mark III",
                "CANON EOS 5D MARK IV",
                "Canon600D"
            ],
            "modelTypes": [
                "Digital SLR",
                "Film Scanner",
                "Mirrorless Camera",
                "Point and Shoot",
                "Video Camera"
            ],
            "_id": "1092ea18321fa5101115dfae",
            "name": "Canon",
            "image": "https://live.staticflickr.com/cameras/72157622292089908_model_large_497d3698ba.jpg",
            "__v": 0
        },
        {
            "topModels": [
                "iPhone 7",
                "iPhone XR",
                "iPhone X"
            ],
            "modelTypes": [
                "Cameraphone",
                "Point and Shoot",
                "Tablet"
            ],
            "_id": "1092ea18321fa5101115dfaf",
            "name": "Apple",
            "image": "https://live.staticflickr.com/cameras/72157635062339950_model_large_d77764305a.jpg",
            "__v": 0
        },
        {
            "topModels": [
                "Galaxy S7",
                "Galaxy S8",
                "Galaxy S6"
            ],
            "modelTypes": [
                "Cameraphone",
                "Digital SLR",
                "Mirrorless Camera",
                "Point and Shoot",
                "Video Camera"
            ],
            "_id": "1092ea18321fa5101115dfb0",
            "name": "Samsung",
            "image": "https://mob4me.com/Assets/images/mobile/galaxy-s8-large.jpg",
            "__v": 0
        }
    ]
}
 * 
 *  
 * 
 * 
 * 
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 500 server couldn't handle
 *     {
 *       "error": "serverCouldn'tHandle",
 *        "statusCode":500
 *     }
 * 
 * 
 */
