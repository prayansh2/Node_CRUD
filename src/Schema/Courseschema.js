const mongoose=require('../database/db')

const courseSchema=new mongoose.Schema({
    name:{type:String,required:[true,"name is required please enter the name"]},
    category:{type:String, require:false},
    creator:{type:String,require:true}
})


const Course=mongoose.model('Course',courseSchema)


module.exports=Course