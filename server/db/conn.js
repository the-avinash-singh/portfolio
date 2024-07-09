const Mongoose=require('mongoose')

const connectToMongo=async()=>{
    await Mongoose.connect(process.env.DATABASE).then(()=>(console.log("connected"))).catch((err)=>(console.log("no connection",err)))
}

module.exports=connectToMongo;