const express = require('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const todoRoutes = require('./routes/todoRoutes');

require('dotenv').config();
const app = express();

 app.use(cors());
 app.use(express.json());
 app.use('/api/todos', todoRoutes);//endpoint prefix

 mongoose.connect(process.env.MONGO_URL)
 .then(()=> console.log('connected to DB'))
 .catch(err=> console.log(err))

 app.get('/',(req,res)=>{
    console.log('api connected')
 })

 app.listen(3000,()=>{
    console.log('connected to 3000 port')
 })