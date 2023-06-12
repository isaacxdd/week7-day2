//imports

const express = require("express")
const drinks =require("./models/drinks")
const { name } = require("ejs")

const app = express()
const port = 3000

//routes
app.get("/", (req, res) => {
    res.send("Welcome to the gitpub app");
});

app.get("/drinks", (req, res) => {
    res.render("index.ejs", { drinks: drinks });
});

app.get("/drinks/:id", (req, res)=>{
    const id = req.params.id
    const eleDrinks = drinks[id]
    res.render("show.ejs", {eleDrinks, id})
})

app.listen(port, () => {
    console.log(`This ${port} port is working`);
});

