const mongoose=require('mongoose')

mongoose.connect('mongodb://mongodb:27017/CourseDatabase')
.then(()=>{console.log('connect')})
.catch((err)=>{
    console.log('mongodb://mongodb:27018/CourseDatabase')
    console.log('not connect')
})

module.exports=mongoose