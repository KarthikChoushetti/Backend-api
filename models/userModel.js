const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        trim:true,
        maxLength:[30,'Must be less than 30 characters']
    },
    email:{
        type:String,
        required:[true,'Email id is required'],
        unique:true
    },
    pin:{
        type:Number,
        required:[true,'Pin is required'],
        unique:true,
        maxLength:[6,'Must be less than 6 number'],
    }
})
module.exports=mongoose.model('User_details',userSchema)