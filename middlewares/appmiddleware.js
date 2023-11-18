const appmiddleware = (req,res,next)=>{
    console.log("inside Appliction specific middleware");
    next()
}
module.exports= appmiddleware