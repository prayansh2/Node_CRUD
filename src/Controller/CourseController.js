const Course=require('../Schema/Courseschema')

 const createCourse=async(req,res)=>{

    let savedCourse=null;
    const obj=req.body;
   try {
    let course=new Course(obj)
     savedCourse=await course.save();
     res.status(200).send(savedCourse)
   } 
   catch(err)
   {
    res.status(500).send(err);
   }
}

 const getCourse=async (req,res)=>{
   try{
    let courses= await Course.find().select({name:1,creator:1})
    if(courses.length<1)
        res.status(401).send('There is no course exist in databse')
    res.status(200).send(courses)
   }catch(err)
   {
    res.status(500).send('Internal server error');
   }
}


 const getById=async (req,res)=>{
   try{
    const id=req.params.id;
    let course= await Course.findById(id)
    if(!course)
    res.status(400).send('There is no couse with this id ')
    res.status(200).send(course)
   }catch(err)
   {
    res.status(500).send('Internal server error');
   }
}


 const updateCourse=async (req,res)=>{
   
    // let course= await Course.findById(id)
    // course.name=req.body.name;
    // course.category=req.body.category;
    // course.creator=req.body.creator;
   try {
    const id=req.params.id;
    let course=await Course.updateOne({_id:id},req.body)
    let save=await Course.findById(id);
    res.status(200).send({message:'successfull',course:save})
   } catch (err) {
    res.status(500).send('Internal server error');
   }
}


 const deleteCourse=async (req,res)=>{
    try {
        let course=await Course.findById(req.params.id)
    if(!course)
    res.status(400).send('there is no course with this id')
    res.status(200).send({message:"course with respect id is successfully delted!!",course:course})
    } catch (err) {
        res.status(500).send('Internal server error');
    }
} 




module.exports={createCourse,getCourse,getById,updateCourse,deleteCourse}
