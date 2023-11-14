// create express 
const express = require('express')

const router = new  express.Router()

const UserController =require('../Controllers/UserController')



// register api
router.post('/user/register',UserController.register)

// login
router.post('/user/login',UserController.login)

// export part to export to connection to  index.js to use server appliction 
module.exports = router