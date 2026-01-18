const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then((res)=>{
    console.log("Database is connected successfully ")
}).catch(error=>{
    console.log("something error",error)
})



