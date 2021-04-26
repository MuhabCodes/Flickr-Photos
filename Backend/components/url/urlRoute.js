const express =require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Group =require('../Group/groupModel');
const User =require('../User/userModel');


// Function returns url to a certain group 
router.get('/groups/:groupId',(req,res,next)=>{

    const groupId = req.params.groupId;

    if(!mongoose.isValidObjectId(groupId)){
        return res.status(404).json({
            error: "Invalid groupId"
        })   
    }else
    {
        Group.findById(groupId).exec()
        .then(doc=>{
            if(doc){
                res.status(200).json({
                    id :doc._id,
                    url: doc.url,
                })
            }else
            {
                res.status(404).json({
                    message:"Group not found"
                });
            }

        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        });

    }

})




// Function (urls - lookupUser) ;; returns id,username to a certain user 

// TODO :: discuss that ????
// i change a change here r.t. our api as we used to sent whole user's url in as url parameter
// i made this function as if its sent in body (more realistic !!)    
router.get('/user',(req,res,next)=>{

    const url = req.body.url;

    // flickr's url contain id of element specified not (username) so i will extract id from url

    let url_split = url.split('/');  //split url components whenever it encounter '/' into an array  

    // examples
    // if url = "https://www.flickr.com/people/192738037@N02/"
    // [ 'https:', '', 'www.flickr.com', 'people', '192738037@N02', '' ]

    // if url = "https://www.flickr.com/people/192738037@N02"
    // [ 'https:', '', 'www.flickr.com', 'people', '192738037@N02' ]

    // if last element in array is'' we would take one before otherwise last one will be id
    if(url_split[url_split.length -1] ===''){
        _id = url_split[url_split.length -2];
    }else
    {
        _id = url_split[url_split.length -1];
    }
    // done extracting id 


    if(!mongoose.isValidObjectId(_id)){
        return res.status(404).json({
            error: "Invalid userId"
        })   
    }else
    {
        User.findById(_id).exec()
        .then(doc=>{
            if(doc){
                res.status(200).json({
                    id :doc._id,
                    email: doc.email, /// TODO :should be deleted and be username only but for purpose of testing
                  //username: doc.username,
                })
            }else
            {
                res.status(404).json({
                    message:"User not found"
                });
            }

        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        });

    }

})


// Function urls - lookupGroup // Returns a group Id, given the url to a group's page or photo pool.
// TODO :: discuss that ????
// i change a change here r.t. our api as we used to sent whole user's url in as url parameter
// i made this function as if its sent in body (more realistic !!)  
router.get('/group',(req,res,next)=>{

    const url = req.body.url;
    // flickr's url contain id of element specified

    let url_split = url.split('/');  //split url components whenever it encounter '/' into an array  

    // examples
    // if url = "https://www.flickr.com/people/192738037@N02/"
    // [ 'https:', '', 'www.flickr.com', 'people', '192738037@N02', '' ]

    // if url = "https://www.flickr.com/people/192738037@N02"
    // [ 'https:', '', 'www.flickr.com', 'people', '192738037@N02' ]

    // if last element in array is'' we would take one before otherwise last one will be id
    if(url_split[url_split.length -1] ===''){
        _id = url_split[url_split.length -2];
    }else
    {
        _id = url_split[url_split.length -1];
    }
    // done extracting id 

    if(!mongoose.isValidObjectId(_id)){
        return res.status(404).json({
            error: "Invalid groupId"
        })   
    }else
    {

        Group.findById(_id).exec()
        .then(doc=>{
            console.log(doc);
            if(doc){
                res.status(200).json({
                    id :doc._id,
                    name:doc.name 
                    // TODO its groupName in api which is unuseful it should be name only as i know i'm in group
                })
            }else
            {
                res.status(404).json({
                    message:"Group not found"
                });
            }

        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        });


    }
})



// Function (getUserProfile) - Returns the url to a user's profile.
// The Id of the user to fetch the url for is Optional so If omitted, the calling user is assumed.
router.get('/userprofile',(req,res,next)=>{

    const _id = req.body._id;
    
    // will follow this convention /profile/:userId  

    if(_id)  
    {
        // will check if its valid format or not
        if(mongoose.isValidObjectId(_id))
        {
            User.findById(_id)
                .exec()
                .then(user =>{
                    if(user){
                        // successfuly found ... 
                        res.status(200).json({
                            "id": _id,  
                            "url": "http://www.flickr.com/people/"+_id
                            //TODO profile means about page ? / and url checking
                        })
                    }else
                    {
                        res.status(404).json({
                            message : "User not found"
                        })
                    }
                })
                .catch(err=>{
                    res.status(500).json({
                        error : err
                    })
                })
        }else
        {
            res.status(404).json({
                message : "Invalid userId "
            })
        }
    }else // if its not sent in body , return calling user 
    {
        // TODO GET LOGGED IN USER / WILL ASK HOSNY ABOUT IT 


    }
})




module.exports= router;