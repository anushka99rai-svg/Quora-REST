const express=require("express");
const app=express();

const port=8080;
const path=require("path");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
let posts=[
    {
        username:"apnacollege",
        "post":"Apna College post"
    },
    {
        username:"Anushka Rai",
        "post":"Sometimes its hard but we have to keep moving"
    },
    {
        username:"rahul",
        "post":"Getting my first internship"
    }
]

app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

