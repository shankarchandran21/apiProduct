import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import productRoute from './Router/productRoute.js'
import userRouter from './Router/userRouter.js'

dotenv.config()
const PORT = process.env.PORT 
const CONNECTION_URL = process.env.CONNECTION_URL
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5174');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api/p1/products',productRoute)
app.use('/api/p1/products',userRouter)
app.get('/', (req, res) => {
    res.send(`<h1>HIIII SHANKAR</h1>`)
})



mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>app.listen(PORT,console.log("you are listening on port: " + PORT)))
.catch((err)=>console.log(`Error connecting :${err}`))
