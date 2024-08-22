console.log('this is note js file ......!!');


var age=15;
const addNumber=function(a,b){
return a+b;
}

module.exports={
    age,
    addNumber
}



var express=require('express');
var app=express();
var url='';
var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var bodyparser=require('body-parser');
app.use(express.json());
// app.use(bodyparser.urlInCoded({extended:true}));


app.get('',function(req,res){
    res.sendFile(__dirname+'/index.html');
})


async function connect(){
    var db=await MongoClient.connect(url);
    return db.db('user_data')
}

app.post('/', async function(req,res){
    var name=req.body.name;
    var email=req.body.email;
var dbo=await connect();
    var valuse={
        name:name,
        email:email
    }
    var data=await dbo.collection('').insertOne(valuse).valuse;
    res.send(data);
    console.log('data added succesfully there',data);
});

app.use