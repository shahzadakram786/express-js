import express from 'express';
import path from 'path';
import data from './routes/data.js'
const port = process.env.PORT || 8080;
const app = express();


app.use('/api/post' , data)


//setup static folder


// app.use(express.static(path.join(__dirname, 'public')))










// app.get('/', (req , res)=> {
//     res.sendFile(path.join(__dirname , 'public', 'index.html'))

// })


// app.get('/about', (req , res)=> {
//     res.sendFile(path.join(__dirname , 'public', 'about.html'))

// })




app.listen(port , ()=> {
    console.log(`server is running on the http://localhost:${port}`)
})