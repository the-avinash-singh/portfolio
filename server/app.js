const connectToMongo=require("./db/conn")
const express=require('express')
require("dotenv").config()
var cors = require('cors')
const cookieParser=require("cookie-parser")
const auth=require("./router/auth")
const data=require("./router/data")
const welcome=require("./router/welcome")

const app=express();

connectToMongo();

app.use(cors({origin: 'https://eazyres.netlify.app',credentials:true}))
app.use(cookieParser())
app.use(express.json())
app.use(welcome);
app.use(auth)
app.use(data)

const port=process.env.PORT||2000

app.listen(port,()=>{
    console.log(`server is on https://eazyres.netlify.app:${port}`);
});