const express=require('express')
const { home,newUsers,userLogin } = require('../controllers/userControllers')
const router=express.Router()

router.get('/',home)
router.post('/newUsers',newUsers)
router.post('/userLogin',userLogin)

module.exports=router