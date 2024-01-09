const mongoose =require('mongoose')



const CustomerSchema=new mongoose.Schema(
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
const Customer=mongoose.model('customers',CustomerSchema)


module.exports=Customer