const express=require("express");
const cors=require("cors");
const port= 8080 || process.env.PORT ;
const mongoose=require('mongoose');

const app=express();
app.use(cors());
app.use(express.json());


const postRoutes=require("./routes/post.js")

app.use("/", (req,res)=>{
    res.send("Hosted Ok!")
})
app.use("/posts", postRoutes)



const CONNECTION_URL ="mongodb+srv://Akki2155:akki3009@cluster0.hjhrres.mongodb.net/instaClone?retryWrites=true&w=majority"
mongoose.set('strictQuery',true);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true }).then(()=>
    app.listen(port, ()=> console.log(`Server running on port : ${port}`))
).catch((err)=>
     console.log(err.message)
)
