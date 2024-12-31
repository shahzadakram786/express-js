const errorHandling = (err , req  , res , next) => {

    if(err.status){
        res.status(err.status).json({msg:err.message})
    }else{
        res.status(500).json({msg:err.message})
    }


    // res.status(404).json({/msg: '404 page not found'})
}

export default errorHandling