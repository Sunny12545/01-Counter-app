require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Counter = require('./models/Counter')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('✅ Database Connected')
}).catch((err)=>{
    console.log(err)
});

app.get('/',(req,res)=>{
    res.send('Counter Api is Running')
})

app.get('/counter',async(req,res)=>{
    let counter = await Counter.findOne()
    if(!counter){
        counter = new Counter()
        await counter.save()
    }
    res.json(counter)
})

app.post('/counter',async(req,res)=>{
    let counter = await Counter.findOne()
    if(!counter){
        counter = new Counter()
    }
    counter.count++;
    await counter.save()
    res.json(counter)
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port http://localhost:${process.env.PORT}`);
    
})