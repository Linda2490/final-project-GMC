const isAdmin=(req,res,next)=>{
    if(req.driver.role=="admin"){
        next()
    }else{
        console.log("test")
        res.status(401).send({msg:"you are not auth"})
    }
}
module.exports=isAdmin