const router=require('express').Router()
const passport=require('passport')
const userController=require('../Controller/user')


require('../Middlware/passport')
// router.post('/create',passport.authenticate('jwt',{session:false}),chatController.getAllRooms)
router.get('/getDetails',passport.authenticate('jwt',{session:false}),userController.getDetails)
router.post('/login/getToken',passport.authenticate('facebookToken',{session:false}),userController.getToken)

module.exports=router