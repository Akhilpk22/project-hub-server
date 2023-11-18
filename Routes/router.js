// create express 
const express = require('express')

const router = new  express.Router()

const UserController =require('../Controllers/UserController')

const projectContoller =require('../Controllers/projectController')
const jwtmiddleware = require('../middlewares/jwtmiddlewares')
const multerConfig = require('../middlewares/multerMiddleware')



// register api
router.post('/user/register',UserController.register)

// login
router.post('/user/login',UserController.login)

// add-projects
router.post('/project/add',jwtmiddleware,multerConfig.single('projectImage'),projectContoller.addprojects)

// export part to export to connection to  index.js to use server appliction 
module.exports = router