const CustomerSchema=require('../Schemas/Customer')
const Products = require('../Schemas/Products');
const CartSchema=require('../Schemas/Carts')
const bcrypt=require('bcrypt')


exports.getAllCartItems=(req,res)=>
{
    CartSchema.find({cust_id:req.query.cust_id}).then((result) =>
{
    //console.log(result)
    
    if(result.length>0)
    {

res.status(200).send({status:200,data:result});

    }
    else{
        res.status(200).send({status:200,data:[]});
    }
})
.catch((err)=>
{
    res.status(500).send({status:200,message:"something went wrong Try again please"})
})
}

exports.getAllProducts=(req,res)=>
{
    Products.find({}).then((result)=>{
        if(result.length>0)
        {
           res.status(200).send({status:200,data:result}); 
        }
        else{
            res.status(200).send({status:200,data:[]});
        }
    }).catch((err)=>
    {
        res.status(500).send({status:200,message:"Something Went Wrong !! Please Try Again"});  

    }
    )
}

exports.addToCart = (req, res) => {
    const { cust_id, p_data } = req.body; // Corrected destructuring syntax

    CartSchema.insertMany({
        cust_id: cust_id,
        p_data: p_data
    })
    
    .then((result) => {
        if (result.length > 0) {
            res.status(200).send({ status: 200, message: "Product added into Cart successfully" });
        } else {
            res.status(400).send({ status: 200, message: "Something went wrong" });
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send({ status: 500, message: "Something went wrong" });
    });
};


exports.AddProduct = (req, res) => {
    const { p_name, p_price, p_cat, p_img, } = req.body;

    Products.insertMany({
        p_name: p_name,
        p_price: p_price,
        p_cat: p_cat,
        p_img: p_img
        
    })
    .then((result) => {
         // Add this line for debugging
        if (result.length > 0) {
            res.status(200).send({ status: 200, message: "Product added successfully" });
        } 
        else {
            res.status(400).send({ status: 200, message: "Something went wrong" });
        }
    })
    .catch((err) => {
        console.error(err); // Add this line for debugging
        res.status(500).send({ status: 500, message: "Something went wrong" });
    });
};
exports.checkOddEven=(req,res)=>
{
    console.log(req.query)
    if(req.query.number % 2==0)
    {
        res.send(`<h1>${req.query.number} is Even Number </h1>`)
    }
    else{
        res.send(`<h1>${req.query.number} is Odd Number </h1>`)
    }
}




exports.login=(req,res)=>{
    const {email,password}=req.body

    CustomerSchema.find({email:email}).then((result)=>{
       console.log(result)
        if(result.length==0)
        {
            res.status(400).send({status:400,message:"User Not Registered"})
        }
        else{
            bcrypt.compare(password,result[0].password,function(err,status)
            {
               if(err){
                res.status(500).send({status:500,message:"Something Went Wrong"})
               } 
               else{
                if(status==false)
                {
                    res.status(400).send({status:400,message:"Incorrect Password"})
                }
                else{
                    res.status(200).send({status:200,message:"Login Successfull",data:result[0] })
                }
               }
            })
        }

    })
}
exports.Register=(req,res)=>{
    //console.log(req.body)
    const {name,email,mobile,password}=req.body;

    bcrypt.genSalt(10,function(err,salt)
    {
        if(err)
        {
            res.status(500).send({status:500,message:"Something Went Wrong !! Please Try Again"});
        }
        else{
            bcrypt.hash(password,salt,function(err,hash){
                if(err)
                {
                    res.status(500).send({status:500,message:"Something Went Wrong !! Please Try Again"});
                }
                else 
                {
                    CustomerSchema.insertMany({name:name,email:email,mobile:mobile,password:hash}).then((result)=>
                    {
                        console.log(result)
                        if(result.length > 0)
                        {
                            res.status(200).send({status:200,message:"user Register Successfully"});
                        }
                        else{
                            res.status(500).send({status:200,message:"Something Went Wrong !! Please Try Again"});
                        }
                       
                    }).catch((err)=>
                    {
                        console.log(err)
                        res.status(500).send({status:200,message:"Something Went Wrong !! Please Try Again"});
                    })
                    //res.send("hello")
                
                }

            })
        }

    })
}