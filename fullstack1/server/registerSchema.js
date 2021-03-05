const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const registerSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:
    {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    }
})
registerSchema.pre('save',async function(next){
    if(this.isModified("password"))
    {
        this.password=await bcrypt.hash(this.password,10);
    }
    next()
})



const Register=mongoose.model("Register",registerSchema);

module.exports=Register;