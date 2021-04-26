const express =require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Group =require('../Group/groupModel');


// Function returns url to a certain group 
router.get('/groups/:groupId',(req,res,next)=>{

    const groupId = req.params.groupId;

    if(!mongoose.isValidObjectId(groupId)){
        res.status(404).json({
            error: "Invalid GroupId"
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


module.exports= router;