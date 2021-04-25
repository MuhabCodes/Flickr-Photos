const express =require('express');
const router = express.Router();
const mongoose = require('mongoose');


//AE
// addGroup  ;; just path for adding group with only its url attribute just for testing my function

const Group =require('./groupModel');

router.post('/addGroup',(req,res,next)=>{

    const group=new Group({
        _id : new mongoose.Types.ObjectId(),
        url : 'http:localhost:3000/groups/'+_id
    });

    group.save()
        .then(result=>{

            res.status(201).json({
                message:"Group is created",
                createdGroup:{
                    _id : result._id,
                }    
            });
        })
        .catch(err=>{
            res.status(500).json({
                error:err
            })
        });

})




module.exports= router;