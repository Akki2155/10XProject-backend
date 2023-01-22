const postSchema=require("../models/postModel");

exports.getAllPosts=(async(req,res)=>{
    res.status(200).json(await postSchema.find().sort({"date":-1}));
})

exports.createPost=(async(req,res)=>{
    try {
        const post=req.body;
        console.log(post);
        const newPost=await postSchema.create({...post, creator:req.userId})
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
})

