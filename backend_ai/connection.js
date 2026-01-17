const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://maheshabr2004_db_user:8xRDgyVfJGzGHi9L@cluster0.ltpqx1u.mongodb.net/?appName=Cluster0')
.then((res)=>{
    console.log("Database is connected successfully ")
}).catch(error=>{
    console.log("something error",error)
})




// 8xRDgyVfJGzGHi9L
// maheshabr2004_db_user

// mongodb+srv://maheshabr2004_db_user:8xRDgyVfJGzGHi9L@cluster0.ltpqx1u.mongodb.net/?appName=Cluster0