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





// create new post   post method i am working on 

router.post('/',(req, res)=> {
   
console.log("req.body =", req.body);

const newPost = {
    id: data.length + 1,
    name: req.body.title
}

console.log(req.body.title)

if(!newPost.name){
    res.status(400).json({message:"please include a title"})
}else{
    data.push(newPost)
}
    res.status(201).json(data)
});

//update Post

router.put('/',(req , res)=>{
    
})

export default router