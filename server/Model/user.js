const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    facebook:{
        id:{type:String},
        userName:{type:String},
    },
    email:{
        type:String
    },
    photo:{
        type:String
    }
})

module.exports=mongoose.model('User',userSchema)
