import express, { json } from "express"; 
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




router.get('/',(req, res)=>{
    // console.log(req.query);
    const limit = parseInt(req.query.limit);


    if(!isNaN(limit) && limit > 0){

      return   res.status(200).json(data.slice(0 , limit));
    }
        res.status(200).send(data)
        console.log(data)
    

    
})



router.get('/:id',(req , res , next)=>{

    const id = parseInt(req.params.id);
    const IdData = data.find((data)=> data.id === id);

    if(!IdData){
       const error =   new Error(`the user was not found`)
       error.status = 404;
       return next(error);
    }

        res.status(200).json(IdData);
        // res.send(data.filter((data) => data.id === id))



    console.log("req.params =",req.params.id);
    // res.json(data)
})




  

  





// create new post   post method i am working on 

router.post('/',(req, res , next)=> {
   
console.log("Post req.body =", req.body);

const newPost = {
    id: data.length + 1,
    name: req.body.title
}

console.log(req.body.title)

if(!newPost.name){

    const error =   new Error("please include the title")
    error.status = 400;
    return next(error);

}else{
    data.push(newPost)
}
    res.status(201).json(data)
});


//update Post

router.put('/ ',(req , res)=>{

    console.log("from put req.body =",req.body.id);

    let {id , name} = req.body;

    console.log("parsedBOyd  = ",name)

    // const id = parseInt(req.body.id);
    // const name = req.body.name;

    // console.log("req.body.name = ", name)
    
    const IdData = data.find((data)=> data.id === id);

    if(!IdData){

          const error =   new Error(`the data with the user was not found`)
         error.status = 400;
        return next(error);

    }else
    {
        // console.log("data where id meets = ",IdData)
        console.log("name", id,name)
        
        IdData.name = name

        console.log(data);
        
    }

    res.status(201).json(data)
})



// update second method

router.put('/:id',(req , res)=>{

    let id = parseInt(req.params.id)

    console.log("from put req.body =",req.body.id);

    const IdData = data.find((data)=> data.id === id);


    if(!IdData){

        const error =   new Error(`the user was not found`)
        error.status = 400;
        return next(error);

    }else
    {

        IdData.name = req.body.name
        console.log(data);
        console.log(data);
    }

    res.status(201).json(data)
})





// delete from array
// router.delete('/', (req , res) => {

//     let {id} = req.body;
//     let IdData = data.find((data) => data.id === id );

//     console.log("delete = ", IdData)

//     // data = data.length--
//     //  console.log(IdData.length--)

//     // console.log()
      
//     //  res.status(200).json(data)
// })

// antoehre way using params 

router.delete('/:id', (req , res) => {
    
    let id = parseInt(req.params.id)

    let IdData = data.find((data) => data.id === id );


    if(!IdData){

        const error =   new Error(`the user was not found`)
        error.status = 400;
        return next(error);

    }else
    {
   

      data = data.filter((data)=> data.id !== id)
      console.log(data)
         

    }
       res.status(200).json(data)
   
})


export default router



