const express = require("express");
const path = require('path')
const app = express();
const port = process.env.PORT || 8080;


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


//setup static folder


// app.use(express.static(path.join(__dirname, 'public')))










// app.get('/', (req , res)=> {
//     res.sendFile(path.join(__dirname , 'public', 'index.html'))

// })


// app.get('/about', (req , res)=> {
//     res.sendFile(path.join(__dirname , 'public', 'about.html'))

// })

app.get('/api/post', (req, res)=>{
    console.log(req.query);
    const limit = parseInt(req.query.limit);


    if(!isNaN(limit) && limit > 0){

      return   res.status(200).json(data.slice(0 , limit));
    }
        res.status(200).send(data)
    

    
})



app.get('/api/post/:id',(req , res)=>{

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

app.get('/api/users', (req , res)=> {
    res.send(data)
    console.log(data)
})





app.post('/api/users/add-user' , (req , res)=>{
    res.send('hello this is post')
})






app.listen(port , ()=> {
    console.log(`server is running on the http://localhost:${port}`)
})