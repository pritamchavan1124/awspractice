const express=require('express')
const app=express()

app.get('/',(request,response)=>{
    //response.send('hello pritam')
    response.sendFile('public/index.html', { root : __dirname})
});
app.listen(8081,'0.0.0.0',()=>{
    console.log('server is now running');
})