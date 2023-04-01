const express = require("express");
const dotenv=require("dotenv")
const moresaleproducts = require('./moresaleproducts.json')
let shopping = [];
Object.keys(moresaleproducts).map((card) => shopping.push(moresaleproducts[card]));
//Environment Variables
dotenv.config({
   path:"./config/env/config.env"
})
const app = express();
const PORT = process.env.PORT;
app.get("/", (req,res)=>{
   res.send('hi')
})
// bele yazilmali deyil axi 
app.get('/moresaleproducts/:id',(req,res)=>{
   console.log(req)
})
app.get("/moresaleproducts", (req,res)=>{
   res.send(shopping)
})
app.listen(PORT,()=>{
   console.log("server Start");
})