const express=require("express")
const app=express()
const PORT=5000 || process.env.PORT;
const cors=require("cors");
app.use(cors("*"))
app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.get("/profile",(req,res)=>{
    res.send("<h1>Here is my rofile</h1>")
})
app.get("*",(req,res)=>{
   res.send("No Page Found 404 Error!")

})

app.listen(PORT,()=>{
    console.log(`Server is Listening at Port ${PORT}`)
})
