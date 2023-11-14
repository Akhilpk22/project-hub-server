
const users = require('../models/userSchema')

const jwt =require('jsonwebtoken')

// user register

exports.register= async (req,res)=>{

        console.log('inside register controller funtion ');
        const {username,email,password} = req.body
        // console.log(`${username},${password},${email}`);

        try{

          const existingUser = await users.findOne({email})

        if(existingUser){
                res.status(406).json("you account  already exist!!!!! please login....")
        }else{

        const  newUser =new users({
          
                username,email,password,github:"",linkedin:"",profile:""
         })

         await newUser.save()
           
         res.status(200).json(newUser)     
        }
    }
    catch(err){
        res.status(401).json(`register API failed,err ${err}`)
    }
        
}

// login
exports.login =async(req,res)=>{
  console.log("inside login function");
  const{email,password}= req.body

  try{
    const existingUser = await users.findOne({email,password})

    if(existingUser){
      const token = jwt.sign({userId:existingUser._id},"supersecript123")
      res.status(200).json({
        existingUser,token
      });

    }else{
      res.status(406).json("incorrect email / password")

    }
  }catch(err){
    res.status(401).json(`login API faild ,error${err}`)

  }
}