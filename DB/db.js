const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/rajudata',{useNewUrlParser:true})
const db=mongoose.connection;



db.on('error',function()
{
    console.log("something is wrong")
})
db.once('open',function(){
    console.log("successfully Connected with MongoDB")
})


module.exports=db;