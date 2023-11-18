 const jwt = require('jsonwebtoken')


 const jwtmiddleware = (req, res, next) => {
     console.log("inside jwtmiddlewrae!!");
     const token = req.headers['authorization'].split(" ")[1]
     // console.log(token);

     try{
        const jwtResponse = jwt.verify(token, "supersecript123")
     console.log(jwtResponse);
     req.payload = jwtResponse.userId
     next()
   }catch(err){
        res.status(401).json("Authorization failed!! please login...")
   }

 }

 module.exports = jwtmiddleware