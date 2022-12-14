const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here

const bodyparser = require("body-parser");


router.use(bodyparser.json());

//connect to DB


router.get("/blog",async(req,res)=>{
    if(req.query.page && req.query.search){
        try{
            const  {page,search}= req.query;
            console.log(req.query.page)
          
             const users =await Blog.find().skip((page-1)*5).limit(5) 
        
            
              const user =await Blog.find({topic:search})
              
              res.json({
                  users:users,
                 user:user 
              })
          }catch(e){
                 res.status(400).json({
                  msg:e.message
                 })
          }
    }else if(req.query.page){
        try{
            const  {page}= req.query;
          
          
             const users =await Blog.find().skip((page-1)*5).limit(5) 
             
              res.json({
                  users:users,
                
              })
          }catch(e){
                 res.status(400).json({
                  msg:e.message
                 })
          }
    }else if(req.query.search){
        try{
            const  {search}= req.query;
           
          
            const users =await Blog.find().skip((page-1)*5).limit(1) 
              const user =await Blog.find({topic:search})
              res.json({
                  
                 user:users
              })
          }catch(e){
                 res.status(400).json({
                  msg:e.message
                 })
          }
    }
        else{
        try{
           
      
          
          
              const user =await Blog.find()
              res.json("fello")
//               res.json({
                 
//                  user:user 
//               })
          }catch(e){
                 res.status(400).json({
                  msg:e.message
                 })
          }
    }
   
   
})

router.put("/blog/:id",async(req,res)=>{
  console.log(req.params.id)
  
    try{
     
        const users =await Blog.update({_id :req.params.id},req.body)
     
        res.json({
            msg:"updated sucesfully",
            users:users
          
        })
    }catch(e){
           res.status(400).json({
            msg:e.message
           })
    }
   
})
router.delete("/blog/:id",async(req,res)=>{
    console.log(req.params.id)
    
      try{
       
          const users =await Blog.deleteOne({_id :req.params.id})
       
          res.json({
              msg:"deleted  sucesfully",
              users:users
            
          })
      }catch(e){
             res.status(400).json({
              msg:e.message
             })
      }
     
  })
router.post('/blog',async(req,res)=>{
   console.log(1)
    console.log(req.body)
    try{
        const user=await Blog.create(req.body)
        console.log(user,req.body)
        
        res.json({
            user :user
        })

    }catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
       
   
})
module.exports = router;
