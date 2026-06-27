require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('✅ Database Connected')
}).catch((err)=>{
    console.log(err)
});

app.listen(()=>{
    console.log(`server is running on port http://localhost:${process.env.PORT}`);
    
})