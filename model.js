let mongoose=require('mongoose')

let schema=new mongoose.Schema({
    name:{type:String},
    password:{type:Number}
})

let mod=mongoose.model('register',schema)
module.exports=mod