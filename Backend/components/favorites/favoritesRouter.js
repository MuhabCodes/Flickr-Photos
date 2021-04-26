const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose')
const Favorite = require('../favorites/favoritesModel')

router.post('/:photoId',(req,res,next)=>
{ const photo = req.params.photoId, 
  const user = req.header.authorization
    
const favorite = new Favorite(
{ userId:user,
photoId:photo,
favoriteDate:req.body.favoriteDate,
    
})
favorite.save()
.then(result=>
{console.log(result);
res.status(201).json(
   {message:"Favorite added succesfully",
    favoriteCreated:
    {userId:result.userId,
    photoId:result.photoId,
    date:result.favoriteDate

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
  res.status(500).json({error:err
  
  
  
  });


});
});
router.delete('/:photoId',(req,res,next)=>{
    const photo =req.params.photoId,
    const user =req.header.authorization
    Product.remove({
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

   router.get("/:userId",(req,res,next)=>
   {const user =req.params.userId;
    Favorite.find( {UserId :user} )
     .select("photo")
     .populate('photo','secret,isPublic,title')
     .exec()
     .then(docs=>
       {res.status(200).json(
       {total:docs.length,
        owner:userId,
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
    Favorite.find( {UserId :user} )
     .select("photo")
     .populate('photo','secret,isPublic,title')
     .exec()
     .then(
    docs=>
       {res.status(200).json(
       {total:docs.length,
        owner:userId,
         photo:docs.map(doc=>
           {const public = doc.photo.isPublic,
               
            if(public===true)
        {
            return{
            photo:doc.photo
   
        }
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











module.exports = router ;
