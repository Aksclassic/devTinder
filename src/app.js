const express=require('express');

const app=express();

app.get("/user",(req,res)=>{
    res.send({firstName: "Akshay", LastName: "Chavan"})
})

app.post("/user", (req,res)=>{
    console.log("Save Data to the database");
    res.send("Data saved to the database");
})

app.delete("/user",(req,res)=>{
    res.send("User deleted successfully");
})


app.use("/test/test2",(req,res)=>{ 
    res.send("hello from server test 2");
})
oihsoahioashioß
//if we write /test then hellow will printed only with localhost:3000/test url
app.use("/test",(req,res)=>{ 
    res.send("hello from server test");
})

//writing just app.us((req,res)), will respond with hello in all urls, even if u do localhost:3000/hello, localhost:3000/test it will always respond with hello form server. 
app.use((req,res)=>{ 
    res.send("hello from server");
})
//Note: the order of the routes is very important (Sequence Matters)
app.listen(3000,()=>{
    console.log("server is listening to port 3000")
})