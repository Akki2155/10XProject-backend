const express=require("express");

const  router=express.Router();

const {getAllPosts, createPost}=require("../controllers/postControllers");




router.get("/", getAllPosts)
router.post("/newPost", createPost)

module.exports=router;