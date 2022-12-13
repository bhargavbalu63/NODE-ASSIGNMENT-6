const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here
// mongoose.connect("mongodb://localhost/blog")
// router.get('/blog',(req,res)=>{
//     res.json({ok:'blog'})
// })


// router.get("/blog",async (req,res)=>
// {                                                              // this is to search by any parameter

//    try{

//     const {page=1,pagesize=2,search}= req.query


//     const blog = await Blog.find({topic:search}).skip((page-1)*pagesize).limit(pagesize)
//     res.json({
//         status: "success",
//         blog:blog
//     })
//    }catch(e)
//    {
//     res.json({
//         status:"failed",
//         message:e.message
//     })

//    }
// })

// let id =Blog.find()

router.get("/blog",async (req,res)=>
{



   try{
    const blog = await Blog.find()
    res.json({
        status: "success",
        blog:blog
    })
   }catch(e)
   {
    res.json({
        status:"failed",
        message:e.message
    })

   }
})

router.post("/blog",async (req,res)=>
{
   try{
   
    // let temp = value
  
    const blog = await Blog.create(req.body)
  



    res.json({
        status: "success",
       blog:blog,
      
    })
   }catch(e)
   {
    res.json({
        status:"failed",
        message:e.message
    })

   }
})

router.put("/blog/:id",async (req,res)=>
{
   try{
    const blog = await Blog.updateOne({_id: req.params.id}, req.body)
    res.json({
        status: "success",
       blog:blog
    })
   }catch(e)
   {
    res.json({
        status:"failed",
        message:e.message
    })

   }
})

router.delete("/blog/:id",async (req,res)=>
{
   try{
    const blog = await Blog.deleteOne({_id: req.params.id})
   
    res.json({
        status: "success",
       blog:blog
    })
   }catch(e)
   {
    res.json({
        status:"failed",
        message:e.message
    })

   }
})







module.exports = router;