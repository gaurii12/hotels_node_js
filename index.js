var note=require('./note.js')
console.log('user age is',note.age);

var express=require('express');
var app=express();

var _ =require('lodash');
var data=['1','2','3','4','5','6','1','2','4','8'];
var result=_.uniq(data);
console.log(result);
console.log(_.isString('gauriii.....'));
console.log(_.isString(123456789))

const Person=require('./models/person.js');

// var age=note.age;
// var result=note.addNumber(age+40,10);

var result=note.addNumber(note.age+40,10);
var result=note.addNumber(note.age,10)
console.log(result);

app.get('/',function(req,res){
    res.send('this is the example of the express....')
})

app.get('/idli',function(req,res){
    var customer={
        name:'rava idali',
        size:"10 cm daimeter",
        is_samber:'true',
        is_chutney:'false'
    }
    res.send(customer);
})

app.post('/items',function(req,res){
    console.log('data is saved')
})

app.listen(2222,()=>{
    console.log('server is running on 2222 port')
});

// example of the json

// this below code for the convert jsonStringto jsonObject
const jsonString='{"name":"riyaaa","age":20}'
// const jsonString=[{"name":"riyaaa","age":20}]
const jsonObject=JSON.parse(jsonString);
// const jsonObject=jsonString[0];
console.log(jsonObject.name);
console.log(typeof json);

// this below code it is used for the convert jsonObject to jsonString
const objectjson={name:"priya",age:25};
const jsonStringiFied=JSON.stringify(objectjson);
console.log(jsonStringiFied);
// console.log(typeof jsonStringiFied);
// this is  show the type 

// var http=require('http');
//  const server=http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/plain');
//     res.write('hello world');
//     res.end();
// })
// .listen(2222);


// // this is the first way to declare the function
// // function add(a,b){
// //     return a+b;
// // }
// // var result=add(3,4);
// // console.log(result);




// // this is the second way to declare the function
// // var add=function(a,b){
// //     return a+b;
// // }
// // const result1=add(5,5);
// // console.log(result1);



// // this is the third way to declare the function this is called as the ecma script arrow function

// // var add=(a,b)=>{
// //     return a+b
// // }
// // const r=add(4,10);
// // console.log(r)


// // const server = http.createServer((req, res) => {
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.write('Hello, World!');
// //     res.end();
// // });



setTimeout(() =>{
console.log('settime out function here')
},1000)


// setInterval(()=>{
//     console.log('setInterval function here')
// },2000)


function add(a,b){
return a+b 
}

var result=add(1,2);
console.log("this is th eaddition of the....",result)



// // callback function example is below started 

// function callback(){
//     console.log('okk');
// }

// function add(a,b,callback){
//     var result=a+b;
//     console.log('result' +result);
//     callback();
//     setTimeout(() => {
//         callback()
//     }, 5000);

//     // setInterval(() => {
//     //     callback();
//     // }, 3000);
// }
// add(100,100,callback);





// file system Modules

var os=require('os')
var fs=require('fs')

var user=os.userInfo();
// var user=os.type()
// var user=os.version()
// var user=os.platform()
// var user=os.release()
console.log(user.username);
console.log(user);

// var http=require('http');
// const server=http.createServer((req,res)=>{
//     res.write('gaurii here.....')
// })
// server.listen(1111,()=>{
//     console.log('your code is running on the 2222 port ')
// })










