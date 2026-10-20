const express=require("express");
const app=express();

const port=8080;
const path=require("path");
const methodOverride = require('method-override')
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));
const { v4 : uuidv4 } = require("uuid");
let posts=[
    {
        id:uuidv4(),
        username:"apnacollege",
        "content":"Apna College post"
    },
    {
        id:uuidv4(),
        username:"Anushka Rai",
        "content":"Sometimes its hard but we have to keep moving"
    },
    {
        id:uuidv4(),
        username:"rahul",
        "content":"Getting my first internship"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    const {username,content}=req.body;
    const id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent =req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    res.send("Response recieved");
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("edit.ejs", { post });
});

app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
})