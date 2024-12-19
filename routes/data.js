import express from "express"; 
const router = express.Router()




let data = [
    {id: 1,
     name: 'ali'   
    },
    {
        id:2,
        name: 'shahzad'
    },
    {
        id:3,
        name: 'akram'
    }
];











router.get('/', (req, res)=>{
    // console.log(req.query);
    const limit = parseInt(req.query.limit);


    if(!isNaN(limit) && limit > 0){

      return   res.status(200).json(data.slice(0 , limit));
    }
        res.status(200).send(data)
        console.log(data)
    

    
})



router.get('/:id',(req , res)=>{

    const id = parseInt(req.params.id);
    const IdData = data.find((data)=> data.id === id);

    if(!IdData){
       return res.status(404).json({message:`the data with the id:${id} was not found`});

    }

        res.status(200).json(IdData);
        // res.send(data.filter((data) => data.id === id))



    console.log("req.params =",req.params.id);
    // res.json(data)
})









export default router