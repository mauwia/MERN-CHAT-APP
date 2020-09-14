const router=require('express').Router()
const passport=require('passport')
const chatController=require('../Controller/chat')
// Chat routes
require('../Middlware/passport')

router.get('/create',passport.authenticate('jwt',{session:false}),chatController.getAllRooms)
router.get('/getRoom/:id',passport.authenticate('jwt',{session:false}),chatController.getOneRoom)


module.exports=router
