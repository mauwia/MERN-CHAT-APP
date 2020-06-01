const JWT= require('jsonwebtoken')
const mongoose=require('mongoose')
const User=require('../Model/user')

generateToken = user => {
  
    return JWT.sign({
            id: user.id,
        },
        process.env.JWT_KEY, {
            expiresIn: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
                // exp: Math.floor(Date.now() / 1000) + 30
        });
}

exports.getToken=async (req,res,next)=>{
    try{
    // console.log(req)
    let token=generateToken(req.user)
    const existingUser=await User.findOne({"facebook.id":req.user.id})
    // console.log(existingUser)
    if(existingUser){
    // console.log('exist')
    return res.status(200).json({token:token,user:existingUser,status:'succes'})
    }
    // console.log('here')
    // console.log(req.user)
        // let token1=this.getToken(req.user)
        let newUser=new User({
            _id:mongoose.Types.ObjectId(),
            facebook:{
                id:req.user.id,
                userName:req.user.displayName
            },
            email:req.user.emails[0].value,
            photo:req.user.photos[0].value
        })
        await newUser.save()
        // console.log(token)
        return res.status(200).json({token:token,user:newUser})
    }catch(err){
        console.log(err)
    }
}
exports.getDetails=async (req,res,next)=>{
    try{
        // console.log(req.query)
        return res.status(200).json({user:req.user})
    }
    catch(err){
        console.log(err)
    }
}