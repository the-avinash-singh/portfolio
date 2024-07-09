const connectToMongo=require("./db/conn")
const express=require('express')
require("dotenv").config()
var cors = require('cors')
const auth=require("./router/auth")

const app=express();

connectToMongo();

app.use(cors({origin: 'http://localhost:5173',credentials:true}))
app.use(express.json())
app.use(auth)

const port=process.env.PORT||2000

app.listen(port,()=>{
    console.log(`server is on ${port}`);
});