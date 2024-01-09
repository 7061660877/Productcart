const mongoose =require('mongoose')



const DeleteSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required:true
        },
        password:
        {
            type:String,
            required:true
        }
    }
)
const Delete=mongoose.model('customers',DeleteSchema)


module.exports=Delete