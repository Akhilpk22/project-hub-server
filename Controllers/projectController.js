const projects = require('../models/projectSchema')

// addprojects 

exports.addprojects = async(req,res)=>{

    console.log("inside add projects  function");
    const userId =req.payload
    const projectImage = req.file.filename
    const {title,languages,overview,github,website}= req.body
    // console.log(`${title},${languages},${overview},${github},${website},${projectImage},${userId}`);

    try{
        const existingproject = await projects.findOne({github})

        if (existingproject){
            res.status(406).json("projects already exist!! please login")
        }else{
            const newproject = new projects({
                title,languages,overview,github,website,projectImage,userId
            })
            await newproject.save()
            res.status(200).json(newproject)

        }
        

    }catch(err){
        res.status(401).json(`request faild error:${err}`)
    }

    
}
