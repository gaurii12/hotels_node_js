const express=require('express');
const app=express();

const Person=require('./models/person')
const bodyparser=require('body-parser')


app.get('/',function(req,res){
    res.send('welcome to server file')
})

app.post('/person',async function(req,res){
    try{
        const data=req.body;

        //create a newPerson  documenat using the mongoose model
        const newPerson=new Person(data);

        // save the new Person to the database
        const response=await newPerson.save();
        console.log('data saved successfully...');
        res.status(200).json(response)

    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    } 
})

app.listen(3000, (req,res)=>{
    console.log('server running on port 3000')

})