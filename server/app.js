const connectToMongo=require("./db/conn")
const express=require('express')
require("dotenv").config()
const auth=require("./router/auth")

const app=express();

connectToMongo(process.env.DATABASE);

app.use(express.json())
app.use(auth)

const port=process.env.PORT||200

app.listen(port,()=>{
    console.log(`server is on ${port}`);
});