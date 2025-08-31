const express = require('express');

app=express();

app.use("/dashboard",(req,res)=>{
    res.send("Dashboard coming soon!");
})

app.use("/about-us",(req,res)=>{
    res.send("about us page");
})

app.use("/test",(req,res)=>{
    res.send("Hello from the server");
})

app.listen(3000,(req,res)=>{
    console.log("Listening on port number 3000");
});