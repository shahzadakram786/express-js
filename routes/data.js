import express, { json } from "express"; 
import {
    getPosts ,
    getPost ,
    postsData , 
    updateData ,
    updateData_1 ,
    deleteData


} from '../controller/postController.js'


const router = express.Router()





// getting all the data 

router.get('/',getPosts)


//  getting all the data through id 
router.get('/:id', getPost)



// create new post   POST method i am working on 

router.post('/',postsData);


//update Post

router.put('/ ', updateData)



// update second method

router.put('/:id', updateData_1)



// delete data
router.delete('/:id', deleteData)



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

//


export default router



