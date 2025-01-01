import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import data from './routes/data.js'
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js'
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 8080;

// get the diractory name 
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


console.log("filname = ",__filename) 


const app = express();


//for middle ware parse json
app.use(express.json())


//logger middleware
app.use(logger)


// setup static folder
app.use(express.static(path.join(__dirname, 'public')))


// Routes
app.use('/api/post' , data)




//  Error Handler

app.use(notFound)

app.use(errorHandler)



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