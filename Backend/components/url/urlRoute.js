const express =require('express');
const router = express.Router();
const mongoose = require('mongoose');



router.get('/groups',(req,res,next)=>{

    const groupId = req.params.groupId;

    if(!mongoose.isValidObjectId(groupId)){
        res.status(404).json({
            error: "Invalid GroupId"
        })   
    }else
    {
        Group.findById(groupId).exec()
        .then(doc=>{
            res.status(200).json({
                group: doc,
                request:{ // just showing him how to get all groups 
                    type: "GET",
                    url: 'http://localhost:3000/groups'
                }  
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        });

    }

})


