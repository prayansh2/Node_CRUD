const express =require('express')
const mongoose=require('mongoose')
const courserouter=require('./Router/courserouter')

const app=express()
app.use(courserouter)
app.use(express.json())





const PortNumber=3000;

app.listen(PortNumber,()=>{console.log('app is running on port no.',PortNumber)})
