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

// getuserprojects -token required
exports.allUserprojects = async (req,res)=>{
    const userId=req.payload
    try{
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)

    }catch(err){
        res.status(401).json(err)
    }
}
// getallprojects
exports.getallprojects = async (req,res)=>{
    const searchKey = req.query.search
    const query={
        languages:{$regex:searchKey , $options:"i"}
    }
    
    try{
        const allprojects = await projects.find(query)
        res.status(200).json(allprojects)

    }catch(err){
        res.status(401).json(err)
    }
}
// gethomeprojects
exports.getHomeprojects = async (req,res)=>{
    
    try{

        const Homeprojects = await projects.find().limit(3)
        res.status(200).json(Homeprojects)

    }catch(err){

        res.status(401).json(err)
    }
}

// edit projects

exports.editProjectController = async (req,res)=>{
    // get edit projects details 
    const {id}= req.params
    
    const userId =req.payload

    const {title,languages,overview,github,website,projectImage}= req.body

    const uploadprojectImage= req.file?req.file.filename:projectImage


    try{
        // this code  is update method is findByIdAndUpdate  passing _id
        const updateProjects= await projects.findByIdAndUpdate({_id:id},{
            title,languages,overview,github,website,projectImage:uploadprojectImage,userId
        },{new:true})
        await updateProjects.save()
        res.status(200).json(updateProjects)

    }catch(err){
        res.status(401).json(err)
    }

}


