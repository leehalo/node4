const express = require("express")
const app = express()

app.set ('view engine', 'ejs')
app.use(express.static('public'))

app.get("/ola",(req,res) =>{
    console.log ('Test')
})

app.get("/",(req,res)=> {
    res.render("index")
})

app.listen(8081,()=>{
    console.log("servidor operando com sucesso!")})