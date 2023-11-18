    // loads.env  file contents into process.env by default .
    require ('dotenv').config()
    const express =require ('express')
    const cors =require('cors')
    // import router
    const router = require('./Routes/router')

    // import db connections
    require('./DB/connection')


    // create an express application 
    const PFServer =express()
    PFServer.use(express.json())
   
    PFServer.use(cors())
    PFServer.use(router)

    // port creatation  steps 
    const PORT = 4000 || process.env.PORT


    PFServer.listen(PORT,()=>{
        console.log(`project hub server started at prot${PORT}and waiting for client requset!!!`);
    })
    // browser only chooies the get method 
    // http get requests resolving to =http://localhost:4000/ this https 
    PFServer.get('/',(req,res)=>{
        res.send(`<h1> get methord project hub server and waiting for the request !!!</h1>`)
    })

  