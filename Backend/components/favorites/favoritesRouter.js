const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose')
const Favorite = require('../favorites/favoritesModel')
const ObjectId = require('mongoose').Types.ObjectId;

router.post('/:photoId',(req,res,next)=>
{
const favorite = new Favorite(
{user:req.headers.authorization,
favoriteDate:req.body.favoriteDate,
photo:req.params.photoId,

    
})
favorite.save()
.then(result=>
{console.log(result);
res.status(201).json(
   {message:"Favorite added succesfully",
    favoriteCreated:
    {user:result.user,
    photoId:result.photo,
    favoriteDate:result.favoriteDate,

    },
    request:
    {
 type:'Get',
    url:'http://localhost:3000/favorites/:photoId'
    }

    })
})
.catch(err=>
{console.log(err);
  res.status(500).json({
    error:err
  
  
  
  });


});
});

router.delete('/:photoId',(req,res,next)=>{
    const photo =req.params.photoId
    const user =req.headers.authorization
    Favorite.remove({
    photoId:photo,
    UserId:user
    }) 
    .exec()
    .then(result=>{res.status(200).json(result)
   })
    .catch(err=>
   {console.log(err);
       res.status(500).json({error:err});
   
    }) ; 

   });

   router.get('/:userId',(req,res,next)=>
   { const userId =req.params.userId;
    Favorite.find({user:[ObjectId(userId)]}) 
     .select("photo")
     .populate('photo')
     .exec()
     .then(docs=>
       {res.status(200).json(
       {total:docs.length,
         owner:user,
          photo:docs.map(doc=>
           {
            return{
            photo:doc.photo
   
        }
    })
});
   
})
   
.catch(err=>
       {
           res.status(500).json(
   
         {
    error:err
   
   })
   
   })
   
   });

   router.get("/public/:userId",(req,res,next)=>
   {const user =req.params.userId;
    
    Favorite.find( {'user' :user} )
     .select("photo")
     .populate('photo','secret,isPublic,title')
     .exec()
     .then(
    docs=>
       {res.status(200).json(
       {total:docs.length,
        owner:userId,
         photo:docs.map(doc=>
           {const public = doc.photo.isPublic
               
            if(public==true)
        {
            return{
            photo:doc.photo
   
        }
    }
    })
});
   
})
   
.catch(err=>
       {console.log(err);
           res.status(500).json(
   
         {
    error:err
   
   })
   
   })
   
   });











module.exports = router ;
