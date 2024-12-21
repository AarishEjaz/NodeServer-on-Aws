const express = require('express')
const ip = require('ip')

const app = express()

app.get('/ping',(req,res)=>{
        console.log("pong")
        res.json({
            message:'pong',
            serverAddress: ip.address()
            })
})

app.listen(3000,()=>{
    console.log("server is up and running on port 3000 ...")
})