const passport =require("passport")
const FacebookStrategy=require('passport-facebook-token')
const passportJWT=require('passport-jwt')
const User=require('../Model/user')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

passport.use('facebookToken',new FacebookStrategy(
    {
    clientID:process.env.APP_ID,
    clientSecret:process.env.APP_SECRET
    }
    ,async(accessToken,refreshToken,profile,done)=>{
        try{
        
        // console.log(accessToken)
        // console.log(profile)
        done(null,profile)
        }
        catch(err){
            done(err,false,error.message)
        }
    }
    ) )
passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromUrlQueryParameter('token'),
        secretOrKey: process.env.JWT_KEY
    },
    async(jwtPayload, done) => {
    
        try {
            // const user = await User.findById(jwtPayload.id);
            const user=await User.findOne({"facebook.id":jwtPayload.id})
            // console.log(user)
            // If user doesn't exists, handle it
            if (!user) {
                return done(null, false);
            }
    
            // Otherwise, return the user
            // console.log(done)
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    }
    ))