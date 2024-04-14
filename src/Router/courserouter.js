const express=require('express')
const CourseController=require('../Controller/CourseController')

const router=express.Router();

router.use(express.json())



router.get('/',(req,res)=>{
    res.send({msg:'hello  this is get requst!! from prayansh'})
})

router.post('/api/course',CourseController.createCourse)

router.get('/api/courses',CourseController.getCourse)

router.get('/api/course/:id', CourseController.getById)

router.put('/api/course/:id',CourseController.updateCourse)

router.delete('/api/course/:id',CourseController.deleteCourse)


// router.post('/required',CourseController.required)


module.exports=router

