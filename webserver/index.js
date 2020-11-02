const express=require('express')
const path=require('path');
const app=express();
const port=3000;

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (request,result)=>{
result.sendFile(path.join(__dirname+'/Webser.html'));
})

app.listen(port, () =>{
console.log('Example app listening at http://localhost:3000');
console.log('Welcome!');
})