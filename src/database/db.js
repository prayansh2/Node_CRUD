const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1/CourseDatabase')
.then(()=>{console.log('connect')})
.catch((err)=>{
    console.log('not connect')
})

module.exports=mongoose