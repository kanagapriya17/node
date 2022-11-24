const express=require('express');
const app=express();
const apiData=require("./data.json");
app.use(express.json());









app.get('/',(req,res)=>{
    res.send('hello world ');
});
app.get('/api/courses',(req,res)=>{
    res.send(apiData);
})






app.get('/api/courses/:id',(req,res)=>{
    const course=apiData.find(c=> c.id === parseInt(req.params.id));
    if(!course) {res.status(404).send("The api with given id is not available")
    
}
else{


        res.send(course); 
    }   
});

app.post('api/courses',(req,res)=>{
    const course={
        id:courses.length+1,
        name:req.body.name
    };
    apiData.push(course);
    res.send(course);
})




const port=process.env.PORT || 3000;
app.listen(port,"192.168.1.10",()=>{
    console.log(`listening to port ${port}`);
})
