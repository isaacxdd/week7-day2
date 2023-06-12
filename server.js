const express = require("express")

const app = express()
const port = 3000

//routes
app.get("/", (req, res)=>{
    res.send("welcome to the gitpub app")
})

app.listen(port,()=>{
    console.log(`This ${port} port is working`);
})

