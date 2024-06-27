const Mongoose=require('mongoose')

const connectToMongo=async(DB)=>{
    await Mongoose.connect(DB).then(()=>(console.log("connected"))).catch((err)=>(console.log("no connection",err)))
}

module.exports=connectToMongo;