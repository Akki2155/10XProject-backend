const mongoose=require("mongoose");


const postSchema=mongoose.Schema({
    author:{type:String, required:true},
    location:{type:String, required:true},
    likes:{type:Number, default:0},
    description:{type:String, required:true},
    selectedFile:{type:String, required:true},
    date:{type:Date, default:Date.now()}
});

module.exports=mongoose.model("instapost", postSchema);